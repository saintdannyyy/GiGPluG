// components/Header.js
import Link from "next/link";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { BriefcaseBusiness, PhoneCall } from "lucide-react";

export function Header() {
  return (
    <header className="w-full shadow-sm sticky top-0 z-50">
      {/* Top Header */}
      <div className="bg-primary-foreground w-full px-[10%] py-3 flex items-center justify-between">
        {/* Top Left Section */}
        <div className="flex items-center space-x-8">
          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className="text-gray-600 hover:text-blue-600 font-medium"
            >
              Home
              <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/Jobs"
              className="text-gray-600 hover:text-blue-600 font-medium"
            >
              Find Job
              <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/"
              className="text-gray-600 hover:text-blue-600 font-medium"
            >
              Employers
              <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/"
              className="text-gray-600 hover:text-blue-600 font-medium"
            >
              Customer Support
              <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>
        </div>

        {/* Top Right Section */}
        <div className="flex items-center space-x-4">
          {/* Phone Number */}
          <div className="hidden md:flex items-center space-x-2">
            <PhoneCall />
            <span>+233-20-000-0000</span>
          </div>

          {/* Language Selector */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="gap-1.5">
                <span class="fi fi-gh"></span>
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
              <DropdownMenuItem>
                <span class="fi fi-gh"></span>English
              </DropdownMenuItem>
              <DropdownMenuItem>
                <span class="fi fi-fr"></span>French
              </DropdownMenuItem>
              <DropdownMenuItem>
                <span class="fi fi-es"></span>Spanish
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      {/* Bottom Header */}
      <div className="w-full bg-white px-[10%] py-3 flex items-center justify-between">
        <div className="flex items-center space-x-4 w-full">
          {/* Logo */}
          <BriefcaseBusiness className="h-8 w-8 text-blue-600" />
          <Link href="/" className="text-2xl font-semibold text-gray-800">
            GIGPIuG
          </Link>

          {/* Country Indicator */}
          <div className="border border-gray-300 w-[70%] rounded-sm hidden md:flex items-center space-x-1 px-3">
            <div className="flex items-center space-x-1 border-r px-5">
              <span class="fi fi-gh"></span>
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
                  <DropdownMenuItem>
                    <span class="fi fi-gh"></span>Ghana
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span class="fi fi-ng"></span>Nigeria
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span class="fi fi-us"></span>US
                  </DropdownMenuItem>{" "}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            {/* Job Search Bar - Only visible on homepage */}
            <div className="w-full bg-gray-50 py-2 px-4 border-t">
              <div className="container mx-auto">
                <div className="relative">
                  <button className="absolute left-2 top-1/2 transform -translate-y-1/2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="#0066FF"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </button>
                  <input
                    type="text"
                    placeholder="Job title, keyword, company"
                    className="w-full py-2 pl-10 pr-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            className="hidden md:inline-flex border-blue-600 rounded-sm p-6 text-blue-600 hover:bg-blue-600 hover:text-white"
          >
            Sign In
          </Button>
          <Button className="bg-blue-600 p-6 rounded-sm hover:bg-blue-700 hidden md:inline-flex">
            Post A Job
          </Button>
        </div>
      </div>
    </header>
  );
}
