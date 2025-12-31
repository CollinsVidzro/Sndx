// components/product/otp/OTPFeatures.tsx
"use client";
import { motion } from "framer-motion";
import { 
  Shield, Lock, Clock, CheckCircle,
  Zap, Smartphone, Mail, Key
} from "lucide-react";

const features = [
  {
    icon: <Shield className="h-5 w-5" />,
    title: "Multi-Factor Auth",
    description: "Multiple verification methods",
    detail: "SMS, email, voice, and authenticator apps"
  },
  {
    icon: <Clock className="h-5 w-5" />,
    title: "Time-Based OTP",
    description: "TOTP support",
    detail: "30-second codes that auto-expire"
  },
  {
    icon: <Lock className="h-5 w-5" />,
    title: "Counter-Based OTP",
    description: "HOTP support",
    detail: "Event-based codes for special operations"
  },
  {
    icon: <Zap className="h-5 w-5" />,
    title: "Instant Delivery",
    description: "Sub-second latency",
    detail: "Global delivery network"
  },
  {
    icon: <Smartphone className="h-5 w-5" />,
    title: "Mobile First",
    description: "Mobile-optimized",
    detail: "Responsive delivery methods"
  },
  {
    icon: <Mail className="h-5 w-5" />,
    title: "Email OTP",
    description: "Email verification",
    detail: "HTML templates and branding"
  },
  {
    icon: <Key className="h-5 w-5" />,
    title: "API Keys",
    description: "Secure API access",
    detail: "Rotating keys and permissions"
  },
  {
    icon: <CheckCircle className="h-5 w-5" />,
    title: "Compliance",
    description: "Enterprise ready",
    detail: "GDPR, SOC 2, HIPAA compliant"
  }
];

export default function OTPFeatures() {
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
            Advanced Authentication Features
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Everything you need to implement secure authentication in your applications
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
              <div className="p-6 bg-white rounded-xl border border-gray-200 hover:border-violet-200 transition-all h-full">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-violet-50 mb-4">
                  <div className="text-violet-600">
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

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 pt-12 border-t border-gray-200"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-violet-600 mb-2">99.9%</div>
              <div className="font-semibold text-gray-900 mb-1">Delivery Rate</div>
              <p className="text-sm text-gray-600">Guaranteed OTP delivery</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-violet-600 mb-2">&lt; 1s</div>
              <div className="font-semibold text-gray-900 mb-1">Verification Time</div>
              <p className="text-sm text-gray-600">Instant validation</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-violet-600 mb-2">0</div>
              <div className="font-semibold text-gray-900 mb-1">Security Breaches</div>
              <p className="text-sm text-gray-600">Zero successful attacks</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}