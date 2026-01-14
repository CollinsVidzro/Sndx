// components/use-cases/engagement/EngagementStats.tsx
"use client";
import { motion } from "framer-motion";
import { TrendingUp, Users,  MessageSquare, Heart, Repeat } from "lucide-react";

export default function EngagementStats() {
  const stats = [
    {
      icon: <TrendingUp className="h-6 w-6" />,
      value: "40%",
      label: "Increase in retention",
      description: "with automated engagement",
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      value: "3.5x",
      label: "Higher engagement rates",
      description: "across all channels",
    },
    {
      icon: <Users className="h-6 w-6" />,
      value: "65%",
      label: "More active users",
      description: "with personalized messaging",
    },
    {
      icon: <Repeat className="h-6 w-6" />,
      value: "50%",
      label: "Lower churn rate",
      description: "through proactive communication",
    },
  ];

  return (
    <section className="py-13 bg-gradient-to-b from-white to-purple-50/30 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Transform Your Customer Relationships
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Brands using Sendexa for customer engagement see significant improvements 
              in key retention and loyalty metrics
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

          {/* Case Study Highlight */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 pt-12 border-t border-gray-200"
          >
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-200">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Case Study: SaaS Startup
                  </h3>
                  <p className="text-gray-600 mb-6">
                    A B2B SaaS company increased their user activation rate from 35% to 68% 
                    and reduced churn by 52% within 3 months of implementing Sendexa&apos;s 
                    engagement automation.
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">68%</div>
                      <div className="text-sm text-gray-500">Activation Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">52%</div>
                      <div className="text-sm text-gray-500">Churn Reduction</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">4.2x</div>
                      <div className="text-sm text-gray-500">LTV Increase</div>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500">Before Sendexa</div>
                      <div className="text-sm font-medium text-gray-400">35%</div>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-gray-300 w-1/3" />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500">After Sendexa</div>
                      <div className="text-sm font-medium text-purple-600">68%</div>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 w-2/3" />
                    </div>
                    
                    <div className="pt-4">
                      <div className="text-xs text-gray-500 mb-1">Time to results</div>
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-medium text-gray-900">3 months</div>
                        <Heart className="h-4 w-4 text-pink-500" />
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