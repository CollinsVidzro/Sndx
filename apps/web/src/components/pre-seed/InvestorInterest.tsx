// components/pre-seed/InvestorInterest.tsx
"use client";
import { motion } from "framer-motion";
import { Mail, Building2, Handshake, TrendingUp } from "lucide-react";

export default function InvestorInterest() {
  const companies = [
    {
      name: "Large African Fintech",
      type: "Digital Payments",
      description:
        "A high-transaction fintech platform operating across multiple African markets.",
      interest:
        "Reliable messaging infrastructure for authentication and user notifications",
    },
    {
      name: "Regional E-commerce Platform",
      type: "E-commerce",
      description:
        "A consumer-facing commerce platform with significant daily customer interactions.",
      interest:
        "Transactional messaging and delivery notifications",
    },
    {
      name: "Emerging Financial Services Provider",
      type: "Fintech & APIs",
      description:
        "An API-driven financial services company exploring scalable communication tools.",
      interest:
        "Unified SMS and OTP APIs for product expansion",
    },
  ];

  const validationSignals = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Inbound Conversations",
      description:
        "Early discussions initiated by businesses seeking reliable local messaging infrastructure.",
    },
    {
      icon: <Building2 className="h-5 w-5" />,
      title: "Enterprise Use Cases",
      description:
        "Use cases identified around authentication, alerts, and transactional messaging.",
    },
    {
      icon: <Handshake className="h-5 w-5" />,
      title: "Integration Interest",
      description:
        "Exploration of API integrations as part of broader platform roadmaps.",
    },
    {
      icon: <TrendingUp className="h-5 w-5" />,
      title: "Market Validation",
      description:
        "Confirms demand for a reliable, Ghana-first communication infrastructure.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Market Validation & Early Interest
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Early signals from businesses exploring reliable messaging
              infrastructure in Ghana
            </p>
          </motion.div>

          {/* Company Interest Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {companies.map((company) => (
                <div
                  key={company.name}
                  className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg hover:border-blue-200 transition-all"
                >
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-bold text-gray-900">
                        {company.name}
                      </h3>
                      <span className="text-xs font-medium px-3 py-1 rounded-full bg-blue-50 text-blue-700">
                        {company.type}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-3">
                      {company.description}
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50">
                    <div className="text-sm font-medium text-blue-700 mb-1">
                      Area of Interest
                    </div>
                    <div className="text-blue-600 text-sm">
                      {company.interest}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Validation Signals */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {validationSignals.map((signal) => (
                <div
                  key={signal.title}
                  className="p-6 bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-2xl hover:shadow-md transition-all"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 mb-4">
                    <div className="text-white">
                      {signal.icon}
                    </div>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">
                    {signal.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {signal.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
