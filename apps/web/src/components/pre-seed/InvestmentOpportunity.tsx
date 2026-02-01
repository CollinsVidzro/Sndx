// components/pre-seed/InvestmentOpportunity.tsx
"use client";
import { motion } from "framer-motion";
import { Globe, Zap, Building2, TrendingUp } from "lucide-react";

export default function InvestmentOpportunity() {
  const opportunities = [
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Large, Underserved Market",
      description:
        "Businesses in Ghana and across Africa rely heavily on messaging for authentication, notifications, and payments, yet reliable local infrastructure remains limited.",
      metrics: ["Ghana-first", "SMEs & Fintechs", "High SMS Demand"],
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Strong Early Execution",
      description:
        "Sendexa has already designed core APIs, built internal dashboards, and begun development of its SMPP-based messaging infrastructure.",
      metrics: ["APIs Designed", "Dashboards Built", "SMPP In Progress"],
    },
    {
      icon: <Building2 className="h-6 w-6" />,
      title: "Enterprise-Ready Approach",
      description:
        "The platform is being built with compliance, delivery reporting, and reliability in mind from day one, aligning with the needs of serious businesses.",
      metrics: ["Compliance-Aware", "Delivery Tracking", "Scalable Design"],
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Clear Path to Growth",
      description:
        "This pre-seed round is focused on completing infrastructure, securing carrier integrations, and reaching early revenue milestones.",
      metrics: ["Infrastructure First", "Carrier Integrations", "Early Revenue"],
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
              Why Invest in Sendexa?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sendexa is building reliable messaging infrastructure for
              businesses in Ghana, starting with SMS, OTP, and voice
              communications.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {opportunities.map((opp, index) => (
              <motion.div
                key={opp.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-xl hover:border-blue-200 transition-all duration-300 h-full">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50">
                      <div className="text-blue-600">{opp.icon}</div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {opp.title}
                      </h3>
                      <p className="text-gray-600 mb-6">
                        {opp.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {opp.metrics.map((metric) => (
                      <span
                        key={metric}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-700"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
