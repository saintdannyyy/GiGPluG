// lib/JSearch.js
const API_BASE_URL = "/api";

export async function searchJobs(params = {}) {
  const queryString = new URLSearchParams(params).toString();
  const response = await fetch(`${API_BASE_URL}/jobs?${queryString}`);

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || "Failed to fetch jobs");
  }

  return response.json();
}

export async function getJobDetails(job_id) {
  const response = await fetch(`${API_BASE_URL}/jobs/${job_id}`);

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || "Failed to fetch job details");
  }

  return response.json();
}

// Export the realistic jobs data
export const realisticJobs = [
  {
    job_id: "1",
    job_title: "Senior Software Engineer",
    employer_name: "Google",
    employer_logo: "https://logo.clearbit.com/google.com",
    job_description:
      "Design and implement scalable distributed systems for Google's core search infrastructure. Work with a team of engineers to solve complex problems at massive scale.",
    job_employment_type: "FULLTIME",
    job_is_remote: false,
    job_city: "Mountain View",
    job_country: "United States",
    job_min_salary: 150000,
    job_max_salary: 220000,
    job_salary_currency: "USD",
    job_apply_link: "https://careers.google.com/jobs/results/1",
    job_posted_at_datetime_utc: "2023-05-15T09:00:00Z",
    job_highlights: {
      Qualifications: [
        "Bachelor's degree in Computer Science or related field",
        "5+ years of software development experience",
        "Expertise in Java, C++, or Python",
      ],
      Responsibilities: [
        "Design and implement large-scale distributed systems",
        "Mentor junior engineers",
        "Participate in code and design reviews",
      ],
      Benefits: [
        "Comprehensive health benefits",
        "401(k) matching",
        "On-site gym and meals",
      ],
    },
  },
  {
    job_id: "2",
    job_title: "Data Scientist",
    employer_name: "Amazon",
    employer_logo: "https://logo.clearbit.com/amazon.com",
    job_description:
      "Use statistical analysis and machine learning to improve Amazon's recommendation systems. Work with petabytes of data to uncover insights that drive business decisions.",
    job_employment_type: "FULLTIME",
    job_is_remote: true,
    job_city: "Seattle",
    job_country: "United States",
    job_min_salary: 120000,
    job_max_salary: 180000,
    job_salary_currency: "USD",
    job_apply_link: "https://www.amazon.jobs/en/jobs/2",
    job_posted_at_datetime_utc: "2023-05-20T09:00:00Z",
    job_highlights: {
      Qualifications: [
        "PhD or Master's in Statistics, Computer Science, or related field",
        "3+ years experience with machine learning",
        "Proficiency in Python and SQL",
      ],
      Responsibilities: [
        "Develop predictive models for customer behavior",
        "Analyze A/B test results",
        "Communicate findings to stakeholders",
      ],
    },
  },
  {
    job_id: "3",
    job_title: "Marketing Manager",
    employer_name: "Coca-Cola",
    employer_logo: "https://logo.clearbit.com/coca-cola.com",
    job_description:
      "Develop and execute marketing campaigns to drive brand awareness and sales. Collaborate with creative teams to deliver compelling advertising strategies.",
    job_employment_type: "FULLTIME",
    job_is_remote: false,
    job_city: "Atlanta",
    job_country: "United States",
    job_min_salary: 90000,
    job_max_salary: 120000,
    job_salary_currency: "USD",
    job_apply_link: "https://careers.coca-colacompany.com/jobs/3",
    job_posted_at_datetime_utc: "2023-06-10T09:00:00Z",
    job_highlights: {
      Qualifications: [
        "Bachelor's degree in Marketing or Business Administration",
        "5+ years of marketing experience",
        "Strong analytical and communication skills",
      ],
      Responsibilities: [
        "Create and manage advertising campaigns",
        "Analyze market trends and customer insights",
        "Collaborate with sales and design teams",
      ],
    },
  },
  {
    job_id: "4",
    job_title: "Financial Analyst",
    employer_name: "JPMorgan Chase",
    employer_logo: "https://logo.clearbit.com/jpmorganchase.com",
    job_description:
      "Conduct financial modeling and analysis to support investment decisions. Prepare reports and forecasts for executive leadership.",
    job_employment_type: "FULLTIME",
    job_is_remote: false,
    job_city: "New York City",
    job_country: "United States",
    job_min_salary: 85000,
    job_max_salary: 110000,
    job_salary_currency: "USD",
    job_apply_link: "https://careers.jpmorgan.com/global/en/jobs/4",
    job_posted_at_datetime_utc: "2023-06-15T09:00:00Z",
    job_highlights: {
      Qualifications: [
        "Bachelor's degree in Finance or Economics",
        "3+ years of experience in financial analysis",
        "Proficiency in Excel and financial modeling software",
      ],
      Responsibilities: [
        "Analyze financial data and market trends",
        "Prepare investment reports for stakeholders",
        "Assist in budgeting and forecasting processes",
      ],
    },
  },
  {
    job_id: "5",
    job_title: "Registered Nurse",
    employer_name: "Mayo Clinic",
    employer_logo: "https://logo.clearbit.com/mayoclinic.org",
    job_description:
      "Provide direct patient care, assess health conditions, and administer treatment plans. Work in collaboration with healthcare teams to ensure patient safety and satisfaction.",
    job_employment_type: "FULLTIME",
    job_is_remote: false,
    job_city: "Rochester",
    job_country: "United States",
    job_min_salary: 70000,
    job_max_salary: 95000,
    job_salary_currency: "USD",
    job_apply_link: "https://jobs.mayoclinic.org/job/5",
    job_posted_at_datetime_utc: "2023-07-01T09:00:00Z",
    job_highlights: {
      Qualifications: [
        "Bachelor's or Associate's degree in Nursing",
        "Active RN license",
        "Experience in acute care settings",
      ],
      Responsibilities: [
        "Monitor patient health and vital signs",
        "Administer medications and treatments",
        "Educate patients and families on healthcare plans",
      ],
    },
  },
  {
    job_id: "6",
    job_title: "UX Designer",
    employer_name: "Adobe",
    employer_logo: "https://logo.clearbit.com/adobe.com",
    job_description:
      "Design intuitive user experiences for Adobe's creative cloud products. Conduct user research and collaborate with product teams to create beautiful, functional interfaces.",
    job_employment_type: "FULLTIME",
    job_is_remote: true,
    job_city: "San Francisco",
    job_country: "United States",
    job_min_salary: 110000,
    job_max_salary: 160000,
    job_salary_currency: "USD",
    job_apply_link: "https://www.adobe.com/careers/6",
    job_posted_at_datetime_utc: "2023-07-10T09:00:00Z",
    job_highlights: {
      Qualifications: [
        "Portfolio demonstrating UX design skills",
        "3+ years experience in product design",
        "Familiarity with Figma and Adobe XD",
      ],
      Responsibilities: [
        "Create wireframes and prototypes",
        "Conduct user testing sessions",
        "Collaborate with engineering teams",
      ],
    },
  },
  {
    job_id: "7",
    job_title: "Mechanical Engineer",
    employer_name: "Tesla",
    employer_logo: "https://logo.clearbit.com/tesla.com",
    job_description:
      "Design and test mechanical components for Tesla's electric vehicles. Work on innovative solutions to improve vehicle performance and manufacturing efficiency.",
    job_employment_type: "FULLTIME",
    job_is_remote: false,
    job_city: "Fremont",
    job_country: "United States",
    job_min_salary: 95000,
    job_max_salary: 140000,
    job_salary_currency: "USD",
    job_apply_link: "https://www.tesla.com/careers/7",
    job_posted_at_datetime_utc: "2023-07-15T09:00:00Z",
    job_highlights: {
      Qualifications: [
        "Bachelor's degree in Mechanical Engineering",
        "2+ years of product design experience",
        "Proficiency with CAD software",
      ],
      Responsibilities: [
        "Design vehicle components and systems",
        "Conduct stress and thermal analysis",
        "Collaborate with manufacturing teams",
      ],
    },
  },
  {
    job_id: "8",
    job_title: "Content Strategist",
    employer_name: "Netflix",
    employer_logo: "https://logo.clearbit.com/netflix.com",
    job_description:
      "Develop content strategies to engage Netflix's global audience. Analyze viewer data to inform content creation and marketing decisions.",
    job_employment_type: "FULLTIME",
    job_is_remote: true,
    job_city: "Los Gatos",
    job_country: "United States",
    job_min_salary: 100000,
    job_max_salary: 150000,
    job_salary_currency: "USD",
    job_apply_link: "https://jobs.netflix.com/jobs/8",
    job_posted_at_datetime_utc: "2023-07-20T09:00:00Z",
    job_highlights: {
      Qualifications: [
        "Bachelor's degree in Communications or related field",
        "4+ years in content strategy or digital marketing",
        "Strong analytical skills",
      ],
      Responsibilities: [
        "Develop content calendars and strategies",
        "Analyze audience engagement metrics",
        "Collaborate with creative teams worldwide",
      ],
    },
  },
  {
    job_id: "9",
    job_title: "Cybersecurity Analyst",
    employer_name: "IBM",
    employer_logo: "https://logo.clearbit.com/ibm.com",
    job_description:
      "Protect IBM's systems and client data from security threats. Monitor networks, investigate incidents, and implement security measures.",
    job_employment_type: "FULLTIME",
    job_is_remote: false,
    job_city: "Armonk",
    job_country: "United States",
    job_min_salary: 105000,
    job_max_salary: 155000,
    job_salary_currency: "USD",
    job_apply_link: "https://www.ibm.com/careers/us-en/jobs/9",
    job_posted_at_datetime_utc: "2023-08-01T09:00:00Z",
    job_highlights: {
      Qualifications: [
        "Bachelor's degree in Cybersecurity or related field",
        "Certifications like CISSP or CEH preferred",
        "Experience with SIEM tools",
      ],
      Responsibilities: [
        "Monitor systems for security breaches",
        "Investigate security incidents",
        "Implement security protocols",
      ],
    },
  },
  {
    job_id: "10",
    job_title: "HR Business Partner",
    employer_name: "Microsoft",
    employer_logo: "https://logo.clearbit.com/microsoft.com",
    job_description:
      "Support Microsoft's engineering teams with HR strategy and employee relations. Partner with leadership to develop talent and foster an inclusive culture.",
    job_employment_type: "FULLTIME",
    job_is_remote: true,
    job_city: "Redmond",
    job_country: "United States",
    job_min_salary: 95000,
    job_max_salary: 135000,
    job_salary_currency: "USD",
    job_apply_link: "https://careers.microsoft.com/professionals/us/en/job/10",
    job_posted_at_datetime_utc: "2023-08-05T09:00:00Z",
    job_highlights: {
      Qualifications: [
        "Bachelor's degree in HR or related field",
        "5+ years HR experience in tech",
        "Knowledge of employment laws",
      ],
      Responsibilities: [
        "Advise managers on HR policies",
        "Support employee development programs",
        "Analyze workforce metrics",
      ],
    },
  },
];
