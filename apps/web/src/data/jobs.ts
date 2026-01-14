// data/jobs.ts
export interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  salary: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
  postedDate: string;
  isRemote: boolean;
  departmentLabel: string;
}

export const jobs: Job[] = [
  {
    id: "1",
    title: "Senior Backend Engineer",
    department: "engineering",
    departmentLabel: "Engineering",
    location: "Remote",
    type: "Full-time",
    experience: "5+ years",
    description: "Build and scale our core infrastructure APIs",
    salary: "$160,000 - $220,000 + equity",
    responsibilities: [
      "Design, build, and maintain our core backend services and APIs",
      "Optimize system performance and scalability",
      "Implement security best practices",
      "Collaborate with product and frontend teams",
      "Participate in system architecture design",
      "Mentor junior engineers and conduct code reviews"
    ],
    requirements: [
      "5+ years of backend development experience",
      "Strong experience with Go, Python, or Node.js",
      "Experience with distributed systems and microservices",
      "Knowledge of databases (PostgreSQL, Redis, etc.)",
      "Experience with cloud platforms (AWS, GCP, or Azure)",
      "Understanding of CI/CD pipelines and DevOps practices"
    ],
    benefits: [
      "Competitive salary and equity package",
      "100% remote work",
      "Comprehensive health benefits",
      "Unlimited PTO",
      "Learning and development budget",
      "Home office setup allowance",
      "Annual company retreats"
    ],
    postedDate: "2024-01-15",
    isRemote: true
  },
  {
    id: "2",
    title: "Frontend Engineer",
    department: "engineering",
    departmentLabel: "Engineering",
    location: "Remote",
    type: "Full-time",
    experience: "3+ years",
    description: "Create beautiful, responsive user interfaces",
    salary: "$140,000 - $190,000 + equity",
    responsibilities: [
      "Build responsive and accessible user interfaces",
      "Collaborate with designers and backend engineers",
      "Optimize application performance and loading times",
      "Implement new features and fix bugs",
      "Write clean, maintainable, and tested code",
      "Participate in design and code reviews"
    ],
    requirements: [
      "3+ years of frontend development experience",
      "Strong React, TypeScript, and Next.js skills",
      "Experience with modern CSS frameworks (Tailwind, Styled Components)",
      "Understanding of web performance optimization",
      "Experience with testing frameworks (Jest, Cypress)",
      "Knowledge of state management solutions"
    ],
    benefits: [
      "Competitive salary and equity package",
      "Remote-first culture",
      "Health, dental, and vision insurance",
      "Flexible working hours",
      "Home office stipend",
      "Professional development allowance",
      "Parental leave"
    ],
    postedDate: "2024-01-10",
    isRemote: true
  },
  {
    id: "3",
    title: "DevOps Engineer",
    department: "engineering",
    departmentLabel: "Engineering",
    location: "Remote",
    type: "Full-time",
    experience: "4+ years",
    description: "Manage our global infrastructure and deployment",
    salary: "$150,000 - $210,000 + equity",
    responsibilities: [
      "Manage and scale our cloud infrastructure",
      "Implement and maintain CI/CD pipelines",
      "Monitor system performance and reliability",
      "Ensure security and compliance across all systems",
      "Automate deployment and scaling processes",
      "Participate in on-call rotation"
    ],
    requirements: [
      "4+ years of DevOps or SRE experience",
      "Strong knowledge of AWS/GCP/Azure",
      "Experience with Kubernetes and Docker",
      "Infrastructure as Code (Terraform, CloudFormation)",
      "Monitoring tools experience (Prometheus, Grafana, Datadog)",
      "Scripting skills (Python, Bash, Go)"
    ],
    benefits: [
      "Competitive compensation",
      "Remote work flexibility",
      "Comprehensive benefits package",
      "Professional development budget",
      "Company retreats",
      "Wellness stipend",
      "Learning resources"
    ],
    postedDate: "2024-01-12",
    isRemote: true
  },
  {
    id: "4",
    title: "Product Manager",
    department: "product",
    departmentLabel: "Product",
    location: "Remote",
    type: "Full-time",
    experience: "5+ years",
    description: "Lead product strategy and roadmap",
    salary: "$170,000 - $230,000 + equity",
    responsibilities: [
      "Define product vision and strategy",
      "Create and maintain product roadmap",
      "Collaborate with engineering, design, and marketing teams",
      "Analyze market trends and user needs",
      "Prioritize features and enhancements based on impact",
      "Define and track key product metrics"
    ],
    requirements: [
      "5+ years of product management experience",
      "Experience in B2B/SaaS products",
      "Strong analytical and communication skills",
      "Technical background or understanding",
      "Data-driven decision making",
      "Experience with Agile methodologies"
    ],
    benefits: [
      "Leadership role with impact",
      "Competitive salary + equity",
      "Full remote flexibility",
      "Comprehensive health coverage",
      "Annual learning stipend",
      "Executive coaching",
      "Travel budget for customer visits"
    ],
    postedDate: "2024-01-08",
    isRemote: true
  },
  {
    id: "5",
    title: "Solutions Engineer",
    department: "sales",
    departmentLabel: "Sales",
    location: "Remote",
    type: "Full-time",
    experience: "3+ years",
    description: "Help customers implement our solutions",
    salary: "$130,000 - $180,000 + commission",
    responsibilities: [
      "Work with sales team on technical aspects of deals",
      "Conduct product demonstrations and proof of concepts",
      "Help customers implement and integrate our solutions",
      "Gather customer feedback for product improvements",
      "Create technical documentation and guides",
      "Train customers on product usage"
    ],
    requirements: [
      "3+ years in solutions engineering or technical sales",
      "Strong technical background",
      "Excellent communication and presentation skills",
      "Experience with API integrations",
      "Understanding of enterprise software sales",
      "Ability to translate technical concepts to business value"
    ],
    benefits: [
      "Base salary + commission structure",
      "Remote work option",
      "Health and wellness benefits",
      "Sales training and development",
      "Travel opportunities",
      "Team building events",
      "Performance bonuses"
    ],
    postedDate: "2024-01-14",
    isRemote: true
  },
  {
    id: "6",
    title: "Marketing Manager",
    department: "marketing",
    departmentLabel: "Marketing",
    location: "Remote",
    type: "Full-time",
    experience: "4+ years",
    description: "Drive growth and brand awareness",
    salary: "$120,000 - $160,000 + bonus",
    responsibilities: [
      "Develop and execute marketing strategies",
      "Manage content creation and distribution",
      "Analyze campaign performance and optimize ROI",
      "Collaborate with sales and product teams",
      "Manage social media and community engagement",
      "Plan and execute events and webinars"
    ],
    requirements: [
      "4+ years of B2B marketing experience",
      "Experience in SaaS/tech industry",
      "Strong analytical and creative skills",
      "Knowledge of marketing automation tools",
      "Experience with SEO/SEM strategies",
      "Excellent writing and communication skills"
    ],
    benefits: [
      "Competitive salary + performance bonus",
      "Remote-first workplace",
      "Health and dental insurance",
      "Marketing budget autonomy",
      "Conference and event attendance",
      "Professional development funds",
      "Flexible work schedule"
    ],
    postedDate: "2024-01-05",
    isRemote: true
  },
  {
    id: "7",
    title: "Technical Writer",
    department: "engineering",
    departmentLabel: "Engineering",
    location: "Remote",
    type: "Full-time",
    experience: "2+ years",
    description: "Create exceptional documentation",
    salary: "$90,000 - $130,000",
    responsibilities: [
      "Create and maintain technical documentation",
      "Write API documentation and developer guides",
      "Create tutorials and how-to articles",
      "Collaborate with engineering and product teams",
      "Improve documentation based on user feedback",
      "Ensure consistency across all documentation"
    ],
    requirements: [
      "2+ years of technical writing experience",
      "Experience with developer documentation",
      "Ability to understand complex technical concepts",
      "Experience with documentation tools (Markdown, Git, etc.)",
      "Strong writing and editing skills",
      "Basic understanding of programming concepts"
    ],
    benefits: [
      "Competitive salary",
      "Remote work environment",
      "Health benefits",
      "Learning and development opportunities",
      "Flexible hours",
      "Documentation tools and software",
      "Team collaboration tools"
    ],
    postedDate: "2024-01-03",
    isRemote: true
  },
  {
    id: "8",
    title: "Security Engineer",
    department: "engineering",
    departmentLabel: "Engineering",
    location: "Remote",
    type: "Full-time",
    experience: "5+ years",
    description: "Ensure platform security and compliance",
    salary: "$165,000 - $225,000 + equity",
    responsibilities: [
      "Design and implement security controls",
      "Conduct security audits and penetration testing",
      "Monitor for security threats and incidents",
      "Develop security policies and procedures",
      "Ensure compliance with regulations (SOC2, GDPR, etc.)",
      "Respond to security incidents"
    ],
    requirements: [
      "5+ years in security engineering",
      "Experience with cloud security (AWS/GCP/Azure)",
      "Knowledge of security frameworks and compliance",
      "Experience with security tooling and monitoring",
      "Understanding of cryptography and network security",
      "Relevant certifications (CISSP, OSCP, etc.) preferred"
    ],
    benefits: [
      "Competitive salary + equity",
      "100% remote position",
      "Comprehensive benefits",
      "Security training and certifications",
      "Conference attendance",
      "Home lab budget",
      "Security tools and software"
    ],
    postedDate: "2024-01-07",
    isRemote: true
  }
];

export const departments = [
  { id: "all", label: "All Departments" },
  { id: "engineering", label: "Engineering" },
  { id: "product", label: "Product" },
  { id: "sales", label: "Sales" },
  { id: "marketing", label: "Marketing" },
];

// Helper functions
export function getJobById(id: string): Job | undefined {
  return jobs.find(job => job.id === id);
}

export function getJobsByDepartment(department: string): Job[] {
  if (department === "all") return jobs;
  return jobs.filter(job => job.department === department);
}

export function getDepartmentLabel(id: string): string {
  const dept = departments.find(d => d.id === id);
  return dept ? dept.label : "All Departments";
}