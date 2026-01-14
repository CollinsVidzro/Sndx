// components/use-cases/alerts/AlertsSecurity.tsx
"use client";
import { motion } from "framer-motion";
import { Shield, Lock, Key, EyeOff, Server, FileText } from "lucide-react";

const securityFeatures = [
  {
    icon: <Lock className="h-5 w-5" />,
    title: "End-to-End Encryption",
    description: "All data encrypted in transit and at rest",
    details: "AES-256 & TLS 1.3",
  },
  {
    icon: <Shield className="h-5 w-5" />,
    title: "GDPR & HIPAA Compliant",
    description: "Built for regulated industries",
    details: "Full compliance suite",
  },
  {
    icon: <Key className="h-5 w-5" />,
    title: "Access Controls",
    description: "Granular permission management",
    details: "RBAC & MFA support",
  },
  {
    icon: <EyeOff className="h-5 w-5" />,
    title: "Zero Data Retention",
    description: "Messages deleted after delivery",
    details: "Configurable retention",
  },
  {
    icon: <Server className="h-5 w-5" />,
    title: "SOC2 Type II Certified",
    description: "Enterprise security standards",
    details: "Annual audits",
  },
  {
    icon: <FileText className="h-5 w-5" />,
    title: "Audit Trails",
    description: "Complete delivery logging",
    details: "Immutable logs",
  },
];

export default function AlertsSecurity() {
  return (
    <section className="py-13 bg-white relative">
      {/* Grid Background */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-5"
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
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 mb-4">
              <Shield className="h-4 w-4 text-emerald-600" />
              <span className="text-sm font-semibold text-emerald-700">
                SECURITY & COMPLIANCE
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Bank-Grade Security for Sensitive Alerts
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              When you&apos;re sending sensitive information, security isn&apos;t optional. 
              That&apos;s why we built Sendexa with enterprise-grade security from the ground up.
            </p>
          </div>

          {/* Security Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {securityFeatures.map((feature, index) => (
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
                  <p className="text-sm text-gray-600 mb-3">
                    {feature.description}
                  </p>
                  
                  <div className="text-xs font-medium text-emerald-700 bg-emerald-50 inline-block px-2 py-1 rounded">
                    {feature.details}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Compliance Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl p-8 border border-emerald-200"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Comprehensive Compliance Coverage
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                { name: "GDPR", region: "EU", icon: "🇪🇺" },
                { name: "HIPAA", region: "Healthcare", icon: "🏥" },
                { name: "SOC2", region: "Security", icon: "🔒" },
                { name: "PCI DSS", region: "Payments", icon: "💳" },
                { name: "ISO 27001", region: "International", icon: "🌍" },
                { name: "CCPA", region: "California", icon: "🇺🇸" },
              ].map((standard) => (
                <div
                  key={standard.name}
                  className="text-center p-4 bg-white rounded-xl border border-gray-200"
                >
                  <div className="text-2xl mb-2">{standard.icon}</div>
                  <div className="font-semibold text-gray-900 mb-1">
                    {standard.name}
                  </div>
                  <div className="text-xs text-gray-500">{standard.region}</div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 pt-8 border-t border-emerald-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">
                    Security Audits
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      Quarterly penetration testing
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      Annual third-party audits
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      Continuous vulnerability scanning
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">
                    Data Protection
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      Data encrypted at rest (AES-256)
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      Data encrypted in transit (TLS 1.3)
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      Automatic key rotation
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}