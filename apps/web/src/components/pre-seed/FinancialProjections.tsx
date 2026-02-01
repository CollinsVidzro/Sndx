// components/pre-seed/FinancialProjections.tsx
"use client";
import { motion } from "framer-motion";
import { DollarSign, Target, BarChart } from "lucide-react";

export default function FinancialProjections() {
  const revenueProjections = [
    {
      year: "Year 1",
      revenue: "Early Revenue",
      customers: "Initial Customers",
      growth: "Infrastructure Phase",
    },
    {
      year: "Year 2",
      revenue: "Growing Usage",
      customers: "Dozens of Businesses",
      growth: "Usage Expansion",
    },
    {
      year: "Year 3",
      revenue: "Meaningful ARR",
      customers: "Hundreds of Businesses",
      growth: "Market Validation",
    },
    {
      year: "Year 4",
      revenue: "Scaled Revenue",
      customers: "Larger Accounts",
      growth: "Growth Phase",
    },
  ];

  const keyMetrics = [
    {
      metric: "Customer Acquisition",
      current: "Founder-Led",
      target: "Repeatable Motion",
      improvement: "Sales clarity",
    },
    {
      metric: "Revenue Model",
      current: "Usage-Based",
      target: "Usage + Contracts",
      improvement: "Predictability",
    },
    {
      metric: "Gross Margin",
      current: "Early Stage",
      target: "Improving",
      improvement: "Operational leverage",
    },
    {
      metric: "Retention",
      current: "Unknown",
      target: "Strong",
      improvement: "Product reliability",
    },
  ];

  const assumptions = [
    {
      assumption: "Market Demand",
      details:
        "Businesses in Ghana require reliable SMS and OTP infrastructure for core operations.",
      confidence: "High",
    },
    {
      assumption: "Pricing Model",
      details:
        "Usage-based pricing aligned with message volume and reliability requirements.",
      confidence: "High",
    },
    {
      assumption: "Customer Growth",
      details:
        "Growth driven by developer adoption, referrals, and enterprise use cases.",
      confidence: "Medium",
    },
    {
      assumption: "Expansion Revenue",
      details:
        "Existing customers increase usage as reliability and features improve.",
      confidence: "Medium",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Financial Outlook
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Directional projections based on execution milestones, not hype
            </p>
          </motion.div>

          {/* Revenue Outlook */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Revenue Progression
                </h3>
                <p className="text-gray-600">
                  Expected evolution as infrastructure and adoption mature
                </p>
              </div>
              <div className="p-3 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50">
                <DollarSign className="h-6 w-6 text-blue-600" />
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-4 divide-x divide-gray-200">
                {revenueProjections.map((year) => (
                  <div key={year.year} className="p-8">
                    <div className="text-center space-y-4">
                      <div className="text-xl font-bold text-gray-900">
                        {year.year}
                      </div>

                      <div>
                        <div className="text-xs text-gray-600 mb-1">
                          Revenue Profile
                        </div>
                        <div className="text-lg font-semibold text-blue-600">
                          {year.revenue}
                        </div>
                      </div>

                      <div>
                        <div className="text-xs text-gray-600 mb-1">
                          Customer Base
                        </div>
                        <div className="text-sm font-medium text-gray-900">
                          {year.customers}
                        </div>
                      </div>

                      <div className="text-xs font-medium px-3 py-1 rounded-full bg-blue-50 text-blue-700 inline-block">
                        {year.growth}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Key Metrics */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl border border-gray-200 p-8"
            >
              <div className="flex items-center gap-3 mb-8">
                <BarChart className="h-6 w-6 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-900">
                  Financial Focus Areas
                </h3>
              </div>

              <div className="space-y-6">
                {keyMetrics.map((metric) => (
                  <div
                    key={metric.metric}
                    className="pb-6 border-b border-gray-100 last:border-0 last:pb-0"
                  >
                    <div className="font-semibold text-gray-900 mb-2">
                      {metric.metric}
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <div className="text-gray-600">
                        Current: {metric.current}
                      </div>
                      <div className="text-blue-600 font-medium">
                        Target: {metric.target}
                      </div>
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      Focus: {metric.improvement}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Assumptions */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl border border-gray-200 p-8"
            >
              <div className="flex items-center gap-3 mb-8">
                <Target className="h-6 w-6 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-900">
                  Key Assumptions
                </h3>
              </div>

              <div className="space-y-6">
                {assumptions.map((assumption) => (
                  <div key={assumption.assumption}>
                    <h4 className="font-bold text-gray-900 mb-1">
                      {assumption.assumption}
                    </h4>
                    <p className="text-gray-600 text-sm mb-2">
                      {assumption.details}
                    </p>
                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-blue-50 text-blue-700">
                      Confidence: {assumption.confidence}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Bottom Note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <div className="inline-block p-6 rounded-2xl bg-gradient-to-r from-blue-50 to-cyan-50">
              <div className="text-lg font-semibold text-gray-900 mb-2">
                Financial Discipline
              </div>
              <p className="text-gray-600 max-w-2xl">
                The focus of this pre-seed round is execution, infrastructure
                reliability, and learning — not aggressive financial promises.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
