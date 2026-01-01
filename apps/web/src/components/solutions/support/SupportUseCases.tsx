// components/solutions/support/SupportUseCases.tsx
"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, FileText, PlayCircle, MessageSquare, Headphones, Zap, Users } from "lucide-react";

const useCases = [
  {
    title: "Automated Ticket Management",
    description: "Streamline support ticket workflows",
    steps: [
      "Ticket creation & triage",
      "Auto-assignment to agents",
      "Status updates & notifications",
    ],
    templates: "6 templates",
    icon: <MessageSquare className="h-5 w-5" />,
    link: "/templates/support/ticket-management",
  },
  {
    title: "Live Chat Support",
    description: "Real-time customer conversations",
    steps: [
      "Instant chat initiation",
      "Automated greetings",
      "Agent handoff & transcripts",
    ],
    templates: "4 templates",
    icon: <Headphones className="h-5 w-5" />,
    link: "/templates/support/live-chat",
  },
  {
    title: "Proactive Notifications",
    description: "Keep customers informed automatically",
    steps: [
      "Service status updates",
      "Outage notifications",
      "Maintenance announcements",
    ],
    templates: "5 templates",
    icon: <Zap className="h-5 w-5" />,
    link: "/templates/support/proactive-notifications",
  },
  {
    title: "Customer Feedback",
    description: "Collect and act on customer feedback",
    steps: [
      "Post-resolution surveys",
      "CSAT/NPS collection",
      "Feedback analysis & routing",
    ],
    templates: "3 templates",
    icon: <Users className="h-5 w-5" />,
    link: "/templates/support/customer-feedback",
  },
];

const templates = [
  {
    name: "Welcome Message",
    category: "Onboarding",
    channel: "Email & Chat",
    responses: "Automated replies",
    priority: "High",
  },
  {
    name: "Issue Resolution",
    category: "Support",
    channel: "Email & SMS",
    responses: "Status updates",
    priority: "Critical",
  },
  {
    name: "Satisfaction Survey",
    category: "Feedback",
    channel: "Email",
    responses: "CSAT collection",
    priority: "Medium",
  },
  {
    name: "Service Alert",
    category: "Proactive",
    channel: "SMS & Email",
    responses: "Outage notices",
    priority: "Critical",
  },
];

export default function SupportUseCases() {
  return (
    <section className="py-13 bg-gray-50 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 mb-4">
              <span className="text-sm font-semibold text-gray-700">
                SUPPORT WORKFLOWS
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready-to-Use Support Automation
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Pre-built workflows and templates to automate common support 
              scenarios and improve customer experience
            </p>
          </div>

          {/* Use Cases Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Key Support Workflows
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
                      className="group block p-6 bg-white rounded-xl border border-gray-200 hover:border-amber-200 hover:shadow-md transition-all"
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-amber-50">
                          <div className="text-amber-600">
                            {useCase.icon}
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between">
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-amber-600">
                                {useCase.title}
                              </h4>
                              <p className="text-sm text-gray-600">
                                {useCase.description}
                              </p>
                            </div>
                            <span className="inline-flex items-center gap-1 text-xs font-medium text-amber-600 bg-amber-50 px-2 py-1 rounded-full">
                              {useCase.templates}
                            </span>
                          </div>
                          
                          <div className="space-y-2 mt-3">
                            {useCase.steps.map((step, i) => (
                              <div key={i} className="flex items-center gap-3">
                                <div className="h-6 w-6 rounded-full bg-amber-50 text-amber-600 text-xs font-semibold flex items-center justify-center">
                                  {i + 1}
                                </div>
                                <span className="text-sm text-gray-700">{step}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center text-sm text-amber-600 font-medium">
                        View automation templates
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Automation Templates
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
                            <span className="text-xs font-medium text-amber-600 bg-amber-50 px-2 py-0.5 rounded">
                              {template.category}
                            </span>
                            <span className="text-xs text-gray-500">
                              {template.channel}
                            </span>
                          </div>
                          <h4 className="font-semibold text-gray-900 mb-1">
                            {template.name}
                          </h4>
                          <div className="text-sm text-gray-500">
                            {template.responses}
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
                          <FileText className="h-4 w-4 text-amber-500" />
                          <span className="text-sm text-gray-600">
                            Ready to use
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <button className="text-sm text-amber-600 hover:text-amber-700 font-medium">
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

          {/* Quick Start */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-200"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Start Automating in Minutes
                </h3>
                <p className="text-gray-600 mb-6">
                  Connect your support tools and launch your first automation 
                  workflow in under 10 minutes. No coding required.
                </p>
                <div className="flex items-center gap-6">
                  <Link
                    href="/docs/support/quick-start"
                    className="inline-flex items-center gap-2 text-amber-600 font-semibold hover:text-amber-700"
                  >
                    <PlayCircle className="h-5 w-5" />
                    Watch Setup Tutorial
                  </Link>
                  <Link
                    href="/templates/support"
                    className="inline-flex items-center gap-2 text-amber-600 font-semibold hover:text-amber-700"
                  >
                    <FileText className="h-5 w-5" />
                    Browse All Templates
                  </Link>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    10 min
                  </div>
                  <div className="text-gray-600">Average setup time</div>
                  <div className="mt-4 text-sm text-gray-500">
                    Integration + first automation
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