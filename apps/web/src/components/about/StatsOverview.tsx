// components/about/StatsOverview.tsx
"use client";
import { motion } from "framer-motion";
import { Globe, Building, Shield, Zap } from "lucide-react";

export default function StatsOverview() {
  const stats = [
    {
      icon: <Globe className="h-6 w-6" />,
      value: "200+",
      label: "Countries Supported",
      description: "Global reach with local compliance"
    },
    {
      icon: <Building className="h-6 w-6" />,
      value: "10,000+",
      label: "Businesses Trust Us",
      description: "From startups to enterprises"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      value: "99.99%",
      label: "Platform Uptime",
      description: "Enterprise-grade reliability"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      value: "1B+",
      label: "Monthly Transactions",
      description: "Processing at scale"
    }
  ];

  return (
    <section className="py-13 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg hover:border-cyan-200 transition-all duration-300 h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-cyan-50 to-blue-50">
                      <div className="text-cyan-600">
                        {stat.icon}
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl md:text-3xl font-bold text-gray-900">
                        {stat.value}
                      </div>
                      <div className="text-sm font-medium text-gray-900">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    {stat.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}