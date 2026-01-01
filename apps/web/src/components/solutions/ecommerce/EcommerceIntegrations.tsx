// components/solutions/ecommerce/EcommerceIntegrations.tsx
"use client";
import { motion } from "framer-motion";
//import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Zap, Cpu, GitBranch } from "lucide-react";

const integrations = [
  {
    name: "Shopify",
    logo: "🛍️",
    description: "Native integration with Shopify stores",
    status: "Live",
    color: "from-green-500 to-emerald-600",
  },
  {
    name: "WooCommerce",
    logo: "⚙️",
    description: "WordPress WooCommerce plugin",
    status: "Live",
    color: "from-blue-500 to-cyan-600",
  },
  {
    name: "Magento",
    logo: "🏢",
    description: "Enterprise e-commerce platform",
    status: "Live",
    color: "from-orange-500 to-amber-600",
  },
  {
    name: "BigCommerce",
    logo: "🚀",
    description: "Scalable e-commerce solution",
    status: "Live",
    color: "from-purple-500 to-pink-600",
  },
  {
    name: "Salesforce Commerce Cloud",
    logo: "☁️",
    description: "Enterprise commerce platform",
    status: "Beta",
    color: "from-blue-500 to-indigo-600",
  },
  {
    name: "Custom API",
    logo: "🔌",
    description: "Connect any custom platform",
    status: "Live",
    color: "from-gray-500 to-gray-600",
  },
];

const platforms = [
  {
    name: "Shopify App",
    description: "Install directly from Shopify App Store",
    link: "/integrations/shopify",
    docs: "/docs/integrations/shopify",
  },
  {
    name: "WooCommerce Plugin",
    description: "WordPress plugin for easy installation",
    link: "/integrations/woocommerce",
    docs: "/docs/integrations/woocommerce",
  },
  {
    name: "REST API",
    description: "Full API access for custom integrations",
    link: "/docs/api",
    docs: "/docs/api/getting-started",
  },
  {
    name: "Webhooks",
    description: "Real-time event notifications",
    link: "/docs/webhooks",
    docs: "/docs/webhooks/setup",
  },
];

export default function EcommerceIntegrations() {
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
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 mb-4">
              <Zap className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-700">
                INTEGRATIONS
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Connect Your E-commerce Platform
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Seamless integration with all major e-commerce platforms and tools. 
              Connect in minutes and start automating.
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
                <div className="p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-200 hover:shadow-md transition-all text-center h-full">
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

          {/* Integration Methods */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
              Integration Methods
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {platforms.map((platform, index) => (
                <motion.div
                  key={platform.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="p-6 bg-white rounded-xl border border-gray-200 hover:border-blue-200 transition-all h-full">
                    <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-50">
                      <Cpu className="h-5 w-5 text-blue-600" />
                    </div>
                    
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {platform.name}
                    </h4>
                    <p className="text-sm text-gray-600 mb-4">
                      {platform.description}
                    </p>
                    
                    <div className="space-y-2">
                      <Link
                        href={platform.link}
                        className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 font-medium"
                      >
                        Learn more
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                      <Link
                        href={platform.docs}
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
            className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-200"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Simple 4-Step Setup
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: "1",
                  title: "Connect Platform",
                  description: "Install app or connect via API",
                  time: "2 minutes",
                },
                {
                  step: "2",
                  title: "Import Templates",
                  description: "Choose from pre-built templates",
                  time: "1 minute",
                },
                {
                  step: "3",
                  title: "Customize Messages",
                  description: "Add your brand voice and timing",
                  time: "2 minutes",
                },
                {
                  step: "4",
                  title: "Go Live",
                  description: "Activate and start automating",
                  time: "Instant",
                },
              ].map((step) => (
                <div key={step.step} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white border border-blue-200 text-blue-600 font-bold text-lg mb-4">
                    {step.step}
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h4>
                  <p className="text-sm text-gray-600 mb-2">
                    {step.description}
                  </p>
                  <div className="text-xs text-blue-600 font-medium">
                    {step.time}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <Link
                href="/docs/ecommerce/setup-guide"
                className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700"
              >
                View detailed setup guide
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}