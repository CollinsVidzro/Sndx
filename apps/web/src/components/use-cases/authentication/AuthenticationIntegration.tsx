// components/use-cases/authentication/AuthenticationIntegration.tsx
"use client";
import { motion } from "framer-motion";
import { Code, Cpu, GitBranch, Zap, CheckCircle, Users } from "lucide-react";

const integrations = [
  {
    icon: <Code className="h-5 w-5" />,
    title: "REST API",
    description: "Full API access for custom integrations",
    benefits: ["JSON/XML support", "Webhooks", "SDKs available"],
  },
  {
    icon: <Cpu className="h-5 w-5" />,
    title: "Auth Providers",
    description: "Integrate with popular auth services",
    benefits: ["Auth0", "Firebase", "AWS Cognito", "Okta"],
  },
  {
    icon: <GitBranch className="h-5 w-5" />,
    title: "Framework SDKs",
    description: "Ready-to-use SDKs for popular frameworks",
    benefits: ["React", "Vue", "Angular", "Node.js", "Python"],
  },
  {
    icon: <Zap className="h-5 w-5" />,
    title: "Quick Start",
    description: "Get started in minutes, not days",
    benefits: ["5-minute setup", "Pre-built templates", "Live documentation"],
  },
];

export default function AuthenticationIntegration() {
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Easy Integration with Any Stack
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Whether you&apos;re building with modern frameworks or legacy systems, 
              Sendexa integrates seamlessly with your authentication stack.
            </p>
          </div>

          {/* Integrations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {integrations.map((integration, index) => (
              <motion.div
                key={integration.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="p-6 bg-white border border-gray-200 rounded-xl hover:border-indigo-200 hover:shadow-lg transition-all h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="rounded-lg p-2 bg-indigo-50">
                      <div className="text-indigo-600">
                        {integration.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {integration.title}
                      </h3>
                      <div className="text-sm text-gray-600">
                        {integration.description}
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {integration.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                        <span className="text-sm text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Integration Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-indigo-50 to-violet-50 rounded-2xl p-8 border border-indigo-200"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              4-Step Integration Process
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: "1",
                  title: "Sign Up",
                  description: "Create your Sendexa account",
                  time: "2 minutes",
                  icon: <Users className="h-5 w-5" />,
                },
                {
                  step: "2",
                  title: "Choose Template",
                  description: "Select from 7 auth templates",
                  time: "1 minute",
                  icon: <CheckCircle className="h-5 w-5" />,
                },
                {
                  step: "3",
                  title: "Integrate API",
                  description: "Add code to your auth flow",
                  time: "5 minutes",
                  icon: <Code className="h-5 w-5" />,
                },
                {
                  step: "4",
                  title: "Go Live",
                  description: "Start sending authentication codes",
                  time: "Instant",
                  icon: <Zap className="h-5 w-5" />,
                },
              ].map((step) => (
                <div key={step.step} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white border border-indigo-200 text-indigo-600 font-bold text-lg mb-4">
                    {step.step}
                  </div>
                  <div className="text-indigo-600 mb-2">
                    {step.icon}
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
              <div className="inline-flex items-center gap-2 text-indigo-600 font-semibold">
                <Zap className="h-5 w-5" />
                Total setup time: Less than 10 minutes
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}