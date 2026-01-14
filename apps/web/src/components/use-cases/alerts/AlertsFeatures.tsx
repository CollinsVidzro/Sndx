// components/use-cases/alerts/AlertsFeatures.tsx
"use client";
import { motion } from "framer-motion";
import { CheckCircle, Zap, Shield, Clock, Globe, Bell, AlertTriangle, Mail } from "lucide-react";

const features = [
  {
    icon: <Zap className="h-5 w-5" />,
    title: "Real-Time Delivery",
    description: "Instant notification delivery with sub-second latency",
    benefits: ["< 1s average delivery", "Priority routing", "Global CDN"],
  },
  {
    icon: <Shield className="h-5 w-5" />,
    title: "Enterprise Security",
    description: "Bank-grade security for sensitive communications",
    benefits: ["End-to-end encryption", "GDPR compliant", "SOC2 certified"],
  },
  {
    icon: <Globe className="h-5 w-5" />,
    title: "Global Infrastructure",
    description: "Reliable delivery across 190+ countries",
    benefits: ["99.9% uptime SLA", "Multi-region failover", "Local compliance"],
  },
  {
    icon: <Bell className="h-5 w-5" />,
    title: "Smart Routing",
    description: "Intelligent failover across channels",
    benefits: ["Multi-channel fallback", "Retry logic", "Delivery optimization"],
  },
  {
    icon: <AlertTriangle className="h-5 w-5" />,
    title: "Priority Handling",
    description: "Critical alerts get priority treatment",
    benefits: ["Priority queues", "24/7 monitoring", "Escalation paths"],
  },
  {
    icon: <Clock className="h-5 w-5" />,
    title: "Delivery Analytics",
    description: "Comprehensive tracking and reporting",
    benefits: ["Real-time tracking", "Delivery confirmations", "Audit trails"],
  },
];

export default function AlertsFeatures() {
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
                ENTERPRISE FEATURES
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Built for Mission-Critical Communications
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Enterprise-grade features designed specifically for high-stakes 
              transactional notifications where reliability is non-negotiable.
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
                <div className="p-6 bg-white border border-gray-200 rounded-xl hover:border-emerald-200 hover:shadow-lg transition-all h-full">
                  <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-emerald-50 group-hover:bg-emerald-100 transition-colors">
                    <div className="text-emerald-600">
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
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl p-8 border border-emerald-200"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Multi-Channel Fallback System
                </h3>
                <p className="text-gray-600 mb-6">
                  Our intelligent routing system automatically switches channels 
                  to ensure critical alerts are delivered, even if primary channels 
                  fail.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-emerald-100 flex items-center justify-center">
                      <Mail className="h-4 w-4 text-emerald-600" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Primary: Email</div>
                      <div className="text-sm text-gray-500">Instant delivery attempt</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                      <Bell className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Fallback: SMS</div>
                      <div className="text-sm text-gray-500">If email fails (30s)</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-amber-100 flex items-center justify-center">
                      <AlertTriangle className="h-4 w-4 text-amber-600" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Emergency: Push</div>
                      <div className="text-sm text-gray-500">Final attempt (60s)</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    99.97%
                  </div>
                  <div className="text-gray-600">Overall delivery success</div>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>Email success rate</span>
                      <span>98.5%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-500 w-[98.5%]" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>SMS success rate</span>
                      <span>99.2%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500 w-[99.2%]" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>With fallback</span>
                      <span>99.97%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-emerald-500 to-blue-500 w-full" />
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