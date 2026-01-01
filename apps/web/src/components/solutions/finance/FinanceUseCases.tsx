// components/solutions/finance/FinanceUseCases.tsx
"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, FileText, PlayCircle, Shield, CreditCard, Lock, AlertTriangle } from "lucide-react";

const useCases = [
  {
    title: "Transaction Alerts",
    description: "Real-time payment notifications",
    steps: [
      "Instant payment confirmation",
      "Fraud detection alerts",
      "Receipt delivery",
    ],
    templates: "6 templates",
    icon: <CreditCard className="h-5 w-5" />,
    link: "/templates/finance/transaction-alerts",
  },
  {
    title: "Security & Authentication",
    description: "Account security workflows",
    steps: [
      "2FA code delivery",
      "Login attempt alerts",
      "Device verification",
    ],
    templates: "5 templates",
    icon: <Lock className="h-5 w-5" />,
    link: "/templates/finance/security",
  },
  {
    title: "Account Updates",
    description: "Important account communications",
    steps: [
      "Balance notifications",
      "Statement ready alerts",
      "Policy change notices",
    ],
    templates: "4 templates",
    icon: <FileText className="h-5 w-5" />,
    link: "/templates/finance/account-updates",
  },
  {
    title: "Fraud Prevention",
    description: "Proactive fraud detection",
    steps: [
      "Suspicious activity alerts",
      "Verification requests",
      "Account lock notifications",
    ],
    templates: "3 templates",
    icon: <AlertTriangle className="h-5 w-5" />,
    link: "/templates/finance/fraud-prevention",
  },
];

const templates = [
  {
    name: "Payment Confirmation",
    category: "Transactions",
    compliance: "PCI DSS",
    channel: "SMS & Email",
    priority: "High",
  },
  {
    name: "OTP Delivery",
    category: "Security",
    compliance: "GDPR",
    channel: "SMS",
    priority: "Critical",
  },
  {
    name: "Monthly Statement",
    category: "Account",
    compliance: "SOC 2",
    channel: "Email",
    priority: "Medium",
  },
  {
    name: "Fraud Alert",
    category: "Security",
    compliance: "PCI DSS",
    channel: "SMS & Email",
    priority: "Critical",
  },
];

export default function FinanceUseCases() {
  return (
    <section className="py-13 bg-gray-50 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 mb-4">
              <span className="text-sm font-semibold text-gray-700">
                FINANCIAL WORKFLOWS
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pre-Built Financial Communication Workflows
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Compliance-ready templates and workflows designed specifically 
              for financial institutions
            </p>
          </div>

          {/* Use Cases Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Critical Financial Workflows
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
                      className="group block p-6 bg-white rounded-xl border border-gray-200 hover:border-emerald-200 hover:shadow-md transition-all"
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-emerald-50">
                          <div className="text-emerald-600">
                            {useCase.icon}
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between">
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-emerald-600">
                                {useCase.title}
                              </h4>
                              <p className="text-sm text-gray-600">
                                {useCase.description}
                              </p>
                            </div>
                            <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                              {useCase.templates}
                            </span>
                          </div>
                          
                          <div className="space-y-2 mt-3">
                            {useCase.steps.map((step, i) => (
                              <div key={i} className="flex items-center gap-3">
                                <div className="h-6 w-6 rounded-full bg-emerald-50 text-emerald-600 text-xs font-semibold flex items-center justify-center">
                                  {i + 1}
                                </div>
                                <span className="text-sm text-gray-700">{step}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center text-sm text-emerald-600 font-medium">
                        View compliance templates
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
                            <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
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
                          <Shield className="h-4 w-4 text-emerald-500" />
                          <span className="text-sm text-gray-600">
                            Compliance ready
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <button className="text-sm text-emerald-600 hover:text-emerald-700 font-medium">
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

          {/* Compliance Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-8 border border-emerald-200"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Built for Financial Compliance
                </h3>
                <p className="text-gray-600 mb-6">
                  All templates and workflows are pre-configured for major 
                  financial compliance standards including PCI DSS, GDPR, 
                  SOC 2, and more.
                </p>
                <div className="flex items-center gap-6">
                  <Link
                    href="/docs/finance/compliance"
                    className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700"
                  >
                    <PlayCircle className="h-5 w-5" />
                    Watch Compliance Guide
                  </Link>
                  <Link
                    href="/templates/finance/compliance"
                    className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700"
                  >
                    <FileText className="h-5 w-5" />
                    Browse Compliance Templates
                  </Link>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    100%
                  </div>
                  <div className="text-gray-600">Compliance ready</div>
                  <div className="mt-4 text-sm text-gray-500">
                    All templates meet regulatory standards
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