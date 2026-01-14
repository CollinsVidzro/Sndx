// components/use-cases/alerts/AlertsStats.tsx
"use client";
import { motion } from "framer-motion";
import { Zap, Shield, Clock, TrendingUp, CheckCircle, Globe } from "lucide-react";

export default function AlertsStats() {
  const stats = [
    {
      icon: <Zap className="h-6 w-6" />,
      value: "99.9%",
      label: "Delivery rate",
      description: "Enterprise-grade reliability",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      value: "< 1s",
      label: "Average delivery time",
      description: "Real-time notifications",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      value: "100%",
      label: "Security compliance",
      description: "GDPR, HIPAA, SOC2",
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      value: "92%",
      label: "Open rate",
      description: "Critical alerts engagement",
    },
  ];

  return (
    <section className="py-13 bg-gradient-to-b from-white to-emerald-50/30 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Built for Critical Communications
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              When reliability matters most, trust Sendexa for your most important 
              transactional notifications.
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

          {/* Industry Trust */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 pt-12 border-t border-gray-200"
          >
            <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl p-8 border border-emerald-200">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Trusted by Financial Institutions
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Leading banks and fintech companies rely on Sendexa for 
                    mission-critical transaction alerts, with zero failures 
                    in 3 years of operation.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-500" />
                      <span className="text-gray-700">Bank-level encryption</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-500" />
                      <span className="text-gray-700">Global infrastructure</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-500" />
                      <span className="text-gray-700">24/7 monitoring</span>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <div className="space-y-4">
                    <div>
                      <div className="text-sm text-gray-500 mb-2">Uptime (Last 12 months)</div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-emerald-500 to-blue-500 w-[99.97%]" />
                      </div>
                      <div className="flex justify-between text-sm mt-1">
                        <span className="text-gray-600">99.97%</span>
                        <span className="text-emerald-600">Industry: 99.5%</span>
                      </div>
                    </div>
                    
                    <div>
                      <div className="text-sm text-gray-500 mb-2">Delivery Speed</div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-emerald-500 to-blue-500 w-4/5" />
                      </div>
                      <div className="flex justify-between text-sm mt-1">
                        <span className="text-gray-600">&lt; 1 second</span>
                        <span className="text-emerald-600">3x faster</span>
                      </div>
                    </div>
                    
                    <div>
                      <div className="text-sm text-gray-500 mb-2">Customer Satisfaction</div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-emerald-500 to-blue-500 w-[98%]" />
                      </div>
                      <div className="flex justify-between text-sm mt-1">
                        <span className="text-gray-600">98% CSAT</span>
                        <Globe className="h-4 w-4 text-blue-500" />
                      </div>
                    </div>
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