// components/product/messaging/MessagingFeatures.tsx
"use client";
import { motion } from "framer-motion";
import { 
  MessageSquare, Send, Clock, BarChart,
  Settings, Globe, Lock, Users
} from "lucide-react";

const features = [
  {
    icon: <MessageSquare className="h-5 w-5" />,
    title: "Unified API",
    description: "Single API for all messaging channels",
    detail: "Send SMS, WhatsApp, email, and push from one endpoint"
  },
  {
    icon: <Send className="h-5 w-5" />,
    title: "Bulk Messaging",
    description: "Send millions of messages instantly",
    detail: "High-throughput delivery with intelligent queuing"
  },
  {
    icon: <Clock className="h-5 w-5" />,
    title: "Scheduled Messages",
    description: "Send at the perfect time",
    detail: "Schedule messages days, weeks, or months in advance"
  },
  {
    icon: <BarChart className="h-5 w-5" />,
    title: "Real-time Analytics",
    description: "Monitor delivery in real-time",
    detail: "Track opens, clicks, and conversions instantly"
  },
  {
    icon: <Settings className="h-5 w-5" />,
    title: "Smart Routing",
    description: "Automatic failover and retries",
    detail: "Intelligent routing ensures maximum deliverability"
  },
  {
    icon: <Globe className="h-5 w-5" />,
    title: "Global Infrastructure",
    description: "Worldwide coverage",
    detail: "Direct connections to carriers in 200+ countries"
  },
  {
    icon: <Lock className="h-5 w-5" />,
    title: "Enterprise Security",
    description: "Military-grade encryption",
    detail: "End-to-end encryption and SOC 2 compliance"
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: "Team Management",
    description: "Collaborate with your team",
    detail: "Role-based access control and audit logs"
  }
];

export default function MessagingFeatures() {
  return (
    <section className="py-16 md:py-24 bg-gray-50 relative">
      {/* Grid Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(to right, #9ca3af 1px, transparent 1px),
              linear-gradient(to bottom, #9ca3af 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 mb-4">
            <span className="text-sm font-semibold text-gray-700">
              CORE FEATURES
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Powerful Messaging Capabilities
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Everything you need to build, scale, and manage your messaging infrastructure
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
            >
              <div className="p-6 bg-white rounded-xl border border-gray-200 hover:border-cyan-200 transition-all h-full">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-cyan-50 mb-4">
                  <div className="text-cyan-600">
                    {feature.icon}
                  </div>
                </div>
                
                <h3 className="font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  {feature.description}
                </p>
                <p className="text-xs text-gray-500">
                  {feature.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Feature Highlights */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 pt-12 border-t border-gray-200"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-600 mb-2">99.99%</div>
              <div className="font-semibold text-gray-900 mb-1">Uptime SLA</div>
              <p className="text-sm text-gray-600">Guaranteed reliability</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-600 mb-2">&lt; 1s</div>
              <div className="font-semibold text-gray-900 mb-1">Average Delivery</div>
              <p className="text-sm text-gray-600">Sub-second latency</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-600 mb-2">200+</div>
              <div className="font-semibold text-gray-900 mb-1">Countries</div>
              <p className="text-sm text-gray-600">Global coverage</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}