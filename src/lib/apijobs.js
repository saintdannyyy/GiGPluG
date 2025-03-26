export async function getCountries() {
  try {
    const response = await fetch("https://api.apijobs.dev/countries", {
      method: "GET",
      headers: {
        apikey: process.env.NEXT_PUBLIC_APIJOBS_KEY,
      },
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(
        errorData.message ||
          `API Error: ${response.status} ${response.statusText}`
      );
    }

    const data = await response.json();
    return data.data || [];
  } catch (error) {
    console.error("Failed to fetch countries:", error);
    throw error;
  }
}

export async function searchJobs(params = {}) {
  // Default parameters
  const defaultParams = {
    q: "",
    size: 10,
    from: 0,
    sort_by: "created_at",
    sort_order: "desc",
  };

  // Merge with provided params
  const requestParams = { ...defaultParams, ...params };

  try {
    const response = await fetch("https://api.apijobs.dev/job/search", {
      method: "POST",
      headers: {
        apikey: process.env.NEXT_PUBLIC_APIJOBS_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestParams),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(
        errorData.message ||
          `API Error: ${response.status} ${response.statusText}`
      );
    }

    const data = await response.json();

    // Transform API response to match our application's expected format
    return {
      data: data.hits.map((job) => ({
        job_id: job.id,
        job_title: job.title,
        employer_name: job.hiring_organization_name,
        employer_url: job.hiring_organization_url,
        job_city: job.city,
        job_region: job.region,
        job_country: job.country,
        job_description: job.description,
        job_posted_at_datetime_utc: job.published_at || job.created_at,
        job_website: job.website,
      })),
      total: data.total,
      facets: data.facets,
    };
  } catch (error) {
    console.error("API Request Failed:", error.message);
    throw error;
  }
}

export async function getJobDetails(job_id) {
  try {
    const response = await fetch(`https://api.apijobs.dev/job/${job_id}`, {
      method: "GET",
      headers: {
        apikey: process.env.NEXT_PUBLIC_APIJOBS_KEY,
      },
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(
        errorData.message ||
          `API Error: ${response.status} ${response.statusText}`
      );
    }

    const data = await response.json();

    // Transform API response to match our application's expected format
    return {
      data: {
        job_id: data.data.id,
        job_title: data.data.title,
        employer_name: data.data.hiring_organization_name,
        employer_url: data.data.hiring_organization_url,
        job_city: data.data.city,
        job_region: data.data.region,
        job_country: data.data.country,
        job_description: data.data.description,
        job_posted_at_datetime_utc:
          data.data.published_at || data.data.created_at,
        job_website: data.data.website,
      },
    };
  } catch (error) {
    console.error("Failed to fetch job details:", error);
    throw error;
  }
}
