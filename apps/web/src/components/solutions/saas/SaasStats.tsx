// components/solutions/saas/SaasStats.tsx
"use client";
import { motion } from "framer-motion";
import { Users, TrendingUp, Zap, Target } from "lucide-react";

export default function SaasStats() {
  const stats = [
    {
      icon: <Users className="h-6 w-6" />,
      value: "45%",
      label: "Higher activation rates",
      description: "with onboarding automation",
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      value: "35%",
      label: "Increase in feature adoption",
      description: "through targeted messaging",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      value: "60%",
      label: "Reduced churn",
      description: "with proactive engagement",
    },
    {
      icon: <Target className="h-6 w-6" />,
      value: "3x",
      label: "Faster time to value",
      description: "for new users",
    },
  ];

  return (
    <section className="py-13 bg-gradient-to-b from-white to-purple-50/30 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Transform Your User Engagement
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Leading SaaS companies use Sendexa to drive user activation, 
              adoption, and retention at scale
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="p-6 bg-white border border-gray-200 rounded-xl hover:border-purple-200 hover:shadow-lg transition-all text-center h-full">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-purple-50 mb-4 group-hover:bg-purple-100 transition-colors">
                    <div className="text-purple-600">
                      {stat.icon}
                    </div>
                  </div>
                  
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    {stat.value}
                  </div>
                  
                  <div className="font-semibold text-gray-900 mb-1">
                    {stat.label}
                  </div>
                  
                  <div className="text-sm text-gray-500">
                    {stat.description}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Trusted by SaaS companies */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 pt-12 border-t border-gray-200"
          >
            <p className="text-center text-gray-600 mb-8">
              Trusted by innovative SaaS companies
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: "StartupScale", metrics: "50K+ users" },
                { name: "CloudTech", metrics: "Enterprise SaaS" },
                { name: "ProductivityPro", metrics: "Rapid growth" },
                { name: "DataInsights", metrics: "B2B platform" },
              ].map((company) => (
                <div
                  key={company.name}
                  className="p-4 bg-white rounded-xl border border-gray-200 text-center"
                >
                  <div className="font-semibold text-gray-900 mb-1">
                    {company.name}
                  </div>
                  <div className="text-sm text-gray-500">{company.metrics}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}