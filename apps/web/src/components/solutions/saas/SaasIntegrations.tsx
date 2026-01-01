// components/solutions/saas/SaasIntegrations.tsx
"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Zap, Code, GitBranch, Cpu } from "lucide-react";

const integrations = [
  {
    name: "Segment",
    logo: "📊",
    description: "Customer data platform",
    status: "Live",
    color: "from-blue-500 to-cyan-600",
  },
  {
    name: "Mixpanel",
    logo: "📈",
    description: "Product analytics",
    status: "Live",
    color: "from-purple-500 to-pink-600",
  },
  {
    name: "Amplitude",
    logo: "🔍",
    description: "Digital analytics",
    status: "Live",
    color: "from-orange-500 to-amber-600",
  },
  {
    name: "Intercom",
    logo: "💬",
    description: "Customer messaging",
    status: "Live",
    color: "from-green-500 to-emerald-600",
  },
  {
    name: "Slack",
    logo: "💬",
    description: "Team communication",
    status: "Live",
    color: "from-red-500 to-pink-600",
  },
  {
    name: "Webhooks",
    logo: "🔗",
    description: "Custom event triggers",
    status: "Live",
    color: "from-gray-500 to-gray-600",
  },
];

const sdks = [
  {
    name: "JavaScript SDK",
    description: "For web applications",
    icon: <Code className="h-5 w-5" />,
    link: "/docs/sdks/javascript",
    docs: "/docs/sdks/javascript/getting-started",
  },
  {
    name: "React SDK",
    description: "React components and hooks",
    icon: <Cpu className="h-5 w-5" />,
    link: "/docs/sdks/react",
    docs: "/docs/sdks/react/installation",
  },
  {
    name: "Node.js SDK",
    description: "Backend integration",
    icon: <GitBranch className="h-5 w-5" />,
    link: "/docs/sdks/node",
    docs: "/docs/sdks/node/quick-start",
  },
  {
    name: "Python SDK",
    description: "Python integration",
    icon: <Zap className="h-5 w-5" />,
    link: "/docs/sdks/python",
    docs: "/docs/sdks/python/installation",
  },
];

export default function SaasIntegrations() {
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
            <div className="inline-flex items-center gap-2 rounded-full bg-purple-50 px-4 py-2 mb-4">
              <Zap className="h-4 w-4 text-purple-600" />
              <span className="text-sm font-semibold text-purple-700">
                INTEGRATIONS & SDKs
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Built for SaaS Developers
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Integrate with your existing stack using our SDKs and pre-built 
              connectors for analytics and communication tools.
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
                <div className="p-4 bg-white rounded-xl border border-gray-200 hover:border-purple-200 hover:shadow-md transition-all text-center h-full">
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

          {/* SDKs */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
              Official SDKs
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {sdks.map((sdk, index) => (
                <motion.div
                  key={sdk.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="p-6 bg-white rounded-xl border border-gray-200 hover:border-purple-200 transition-all h-full">
                    <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-purple-50">
                      <div className="text-purple-600">
                        {sdk.icon}
                      </div>
                    </div>
                    
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {sdk.name}
                    </h4>
                    <p className="text-sm text-gray-600 mb-4">
                      {sdk.description}
                    </p>
                    
                    <div className="space-y-2">
                      <Link
                        href={sdk.link}
                        className="inline-flex items-center gap-2 text-sm text-purple-600 hover:text-purple-700 font-medium"
                      >
                        Get SDK
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                      <Link
                        href={sdk.docs}
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

          {/* Setup Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-200"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Simple Integration Process
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: "1",
                  title: "Install SDK",
                  description: "Add SDK to your codebase",
                  time: "2 minutes",
                },
                {
                  step: "2",
                  title: "Identify Users",
                  description: "Set up user identification",
                  time: "3 minutes",
                },
                {
                  step: "3",
                  title: "Track Events",
                  description: "Implement event tracking",
                  time: "5 minutes",
                },
                {
                  step: "4",
                  title: "Create Workflows",
                  description: "Build engagement workflows",
                  time: "5 minutes",
                },
              ].map((step) => (
                <div key={step.step} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white border border-purple-200 text-purple-600 font-bold text-lg mb-4">
                    {step.step}
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h4>
                  <p className="text-sm text-gray-600 mb-2">
                    {step.description}
                  </p>
                  <div className="text-xs text-purple-600 font-medium">
                    {step.time}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <Link
                href="/docs/saas/integration-guide"
                className="inline-flex items-center gap-2 text-purple-600 font-semibold hover:text-purple-700"
              >
                View complete integration guide
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}