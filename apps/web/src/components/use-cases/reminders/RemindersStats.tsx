// components/use-cases/reminders/RemindersStats.tsx
"use client";
import { motion } from "framer-motion";
import { Clock, Calendar, TrendingUp, Users, DollarSign, CheckCircle } from "lucide-react";

export default function RemindersStats() {
  const stats = [
    {
      icon: <Clock className="h-6 w-6" />,
      value: "95%",
      label: "Reduction in no-shows",
      description: "with automated reminders",
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      value: "40%",
      label: "Increase in attendance",
      description: "for appointments & events",
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      value: "65%",
      label: "Time saved",
      description: "on manual follow-ups",
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      value: "3x",
      label: "Higher revenue",
      description: "from improved scheduling",
    },
  ];

  return (
    <section className="py-13 bg-gradient-to-b from-white to-teal-50/30 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Transform Your Scheduling Efficiency
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Businesses using Sendexa for reminders and scheduling see dramatic 
              improvements in attendance, efficiency, and revenue.
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
                <div className="p-6 bg-white border border-gray-200 rounded-xl hover:border-teal-200 hover:shadow-lg transition-all text-center h-full">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-teal-50 mb-4 group-hover:bg-teal-100 transition-colors">
                    <div className="text-teal-600">
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

          {/* Healthcare Case Study */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 pt-12 border-t border-gray-200"
          >
            <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-2xl p-8 border border-teal-200">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Healthcare Clinic Case Study
                  </h3>
                  <p className="text-gray-600 mb-6">
                    A medical clinic reduced their no-show rate from 18% to 2% 
                    and increased monthly revenue by $45,000 with Sendexa&apos;s 
                    automated reminder system.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-500" />
                      <div>
                        <div className="font-medium text-gray-900">No-show rate reduction</div>
                        <div className="text-sm text-gray-500">From 18% to 2%</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="h-5 w-5 text-teal-500" />
                      <div>
                        <div className="font-medium text-gray-900">Staff time saved</div>
                        <div className="text-sm text-gray-500">120 hours/month</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <DollarSign className="h-5 w-5 text-teal-500" />
                      <div>
                        <div className="font-medium text-gray-900">Monthly revenue increase</div>
                        <div className="text-sm text-gray-500">+$45,000</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-sm text-gray-500">Before Sendexa</div>
                        <div className="text-sm font-medium text-gray-400">18%</div>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-gray-300 w-[18%]" />
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        Average no-show rate
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-sm text-gray-500">After Sendexa</div>
                        <div className="text-sm font-medium text-teal-600">2%</div>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-teal-500 to-emerald-500 w-[2%]" />
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        Average no-show rate
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-gray-100">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-2xl font-bold text-gray-900">-89%</div>
                          <div className="text-sm text-gray-500">No-show reduction</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-gray-900">+$540K</div>
                          <div className="text-sm text-gray-500">Annual revenue increase</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-gray-900">30 days</div>
                          <div className="text-sm text-gray-500">Time to results</div>
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