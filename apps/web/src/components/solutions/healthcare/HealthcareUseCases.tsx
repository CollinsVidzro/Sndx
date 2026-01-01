// components/solutions/healthcare/HealthcareUseCases.tsx
"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, FileText, PlayCircle, Calendar, Pill, Heart, Users } from "lucide-react";

const useCases = [
  {
    title: "Appointment Management",
    description: "Complete patient scheduling workflow",
    steps: [
      "Appointment confirmation",
      "Pre-appointment reminders",
      "Follow-up scheduling",
    ],
    templates: "5 templates",
    icon: <Calendar className="h-5 w-5" />,
    link: "/templates/healthcare/appointments",
  },
  {
    title: "Medication Adherence",
    description: "Improve medication compliance",
    steps: [
      "Medication reminders",
      "Refill notifications",
      "Adherence tracking",
    ],
    templates: "4 templates",
    icon: <Pill className="h-5 w-5" />,
    link: "/templates/healthcare/medication",
  },
  {
    title: "Lab Results Delivery",
    description: "Secure test result communication",
    steps: [
      "Results ready notification",
      "Portal access instructions",
      "Follow-up instructions",
    ],
    templates: "3 templates",
    icon: <FileText className="h-5 w-5" />,
    link: "/templates/healthcare/lab-results",
  },
  {
    title: "Chronic Care Management",
    description: "Ongoing patient engagement",
    steps: [
      "Regular check-in messages",
      "Symptom tracking",
      "Care team alerts",
    ],
    templates: "4 templates",
    icon: <Heart className="h-5 w-5" />,
    link: "/templates/healthcare/chronic-care",
  },
];

const templates = [
  {
    name: "Appointment Confirmation",
    category: "Scheduling",
    compliance: "HIPAA",
    channel: "SMS & Email",
    patients: "All patients",
  },
  {
    name: "Medication Reminder",
    category: "Adherence",
    compliance: "HIPAA",
    channel: "SMS",
    patients: "Prescribed patients",
  },
  {
    name: "Pre-visit Instructions",
    category: "Preparation",
    compliance: "HIPAA",
    channel: "Email",
    patients: "Scheduled patients",
  },
  {
    name: "Post-discharge Follow-up",
    category: "Continuity",
    compliance: "HIPAA",
    channel: "SMS & Email",
    patients: "Discharged patients",
  },
];

export default function HealthcareUseCases() {
  return (
    <section className="py-13 bg-gray-50 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 mb-4">
              <span className="text-sm font-semibold text-gray-700">
                HEALTHCARE WORKFLOWS
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              HIPAA-Compliant Patient Communication Workflows
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Pre-built, compliance-ready workflows designed specifically 
              for healthcare providers and patients
            </p>
          </div>

          {/* Use Cases Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Key Healthcare Workflows
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
                      className="group block p-6 bg-white rounded-xl border border-gray-200 hover:border-rose-200 hover:shadow-md transition-all"
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-rose-50">
                          <div className="text-rose-600">
                            {useCase.icon}
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between">
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-rose-600">
                                {useCase.title}
                              </h4>
                              <p className="text-sm text-gray-600">
                                {useCase.description}
                              </p>
                            </div>
                            <span className="inline-flex items-center gap-1 text-xs font-medium text-rose-600 bg-rose-50 px-2 py-1 rounded-full">
                              {useCase.templates}
                            </span>
                          </div>
                          
                          <div className="space-y-2 mt-3">
                            {useCase.steps.map((step, i) => (
                              <div key={i} className="flex items-center gap-3">
                                <div className="h-6 w-6 rounded-full bg-rose-50 text-rose-600 text-xs font-semibold flex items-center justify-center">
                                  {i + 1}
                                </div>
                                <span className="text-sm text-gray-700">{step}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center text-sm text-rose-600 font-medium">
                        View HIPAA-compliant templates
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Compliance-Ready Templates
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
                            <span className="text-xs font-medium text-rose-600 bg-rose-50 px-2 py-0.5 rounded">
                              {template.category}
                            </span>
                            <span className="text-xs text-gray-500">
                              {template.compliance}
                            </span>
                          </div>
                          <h4 className="font-semibold text-gray-900 mb-1">
                            {template.name}
                          </h4>
                          <div className="text-sm text-gray-500">
                            Channel: {template.channel}
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4 text-gray-400" />
                          <span className="text-xs text-gray-600">{template.patients}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <FileText className="h-4 w-4 text-rose-500" />
                          <span className="text-sm text-gray-600">
                            HIPAA compliant
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <button className="text-sm text-rose-600 hover:text-rose-700 font-medium">
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

          {/* HIPAA Compliance Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-rose-50 to-red-50 rounded-2xl p-8 border border-rose-200"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Built for Healthcare Compliance
                </h3>
                <p className="text-gray-600 mb-6">
                  All templates and workflows are pre-configured for HIPAA, 
                  HITECH, and other healthcare compliance requirements. 
                  Business Associate Agreements (BAAs) included.
                </p>
                <div className="flex items-center gap-6">
                  <Link
                    href="/docs/healthcare/compliance"
                    className="inline-flex items-center gap-2 text-rose-600 font-semibold hover:text-rose-700"
                  >
                    <PlayCircle className="h-5 w-5" />
                    Watch HIPAA Compliance Guide
                  </Link>
                  <Link
                    href="/templates/healthcare/compliance"
                    className="inline-flex items-center gap-2 text-rose-600 font-semibold hover:text-rose-700"
                  >
                    <FileText className="h-5 w-5" />
                    Request BAA
                  </Link>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    BAAs Included
                  </div>
                  <div className="text-gray-600">Free for all plans</div>
                  <div className="mt-4 text-sm text-gray-500">
                    Business Associate Agreements
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