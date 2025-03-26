// components/JobCard.jsx
"use client";
import { MapPin } from "lucide-react";
import Link from "next/link";

const formatSalary = (min, max, currency = "USD") => {
  if (!min && !max) return null;
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  });

  if (min && max) return `${formatter.format(min)} - ${formatter.format(max)}`;
  if (min) return `From ${formatter.format(min)}`;
  if (max) return `Up to ${formatter.format(max)}`;
  return null;
};

export default function JobCard({ job }) {
  const formattedSalary = formatSalary(
    job.job_min_salary,
    job.job_max_salary,
    job.job_salary_currency
  );
  const postedDate = job.job_posted_at_datetime_utc
    ? new Date(job.job_posted_at_datetime_utc).toLocaleDateString()
    : "Recently";

  return (
    <Link
      href={`/jobs/${job.id}`}
      className="block bg-white border rounded-lg p-6 hover:shadow-md transition-shadow h-full"
    >
      <div className="flex flex-col h-full">
        {/* Job Title and Details */}
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-semibold line-clamp-2 hover:text-blue-600 transition-colors">
              {job.job_title}
            </h3>
            <div className="flex flex-wrap gap-2 mb-3">
              {job.job_employment_type && (
                <span className="bg-blue-100 text-green-600 px-2 py-1 rounded-sm text-xs">
                  {job.job_employment_type.replace("_", " ").toUpperCase()}
                </span>
              )}
              {formattedSalary && (
                <span className="text-gray-500 px-2 py-1 text-md">
                  Salary: {formattedSalary}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Company Info */}
        <div className="mt-auto">
          <div className="flex items-center text-sm text-gray-500 gap-2 mb-2">
            {job.employer_logo && (
              <img
                src={job.employer_logo}
                alt={`${job.employer_name} logo`}
                className="w-12 h-12 object-contain rounded border bg-white p-1"
                onError={(e) => (e.target.style.display = "none")}
              />
            )}

            <div className="flex flex-col">
              <span className="font-semibold text-black">
                {job.employer_name}
                {job.id}
              </span>
              <div className="flex items-center gap-1">
                <MapPin stroke="#767F8C" size={16} />
                <span>
                  {job.job_city || "Remote"}, {job.job_country}
                </span>
              </div>
            </div>
          </div>

          {/* Posted Date - moved to bottom right */}
          <div className="text-right mt-2">
            <span className="text-xs text-gray-500">Posted: {postedDate}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
