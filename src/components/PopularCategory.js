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

export default function PopularCategory() {
  const cats = [
    {
      value: 357,
      label: "Graphics & Design",
      icon: <PenTool color="#0A65CC" className="group-hover:stroke-white" />,
    },
    {
      value: 312,
      label: "Code & Programming",
      icon: (
        <svg
          className="w-6 h-6 text-blue-600 focus:bg-blue-600  group-hover:text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
    },
    {
      value: 297,
      label: "Digital Marketing",
      icon: <Megaphone color="#0A65CC" className="group-hover:stroke-white" />,
    },
    {
      value: 247,
      label: "Video & Animation",
      icon: (
        <MonitorPlay color="#0A65CC" className="group-hover:stroke-white" />
      ),
    },
    {
      value: 208,
      label: "Music & Audio",
      icon: (
        <svg
          className="w-6 h-6 text-blue-600 group-hover:text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
          />
        </svg>
      ),
    },
    {
      value: 167,
      label: "Account & Finance",
      icon: (
        <ChartNoAxesColumn
          color="#0A65CC"
          className="group-hover:stroke-white"
        />
      ),
    },
    {
      value: 125,
      label: "Health & Care",
      icon: (
        <BriefcaseMedical
          color="#0A65CC"
          className="group-hover:stroke-white"
        />
      ),
    },
    {
      value: 57,
      label: "Data & Science",
      icon: <Database color="#0A65CC" className="group-hover:stroke-white" />,
    },
  ];
  return (
    <div className="w-full bg-white mx-auto px-[10%] py-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-semibold">Popular Categories</h2>
        <button className="text-blue-600 dark:text-blue-400 hover:underline flex items-center cursor-pointer">
          <a href="/Jobs">
            <div className="flex flex-row items-center">
              <p>View All</p>
              <ChevronRight />
            </div>
          </a>
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
        {cats.map((cat, index) => (
          <div
            key={index}
            className="flex flex-row justify-start items-start bg-white rounded-lg p-6 hover:shadow-lg hover:text-blue-600 transition-all cursor-pointer group"
          >
            <div className="flex flex-row justify-center items-center text-center">
              <div className="p-3 rounded-sm bg-blue-50 dark:bg-blue-900/20 mb-3 group-hover:bg-blue-600 group-hover:text-white group-hover:stroke-white">
                {cat.icon}
              </div>
              <div>
                <h3 className="font-medium">{cat.label}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {cat.value} Open positions
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
