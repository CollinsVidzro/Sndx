// components/pre-seed/InvestmentTerms.tsx
"use client";
import { motion } from "framer-motion";
import { FileText, Percent, Target, TrendingUp } from "lucide-react";

export default function InvestmentTerms() {
  const terms = [
    {
      icon: <FileText className="h-6 w-6" />,
      term: "Instrument",
      value: "Post-money SAFE",
      description: "Simple Agreement for Future Equity",
      details: [
        "YC-style SAFE",
        "No interest",
        "No maturity date",
      ],
    },
    {
      icon: <Target className="h-6 w-6" />,
      term: "Valuation Cap",
      value: "$1.8M – $2.0M",
      description: "Post-money valuation cap",
      details: [
        "Early-stage appropriate",
        "Aligned with execution stage",
        "Protects early investors",
      ],
    },
    {
      icon: <Percent className="h-6 w-6" />,
      term: "Discount",
      value: "15% – 20%",
      description: "Discount applied at next priced round",
      details: [
        "Standard pre-seed range",
        "Rewards early risk",
        "Applies if better than cap",
      ],
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      term: "Target Dilution",
      value: "~13% – 15%",
      description: "Total dilution for this round",
      details: [
        "Founder-aligned",
        "Healthy cap table",
        "Room for seed round",
      ],
    },
  ];

  const advantages = [
    "Early participation in core infrastructure company",
    "Exposure to high-demand messaging market",
    "Clear conversion mechanics at priced round",
    "Optional pro-rata consideration for major checks",
    "Direct access to founder",
    "Regular investor updates",
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Investment Terms
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple, transparent terms designed for early-stage alignment
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Key Terms */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {terms.map((term, index) => (
                <motion.div
                  key={term.term}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-all"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50">
                      <div className="text-blue-600">{term.icon}</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-600">
                        {term.term}
                      </div>
                      <div className="text-2xl font-bold text-gray-900">
                        {term.value}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    {term.description}
                  </p>
                  <ul className="space-y-1">
                    {term.details.map((detail) => (
                      <li
                        key={detail}
                        className="text-sm text-gray-500"
                      >
                        • {detail}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Advantages & Timeline */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Investor Advantages */}
              <div className="bg-white rounded-2xl border border-gray-200 p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Why Participate
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {advantages.map((advantage) => (
                    <div
                      key={advantage}
                      className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-br from-blue-50 to-white"
                    >
                      <div className="w-2 h-2 rounded-full bg-blue-500" />
                      <span className="text-gray-700 text-sm">
                        {advantage}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Round Timeline */}
              <div className="bg-white rounded-2xl border border-gray-200 p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Round Timeline
                </h3>
                <div className="space-y-6">
                  {[
                    {
                      stage: "Open",
                      timeframe: "Now",
                      action: "Investor conversations in progress",
                    },
                    {
                      stage: "Soft Commitments",
                      timeframe: "Next 30–45 days",
                      action: "Targeting initial closes",
                    },
                    {
                      stage: "Final Close",
                      timeframe: "60–90 days",
                      action: "Completion of pre-seed round",
                    },
                  ].map((item) => (
                    <div
                      key={item.stage}
                      className="flex items-center justify-between pb-6 border-b border-gray-100 last:border-0 last:pb-0"
                    >
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-3 h-3 rounded-full bg-blue-500" />
                          <span className="font-semibold text-gray-900">
                            {item.stage}
                          </span>
                        </div>
                        <div className="text-gray-600 pl-5 text-sm">
                          {item.action}
                        </div>
                      </div>
                      <div className="px-4 py-2 rounded-full bg-blue-50 text-blue-700 font-medium text-sm">
                        {item.timeframe}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
