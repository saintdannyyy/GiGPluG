"use client";

import Link from "next/link";
import {
  BriefcaseBusiness,
  Facebook,
  Instagram,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-[#18191C] text-gray-300 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Contact Details */}
          <div>
            <div className="flex flex-row items-baseline">
              <BriefcaseBusiness />{" "}
              <h2 className="text-3xl font-bold text-white mb-4">GiGPIuG</h2>
            </div>
            {/* Call */}
            <div className="flex items-start space-x-4 mb-4">
              <Phone className="w-5 h-5 mt-1 text-blue-400" />
              <div>
                <p className="font-medium text-white">
                  Call now :
                  <a
                    href="tel:020-000-0000"
                    className="hover:text-blue-400 transition-colors"
                  >
                    (020) 000-0000
                  </a>
                </p>
              </div>
            </div>
            {/* Location */}
            <div className="flex items-start space-x-4">
              <MapPin className="w-5 h-5 mt-1 text-blue-400" />
              <p>Accra, Ghana </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Link
            </h3>
            <ul className="space-y-2">
              {["About", "Contact", "Pricing", "Blog"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Candidate Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Candidate</h3>
            <ul className="space-y-2">
              {[
                "Browse Jobs",
                "Browse Employers",
                "Candidate Dashboard",
                "Saved Jobs",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Employers Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Employers</h3>
            <ul className="space-y-2">
              {[
                "Post a Job",
                "Browse Candidates",
                "Employers Dashboard",
                "Applications",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-2">
              {["Faqs", "Privacy Policy", "Terms & Conditions"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-4 md:mb-0">
              <p className="text-sm text-gray-500">
                © {new Date().getFullYear()} GiGPIuG – All rights Reserved
              </p>
            </div>
            <div className="flex flex-row gap-4">
              <Link href="https://facebook.com" target="_blank">
                {" "}
                <Facebook fill="#767F8C" stroke="#767F8C" />
              </Link>
              <Link href="https://youtube.com" target="_blank">
                {" "}
                <Youtube fill="#767F8C" stroke="#767F8C" className="bg-black" />
              </Link>
              <Link href="https://instagram.com" target="_blank">
                {" "}
                <Instagram stroke="#767F8C" />
              </Link>
              <Link href="https://x.com" target="_blank">
                {" "}
                <Twitter fill="#767F8C" stroke="#767F8C" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
