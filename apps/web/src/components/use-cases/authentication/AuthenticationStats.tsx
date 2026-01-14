// components/use-cases/authentication/AuthenticationStats.tsx
"use client";
import { motion } from "framer-motion";
import { Key, Shield, Zap, Lock, CheckCircle, Smartphone } from "lucide-react";

export default function AuthenticationStats() {
  const stats = [
    {
      icon: <Key className="h-6 w-6" />,
      value: "99.9%",
      label: "OTP delivery rate",
      description: "Enterprise reliability",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      value: "< 5s",
      label: "Average delivery time",
      description: "Instant verification",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      value: "0%",
      label: "Security breaches",
      description: "Zero in 3 years",
    },
    {
      icon: <Lock className="h-6 w-6" />,
      value: "98%",
      label: "User satisfaction",
      description: "Seamless experience",
    },
  ];

  return (
    <section className="py-13 bg-gradient-to-b from-white to-indigo-50/30 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted for Secure Authentication
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              When security and reliability matter most, leading companies choose 
              Sendexa for their authentication flows.
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
                <div className="p-6 bg-white border border-gray-200 rounded-xl hover:border-indigo-200 hover:shadow-lg transition-all text-center h-full">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-indigo-50 mb-4 group-hover:bg-indigo-100 transition-colors">
                    <div className="text-indigo-600">
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

          {/* Security Case Study */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 pt-12 border-t border-gray-200"
          >
            <div className="bg-gradient-to-br from-indigo-50 to-violet-50 rounded-2xl p-8 border border-indigo-200">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Financial Institution Case Study
                  </h3>
                  <p className="text-gray-600 mb-6">
                    A major bank reduced authentication-related support tickets by 
                    92% and improved login success rates by 35% after implementing 
                    Sendexa&apos;s OTP system.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-500" />
                      <div>
                        <div className="font-medium text-gray-900">Support tickets reduced</div>
                        <div className="text-sm text-gray-500">From 1,200 to 96/month</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Shield className="h-5 w-5 text-indigo-500" />
                      <div>
                        <div className="font-medium text-gray-900">Login success rate</div>
                        <div className="text-sm text-gray-500">Increased from 82% to 97%</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Smartphone className="h-5 w-5 text-indigo-500" />
                      <div>
                        <div className="font-medium text-gray-900">User satisfaction</div>
                        <div className="text-sm text-gray-500">94% positive feedback</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-sm text-gray-500">Before Sendexa</div>
                        <div className="text-sm font-medium text-gray-400">82%</div>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-gray-300 w-4/5" />
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        Login success rate
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-sm text-gray-500">After Sendexa</div>
                        <div className="text-sm font-medium text-indigo-600">97%</div>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-indigo-500 to-violet-500 w-[97%]" />
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        Login success rate
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-gray-100">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-2xl font-bold text-gray-900">-92%</div>
                          <div className="text-sm text-gray-500">Support tickets</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-gray-900">+35%</div>
                          <div className="text-sm text-gray-500">Login success</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-gray-900">3mo</div>
                          <div className="text-sm text-gray-500">Implementation</div>
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