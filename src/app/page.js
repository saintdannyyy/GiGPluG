import { Header } from "@/components/Header";
import Image from "next/image";
import people from "../../public/images/people.png";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Briefcase,
  BriefcaseMedical,
  Building,
  ChartNoAxesColumn,
  ChevronRight,
  Database,
  MapPin,
  Megaphone,
  MonitorPlay,
  PenTool,
  PlusCircle,
  Search,
  Users,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import CountUp from "react-countup";
import Stats from "@/components/Stats";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import PopularCategory from "@/components/PopularCategory";
import PopularVacancy from "@/components/PopularVacancy";

export default function Home() {
  return (
    <div className="flex z-10 flex-col w-screen h-screen bg-background">
      {/* Header Section*/}
      <div className="flex justify-center top-1 w-full">
        <Header className="z-10" />
        {/* <Header onSearch={handleSearch} className="z-10" /> */}
      </div>
      {/* Main Body */}
      <div className="w-full flex flex-col bg-primary-foreground items-center justify-center">
        {/* Info */}
        <div className="w-full flex flex-col md:flex-row bg-primary-foreground items-center justify-center border-r-primary-foreground px-[10%] pt-10">
          <div className="flex flex-col lg:w-[50%] sm:w-[100%] items-start justify-center">
            <h1 className="text-5xl font-bold text-left">
              Let Us Plug You To <br />
              <span className="text-blue-600 mt-20">Your Next Gig</span>
            </h1>
            <p className="text-lg mt-3">
              Whether it’s your next 9-5 or a Freelance gig
            </p>
            <p className="text-lg"></p>
            <p className="text-lg">We’re the plug</p>
            <p className="text-lg">Sign up now</p>
            <div className="border border-gray-300 bg-white w-full rounded-sm hidden md:flex items-center space-x-1 p-3">
              {/* Job Search Bar - Only visible on homepage */}
              <div className="bg-white w-full">
                <div className="flex flex-row items-center justify-between w-full container mx-auto space-x-4">
                  <div className="w-full relative flex-1 border-r-2 border-gray-300">
                    <Search
                      color="#0A65CC"
                      className="absolute left-2 top-1/2 transform -translate-y-1/2"
                    />
                    <input
                      type="text"
                      placeholder="Job title, keyword, company"
                      className="w-full py-2 pl-10 pr-4 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div className="relative flex-1">
                    <MapPin
                      color="#0A65CC"
                      className="absolute left-2 top-1/2 transform -translate-y-1/2"
                    />
                    <input
                      type="text"
                      placeholder="Location"
                      className="w-full py-2 pl-10 pr-4 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <Button
                    variant={"primary"}
                    className="bg-primary rounded-sm px-10 py-8 text-white"
                  >
                    <Link href="/Jobs">Find Job</Link>
                  </Button>
                </div>
              </div>
            </div>
            <p>
              <span className="text-gray-500">Suggestion : </span>
              <span className="hover:text-primary cursor-pointer">
                Designer
              </span>
              ,{" "}
              <span className="hover:text-primary cursor-pointer">
                Programming
              </span>
              ,{" "}
              <span className="hover:text-primary cursor-pointer">
                Digital Marketing
              </span>
              ,{" "}
              <span className="hover:text-primary cursor-pointer">
                Video Animation
              </span>{" "}
            </p>
          </div>
          <div className="flex flex-col w-[100%] md:w-[50%] items-center justify-center">
            <Image src={people} alt="people" width={500} height={500} />
          </div>
          <Button
            variant={"primary"}
            className="bg-primary sm:flex md:hidden rounded-sm px-10 py-8 text-white"
          >
            <Link href="/Jobs">Find Your Next Job</Link>
          </Button>
        </div>

        {/* Stats */}
        <Stats />

        {/* Popular vacancies */}
        <PopularVacancy />

        {/* popular categories */}
        <PopularCategory />

        {/* Candidate-Employer */}
        <div className="w-full bg-white mx-auto px-[10%] py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Become a Candidate */}
            <div className="bg-white dark:from-blue-900/30 dark:to-blue-900/20 rounded-xl hover:shadow-lg p-8">
              <div className="flex flex-col h-full">
                <h2 className="text-2xl font-bold mb-4">Become a Candidate</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Sign up on our platform to access a whole pool of jobs at your
                  disposal.
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mt-4">
                  <li>Find jobs that match your skills and interests</li>
                  <li>Connect with top employers in your industry</li>
                  <li>Get personalized job recommendations</li>
                </ul>
                <div className="mt-auto">
                  <Button
                    variant="primary"
                    className="w-full md:w-auto text-primary"
                  >
                    <div className="flex flex-row">
                      <Link href="/signup">
                        <div className="flex flex-row items-center">
                          Register Now
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 ml-2"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </Link>
                    </div>
                  </Button>
                </div>
              </div>
            </div>

            {/* Become an Employer */}
            <div className="bg-gradient-to-r from-[#002B] to-white text-white rounded-xl shadow-lg p-8">
              <div className="flex flex-col h-full">
                <h2 className="text-2xl font-bold mb-4">Become an Employer</h2>
                <p className="mb-6">
                  <ul className="list-disc list-inside text-white mt-4">
                    <li>Post job openings and find top talent</li>
                    <li>Access a diverse pool of skilled candidates</li>
                    <li>Streamline your hiring process with ease</li>
                  </ul>
                </p>
                <div className="mt-auto">
                  <Button
                    variant="outline"
                    className="w-full rounded-none text-primary md:w-auto hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-900/30"
                  >
                    <Link href="/signup">
                      <div className="flex flex-row justify-center items-center">
                        <p> Register Now</p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 ml-2"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* footer */}
        <Footer />
      </div>
    </div>
  );
}
