// app/api/jobs/route.js
import { realisticJobs } from "@/lib/JSearch";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query")?.toLowerCase() || "";
  const page = parseInt(searchParams.get("page") || "1");
  const num_pages = parseInt(searchParams.get("num_pages") || "10");
  const employment_type = searchParams.get("employment_type");
  const remote = searchParams.get("remote");

  // Filter jobs based on query and filters
  const filteredJobs = realisticJobs.filter((job) => {
    const matchesQuery =
      job.job_title.toLowerCase().includes(query) ||
      job.employer_name.toLowerCase().includes(query) ||
      job.job_description.toLowerCase().includes(query);

    const matchesEmploymentType = employment_type
      ? job.job_employment_type === employment_type.toUpperCase()
      : true;

    const matchesRemote = remote
      ? job.job_is_remote === (remote === "true")
      : true;

    return matchesQuery && matchesEmploymentType && matchesRemote;
  });

  // Pagination
  const startIdx = (page - 1) * num_pages;
  const endIdx = startIdx + num_pages;
  const paginatedJobs = filteredJobs.slice(startIdx, endIdx);

  return Response.json({
    data: paginatedJobs,
    total: filteredJobs.length,
  });
}
