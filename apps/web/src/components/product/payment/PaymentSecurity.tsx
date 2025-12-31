// components/product/payment/PaymentSecurity.tsx
"use client";
import { motion } from "framer-motion";
import { 
  Shield, Lock, EyeOff, Fingerprint,
  Key, Server, Globe, Award,
  CheckCircle
} from "lucide-react";

const securityFeatures = [
  {
    icon: <Shield className="h-5 w-5" />,
    title: "PCI DSS Level 1",
    description: "Highest security certification for payment processing",
    certified: true
  },
  {
    icon: <Lock className="h-5 w-5" />,
    title: "End-to-End Encryption",
    description: "AES-256 encryption for all payment data",
    certified: true
  },
  {
    icon: <EyeOff className="h-5 w-5" />,
    title: "Tokenization",
    description: "Replace sensitive data with secure tokens",
    certified: true
  },
  {
    icon: <Fingerprint className="h-5 w-5" />,
    title: "3D Secure 2.0",
    description: "Advanced authentication protocol",
    certified: true
  },
  {
    icon: <Key className="h-5 w-5" />,
    title: "HSM Protection",
    description: "Hardware security modules for key management",
    certified: true
  },
  {
    icon: <Server className="h-5 w-5" />,
    title: "Dedicated Infrastructure",
    description: "Isolated payment processing environment",
    certified: false
  },
  {
    icon: <Globe className="h-5 w-5" />,
    title: "Global Compliance",
    description: "GDPR, PSD2, SOC 2, ISO 27001",
    certified: true
  },
  {
    icon: <Award className="h-5 w-5" />,
    title: "Regular Audits",
    description: "Third-party security assessments",
    certified: true
  }
];

export default function PaymentSecurity() {
  return (
    <section className="py-16 md:py-24 bg-gray-900 relative">
      {/* Grid Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(to right, #4b5563 1px, transparent 1px),
              linear-gradient(to bottom, #4b5563 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/20 px-4 py-2 mb-4">
            <Shield className="h-4 w-4 text-amber-300" />
            <span className="text-sm font-semibold text-amber-300">
              PAYMENT SECURITY
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Bank-Grade Security Infrastructure
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Built with the highest security standards to protect your payments and customer data
          </p>
        </div>

        {/* Security Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <div className="p-6 bg-gray-800 border border-gray-700 rounded-xl hover:border-amber-500 transition-all h-full">
                <div className="mb-4 flex items-center justify-between">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gray-700">
                    <div className="text-amber-300">
                      {feature.icon}
                    </div>
                  </div>
                  {feature.certified && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/20 px-2 py-1">
                      <CheckCircle className="h-3 w-3 text-emerald-400" />
                      <span className="text-xs font-medium text-emerald-300">Certified</span>
                    </span>
                  )}
                </div>
                
                <h3 className="font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-300">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Compliance Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 pt-12 border-t border-gray-700"
        >
          <div className="text-center">
            <p className="text-gray-300 mb-8">
              Certified and compliant with global payment security standards
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[
                { name: "PCI DSS", level: "Level 1" },
                { name: "SOC 2", level: "Type II" },
                { name: "ISO 27001", level: "Certified" },
                { name: "GDPR", level: "Compliant" },
                { name: "PSD2", level: "Ready" }
              ].map((standard) => (
                <div
                  key={standard.name}
                  className="px-4 py-3 bg-gray-800 rounded-lg border border-gray-700"
                >
                  <div className="text-sm font-semibold text-white">{standard.name}</div>
                  <div className="text-xs text-amber-300">{standard.level}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}