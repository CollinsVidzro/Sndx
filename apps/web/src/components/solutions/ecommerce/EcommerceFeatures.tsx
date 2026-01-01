// components/solutions/ecommerce/EcommerceFeatures.tsx
"use client";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import {
  ShoppingCart,
  Package,
  Truck,
  Star,
  MessageSquare,
  CreditCard,
  Bell,
  Shield,
} from "lucide-react";

const features = [
  {
    icon: <ShoppingCart className="h-5 w-5" />,
    title: "Cart Abandonment Recovery",
    description: "Automated reminders to bring customers back",
    benefits: ["Recover lost sales", "Increase conversion rates", "Personalized timing"],
  },
  {
    icon: <Package className="h-5 w-5" />,
    title: "Order Notifications",
    description: "Real-time updates throughout the customer journey",
    benefits: ["Order confirmation", "Shipping updates", "Delivery alerts"],
  },
  {
    icon: <Truck className="h-5 w-5" />,
    title: "Shipping Updates",
    description: "Automated delivery tracking and notifications",
    benefits: ["Reduce support tickets", "Improve CX", "Real-time tracking"],
  },
  {
    icon: <Star className="h-5 w-5" />,
    title: "Review Requests",
    description: "Automatically request customer reviews",
    benefits: ["Increase reviews", "Build social proof", "Gather feedback"],
  },
  {
    icon: <MessageSquare className="h-5 w-5" />,
    title: "Customer Support",
    description: "Automated responses for common questions",
    benefits: ["24/7 support", "Reduce response time", "Scale support"],
  },
  {
    icon: <CreditCard className="h-5 w-5" />,
    title: "Payment Reminders",
    description: "Gentle reminders for pending payments",
    benefits: ["Reduce failed payments", "Improve cash flow", "Automated follow-ups"],
  },
  {
    icon: <Bell className="h-5 w-5" />,
    title: "Promotional Campaigns",
    description: "Targeted marketing messages",
    benefits: ["Personalized offers", "Seasonal campaigns", "Cross-sell opportunities"],
  },
  {
    icon: <Shield className="h-5 w-5" />,
    title: "Security Alerts",
    description: "Fraud detection and account security",
    benefits: ["Protect customers", "Prevent fraud", "Build trust"],
  },
];

export default function EcommerceFeatures() {
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
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/10 to-transparent" />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 mb-4">
              <span className="text-sm font-semibold text-blue-700">
                E-COMMERCE FEATURES
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete E-commerce Communication Suite
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need to automate and personalize customer communication 
              throughout the entire shopping journey
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
                <div className="p-6 bg-white border border-gray-200 rounded-xl hover:border-blue-200 hover:shadow-lg transition-all h-full">
                  <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-50 group-hover:bg-blue-100 transition-colors">
                    <div className="text-blue-600">
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
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-200">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Smart Automation Engine
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Our AI-powered automation engine analyzes customer behavior to 
                    send the right message at the perfect time, maximizing engagement 
                    and conversions.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Behavior-based triggers",
                      "Personalized timing algorithms",
                      "A/B testing for optimization",
                      "Real-time analytics dashboard",
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="h-2 w-2 rounded-full bg-blue-500" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500">Cart Recovery Rate</div>
                      <div className="font-semibold text-blue-600">+42%</div>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 w-3/4" />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500">Customer Satisfaction</div>
                      <div className="font-semibold text-blue-600">+35%</div>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 w-4/5" />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500">Support Ticket Reduction</div>
                      <div className="font-semibold text-blue-600">-60%</div>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 w-2/3" />
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