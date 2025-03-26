// src/app/Jobs/[id]/page.js
import { getJobDetails } from "@/lib/JSearch";

export default async function JobDetails({ params }) {
  const { id } = params;

  try {
    const jobData = await getJobDetails(id);
    const job = jobData.data?.[0];

    if (!job) {
      return (
        <div className="container mx-auto px-4 py-8 max-w-4xl text-center">
          <h2 className="text-xl font-bold">Job not found</h2>
          <p className="mt-2">The job you're looking for doesn't exist.</p>
        </div>
      );
    }

    return (
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Rest of your job details UI */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-2xl font-bold">{job.job_title}</h1>
              <p className="text-lg text-gray-600">{job.employer_name}</p>
            </div>
            {job.employer_logo && (
              <img
                src={job.employer_logo}
                alt={`${job.employer_name} logo`}
                className="w-16 h-16 object-contain"
                onError={(e) => (e.target.style.display = "none")}
              />
            )}
          </div>

          {/* Rest of your existing UI components */}
          {/* ... */}
        </div>
      </div>
    );
  } catch (error) {
    console.error("Failed to load job:", error);
    throw error; // This will trigger your error boundary
  }
}
