// pages/jobs/page.js
"use client";
import { useState, useEffect } from "react";
import { searchJobs } from "@/lib/JSearch";
import JobCard from "@/components/JobCard";
import JobFilters from "@/components/JobFilters";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function JobListings() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    query: "",
    page: "1",
    num_pages: "15",
  });

  const fetchJobs = async (params = filters) => {
    try {
      setLoading(true);
      setError(null);
      const data = await searchJobs(params);
      setJobs(data.data || []);
    } catch (error) {
      setError(error.message);
      setJobs([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div className=" bg-white flex z-10 flex-col w-screen h-screen">
      {/* Header */}
      <Header />
      <div className="w-full bg-primary-foreground py-2">
        <div className="flex flex-row items-center justify-between w-full px-[10%]">
          <h1 className="text-3xl font-bold mb-6">Find Jobs</h1>
          <p className="text-xl">Home / Find Job</p>
        </div>
        <JobFilters
          filters={filters}
          setFilters={setFilters}
          onSearch={fetchJobs}
        />

        {/* Error Display */}
        {error && (
          <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 px-[10%]">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg
                  className="h-5 w-5 text-red-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-red-800">
                  Error fetching jobs
                </h3>
                <div className="mt-2 text-sm text-red-700">
                  <p>{error}</p>
                  <p className="mt-2">
                    Please try adjusting your search parameters.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Results */}
        {loading ? (
          <div className="text-center py-12 px-[10%]">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500 mb-4"></div>
            <p>Loading jobs...</p>
          </div>
        ) : jobs.length === 0 && !error ? (
          <div className="px-[10%] text-center py-12 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-medium mb-2">No jobs found</h3>
            <p className="text-gray-600">Try adjusting your search filters</p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-10 px-[10%]">
            {jobs.map((job) => (
              <JobCard key={job.job_id} job={job} />
            ))}
          </div>
        )}
      </div>
      {/* footer */}
      <Footer />
    </div>
  );
}
