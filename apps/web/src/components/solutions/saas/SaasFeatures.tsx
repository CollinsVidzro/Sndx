// components/solutions/saas/SaasFeatures.tsx
"use client";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import {
  Users,
  Bell,
  Target,
  BarChart,
  MessageSquare,
  Shield,
  Zap,
  CreditCard,
} from "lucide-react";

const features = [
  {
    icon: <Users className="h-5 w-5" />,
    title: "User Onboarding",
    description: "Automated welcome and setup sequences",
    benefits: ["Reduce time to value", "Increase activation", "Personalized guidance"],
  },
  {
    icon: <Bell className="h-5 w-5" />,
    title: "Feature Adoption",
    description: "Promote new and underused features",
    benefits: ["Increase usage", "Drive expansion", "User education"],
  },
  {
    icon: <Target className="h-5 w-5" />,
    title: "User Retention",
    description: "Proactive engagement to reduce churn",
    benefits: ["Identify at-risk users", "Personalized outreach", "Win-back campaigns"],
  },
  {
    icon: <BarChart className="h-5 w-5" />,
    title: "Usage Analytics",
    description: "Track engagement and behavior",
    benefits: ["Real-time insights", "Behavioral triggers", "Performance tracking"],
  },
  {
    icon: <MessageSquare className="h-5 w-5" />,
    title: "In-App Messaging",
    description: "Contextual messages within your app",
    benefits: ["Higher engagement", "Timely guidance", "Native experience"],
  },
  {
    icon: <Shield className="h-5 w-5" />,
    title: "Security Notifications",
    description: "Account security and access alerts",
    benefits: ["Build trust", "Prevent fraud", "Compliance support"],
  },
  {
    icon: <Zap className="h-5 w-5" />,
    title: "Automated Workflows",
    description: "Trigger-based communication",
    benefits: ["Save time", "Scale personalization", "Consistent experience"],
  },
  {
    icon: <CreditCard className="h-5 w-5" />,
    title: "Billing & Subscriptions",
    description: "Payment and renewal notifications",
    benefits: ["Reduce failed payments", "Upsell opportunities", "Transparent billing"],
  },
];

export default function SaasFeatures() {
  return (
    <section className="py-13 relative">
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
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-50/10 to-transparent" />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-purple-50 px-4 py-2 mb-4">
              <span className="text-sm font-semibold text-purple-700">
                SAAS FEATURES
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete SaaS Engagement Platform
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Drive user growth and retention with intelligent communication 
              across the entire customer lifecycle
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="p-6 bg-white border border-gray-200 rounded-xl hover:border-purple-200 hover:shadow-lg transition-all h-full">
                  <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-purple-50 group-hover:bg-purple-100 transition-colors">
                    <div className="text-purple-600">
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

          {/* Feature Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-200">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Lifecycle Automation Engine
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Automatically engage users at every stage of their journey 
                    with behavior-based triggers and personalized messaging.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "User behavior tracking",
                      "Predictive analytics",
                      "Automated segmentation",
                      "Personalized journey mapping",
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="h-2 w-2 rounded-full bg-purple-500" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500">User Activation Rate</div>
                      <div className="font-semibold text-purple-600">+45%</div>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 w-3/4" />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500">Feature Adoption</div>
                      <div className="font-semibold text-purple-600">+35%</div>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 w-4/5" />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500">Monthly Retention</div>
                      <div className="font-semibold text-purple-600">+28%</div>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 w-5/6" />
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