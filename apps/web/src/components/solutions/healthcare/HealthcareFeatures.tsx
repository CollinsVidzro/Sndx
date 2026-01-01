// components/solutions/healthcare/HealthcareFeatures.tsx
"use client";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import {
  Heart,
  Calendar,
  Pill,
  FileText,
  Users,
  Shield,
  Bell,
  MessageSquare,
} from "lucide-react";

const features = [
  {
    icon: <Calendar className="h-5 w-5" />,
    title: "Appointment Management",
    description: "Automated scheduling and reminders",
    benefits: ["Reduce no-shows", "Optimize schedules", "Improve adherence"],
  },
  {
    icon: <Pill className="h-5 w-5" />,
    title: "Medication Reminders",
    description: "Timely medication adherence support",
    benefits: ["Improve compliance", "Prevent missed doses", "Track adherence"],
  },
  {
    icon: <FileText className="h-5 w-5" />,
    title: "Lab & Test Results",
    description: "Secure delivery of medical results",
    benefits: ["Quick delivery", "HIPAA compliant", "Reduce calls"],
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: "Patient Education",
    description: "Personalized health information",
    benefits: ["Improve knowledge", "Preventive care", "Better outcomes"],
  },
  {
    icon: <Shield className="h-5 w-5" />,
    title: "HIPAA Compliance",
    description: "Full healthcare compliance suite",
    benefits: ["BAAs available", "Audit trails", "Data encryption"],
  },
  {
    icon: <Bell className="h-5 w-5" />,
    title: "Care Coordination",
    description: "Team communication and alerts",
    benefits: ["Improve workflows", "Reduce errors", "Team coordination"],
  },
  {
    icon: <Heart className="h-5 w-5" />,
    title: "Chronic Care Management",
    description: "Ongoing patient engagement",
    benefits: ["Regular check-ins", "Symptom tracking", "Early intervention"],
  },
  {
    icon: <MessageSquare className="h-5 w-5" />,
    title: "Patient Support",
    description: "24/7 automated support",
    benefits: ["Reduce wait times", "Answer FAQs", "Route inquiries"],
  },
];

export default function HealthcareFeatures() {
  return (
    <section className="py-13 relative">
      {/* Grid Background */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(to right, #e5e7eb 1px, transparent 1px),
              linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-rose-50/10 to-transparent" />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-rose-50 px-4 py-2 mb-4">
              <span className="text-sm font-semibold text-rose-700">
                HEALTHCARE FEATURES
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Healthcare Communication Platform
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Secure, HIPAA-compliant communication solutions designed specifically 
              for healthcare providers and patients
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="p-6 bg-white border border-gray-200 rounded-xl hover:border-rose-200 hover:shadow-lg transition-all h-full">
                  <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-rose-50 group-hover:bg-rose-100 transition-colors">
                    <div className="text-rose-600">
                      {feature.icon}
                    </div>
                  </div>
                  
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {feature.description}
                  </p>
                  
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle className="h-3 w-3 text-emerald-500 flex-shrink-0" />
                        <span className="text-xs text-gray-500">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* HIPAA Compliance Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <div className="bg-gradient-to-br from-rose-50 to-red-50 rounded-2xl p-8 border border-rose-200">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    HIPAA-Compliant by Design
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Our platform is built from the ground up to meet HIPAA 
                    requirements, with built-in safeguards, encryption, and 
                    Business Associate Agreements (BAAs) available.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "End-to-end encryption (AES-256)",
                      "Signed BAAs available",
                      "Complete audit trails",
                      "Role-based access controls",
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="h-2 w-2 rounded-full bg-rose-500" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500">Data Encryption</div>
                      <div className="font-semibold text-rose-600">AES-256</div>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-rose-500 to-red-500 w-full" />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500">Audit Trail Retention</div>
                      <div className="font-semibold text-rose-600">7 years</div>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-rose-500 to-red-500 w-full" />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500">No-show Reduction</div>
                      <div className="font-semibold text-rose-600">40%</div>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-rose-500 to-red-500 w-2/3" />
                    </div>
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