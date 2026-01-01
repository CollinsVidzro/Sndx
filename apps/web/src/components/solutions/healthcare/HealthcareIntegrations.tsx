// components/solutions/healthcare/HealthcareIntegrations.tsx
"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Heart, Shield, Cpu, GitBranch, Zap } from "lucide-react";

const integrations = [
  {
    name: "Epic",
    logo: "🏥",
    description: "EHR integration",
    status: "Live",
    color: "from-blue-500 to-purple-600",
  },
  {
    name: "Cerner",
    logo: "⚕️",
    description: "EHR system",
    status: "Live",
    color: "from-green-500 to-emerald-600",
  },
  {
    name: "Allscripts",
    logo: "📋",
    description: "Practice management",
    status: "Live",
    color: "from-blue-500 to-cyan-600",
  },
  {
    name: "Athenahealth",
    logo: "💻",
    description: "Cloud-based EHR",
    status: "Live",
    color: "from-purple-500 to-pink-600",
  },
  {
    name: "Practice Fusion",
    logo: "🌐",
    description: "Web-based EHR",
    status: "Beta",
    color: "from-orange-500 to-amber-600",
  },
  {
    name: "HL7/FHIR",
    logo: "🔗",
    description: "Healthcare standards",
    status: "Live",
    color: "from-gray-500 to-gray-600",
  },
];

const apis = [
  {
    name: "Healthcare API",
    description: "HIPAA-compliant REST API",
    icon: <Cpu className="h-5 w-5" />,
    link: "/docs/api/healthcare",
    docs: "/docs/api/healthcare/authentication",
  },
  {
    name: "FHIR Integration",
    description: "Healthcare data standards",
    icon: <Zap className="h-5 w-5" />,
    link: "/docs/integrations/fhir",
    docs: "/docs/integrations/fhir/setup",
  },
  {
    name: "SDKs",
    description: "Client libraries with BAA",
    icon: <GitBranch className="h-5 w-5" />,
    link: "/docs/sdks/healthcare",
    docs: "/docs/sdks/healthcare/getting-started",
  },
  {
    name: "Compliance API",
    description: "HIPAA compliance validation",
    icon: <Shield className="h-5 w-5" />,
    link: "/docs/api/compliance/hipaa",
    docs: "/docs/api/compliance/hipaa/validation",
  },
];

export default function HealthcareIntegrations() {
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
            <div className="inline-flex items-center gap-2 rounded-full bg-rose-50 px-4 py-2 mb-4">
              <Heart className="h-4 w-4 text-rose-600" />
              <span className="text-sm font-semibold text-rose-700">
                HEALTHCARE INTEGRATIONS
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Seamless EHR & Healthcare System Integration
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Integrate with leading Electronic Health Records (EHR) systems 
              and healthcare platforms with built-in HIPAA compliance
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
                <div className="p-4 bg-white rounded-xl border border-gray-200 hover:border-rose-200 hover:shadow-md transition-all text-center h-full">
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
              HIPAA-Compliant APIs & SDKs
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
                  <div className="p-6 bg-white rounded-xl border border-gray-200 hover:border-rose-200 transition-all h-full">
                    <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-rose-50">
                      <div className="text-rose-600">
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
                        className="inline-flex items-center gap-2 text-sm text-rose-600 hover:text-rose-700 font-medium"
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

          {/* Implementation Process */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-rose-50 to-red-50 rounded-2xl p-8 border border-rose-200"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              HIPAA-Compliant Implementation Process
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: "1",
                  title: "BAA Execution",
                  description: "Sign Business Associate Agreement",
                  time: "1-2 business days",
                },
                {
                  step: "2",
                  title: "EHR Integration",
                  description: "Connect to your EHR system",
                  time: "2-4 weeks",
                },
                {
                  step: "3",
                  title: "Workflow Setup",
                  description: "Configure patient communication",
                  time: "1-2 weeks",
                },
                {
                  step: "4",
                  title: "Go Live",
                  description: "Launch with full compliance",
                  time: "Immediate",
                },
              ].map((step) => (
                <div key={step.step} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white border border-rose-200 text-rose-600 font-bold text-lg mb-4">
                    {step.step}
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h4>
                  <p className="text-sm text-gray-600 mb-2">
                    {step.description}
                  </p>
                  <div className="text-xs text-rose-600 font-medium">
                    {step.time}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <Link
                href="/docs/healthcare/implementation"
                className="inline-flex items-center gap-2 text-rose-600 font-semibold hover:text-rose-700"
              >
                View complete implementation guide
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}