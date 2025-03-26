// components/StatsSection.jsx
"use client";

import { Card } from "@/components/ui/card";
import { BriefcaseBusiness, Building2, Users } from "lucide-react";
import CountUp from "react-countup";

export default function Stats() {
  const stats = [
    {
      value: 175324,
      label: "Live Jobs",
      icon: (
        <BriefcaseBusiness className="w-6 h-6 text-blue-600 group-hover:stroke-white" />
      ),
      color:
        "bg-blue-50 dark:bg-blue-900/30 border-blue-200 dark:border-blue-800",
    },
    {
      value: 97354,
      label: "Companies",
      icon: (
        <Building2 className="w-6 h-6 text-blue-600 group-hover:stroke-white" />
      ),
      color:
        "bg-green-50 dark:bg-green-900/30 border-green-200 dark:border-green-800",
    },
    {
      value: 3847154,
      label: "Candidates",
      icon: (
        <Users className="w-6 h-6 text-blue-600 group-hover:stroke-white" />
      ),
      color:
        "bg-purple-50 dark:bg-purple-900/30 border-purple-200 dark:border-purple-800",
    },
    {
      value: 7532,
      label: "New Jobs",
      icon: (
        <BriefcaseBusiness className="w-6 h-6 text-blue-600 group-hover:stroke-white" />
      ),
      color:
        "bg-orange-50 dark:bg-orange-900/30 border-orange-200 dark:border-orange-800",
    },
  ];
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 bg-primary-foreground px-[10%] py-8">
      {stats.map((stat, index) => (
        <Card
          key={index}
          className={`group p-6 rounded-sm hover:shadow-lg hover:cursor-pointer transition-all duration-300 hover:-translate-y-1 bg-white`}
        >
          <div className="flex flex-row items-center text-center gap-3">
            <div className="p-5 bg-[#E7F0FA] dark:bg-gray-800 shadow-sm group-hover:bg-[#0A65CC]">
              {stat.icon}
            </div>
            <div className="flex flex-col items-start">
              <h3 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-50">
                <CountUp
                  end={stat.value}
                  duration={2.5}
                  separator=","
                  enableScrollSpy
                  scrollSpyOnce
                />
              </h3>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
