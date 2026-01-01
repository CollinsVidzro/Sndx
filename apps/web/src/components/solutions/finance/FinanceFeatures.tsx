// components/solutions/finance/FinanceFeatures.tsx
"use client";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import {
  CreditCard,
  Shield,
  Lock,
  Bell,
  FileText,
  TrendingUp,
  AlertTriangle,
  MessageSquare,
} from "lucide-react";

const features = [
  {
    icon: <CreditCard className="h-5 w-5" />,
    title: "Payment Notifications",
    description: "Real-time transaction alerts",
    benefits: ["Instant confirmation", "Fraud detection", "Receipt delivery"],
  },
  {
    icon: <Shield className="h-5 w-5" />,
    title: "Security Alerts",
    description: "Account security notifications",
    benefits: ["Login alerts", "Device management", "Suspicious activity"],
  },
  {
    icon: <Lock className="h-5 w-5" />,
    title: "Authentication",
    description: "Secure 2FA and OTP delivery",
    benefits: ["Bank-grade security", "Multi-channel", "Instant delivery"],
  },
  {
    icon: <Bell className="h-5 w-5" />,
    title: "Account Updates",
    description: "Important account notifications",
    benefits: ["Balance alerts", "Statement ready", "Policy changes"],
  },
  {
    icon: <FileText className="h-5 w-5" />,
    title: "Compliance Communications",
    description: "Regulatory and compliance messages",
    benefits: ["Audit trails", "Legal compliance", "Record keeping"],
  },
  {
    icon: <TrendingUp className="h-5 w-5" />,
    title: "Investment Alerts",
    description: "Market and portfolio updates",
    benefits: ["Price alerts", "Portfolio updates", "Market news"],
  },
  {
    icon: <AlertTriangle className="h-5 w-5" />,
    title: "Fraud Prevention",
    description: "Proactive fraud detection alerts",
    benefits: ["Real-time alerts", "Quick action", "Loss prevention"],
  },
  {
    icon: <MessageSquare className="h-5 w-5" />,
    title: "Customer Support",
    description: "Secure support communications",
    benefits: ["Encrypted chat", "Document sharing", "Case updates"],
  },
];

export default function FinanceFeatures() {
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
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-50/10 to-transparent" />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 mb-4">
              <span className="text-sm font-semibold text-emerald-700">
                FINANCIAL FEATURES
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Enterprise-Grade Financial Communications
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Secure, reliable, and compliant communication solutions built 
              specifically for the financial industry
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

          {/* Security Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-8 border border-emerald-200">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Bank-Grade Security Infrastructure
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Our platform is built with multiple layers of security, 
                    encryption, and compliance controls to meet the highest 
                    financial industry standards.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "End-to-end encryption",
                      "SOC 2 Type II certified",
                      "GDPR & CCPA compliant",
                      "Regular security audits",
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="h-2 w-2 rounded-full bg-emerald-500" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500">Uptime SLA</div>
                      <div className="font-semibold text-emerald-600">99.99%</div>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-emerald-500 to-green-500 w-full" />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500">Delivery Success</div>
                      <div className="font-semibold text-emerald-600">99.95%</div>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-emerald-500 to-green-500 w-5/6" />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500">Average Latency</div>
                      <div className="font-semibold text-emerald-600">&lt; 500ms</div>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-emerald-500 to-green-500 w-1/4" />
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