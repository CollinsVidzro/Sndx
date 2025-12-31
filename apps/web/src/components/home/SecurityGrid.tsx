// SecurityGrid.tsx - Shows security features
"use client";
import { motion } from "framer-motion";
import { 
  Shield, Lock, EyeOff, Fingerprint,
  Key, Server, Globe, Award
} from "lucide-react";

const securityFeatures = [
  {
    icon: <Shield className="h-5 w-5" />,
    title: "SOC 2 Type II",
    description: "Enterprise security compliance",
    certified: true
  },
  {
    icon: <Lock className="h-5 w-5" />,
    title: "End-to-End Encryption",
    description: "Data encryption at rest and in transit",
    certified: true
  },
  {
    icon: <EyeOff className="h-5 w-5" />,
    title: "Zero Trust Architecture",
    description: "No implicit trust verification",
    certified: true
  },
  {
    icon: <Fingerprint className="h-5 w-5" />,
    title: "Biometric Authentication",
    description: "Advanced access controls",
    certified: true
  },
  {
    icon: <Key className="h-5 w-5" />,
    title: "Private Keys",
    description: "Customer-managed encryption keys",
    certified: false
  },
  {
    icon: <Server className="h-5 w-5" />,
    title: "Dedicated Infrastructure",
    description: "Isolated tenant environments",
    certified: false
  },
  {
    icon: <Globe className="h-5 w-5" />,
    title: "GDPR Compliant",
    description: "Global data protection standards",
    certified: true
  },
  {
    icon: <Award className="h-5 w-5" />,
    title: "Penetration Tested",
    description: "Regular security audits",
    certified: true
  }
];

export default function SecurityGrid() {
  return (
    <section className="py-13 relative">
      {/* Grid Background */}
      <div className="absolute inset-0 -z-10 bg-white">
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
          <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 mb-4">
            <span className="text-sm font-semibold text-gray-700">
              SECURITY & COMPLIANCE
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Enterprise-Grade Security
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Built with security-first principles to protect your data and applications
          </p>
        </div>

        {/* Security Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <div className="p-6 bg-white border border-gray-200 rounded-xl hover:border-cyan-200 transition-all h-full">
                <div className="mb-4 flex items-center justify-between">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gray-50">
                    <div className="text-gray-600">
                      {feature.icon}
                    </div>
                  </div>
                  {feature.certified && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-1">
                      <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      <span className="text-xs font-medium text-emerald-700">Certified</span>
                    </span>
                  )}
                </div>
                
                <h3 className="font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600">
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
          className="mt-16 pt-12 border-t border-gray-200"
        >
          <div className="text-center">
            <p className="text-gray-600 mb-8">
              Compliant with industry standards and regulations
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              {["SOC2", "GDPR", "HIPAA", "ISO27001", "PCI DSS"].map((standard) => (
                <div
                  key={standard}
                  className="px-6 py-3 bg-gray-50 rounded-lg border border-gray-200"
                >
                  <div className="text-sm font-semibold text-gray-700">{standard}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}