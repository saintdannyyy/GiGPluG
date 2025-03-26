// src/app/Jobs/[id]/page.js
"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getJobDetails } from "@/lib/JSearch";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const JobDetails = () => {
  const { id } = useParams();
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

  if (loading)
    return (
      <div className="bg-white flex z-10 flex-col w-screen h-screen">
        <Header />
        <div className="flex-grow flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
        <Footer />
      </div>
    );

  if (error)
    return (
      <div className="bg-white flex z-10 flex-col w-screen h-screen">
        <Header />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-xl font-semibold mb-2">
              Error loading job details
            </h2>
            <p className="text-gray-600">{error}</p>
          </div>
        </div>
        <Footer />
      </div>
    );

  if (!job)
    return (
      <div className="bg-white flex z-10 flex-col w-screen h-screen">
        <Header />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-xl font-semibold mb-2">Job not found</h2>
            <p className="text-gray-600">
              The requested job could not be found.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    );

  return (
    <div className="bg-white flex z-10 flex-col w-screen min-h-screen">
      <Header />
      <div className="flex-grow bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white shadow rounded-lg p-6">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  {job.job_title}
                </h1>
                <p className="text-lg text-gray-600 mt-1">
                  {job.employer_name}
                </p>
              </div>
              {job.employer_logo && (
                <img
                  src={job.employer_logo}
                  alt={`${job.employer_name} logo`}
                  className="h-16 w-16 object-contain"
                />
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <h2 className="text-lg font-semibold mb-2">Location</h2>
                <p className="text-gray-700">
                  {job.job_city}, {job.job_country}{" "}
                  {job.job_is_remote && "(Remote)"}
                </p>
              </div>
              <div>
                <h2 className="text-lg font-semibold mb-2">Employment Type</h2>
                <p className="text-gray-700">
                  {job.job_employment_type.replace("_", " ")}
                </p>
              </div>
              <div>
                <h2 className="text-lg font-semibold mb-2">Salary</h2>
                <p className="text-gray-700">
                  {job.job_min_salary && job.job_max_salary
                    ? `$${job.job_min_salary.toLocaleString()} - $${job.job_max_salary.toLocaleString()} ${
                        job.job_salary_currency
                      }`
                    : "Not specified"}
                </p>
              </div>
              <div>
                <h2 className="text-lg font-semibold mb-2">Posted</h2>
                <p className="text-gray-700">
                  {new Date(
                    job.job_posted_at_datetime_utc
                  ).toLocaleDateString()}
                </p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Job Description</h2>
              <p className="text-gray-700 whitespace-pre-line">
                {job.job_description}
              </p>
            </div>

            {job.job_highlights && (
              <div className="space-y-8">
                {Object.entries(job.job_highlights).map(([title, items]) => (
                  <div key={title}>
                    <h2 className="text-xl font-semibold mb-4">{title}</h2>
                    <ul className="list-disc pl-5 space-y-2">
                      {items.map((item, index) => (
                        <li key={index} className="text-gray-700">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-8">
              <a
                href={job.job_apply_link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default JobDetails;
