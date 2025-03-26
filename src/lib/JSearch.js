// lib/jsearch.js
export async function searchJobs(params = {}) {
  // Validate parameters
  if (!params.query || params.query.trim() === "") {
    throw new Error("Search query cannot be empty");
  }

  // Set default values
  const defaultParams = {
    page: "1",
    num_pages: "1",
    date_posted: "all",
  };

  // Merge with provided params
  const finalParams = { ...defaultParams, ...params };

  // Remove empty parameters
  const cleanParams = Object.fromEntries(
    Object.entries(finalParams).filter(([_, v]) => v !== "" && v !== undefined)
  );

  // Convert to query string
  const queryString = new URLSearchParams(cleanParams).toString();

  try {
    const response = await fetch(
      `https://jsearch.p.rapidapi.com/search?${queryString}`,
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
          "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
        },
      }
    );

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(
        errorData.message ||
          `API Error: ${response.status} ${response.statusText}`
      );
    }

    return response.json();
  } catch (error) {
    console.error("API Request Failed:", {
      params: cleanParams,
      error: error.message,
    });
    throw error;
  }
}
