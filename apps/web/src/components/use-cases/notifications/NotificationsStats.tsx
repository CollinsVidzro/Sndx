// components/use-cases/notifications/NotificationsStats.tsx
"use client";
import { motion } from "framer-motion";
import { Shield, Server, Zap, Globe, CheckCircle, AlertTriangle } from "lucide-react";

export default function NotificationsStats() {
  const stats = [
    {
      icon: <Shield className="h-6 w-6" />,
      value: "99.99%",
      label: "Uptime SLA",
      description: "Enterprise reliability",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      value: "< 100ms",
      label: "Notification latency",
      description: "Real-time delivery",
    },
    {
      icon: <Server className="h-6 w-6" />,
      value: "100%",
      label: "Delivery guarantee",
      description: "Guaranteed critical alerts",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      value: "15+",
      label: "Global regions",
      description: "Multi-region redundancy",
    },
  ];

  return (
    <section className="py-13 bg-gradient-to-b from-white to-slate-50/30 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Built for Enterprise Reliability
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              When system uptime depends on your notifications, trust Sendexa&apos;s 
              enterprise-grade infrastructure.
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
                <div className="p-6 bg-white border border-gray-200 rounded-xl hover:border-slate-200 hover:shadow-lg transition-all text-center h-full">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-slate-50 mb-4 group-hover:bg-slate-100 transition-colors">
                    <div className="text-slate-600">
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

          {/* Reliability Case Study */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 pt-12 border-t border-gray-200"
          >
            <div className="bg-gradient-to-br from-slate-50 to-gray-50 rounded-2xl p-8 border border-slate-200">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Enterprise Case Study
                  </h3>
                  <p className="text-gray-600 mb-6">
                    A Fortune 500 company reduced their system incident response 
                    time by 85% and eliminated missed critical alerts after 
                    implementing Sendexa.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-500" />
                      <div>
                        <div className="font-medium text-gray-900">Incident response time</div>
                        <div className="text-sm text-gray-500">Reduced from 15min to 2min</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <AlertTriangle className="h-5 w-5 text-amber-500" />
                      <div>
                        <div className="font-medium text-gray-900">Critical alerts missed</div>
                        <div className="text-sm text-gray-500">0 in 2 years of operation</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Shield className="h-5 w-5 text-slate-500" />
                      <div>
                        <div className="font-medium text-gray-900">System uptime improvement</div>
                        <div className="text-sm text-gray-500">+0.3% to 99.99%</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-sm text-gray-500">Before Sendexa</div>
                        <div className="text-sm font-medium text-gray-400">99.7%</div>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-gray-300 w-[99.7%]" />
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        26.3 hours downtime/year
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-sm text-gray-500">After Sendexa</div>
                        <div className="text-sm font-medium text-slate-600">99.99%</div>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-slate-500 to-gray-500 w-full" />
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        52 minutes downtime/year
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-gray-100">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-2xl font-bold text-gray-900">-85%</div>
                          <div className="text-sm text-gray-500">Response time reduction</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-gray-900">$2.1M</div>
                          <div className="text-sm text-gray-500">Annual savings</div>
                        </div>
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