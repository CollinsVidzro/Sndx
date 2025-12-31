// components/product/otp/OTPMethods.tsx
"use client";
import { motion } from "framer-motion";
import { 
  Smartphone, Mail, Phone, Key,
  MessageSquare, Shield, Zap, CheckCircle
} from "lucide-react";

const methods = [
  {
    icon: <Smartphone className="h-5 w-5" />,
    name: "SMS OTP",
    description: "Text message verification",
    features: ["Global delivery", "Instant delivery", "99.9% success rate"],
    bestFor: ["User login", "Account recovery", "Transactions"]
  },
  {
    icon: <Mail className="h-5 w-5" />,
    name: "Email OTP",
    description: "Email verification",
    features: ["HTML templates", "Branding control", "Delivery tracking"],
    bestFor: ["Account creation", "Email verification", "Notifications"]
  },
  {
    icon: <Phone className="h-5 w-5" />,
    name: "Voice OTP",
    description: "Phone call verification",
    features: ["Multi-language", "Text-to-speech", "Call recording"],
    bestFor: ["High-security access", "Elderly users", "Backup method"]
  },
  {
    icon: <Key className="h-5 w-5" />,
    name: "TOTP",
    description: "Time-based OTP",
    features: ["Google Authenticator", "Authy", "30-second expiry"],
    bestFor: ["App login", "VPN access", "Admin panels"]
  },
  {
    icon: <MessageSquare className="h-5 w-5" />,
    name: "WhatsApp OTP",
    description: "WhatsApp verification",
    features: ["Instant delivery", "Rich media", "Interactive"],
    bestFor: ["Mobile apps", "Young users", "International users"]
  },
  {
    icon: <Shield className="h-5 w-5" />,
    name: "Push OTP",
    description: "Push notification",
    features: ["No typing required", "Instant approval", "Biometric"],
    bestFor: ["Mobile banking", "High-value transactions", "Corporate access"]
  }
];

export default function OTPMethods() {
  return (
    <section className="py-16 md:py-24 relative">
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
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-violet-50 px-4 py-2 mb-4">
            <span className="text-sm font-semibold text-violet-700">
              VERIFICATION METHODS
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Multiple Verification Channels
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose the right verification method for your users and use case
          </p>
        </div>

        {/* Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {methods.map((method, index) => (
            <motion.div
              key={method.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="p-6 bg-white border border-gray-200 rounded-xl hover:border-violet-200 transition-all h-full">
                <div className="mb-4 flex items-center gap-3">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-violet-50">
                    <div className="text-violet-600">
                      {method.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {method.name}
                    </h3>
                    <p className="text-sm text-gray-600">{method.description}</p>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-4 space-y-2">
                  <div className="text-xs font-semibold text-gray-500 uppercase mb-2">Features</div>
                  {method.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-violet-500" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Best For */}
                <div className="pt-4 border-t border-gray-100">
                  <div className="text-xs font-semibold text-gray-500 uppercase mb-2">Best For</div>
                  <div className="flex flex-wrap gap-2">
                    {method.bestFor.map((use, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-gray-50 text-xs text-gray-600 rounded"
                      >
                        {use}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Multi-Method Support */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 p-8 bg-gradient-to-r from-violet-50 to-purple-50 rounded-2xl border border-violet-200"
        >
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Zap className="h-5 w-5 text-violet-600" />
                <span className="font-semibold text-violet-700">Multi-Method Support</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Fallback and Backup Methods
              </h3>
              <p className="text-gray-600">
                Implement multiple verification methods and automatically fall back if primary method fails. 
                Users can choose their preferred verification channel.
              </p>
            </div>
            <div className="hidden md:block">
              <div className="text-6xl font-bold text-violet-600 opacity-50">2FA</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}