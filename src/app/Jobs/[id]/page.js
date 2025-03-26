"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getJobDetails } from "@/lib/JSearch";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowRight, Share2, Bookmark, Link as LinkIcon } from "lucide-react";

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
        <div className="bg-primary-foreground flex flex-row items-center justify-between w-full px-[10%]">
          <h1 className="text-3xl font-bold mb-6">Find Jobs</h1>
          <p className="text-md">Home / Find Job / Job Details</p>
        </div>
        <div className="flex-grow flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
        <Footer />
      </div>
    );

  if (error || !job)
    return (
      <div className="bg-white flex z-10 flex-col w-screen h-screen">
        <Header />
        <div className="bg-primary-foreground flex flex-row items-center justify-between w-full px-[10%]">
          <h1 className="text-3xl font-bold mb-6">Find Jobs</h1>
          <p className="text-md">Home / Find Job / Job Details</p>
        </div>

        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-xl font-semibold mb-2">
              {error ? "Error loading job details" : "Job not found"}
            </h2>
            <p className="text-gray-600">
              {error || "The requested job could not be found."}
            </p>
          </div>
        </div>
        <Footer />
      </div>
    );

  return (
    <div className="bg-white flex z-10 flex-col w-screen min-h-screen">
      <Header />
      <div className="bg-primary-foreground flex flex-row items-center justify-between w-full px-[10%]">
        <h1 className="text-3xl font-bold mb-6">Find Jobs</h1>
        <p className="text-md">Home / Find Job / Job Details</p>
      </div>
      <div className="flex-grow bg-white py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white">
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-start space-x-6">
                <div>
                  {job.employer_logo && (
                    <img
                      src={job.employer_logo}
                      alt={`${job.employer_name} logo`}
                      className="h-24 w-24 object-contain rounded-lg"
                    />
                  )}
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">
                    {job.job_title}
                  </h1>
                  <div className="flex items-center space-x-2 mb-2">
                    <p className="text-xl text-gray-600">{job.employer_name}</p>
                    <span className="text-white bg-[#0BA02C] px-2 py-1 rounded-sm text-sm">
                      {job.job_is_remote ? "Remote" : "On-site"}
                    </span>
                  </div>
                  <div className="flex items-center space-x-4 text-gray-500">
                    <span>
                      {job.job_city}, {job.job_country}
                    </span>
                    <span>•</span>
                    <span>{job.job_employment_type.replace("_", " ")}</span>
                  </div>
                </div>
              </div>

              <div className="flex space-x-2">
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <Share2 className="text-gray-600" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <Bookmark className="text-gray-600" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8 bg-gray-50 p-4 rounded-lg">
              <div>
                <h3 className="text-sm text-gray-500 mb-1">Salary</h3>
                <p className="font-semibold">
                  {job.job_min_salary && job.job_max_salary
                    ? `$${job.job_min_salary.toLocaleString()} - $${job.job_max_salary.toLocaleString()} ${
                        job.job_salary_currency
                      }`
                    : "Not specified"}
                </p>
              </div>
              <div>
                <h3 className="text-sm text-gray-500 mb-1">Job Posting Date</h3>
                <p className="font-semibold">
                  {new Date(
                    job.job_posted_at_datetime_utc
                  ).toLocaleDateString()}
                </p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Job Description</h2>
              <p className="text-gray-700 whitespace-pre-line">
                {job.job_description}
              </p>
            </div>

            {job.job_highlights && (
              <div className="space-y-8 mb-8">
                {Object.entries(job.job_highlights).map(([title, items]) => (
                  <div key={title}>
                    <h2 className="text-2xl font-semibold mb-4">{title}</h2>
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

            <div className="flex space-x-4">
              <a
                href={job.job_apply_link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-grow inline-flex items-center justify-center px-10 py-3 border border-transparent text-base font-medium rounded-sm shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Apply Now <ArrowRight className="ml-2" />
              </a>
              <button className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 focus:outline-none">
                <LinkIcon className="mr-2" /> Copy Link
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default JobDetails;
