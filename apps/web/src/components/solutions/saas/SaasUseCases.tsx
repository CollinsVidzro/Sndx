// components/solutions/saas/SaasUseCases.tsx
"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, FileText, PlayCircle, Users, Target, Zap } from "lucide-react";

const useCases = [
  {
    title: "User Onboarding Flow",
    description: "Guide new users to activation",
    steps: [
      "Welcome email sequence",
      "Setup guidance",
      "First value milestone",
    ],
    templates: "5 templates",
    icon: <Users className="h-5 w-5" />,
    link: "/templates/saas/onboarding",
  },
  {
    title: "Feature Adoption Campaign",
    description: "Drive usage of key features",
    steps: [
      "Feature announcement",
      "Tutorial walkthrough",
      "Success check-in",
    ],
    templates: "4 templates",
    icon: <Target className="h-5 w-5" />,
    link: "/templates/saas/feature-adoption",
  },
  {
    title: "Churn Prevention",
    description: "Identify and engage at-risk users",
    steps: [
      "Usage drop detection",
      "Personalized check-in",
      "Win-back offer",
    ],
    templates: "3 templates",
    icon: <Zap className="h-5 w-5" />,
    link: "/templates/saas/churn-prevention",
  },
  {
    title: "Product Update Announcements",
    description: "Communicate new features and updates",
    steps: [
      "Update announcement",
      "Release notes",
      "Feedback request",
    ],
    templates: "3 templates",
    icon: <FileText className="h-5 w-5" />,
    link: "/templates/saas/product-updates",
  },
];

const templates = [
  {
    name: "Welcome Series",
    category: "Onboarding",
    messages: 7,
    channel: "Email & In-App",
    target: "New users",
  },
  {
    name: "Feature Launch",
    category: "Adoption",
    messages: 3,
    channel: "Email & Push",
    target: "Active users",
  },
  {
    name: "Usage Tips",
    category: "Engagement",
    messages: 5,
    channel: "Email",
    target: "All users",
  },
  {
    name: "Subscription Renewal",
    category: "Retention",
    messages: 3,
    channel: "Email & SMS",
    target: "Renewing users",
  },
];

export default function SaasUseCases() {
  return (
    <section className="py-13 bg-gray-50 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 mb-4">
              <span className="text-sm font-semibold text-gray-700">
                USER JOURNEY WORKFLOWS
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Automated User Lifecycle Management
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Pre-built workflows for every stage of the user journey, from 
              signup to advocacy
            </p>
          </div>

          {/* Use Cases Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Key User Journey Flows
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
                      className="group block p-6 bg-white rounded-xl border border-gray-200 hover:border-purple-200 hover:shadow-md transition-all"
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-purple-50">
                          <div className="text-purple-600">
                            {useCase.icon}
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between">
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-purple-600">
                                {useCase.title}
                              </h4>
                              <p className="text-sm text-gray-600">
                                {useCase.description}
                              </p>
                            </div>
                            <span className="inline-flex items-center gap-1 text-xs font-medium text-purple-600 bg-purple-50 px-2 py-1 rounded-full">
                              {useCase.templates}
                            </span>
                          </div>
                          
                          <div className="space-y-2 mt-3">
                            {useCase.steps.map((step, i) => (
                              <div key={i} className="flex items-center gap-3">
                                <div className="h-6 w-6 rounded-full bg-purple-50 text-purple-600 text-xs font-semibold flex items-center justify-center">
                                  {i + 1}
                                </div>
                                <span className="text-sm text-gray-700">{step}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center text-sm text-purple-600 font-medium">
                        View workflow templates
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Template Library
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
                            <span className="text-xs font-medium text-purple-600 bg-purple-50 px-2 py-0.5 rounded">
                              {template.category}
                            </span>
                            <span className="text-xs text-gray-500">
                              {template.messages} messages
                            </span>
                          </div>
                          <h4 className="font-semibold text-gray-900 mb-1">
                            {template.name}
                          </h4>
                          <div className="text-sm text-gray-500">
                            Channel: {template.channel}
                          </div>
                        </div>
                        <button className="text-purple-600 hover:text-purple-700">
                          <FileText className="h-5 w-5" />
                        </button>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">
                          Target: {template.target}
                        </span>
                        <div className="flex items-center gap-2">
                          <button className="text-sm text-purple-600 hover:text-purple-700 font-medium">
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
            className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-200"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Start Engaging Users Today
                </h3>
                <p className="text-gray-600 mb-6">
                  Connect your SaaS platform and launch your first user engagement 
                  workflow in minutes. SDKs available for all major platforms.
                </p>
                <div className="flex items-center gap-6">
                  <Link
                    href="/docs/saas/quick-start"
                    className="inline-flex items-center gap-2 text-purple-600 font-semibold hover:text-purple-700"
                  >
                    <PlayCircle className="h-5 w-5" />
                    Watch Integration Tutorial
                  </Link>
                  <Link
                    href="/templates/saas"
                    className="inline-flex items-center gap-2 text-purple-600 font-semibold hover:text-purple-700"
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
                    SDK integration + first workflow
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