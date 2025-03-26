// app/api/jobs/[id]/route.js
import { realisticJobs } from "@/lib/JSearch";

export async function GET(request, { params }) {
  const job = realisticJobs.find((job) => job.job_id === params.id);

  if (!job) {
    return Response.json({ error: "Job not found" }, { status: 404 });
  }

  return Response.json({ data: job });
}
