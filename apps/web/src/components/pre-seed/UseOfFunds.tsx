// components/pre-seed/UseOfFunds.tsx
"use client";
import { motion } from "framer-motion";
import { Server, Shield, Users, TrendingUp } from "lucide-react";

export default function UseOfFunds() {
  const allocations = [
    {
      icon: <Server className="h-6 w-6" />,
      category: "Infrastructure & Engineering",
      amount: "~40%",
      percentage: "Primary Focus",
      description:
        "Building and hardening Sendexa’s core SMS, OTP, and voice infrastructure.",
      details: [
        "SMPP server development and optimization",
        "Message routing, delivery reports, and monitoring",
        "Infrastructure redundancy and failover",
      ],
    },
    {
      icon: <Shield className="h-6 w-6" />,
      category: "Compliance & Operations",
      amount: "~20%",
      percentage: "Foundational",
      description:
        "Ensuring Sendexa operates reliably and responsibly within local regulations.",
      details: [
        "Sender ID registration workflows",
        "Carrier and regulatory requirements",
        "Internal controls and audit readiness",
      ],
    },
    {
      icon: <Users className="h-6 w-6" />,
      category: "Team & Founder Runway",
      amount: "~25%",
      percentage: "Execution Support",
      description:
        "Keeping the core team focused on execution while selectively adding support.",
      details: [
        "Founder runway",
        "Contract or part-time engineering support",
        "Operational and customer support capacity",
      ],
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      category: "Go-To-Market",
      amount: "~15%",
      percentage: "Early Growth",
      description:
        "Reaching initial customers and validating demand without heavy spend.",
      details: [
        "Developer documentation and onboarding",
        "Early sales and partnerships",
        "Customer feedback and iteration",
      ],
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Use of Funds
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Capital-efficient allocation to reach infrastructure readiness
              and early revenue milestones
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Allocation Cards */}
            <div className="space-y-6">
              {allocations.map((allocation, index) => (
                <motion.div
                  key={allocation.category}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50">
                        <div className="text-blue-600">
                          {allocation.icon}
                        </div>
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">
                          {allocation.category}
                        </h3>
                        <div className="text-sm font-medium text-blue-600">
                          {allocation.amount} • {allocation.percentage}
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    {allocation.description}
                  </p>
                  <ul className="space-y-2">
                    {allocation.details.map((detail) => (
                      <li
                        key={detail}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Milestones Timeline */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl border border-gray-200 p-8"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-8">
                12–18 Month Execution Milestones
              </h3>

              <div className="space-y-6">
                {[
                  {
                    timeframe: "Months 1–3",
                    milestone: "Infrastructure Foundation",
                    tasks: [
                      "Complete core SMPP infrastructure",
                      "Finalize SMS and OTP APIs",
                      "Internal monitoring and logging",
                    ],
                  },
                  {
                    timeframe: "Months 4–9",
                    milestone: "Carrier Integrations & Early Customers",
                    tasks: [
                      "Integrate initial carrier routes",
                      "Onboard early business users",
                      "Refine delivery reporting and reliability",
                    ],
                  },
                  {
                    timeframe: "Months 10–15",
                    milestone: "Early Revenue & Stability",
                    tasks: [
                      "Achieve consistent message throughput",
                      "Improve operational tooling",
                      "Strengthen compliance processes",
                    ],
                  },
                  {
                    timeframe: "Months 16–18",
                    milestone: "Seed Readiness",
                    tasks: [
                      "Demonstrate product reliability",
                      "Show early revenue traction",
                      "Prepare for seed fundraising",
                    ],
                  },
                ].map((milestone) => (
                  <div key={milestone.timeframe} className="relative pl-8">
                    <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-blue-500" />
                    <div className="border-l-2 border-blue-200 pl-6 pb-6">
                      <span className="font-semibold text-blue-700 block mb-2">
                        {milestone.timeframe}
                      </span>
                      <h4 className="font-bold text-gray-900 mb-3">
                        {milestone.milestone}
                      </h4>
                      <ul className="space-y-1">
                        {milestone.tasks.map((task) => (
                          <li key={task} className="text-sm text-gray-600">
                            • {task}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
