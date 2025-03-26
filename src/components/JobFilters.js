// components/JobFilters.jsx
"use client";

import { useState } from "react";

const experienceLevels = [
  { value: "", label: "Any experience" },
  { value: "under_3_years_experience", label: "< 3 years" },
  { value: "more_than_3_years_experience", label: "3+ years" },
  { value: "no_experience", label: "No experience" },
  { value: "no_degree", label: "No degree required" },
];

const employmentTypes = [
  { value: "", label: "Any type" },
  { value: "FULLTIME", label: "Full-time" },
  { value: "PARTTIME", label: "Part-time" },
  { value: "CONTRACTOR", label: "Contract" },
  { value: "INTERN", label: "Internship" },
  { value: "TEMPORARY", label: "Temporary" },
];

const datePostedOptions = [
  { value: "all", label: "Any time" },
  { value: "today", label: "Today" },
  { value: "3days", label: "Last 3 days" },
  { value: "week", label: "Last week" },
  { value: "month", label: "Last month" },
];

const jobTypes = [
  { value: "", label: "Any" },
  { value: "permanent", label: "Permanent" },
  { value: "contract", label: "Contract" },
  { value: "temporary", label: "Temporary" },
  { value: "internship", label: "Internship" },
];

const countries = [
  { value: "", label: "Any country" },
  { value: "AU", label: "Australia" },
  { value: "FR", label: "France" },
  { value: "CA", label: "Canada" },
  { value: "DE", label: "Germany" },
  { value: "GH", label: "Ghana" },
  { value: "IN", label: "India" },
  { value: "NG", label: "Nigeria" },
  { value: "US", label: "United States" },
  { value: "GB", label: "United Kingdom" },
];

export default function JobFilters({
  filters,
  setFilters,
  onSearch,
  showAdvanced = false,
  toggleAdvanced,
}) {
  const [localFilters, setLocalFilters] = useState(filters);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setLocalFilters((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFilters(localFilters);
    onSearch(localFilters);
  };

  const resetFilters = () => {
    const resetValues = {
      query: "",
      date_posted: "all",
      remote_only: false,
      employment_types: "",
      experience_level: "",
      country: "",
      job_type: "",
      salary_min: "",
      salary_max: "",
      radius: "",
      skills: "",
      job_location: "",
    };
    setLocalFilters(resetValues);
    setFilters(resetValues);
    onSearch(resetValues);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-md mb-8 px-[10%]"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Keyword Search */}
        <div>
          <label className="block text-sm font-medium mb-1">Keywords</label>
          <input
            type="text"
            name="query"
            className="w-full p-2 border rounded"
            value={localFilters.query}
            onChange={handleChange}
            placeholder="Job title, skills, company"
          />
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm font-medium mb-1">Location</label>
          <input
            type="text"
            name="job_location"
            className="w-full p-2 border rounded"
            value={localFilters.job_location}
            onChange={handleChange}
            placeholder="City, state or zip"
          />
        </div>

        {/* Country */}
        <div>
          <label className="block text-sm font-medium mb-1">Country</label>
          <select
            name="country"
            className="w-full p-2 border rounded"
            value={localFilters.country}
            onChange={handleChange}
          >
            {countries.map((country) => (
              <option key={country.value} value={country.value}>
                {country.label}
              </option>
            ))}
          </select>
        </div>

        {/* Radius */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Radius (miles)
          </label>
          <select
            name="radius"
            className="w-full p-2 border rounded"
            value={localFilters.radius}
            onChange={handleChange}
          >
            <option value="">Any distance</option>
            <option value="10">10 miles</option>
            <option value="25">25 miles</option>
            <option value="50">50 miles</option>
            <option value="100">100 miles</option>
          </select>
        </div>
      </div>

      {/* Second Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        {/* Experience Level */}
        <div>
          <label className="block text-sm font-medium mb-1">Experience</label>
          <select
            name="experience_level"
            className="w-full p-2 border rounded"
            value={localFilters.experience_level}
            onChange={handleChange}
          >
            {experienceLevels.map((level) => (
              <option key={level.value} value={level.value}>
                {level.label}
              </option>
            ))}
          </select>
        </div>

        {/* Employment Type */}
        <div>
          <label className="block text-sm font-medium mb-1">Job Type</label>
          <select
            name="employment_types"
            className="w-full p-2 border rounded"
            value={localFilters.employment_types}
            onChange={handleChange}
          >
            {employmentTypes.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
        </div>

        {/* Job Category */}
        <div>
          <label className="block text-sm font-medium mb-1">Job Category</label>
          <select
            name="job_type"
            className="w-full p-2 border rounded"
            value={localFilters.job_type}
            onChange={handleChange}
          >
            {jobTypes.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
        </div>

        {/* Date Posted */}
        <div>
          <label className="block text-sm font-medium mb-1">Date Posted</label>
          <select
            name="date_posted"
            className="w-full p-2 border rounded"
            value={localFilters.date_posted}
            onChange={handleChange}
          >
            {datePostedOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Advanced Filters (conditionally shown) */}
      {showAdvanced && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          {/* Salary Range */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Min Salary ($)
            </label>
            <input
              type="number"
              name="salary_min"
              className="w-full p-2 border rounded"
              value={localFilters.salary_min}
              onChange={handleChange}
              placeholder="Minimum"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Max Salary ($)
            </label>
            <input
              type="number"
              name="salary_max"
              className="w-full p-2 border rounded"
              value={localFilters.salary_max}
              onChange={handleChange}
              placeholder="Maximum"
            />
          </div>

          {/* Skills */}
          <div>
            <label className="block text-sm font-medium mb-1">Skills</label>
            <input
              type="text"
              name="skills"
              className="w-full p-2 border rounded"
              value={localFilters.skills}
              onChange={handleChange}
              placeholder="JavaScript, Python, etc."
            />
          </div>

          {/* Remote Only */}
          <div className="flex items-center justify-center">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remote-only"
                name="remote_only"
                className="mr-2"
                checked={localFilters.remote_only}
                onChange={handleChange}
              />
              <label htmlFor="remote-only" className="text-sm font-medium">
                Remote Only
              </label>
            </div>
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex flex-wrap justify-between items-center mt-6 gap-4">
        <div>
          <button
            type="button"
            onClick={toggleAdvanced}
            className="text-blue-600 hover:underline text-sm"
          >
            {showAdvanced ? "Hide Advanced Filters" : "Show Advanced Filters"}
          </button>
        </div>
        <div className="flex gap-4">
          <button
            type="button"
            onClick={resetFilters}
            className="px-4 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-50"
          >
            Reset
          </button>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Search Jobs
          </button>
        </div>
      </div>
    </form>
  );
}
