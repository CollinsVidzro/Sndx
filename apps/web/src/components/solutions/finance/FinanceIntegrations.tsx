// components/solutions/finance/FinanceIntegrations.tsx
"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Zap, Shield, Cpu, GitBranch } from "lucide-react";

const integrations = [
  {
    name: "Plaid",
    logo: "🏦",
    description: "Banking data integration",
    status: "Live",
    color: "from-blue-500 to-indigo-600",
  },
  {
    name: "Stripe",
    logo: "💳",
    description: "Payment processing",
    status: "Live",
    color: "from-purple-500 to-pink-600",
  },
  {
    name: "Adyen",
    logo: "🌍",
    description: "Global payments",
    status: "Live",
    color: "from-emerald-500 to-green-600",
  },
  {
    name: "Checkout.com",
    logo: "✓",
    description: "Payment gateway",
    status: "Live",
    color: "from-blue-500 to-cyan-600",
  },
  {
    name: "Fiserv",
    logo: "🏛️",
    description: "Banking systems",
    status: "Beta",
    color: "from-gray-500 to-gray-600",
  },
  {
    name: "FICO",
    logo: "📊",
    description: "Risk analytics",
    status: "Live",
    color: "from-orange-500 to-amber-600",
  },
];

const apis = [
  {
    name: "REST API",
    description: "Full API access with bank-grade security",
    icon: <Cpu className="h-5 w-5" />,
    link: "/docs/api/finance",
    docs: "/docs/api/finance/authentication",
  },
  {
    name: "Webhooks",
    description: "Real-time event notifications",
    icon: <Zap className="h-5 w-5" />,
    link: "/docs/webhooks/finance",
    docs: "/docs/webhooks/finance/security",
  },
  {
    name: "SDKs",
    description: "Client libraries for all languages",
    icon: <GitBranch className="h-5 w-5" />,
    link: "/docs/sdks/finance",
    docs: "/docs/sdks/finance/getting-started",
  },
  {
    name: "Compliance API",
    description: "Compliance validation endpoints",
    icon: <Shield className="h-5 w-5" />,
    link: "/docs/api/compliance",
    docs: "/docs/api/compliance/validation",
  },
];

export default function FinanceIntegrations() {
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
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 mb-4">
              <Shield className="h-4 w-4 text-emerald-600" />
              <span className="text-sm font-semibold text-emerald-700">
                FINANCIAL INTEGRATIONS
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Secure Financial Ecosystem Integration
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Integrate with leading financial platforms and services with 
              built-in security and compliance controls
            </p>
          </div>

          {/* Integrations Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {integrations.map((integration, index) => (
              <motion.div
                key={integration.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="p-4 bg-white rounded-xl border border-gray-200 hover:border-emerald-200 hover:shadow-md transition-all text-center h-full">
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${integration.color} mb-3`}
                  >
                    <div className="text-white text-xl">{integration.logo}</div>
                  </div>
                  
                  <div className="font-semibold text-gray-900 mb-1">
                    {integration.name}
                  </div>
                  
                  <div className="text-xs text-gray-500 mb-2">
                    {integration.description}
                  </div>
                  
                  <span className={`inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full ${
                    integration.status === "Live"
                      ? "bg-emerald-50 text-emerald-700"
                      : "bg-amber-50 text-amber-700"
                  }`}>
                    <div className={`h-1.5 w-1.5 rounded-full ${
                      integration.status === "Live" ? "bg-emerald-500" : "bg-amber-500"
                    }`} />
                    {integration.status}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* APIs */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
              Secure APIs & SDKs
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {apis.map((api, index) => (
                <motion.div
                  key={api.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="p-6 bg-white rounded-xl border border-gray-200 hover:border-emerald-200 transition-all h-full">
                    <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-emerald-50">
                      <div className="text-emerald-600">
                        {api.icon}
                      </div>
                    </div>
                    
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {api.name}
                    </h4>
                    <p className="text-sm text-gray-600 mb-4">
                      {api.description}
                    </p>
                    
                    <div className="space-y-2">
                      <Link
                        href={api.link}
                        className="inline-flex items-center gap-2 text-sm text-emerald-600 hover:text-emerald-700 font-medium"
                      >
                        Get Started
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                      <Link
                        href={api.docs}
                        className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-700"
                      >
                        Documentation
                        <GitBranch className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Security Certification */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-8 border border-emerald-200"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Security & Compliance Framework
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: "1",
                  title: "Security Audit",
                  description: "Comprehensive security assessment",
                  time: "Always active",
                },
                {
                  step: "2",
                  title: "Compliance Check",
                  description: "Automated compliance validation",
                  time: "Real-time",
                },
                {
                  step: "3",
                  title: "Encryption",
                  description: "End-to-end data encryption",
                  time: "Automatic",
                },
                {
                  step: "4",
                  title: "Audit Trail",
                  description: "Complete activity logging",
                  time: "24/7 monitoring",
                },
              ].map((step) => (
                <div key={step.step} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white border border-emerald-200 text-emerald-600 font-bold text-lg mb-4">
                    {step.step}
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h4>
                  <p className="text-sm text-gray-600 mb-2">
                    {step.description}
                  </p>
                  <div className="text-xs text-emerald-600 font-medium">
                    {step.time}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <Link
                href="/docs/finance/security-compliance"
                className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700"
              >
                View complete security documentation
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}