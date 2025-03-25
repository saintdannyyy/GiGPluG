import {
  BriefcaseMedical,
  ChartNoAxesColumn,
  ChevronRight,
  Database,
  Link,
  Megaphone,
  MonitorPlay,
  PenTool,
} from "lucide-react";

export default function PopularVacancy() {
  const vacancy = [
    {
      value: "45,804",
      label: "Anesthesiologists",
    },
    {
      value: "50,964",
      label: "Maxillofacial Surgeons",
    },
    {
      value: "61,381",
      label: "Financial Manager",
    },
    {
      value: "50,364",
      label: "Surgeons",
    },
    {
      value: "43,359",
      label: "Software Developer",
    },
    {
      value: "93,048",
      label: "Management Analysis",
    },
    {
      value: "4,339",
      label: "Obstetricians-Gynecologists",
    },
    {
      value: "18,589",
      label: "Psychiatrists",
    },
    {
      value: "50,953",
      label: "IT Manager",
    },
    {
      value: "20,079",
      label: "Orthodontist",
    },
    {
      value: "24,200",
      label: "Data Scientist",
    },
    {
      value: "16,927",
      label: "Operations Research Analysis",
    },
  ];
  return (
    <div className="w-full bg-white text-left mx-auto px-[10%] py-12">
      <h2 className="text-4xl font-medium mb-8">Most Popular Vacancies</h2>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {vacancy.map((vacancy, index) => (
          <div
            key={index}
            className={`group bg-white dark:bg-gray-800 hover:cursor-pointer`}
          >
            <div className="flex flex-col justify-start items-start">
              <p className="text-lg font-semibold group-hover:text-primary group-hover:underline">
                {vacancy.label}
              </p>
              <p className="py-1 text-sm">{vacancy.value} Open Positions</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
