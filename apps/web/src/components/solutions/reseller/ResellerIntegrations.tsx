// components/solutions/reseller/ResellerIntegrations.tsx
"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Briefcase, Users,  Cpu, GitBranch, DollarSign } from "lucide-react";

const integrations = [
  {
    name: "WHMCS",
    logo: "🖥️",
    description: "Billing automation",
    status: "Live",
    color: "from-blue-500 to-cyan-600",
  },
  {
    name: "Plesk",
    logo: "⚙️",
    description: "Hosting control panel",
    status: "Live",
    color: "from-orange-500 to-amber-600",
  },
  {
    name: "cPanel",
    logo: "📊",
    description: "Web hosting panel",
    status: "Live",
    color: "from-red-500 to-pink-600",
  },
  {
    name: "Stripe",
    logo: "💳",
    description: "Payment processing",
    status: "Live",
    color: "from-purple-500 to-pink-600",
  },
  {
    name: "Chargebee",
    logo: "💰",
    description: "Subscription billing",
    status: "Live",
    color: "from-green-500 to-emerald-600",
  },
  {
    name: "Custom API",
    logo: "🔌",
    description: "Your own integration",
    status: "Live",
    color: "from-gray-500 to-gray-600",
  },
];

const apis = [
  {
    name: "White-label API",
    description: "Full white-label API access",
    icon: <Cpu className="h-5 w-5" />,
    link: "/docs/api/reseller",
    docs: "/docs/api/reseller/white-label",
  },
  {
    name: "Partner Portal",
    description: "Dedicated partner dashboard",
    icon: <Briefcase className="h-5 w-5" />,
    link: "/partner",
    docs: "/docs/partner/portal",
  },
  {
    name: "Billing API",
    description: "Revenue & commission APIs",
    icon: <DollarSign className="h-5 w-5" />,
    link: "/docs/api/billing/reseller",
    docs: "/docs/api/billing/reseller/commissions",
  },
  {
    name: "Client Management",
    description: "Multi-tenant client APIs",
    icon: <Users className="h-5 w-5" />,
    link: "/docs/api/clients",
    docs: "/docs/api/clients/multi-tenant",
  },
];

export default function ResellerIntegrations() {
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
            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-2 mb-4">
              <Briefcase className="h-4 w-4 text-indigo-600" />
              <span className="text-sm font-semibold text-indigo-700">
                RESELLER INTEGRATIONS
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Reseller Ecosystem
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Integrate with your existing systems, billing platforms, and 
              control panels for a seamless reseller experience
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
                <div className="p-4 bg-white rounded-xl border border-gray-200 hover:border-indigo-200 hover:shadow-md transition-all text-center h-full">
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
              Reseller APIs & Tools
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
                  <div className="p-6 bg-white rounded-xl border border-gray-200 hover:border-indigo-200 transition-all h-full">
                    <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-indigo-50">
                      <div className="text-indigo-600">
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
                        className="inline-flex items-center gap-2 text-sm text-indigo-600 hover:text-indigo-700 font-medium"
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

          {/* Onboarding Process */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-indigo-50 to-violet-50 rounded-2xl p-8 border border-indigo-200"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Simple Partner Onboarding
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: "1",
                  title: "Apply",
                  description: "Complete partner application",
                  time: "24 hours",
                },
                {
                  step: "2",
                  title: "Setup",
                  description: "Configure white-label settings",
                  time: "2-3 days",
                },
                {
                  step: "3",
                  title: "Training",
                  description: "Complete partner training",
                  time: "1 week",
                },
                {
                  step: "4",
                  title: "Go Live",
                  description: "Start selling to clients",
                  time: "Immediate",
                },
              ].map((step) => (
                <div key={step.step} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white border border-indigo-200 text-indigo-600 font-bold text-lg mb-4">
                    {step.step}
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h4>
                  <p className="text-sm text-gray-600 mb-2">
                    {step.description}
                  </p>
                  <div className="text-xs text-indigo-600 font-medium">
                    {step.time}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <Link
                href="/docs/reseller/onboarding"
                className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:text-indigo-700"
              >
                View complete partner onboarding guide
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}