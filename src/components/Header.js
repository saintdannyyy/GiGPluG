// components/Header.js
import Link from "next/link";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { BriefcaseBusiness } from "lucide-react";
import Image from "next/image";
import { flag } from "/images/ghana-flag.png";

export function Header() {
  return (
    <header className="w-full shadow-sm sticky top-0 z-50">
      {/* Top Header */}
      <div className="bg-background container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Top Left Section */}
        <div className="flex items-center space-x-8">
          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className="text-gray-600 hover:text-gray-900 font-medium"
            >
              Home
            </Link>
            <Link
              href="/jobs"
              className="text-gray-600 hover:text-gray-900 font-medium"
            >
              Find Job
            </Link>
            <Link
              href="/employers"
              className="text-gray-600 hover:text-gray-900 font-medium"
            >
              Employers
            </Link>
            <Link
              href="/support"
              className="text-gray-600 hover:text-gray-900 font-medium"
            >
              Customer Support
            </Link>
          </nav>
        </div>

        {/* Top Right Section */}
        <div className="flex items-center space-x-4">
          {/* Phone Number */}
          <div className="hidden md:flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <span className="text-gray-600">+233-20-000-0000</span>
          </div>

          {/* Language Selector */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="gap-1.5">
                English
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>English</DropdownMenuItem>
              <DropdownMenuItem>French</DropdownMenuItem>
              <DropdownMenuItem>Spanish</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Bottom Header */}
      <div className="bg-white container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {/* Logo */}
          <BriefcaseBusiness className="h-8 w-8 text-blue-600" />
          <Link href="/" className="text-2xl font-semibold text-gray-800">
            GIGPIuG
          </Link>

          {/* Country Indicator */}
          <div className="border border-gray-300 rounded-full hidden md:flex items-center space-x-1 px-3 py-1">
            <Image src={flag} width={20} height={20} stroke={2} />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="gap-1.5">
                  Ghana
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>US</DropdownMenuItem>
                <DropdownMenuItem>Nigeria</DropdownMenuItem>
                <DropdownMenuItem>UK</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="hidden md:flex items-center space-x-1 bg-gray-100 px-3 py-1 rounded-full">
            <Image src="/ghana-flag.png" width={20} height={20} stroke={2} />
            <span className="text-gray-600">India</span>
          </div>

          {/* Search Icon (Q in the design) */}
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </Button>
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center space-x-2">
          <Button variant="outline" className="hidden md:inline-flex">
            Sign In
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700 hidden md:inline-flex">
            Post A Job
          </Button>
        </div>
      </div>

      {/* Job Search Bar - Only visible on homepage */}
      <div className="bg-gray-50 py-2 px-4 border-t">
        <div className="container mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Job: title, keyword, company"
              className="w-full py-2 px-4 pr-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
