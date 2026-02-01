// components/pre-seed/MarketTraction.tsx
"use client";
import { motion } from "framer-motion";
import { TrendingUp, Users, Globe, Zap, Target, BarChart } from "lucide-react";

export default function MarketTraction() {
  const tractionMetrics = [
    {
      icon: <TrendingUp className="h-6 w-6" />,
      metric: "Early Stage",
      label: "Product Progress",
      growth: "Consistent Weekly Iteration",
      description:
        "Core APIs, dashboards, and internal tools have been designed and are under active development.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      metric: "Founder-Led",
      label: "Customer Discovery",
      growth: "Direct Market Learning",
      description:
        "Problem discovery driven by direct conversations with developers, startups, and SMEs in Ghana.",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      metric: "Infrastructure-First",
      label: "Platform Focus",
      growth: "Built for Reliability",
      description:
        "Architecture designed around delivery tracking, failover, and compliance from day one.",
    },
    {
      icon: <Target className="h-6 w-6" />,
      metric: "Clear Milestones",
      label: "Next 12–18 Months",
      growth: "Execution-Driven",
      description:
        "Focused roadmap covering carrier integrations, early revenue, and operational readiness.",
    },
  ];

  const marketSize = [
    {
      category: "Business Messaging (SMS & OTP)",
      size: "Large",
      cagr: "High Demand",
    },
    {
      category: "Authentication & Notifications",
      size: "Growing",
      cagr: "Fintech-Driven",
    },
    {
      category: "Developer APIs",
      size: "Expanding",
      cagr: "API-First Adoption",
    },
  ];

  const competitiveAdvantages = [
    {
      title: "Local-First Infrastructure",
      description:
        "Designed specifically for Ghanaian carriers, regulations, and delivery realities.",
      strength: "Strong Moat",
    },
    {
      title: "Infrastructure Mindset",
      description:
        "Built as a long-term platform, not a thin reseller layer.",
      strength: "Durability",
    },
    {
      title: "Developer-Focused Execution",
      description:
        "Clean APIs, clear documentation, and predictable behavior for engineering teams.",
      strength: "Adoption Driver",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Market Traction & Opportunity
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Early execution in a high-demand market for reliable business messaging infrastructure
            </p>
          </motion.div>

          {/* Traction Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {tractionMetrics.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-xl hover:border-blue-200 transition-all duration-300 h-full">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50">
                        <div className="text-blue-600">{item.icon}</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-gray-900">
                          {item.metric}
                        </div>
                        <div className="text-sm font-medium text-gray-600">
                          {item.label}
                        </div>
                      </div>
                    </div>
                    <div className="mb-3">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-700">
                        {item.growth}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Market Size */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl border border-gray-200 p-8"
            >
              <div className="flex items-center gap-3 mb-8">
                <BarChart className="h-6 w-6 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-900">
                  Market Opportunity
                </h3>
              </div>

              <div className="space-y-6">
                {marketSize.map((market) => (
                  <div
                    key={market.category}
                    className="pb-6 border-b border-gray-100 last:border-0 last:pb-0"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="font-semibold text-gray-900">
                        {market.category}
                      </div>
                      <div className="text-lg font-bold text-blue-600">
                        {market.size}
                      </div>
                    </div>
                    <div className="text-sm text-gray-600">
                      Demand driven by fintech, startups, and SMEs
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50">
                <div className="text-lg font-semibold text-gray-900 mb-1">
                  Market Reality
                </div>
                <div className="text-sm text-gray-700">
                  Messaging and authentication are critical infrastructure for
                  modern digital businesses in Ghana and beyond.
                </div>
              </div>
            </motion.div>

            {/* Competitive Advantages */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl border border-gray-200 p-8"
            >
              <div className="flex items-center gap-3 mb-8">
                <Globe className="h-6 w-6 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-900">
                  Competitive Advantages
                </h3>
              </div>

              <div className="space-y-6">
                {competitiveAdvantages.map((advantage, index) => (
                  <div key={advantage.title}>
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
                        <div className="text-white font-bold text-sm">
                          {index + 1}
                        </div>
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-bold text-gray-900">
                            {advantage.title}
                          </h4>
                          <span className="text-xs font-medium px-2 py-1 rounded-full bg-blue-50 text-blue-700">
                            {advantage.strength}
                          </span>
                        </div>
                        <p className="text-gray-600">
                          {advantage.description}
                        </p>
                      </div>
                    </div>
                    {index < competitiveAdvantages.length - 1 && (
                      <div className="mt-6 pt-6 border-t border-gray-100" />
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 rounded-xl border border-gray-200">
                <div className="text-sm font-medium text-gray-600 mb-2">
                  Market Position
                </div>
                <div className="text-sm text-gray-700">
                  Early-stage infrastructure platform with a clear focus on
                  reliability, compliance, and long-term scale.
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
