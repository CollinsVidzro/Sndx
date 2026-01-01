// components/solutions/finance/FinanceStats.tsx
"use client";
import { motion } from "framer-motion";
import { Shield, Zap, Clock, Lock } from "lucide-react";

export default function FinanceStats() {
  const stats = [
    {
      icon: <Shield className="h-6 w-6" />,
      value: "99.99%",
      label: "Delivery reliability",
      description: "Bank-grade uptime SLA",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      value: "< 1s",
      label: "Average delivery time",
      description: "Real-time notifications",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      value: "24/7",
      label: "Monitoring",
      description: "Round-the-clock security",
    },
    {
      icon: <Lock className="h-6 w-6" />,
      value: "Zero",
      label: "Security breaches",
      description: "Enterprise-grade security",
    },
  ];

  return (
    <section className="py-13 bg-gradient-to-b from-white to-emerald-50/30 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Built for Financial Institutions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Trusted by banks, fintechs, and financial services to deliver 
              critical notifications with unmatched reliability and security
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
                <div className="p-6 bg-white border border-gray-200 rounded-xl hover:border-emerald-200 hover:shadow-lg transition-all text-center h-full">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-emerald-50 mb-4 group-hover:bg-emerald-100 transition-colors">
                    <div className="text-emerald-600">
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

          {/* Trusted by financial institutions */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 pt-12 border-t border-gray-200"
          >
            <p className="text-center text-gray-600 mb-8">
              Trusted by leading financial institutions
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: "BankTrust", type: "Commercial Bank" },
                { name: "FinTechPlus", type: "Digital Bank" },
                { name: "WealthSecure", type: "Investment Firm" },
                { name: "PayFlow", type: "Payment Processor" },
              ].map((company) => (
                <div
                  key={company.name}
                  className="p-4 bg-white rounded-xl border border-gray-200 text-center"
                >
                  <div className="font-semibold text-gray-900 mb-1">
                    {company.name}
                  </div>
                  <div className="text-sm text-gray-500">{company.type}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}