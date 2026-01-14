// components/use-cases/reminders/RemindersFeatures.tsx
"use client";
import { motion } from "framer-motion";
import { CheckCircle, Clock, Calendar, Zap, Users, Smartphone } from "lucide-react";

const features = [
  {
    icon: <Clock className="h-5 w-5" />,
    title: "Smart Timing",
    description: "AI-optimized reminder timing",
    benefits: ["Timezone-aware", "Optimal send times", "Avoid notification fatigue"],
  },
  {
    icon: <Calendar className="h-5 w-5" />,
    title: "Calendar Integration",
    description: "Sync with popular calendar apps",
    benefits: ["Google Calendar", "Outlook", "Apple Calendar", "iCal"],
  },
  {
    icon: <Zap className="h-5 w-5" />,
    title: "Automated Sequences",
    description: "Multi-message reminder sequences",
    benefits: ["Custom intervals", "Conditional logic", "Escalation paths"],
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: "Group Reminders",
    description: "Schedule reminders for teams",
    benefits: ["Team coordination", "Role-based scheduling", "Shared calendars"],
  },
  {
    icon: <Smartphone className="h-5 w-5" />,
    title: "Multi-Channel Delivery",
    description: "Reach users on their preferred channel",
    benefits: ["SMS", "Email", "Push", "WhatsApp", "Voice"],
  },
  {
    icon: <CheckCircle className="h-5 w-5" />,
    title: "Confirmation Tracking",
    description: "Track responses and confirmations",
    benefits: ["RSVP tracking", "Attendance confirmations", "Analytics dashboard"],
  },
];

export default function RemindersFeatures() {
  return (
    <section className="py-13 bg-gray-50 relative">
      {/* Grid Background */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(to right, #e5e7eb 1px, transparent 1px),
              linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 mb-4">
              <Zap className="h-4 w-4 text-gray-600" />
              <span className="text-sm font-semibold text-gray-700">
                SMART FEATURES
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Advanced Reminder Capabilities
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Go beyond basic reminders with intelligent features that ensure 
              your messages are delivered at the perfect time through the right 
              channels.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="p-6 bg-white border border-gray-200 rounded-xl hover:border-teal-200 hover:shadow-lg transition-all h-full">
                  <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-teal-50 group-hover:bg-teal-100 transition-colors">
                    <div className="text-teal-600">
                      {feature.icon}
                    </div>
                  </div>
                  
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {feature.description}
                  </p>
                  
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle className="h-3 w-3 text-emerald-500 flex-shrink-0" />
                        <span className="text-xs text-gray-500">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Timing Optimization */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-2xl p-8 border border-teal-200"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  AI-Optimized Timing Engine
                </h3>
                <p className="text-gray-600 mb-6">
                  Our intelligent system analyzes historical data to determine 
                  the perfect time to send each reminder for maximum effectiveness.
                </p>
                <div className="space-y-4">
                  {[
                    { factor: "User timezone", impact: "98% accuracy" },
                    { factor: "Historical open rates", impact: "42% improvement" },
                    { factor: "Industry best practices", impact: "Optimized schedules" },
                    { factor: "Individual preferences", impact: "Personalized timing" },
                  ].map((item) => (
                    <div key={item.factor} className="flex items-center justify-between">
                      <div className="text-gray-700">{item.factor}</div>
                      <div className="text-sm text-teal-600">{item.impact}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    95% Higher
                  </div>
                  <div className="text-gray-600">Response rate with optimized timing</div>
                </div>
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-sm text-gray-500">Standard timing</div>
                      <div className="text-sm font-medium text-gray-400">24% response</div>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-gray-300 w-1/4" />
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-sm text-gray-500">AI-optimized timing</div>
                      <div className="text-sm font-medium text-teal-600">47% response</div>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-teal-500 to-emerald-500 w-1/2" />
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-100">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">+95%</div>
                      <div className="text-sm text-gray-500">Increase in effectiveness</div>
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