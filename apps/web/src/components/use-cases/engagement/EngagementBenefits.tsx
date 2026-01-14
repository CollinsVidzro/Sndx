// components/use-cases/engagement/EngagementFlows.tsx
"use client";
import { motion } from "framer-motion";
import { CheckCircle, Users, Target, TrendingUp, Zap, Clock } from "lucide-react";

const flows = [
  {
    stage: "Onboarding",
    title: "Welcome & Activation",
    description: "Guide new users to their first success",
    steps: [
      "Day 0: Welcome message",
      "Day 1: Key feature introduction",
      "Day 3: First task reminder",
      "Day 7: Success check-in",
    ],
    icon: <Users className="h-5 w-5" />,
    color: "bg-purple-100 text-purple-600",
  },
  {
    stage: "Adoption",
    title: "Feature Discovery",
    description: "Help users find value in your product",
    steps: [
      "Personalized feature suggestions",
      "Usage tips based on behavior",
      "Advanced feature tutorials",
      "Power user invitations",
    ],
    icon: <Target className="h-5 w-5" />,
    color: "bg-blue-100 text-blue-600",
  },
  {
    stage: "Retention",
    title: "Ongoing Engagement",
    description: "Keep users active and satisfied",
    steps: [
      "Weekly usage reports",
      "Milestone celebrations",
      "Exclusive content delivery",
      "Community engagement prompts",
    ],
    icon: <TrendingUp className="h-5 w-5" />,
    color: "bg-emerald-100 text-emerald-600",
  },
  {
    stage: "Win-back",
    title: "Re-engagement",
    description: "Bring inactive users back",
    steps: [
      "Inactivity detection (30 days)",
      "Personalized win-back offer",
      "Feature update highlights",
      "Final re-engagement attempt",
    ],
    icon: <Zap className="h-5 w-5" />,
    color: "bg-amber-100 text-amber-600",
  },
];

export default function EngagementFlows() {
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
              <Clock className="h-4 w-4 text-gray-600" />
              <span className="text-sm font-semibold text-gray-700">
                AUTOMATION FLOWS
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Customer Journey Automation
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              End-to-end automation workflows that guide customers through every 
              stage of their relationship with your brand.
            </p>
          </div>

          {/* Flows Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {flows.map((flow, index) => (
              <motion.div
                key={flow.stage}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="p-6 bg-white border border-gray-200 rounded-xl hover:border-purple-200 hover:shadow-lg transition-all h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`rounded-lg p-2 ${flow.color}`}>
                      {flow.icon}
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        {flow.stage}
                      </div>
                      <h3 className="font-semibold text-gray-900">
                        {flow.title}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-6">
                    {flow.description}
                  </p>
                  
                  <div className="space-y-3">
                    {flow.steps.map((step, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{step}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500">
                        Average results:
                      </div>
                      <div className="text-sm font-semibold text-purple-600">
                        {index === 0 && "+68% activation"}
                        {index === 1 && "+45% feature use"}
                        {index === 2 && "-52% churn"}
                        {index === 3 && "28% recovery"}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Flow Visualization */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-200"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              End-to-End Automation Pipeline
            </h3>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transform -translate-y-1/2 hidden md:block" />
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-0 relative">
                {flows.map((flow, index) => (
                  <div key={flow.stage} className="relative z-10">
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white border-4 border-white mb-4 mx-auto shadow-lg">
                        <div className={`rounded-full p-3 ${flow.color.replace('bg-', 'bg-').replace(' text-', ' bg-opacity-20')}`}>
                          {flow.icon}
                        </div>
                      </div>
                      
                      <div className="text-sm font-semibold text-gray-900 mb-1">
                        {flow.stage}
                      </div>
                      <div className="text-xs text-gray-500 mb-3">
                        {flow.title}
                      </div>
                      
                      <div className="text-xs text-gray-600">
                        {index === 0 && "0-7 days"}
                        {index === 1 && "1-4 weeks"}
                        {index === 2 && "1-12 months"}
                        {index === 3 && "30+ days inactive"}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <div className="inline-flex items-center gap-2 text-purple-600 font-semibold">
                  <div className="h-2 w-2 rounded-full bg-purple-500 animate-pulse" />
                  Real-time customer journey tracking
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}