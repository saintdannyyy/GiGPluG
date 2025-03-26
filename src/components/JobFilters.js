"use client";
import { useState } from "react";

export default function JobFilters({ filters, setFilters, onSearch }) {
  const [localQuery, setLocalQuery] = useState(filters.query);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFilters({ ...filters, query: localQuery, page: "1" });
    onSearch({ ...filters, query: localQuery, page: "1" });
  };

  const handleFilterChange = (key, value) => {
    const newFilters = { ...filters, [key]: value, page: "1" };
    setFilters(newFilters);
    onSearch(newFilters);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8 px-[10%]">
      <form onSubmit={handleSubmit} className="mb-6">
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Search jobs..."
            value={localQuery}
            onChange={(e) => setLocalQuery(e.target.value)}
            className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Search
          </button>
        </div>
      </form>

      <div className="flex flex-wrap gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Employment Type
          </label>
          <select
            value={filters.employment_type || ""}
            onChange={(e) =>
              handleFilterChange("employment_type", e.target.value)
            }
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Types</option>
            <option value="FULLTIME">Full-time</option>
            <option value="PARTTIME">Part-time</option>
            <option value="Internship">Internship</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Remote Only
          </label>
          <select
            value={filters.remote || ""}
            onChange={(e) => handleFilterChange("remote", e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Jobs</option>
            <option value="true">Remote Only</option>
            <option value="false">On-site Only</option>
          </select>
        </div>
      </div>
    </div>
  );
}
