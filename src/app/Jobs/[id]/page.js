"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getJobDetails } from "@/lib/apijobs";

const JobDetails = () => {
  const { id } = useParams();
  L;
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await getJobDetails(id);
        setJob(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchJobDetails();
  }, [id]);

  if (loading) return <p>Loading job details...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!job) return <p>Job not found.</p>;

  return (
    <div className="job-details p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4">{job.job_title}</h1>
      <p className="text-gray-700 mb-2">
        <strong>Company:</strong> {job.employer_name}
      </p>
      <p className="text-gray-700 mb-2">
        <strong>Location:</strong> {job.job_city}, {job.job_region},{" "}
        {job.job_country}
      </p>
      <p className="text-gray-700 mb-2">
        <strong>Published At:</strong>{" "}
        {new Date(job.job_posted_at_datetime_utc).toLocaleDateString()}
      </p>
      <p className="text-gray-700 mb-4">{job.job_description}</p>
      {job.employer_url && (
        <a
          href={job.employer_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Company Website
        </a>
      )}
    </div>
  );
};

export default JobDetails;
