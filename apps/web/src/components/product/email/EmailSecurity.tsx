// components/product/email/EmailSecurity.tsx
"use client";
import { motion } from "framer-motion";
import { 
  Shield, Lock, EyeOff, Key,
  Globe, Award, CheckCircle, FileCheck
} from "lucide-react";

const securityFeatures = [
  {
    icon: <Shield className="h-5 w-5" />,
    title: "DMARC/DKIM/SPF",
    description: "Email authentication protocols",
    certified: true
  },
  {
    icon: <Lock className="h-5 w-5" />,
    title: "TLS Encryption",
    description: "End-to-end encryption for all emails",
    certified: true
  },
  {
    icon: <EyeOff className="h-5 w-5" />,
    title: "Data Privacy",
    description: "GDPR and CCPA compliant",
    certified: true
  },
  {
    icon: <Key className="h-5 w-5" />,
    title: "API Security",
    description: "OAuth2 and API key authentication",
    certified: true
  },
  {
    icon: <Globe className="h-5 w-5" />,
    title: "Global Compliance",
    description: "International data protection",
    certified: true
  },
  {
    icon: <Award className="h-5 w-5" />,
    title: "SOC 2 Type II",
    description: "Enterprise security certification",
    certified: true
  },
  {
    icon: <FileCheck className="h-5 w-5" />,
    title: "Spam Prevention",
    description: "Advanced spam filter compliance",
    certified: true
  },
  {
    icon: <CheckCircle className="h-5 w-5" />,
    title: "Regular Audits",
    description: "Third-party security assessments",
    certified: true
  }
];

export default function EmailSecurity() {
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
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/20 px-4 py-2 mb-4">
            <Shield className="h-4 w-4 text-emerald-300" />
            <span className="text-sm font-semibold text-emerald-300">
              EMAIL SECURITY
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Secure Email Infrastructure
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Built with security-first principles to protect your emails and data
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
              <div className="p-6 bg-gray-800 border border-gray-700 rounded-xl hover:border-emerald-500 transition-all h-full">
                <div className="mb-4 flex items-center justify-between">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gray-700">
                    <div className="text-emerald-300">
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
              Certified and compliant with global email security standards
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[
                { name: "SOC 2", level: "Type II" },
                { name: "GDPR", level: "Compliant" },
                { name: "DMARC", level: "Enforced" },
                { name: "DKIM", level: "256-bit" },
                { name: "SPF", level: "Strict" }
              ].map((standard) => (
                <div
                  key={standard.name}
                  className="px-4 py-3 bg-gray-800 rounded-lg border border-gray-700"
                >
                  <div className="text-sm font-semibold text-white">{standard.name}</div>
                  <div className="text-xs text-emerald-300">{standard.level}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}