// components/solutions/reseller/ResellerUseCases.tsx
"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, FileText, PlayCircle, Briefcase, Users, Globe, DollarSign } from "lucide-react";

const useCases = [
  {
    title: "Digital Agency",
    description: "Add communication services to your offerings",
    steps: [
      "White-label platform setup",
      "Client onboarding automation",
      "Monthly billing & reporting",
    ],
    templates: "5 templates",
    icon: <Briefcase className="h-5 w-5" />,
    link: "/templates/reseller/agency",
  },
  {
    title: "System Integrator",
    description: "Bundle with your existing solutions",
    steps: [
      "API integration setup",
      "Custom pricing packages",
      "Technical support setup",
    ],
    templates: "4 templates",
    icon: <Users className="h-5 w-5" />,
    link: "/templates/reseller/integrator",
  },
  {
    title: "Regional Partner",
    description: "Serve local markets with localized solutions",
    steps: [
      "Local number provisioning",
      "Regional compliance setup",
      "Local support configuration",
    ],
    templates: "3 templates",
    icon: <Globe className="h-5 w-5" />,
    link: "/templates/reseller/regional",
  },
  {
    title: "Enterprise Reseller",
    description: "Serve large corporate clients",
    steps: [
      "Enterprise security setup",
      "Custom SLA configuration",
      "Dedicated support routing",
    ],
    templates: "4 templates",
    icon: <DollarSign className="h-5 w-5" />,
    link: "/templates/reseller/enterprise",
  },
];

const templates = [
  {
    name: "Agency Onboarding",
    category: "Setup",
    time: "2-3 days",
    clients: "Unlimited clients",
    priority: "High",
  },
  {
    name: "Client Portal",
    category: "Branding",
    time: "1 day",
    clients: "Custom branding",
    priority: "Critical",
  },
  {
    name: "Billing Setup",
    category: "Revenue",
    time: "1-2 days",
    clients: "Flexible pricing",
    priority: "High",
  },
  {
    name: "Support Configuration",
    category: "Operations",
    time: "1 day",
    clients: "Multi-level support",
    priority: "Medium",
  },
];

export default function ResellerUseCases() {
  return (
    <section className="py-13 bg-gray-50 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 mb-4">
              <span className="text-sm font-semibold text-gray-700">
                RESELLER BUSINESS MODELS
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready-to-Launch Reseller Programs
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Pre-configured business models and templates for different types 
              of reseller partners and agencies
            </p>
          </div>

          {/* Use Cases Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Reseller Business Models
              </h3>
              <div className="space-y-4">
                {useCases.map((useCase, index) => (
                  <motion.div
                    key={useCase.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      href={useCase.link}
                      className="group block p-6 bg-white rounded-xl border border-gray-200 hover:border-indigo-200 hover:shadow-md transition-all"
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-indigo-50">
                          <div className="text-indigo-600">
                            {useCase.icon}
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between">
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-indigo-600">
                                {useCase.title}
                              </h4>
                              <p className="text-sm text-gray-600">
                                {useCase.description}
                              </p>
                            </div>
                            <span className="inline-flex items-center gap-1 text-xs font-medium text-indigo-600 bg-indigo-50 px-2 py-1 rounded-full">
                              {useCase.templates}
                            </span>
                          </div>
                          
                          <div className="space-y-2 mt-3">
                            {useCase.steps.map((step, i) => (
                              <div key={i} className="flex items-center gap-3">
                                <div className="h-6 w-6 rounded-full bg-indigo-50 text-indigo-600 text-xs font-semibold flex items-center justify-center">
                                  {i + 1}
                                </div>
                                <span className="text-sm text-gray-700">{step}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center text-sm text-indigo-600 font-medium">
                        View business model template
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Setup Templates
              </h3>
              <div className="space-y-4">
                {templates.map((template, index) => (
                  <motion.div
                    key={template.name}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="p-6 bg-white rounded-xl border border-gray-200">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-xs font-medium text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">
                              {template.category}
                            </span>
                            <span className="text-xs text-gray-500">
                              Setup: {template.time}
                            </span>
                          </div>
                          <h4 className="font-semibold text-gray-900 mb-1">
                            {template.name}
                          </h4>
                          <div className="text-sm text-gray-500">
                            {template.clients}
                          </div>
                        </div>
                        <div className={`inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-medium ${
                          template.priority === "Critical" 
                            ? "bg-red-50 text-red-700"
                            : template.priority === "High"
                            ? "bg-amber-50 text-amber-700"
                            : "bg-blue-50 text-blue-700"
                        }`}>
                          {template.priority}
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <FileText className="h-4 w-4 text-indigo-500" />
                          <span className="text-sm text-gray-600">
                            Ready to deploy
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <button className="text-sm text-indigo-600 hover:text-indigo-700 font-medium">
                            Preview
                          </button>
                          <button className="text-sm text-gray-600 hover:text-gray-700 font-medium">
                            Use Template
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Partnership Program */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-indigo-50 to-violet-50 rounded-2xl p-8 border border-indigo-200"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Comprehensive Partner Program
                </h3>
                <p className="text-gray-600 mb-6">
                  Get access to dedicated partner support, marketing materials, 
                  sales enablement, and co-selling opportunities.
                </p>
                <div className="flex items-center gap-6">
                  <Link
                    href="/docs/reseller/program"
                    className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:text-indigo-700"
                  >
                    <PlayCircle className="h-5 w-5" />
                    Watch Partner Program Overview
                  </Link>
                  <Link
                    href="/templates/reseller/marketing"
                    className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:text-indigo-700"
                  >
                    <FileText className="h-5 w-5" />
                    Download Marketing Kit
                  </Link>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    500+
                  </div>
                  <div className="text-gray-600">Active partners</div>
                  <div className="mt-4 text-sm text-gray-500">
                    Join our growing network
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}