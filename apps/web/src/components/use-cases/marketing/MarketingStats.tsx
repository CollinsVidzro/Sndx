// components/use-cases/marketing/MarketingStats.tsx
"use client";
import { motion } from "framer-motion";
import { TrendingUp, Target, DollarSign, Users, Zap, BarChart } from "lucide-react";

export default function MarketingStats() {
  const stats = [
    {
      icon: <TrendingUp className="h-6 w-6" />,
      value: "3.5x",
      label: "Higher conversions",
      description: "vs. manual campaigns",
    },
    {
      icon: <Target className="h-6 w-6" />,
      value: "42%",
      label: "Average open rate",
      description: "across all campaigns",
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      value: "18:1",
      label: "Average ROI",
      description: "Return on investment",
    },
    {
      icon: <Users className="h-6 w-6" />,
      value: "65%",
      label: "Time saved",
      description: "with automation",
    },
  ];

  return (
    <section className="py-13 bg-gradient-to-b from-white to-amber-50/30 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Proven Marketing Results
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Businesses using Sendexa for marketing campaigns achieve significantly 
              better results across all key metrics.
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
                <div className="p-6 bg-white border border-gray-200 rounded-xl hover:border-amber-200 hover:shadow-lg transition-all text-center h-full">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-amber-50 mb-4 group-hover:bg-amber-100 transition-colors">
                    <div className="text-amber-600">
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

          {/* Campaign Results */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 pt-12 border-t border-gray-200"
          >
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-200">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Case Study: E-commerce Brand
                  </h3>
                  <p className="text-gray-600 mb-6">
                    An online retailer increased their email marketing revenue by 
                    320% after implementing Sendexa&apos;s automated campaign system.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Zap className="h-5 w-5 text-amber-500" />
                      <div>
                        <div className="font-medium text-gray-900">Email revenue</div>
                        <div className="text-sm text-gray-500">+320% increase</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Target className="h-5 w-5 text-amber-500" />
                      <div>
                        <div className="font-medium text-gray-900">Campaign output</div>
                        <div className="text-sm text-gray-500">4x more campaigns</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <BarChart className="h-5 w-5 text-amber-500" />
                      <div>
                        <div className="font-medium text-gray-900">Team efficiency</div>
                        <div className="text-sm text-gray-500">70% time saved</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-sm text-gray-500">Before Sendexa</div>
                        <div className="text-sm font-medium text-gray-400">$12.5K/month</div>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-gray-300 w-1/4" />
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-sm text-gray-500">After Sendexa</div>
                        <div className="text-sm font-medium text-amber-600">$52.5K/month</div>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-amber-500 to-orange-500 w-full" />
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-gray-100">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-2xl font-bold text-gray-900">+320%</div>
                          <div className="text-sm text-gray-500">Revenue growth</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-gray-900">3 months</div>
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