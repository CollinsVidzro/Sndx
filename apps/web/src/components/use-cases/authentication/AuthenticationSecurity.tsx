// components/use-cases/authentication/AuthenticationSecurity.tsx
"use client";
import { motion } from "framer-motion";
import { CheckCircle, Shield, Lock, Key, Smartphone, AlertTriangle } from "lucide-react";

const securityFeatures = [
  {
    icon: <Shield className="h-5 w-5" />,
    title: "End-to-End Encryption",
    description: "All OTPs encrypted in transit and at rest",
    benefits: ["AES-256 encryption", "TLS 1.3", "Zero-knowledge proofs"],
  },
  {
    icon: <Lock className="h-5 w-5" />,
    title: "Rate Limiting",
    description: "Prevent brute force attacks",
    benefits: ["IP-based limiting", "User-based throttling", "Geographic controls"],
  },
  {
    icon: <Key className="h-5 w-5" />,
    title: "Code Security",
    description: "Secure OTP generation and validation",
    benefits: ["Cryptographically random", "Expiry enforcement", "One-time use only"],
  },
  {
    icon: <Smartphone className="h-5 w-5" />,
    title: "Device Binding",
    description: "Bind codes to specific devices",
    benefits: ["Device fingerprinting", "Session management", "Revocation capability"],
  },
  {
    icon: <AlertTriangle className="h-5 w-5" />,
    title: "Fraud Detection",
    description: "AI-powered anomaly detection",
    benefits: ["Behavior analysis", "Pattern recognition", "Real-time alerts"],
  },
  {
    icon: <CheckCircle className="h-5 w-5" />,
    title: "Compliance Ready",
    description: "Built for regulated industries",
    benefits: ["GDPR compliance", "HIPAA ready", "SOC2 certified"],
  },
];

export default function AuthenticationSecurity() {
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
              <Shield className="h-4 w-4 text-gray-600" />
              <span className="text-sm font-semibold text-gray-700">
                ENTERPRISE SECURITY
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Bank-Grade Security for Authentication
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              When protecting user accounts, nothing less than enterprise-grade 
              security will do. That&apos;s why we built Sendexa with security first.
            </p>
          </div>

          {/* Features Grid */}
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
                <div className="p-6 bg-white border border-gray-200 rounded-xl hover:border-indigo-200 hover:shadow-lg transition-all h-full">
                  <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-indigo-50 group-hover:bg-indigo-100 transition-colors">
                    <div className="text-indigo-600">
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

          {/* Security Architecture */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-indigo-50 to-violet-50 rounded-2xl p-8 border border-indigo-200"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Multi-Layer Security Architecture
                </h3>
                <p className="text-gray-600 mb-6">
                  Our defense-in-depth approach ensures your authentication flows 
                  are protected at every layer, from network to application.
                </p>
                <div className="space-y-4">
                  {[
                    { layer: "Network Security", protection: "DDoS protection, WAF" },
                    { layer: "Transport Security", protection: "TLS 1.3, perfect forward secrecy" },
                    { layer: "Application Security", protection: "Input validation, CSRF tokens" },
                    { layer: "Data Security", protection: "Encryption at rest, key rotation" },
                  ].map((layer) => (
                    <div key={layer.layer} className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-indigo-100 text-indigo-600 text-xs font-bold flex items-center justify-center mt-0.5">
                        ✓
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{layer.layer}</div>
                        <div className="text-sm text-gray-500">{layer.protection}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    0
                  </div>
                  <div className="text-gray-600">Security breaches in 3 years</div>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>Attack attempts blocked</span>
                      <span>2.4M/month</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-indigo-500 w-4/5" />
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>False positive rate</span>
                      <span>0.02%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-violet-500 w-1/5" />
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>Response time to threats</span>
                      <span>&lt; 30 seconds</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-indigo-500 to-violet-500 w-1/3" />
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