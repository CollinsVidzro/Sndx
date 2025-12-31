// components/product/messaging/MessagingIntegrations.tsx
"use client";
import { motion } from "framer-motion";
import { 
  Code2, Terminal, Zap
} from "lucide-react";
import Link from "next/link";

const sdks = [
  { language: "JavaScript", icon: "🟨", color: "bg-yellow-50" },
  { language: "Python", icon: "🐍", color: "bg-blue-50" },
  { language: "Go", icon: "🐹", color: "bg-cyan-50" },
  { language: "Ruby", icon: "💎", color: "bg-red-50" },
  { language: "Java", icon: "☕", color: "bg-orange-50" },
  { language: "PHP", icon: "🐘", color: "bg-purple-50" },
  { language: "C#", icon: "C#", color: "bg-green-50" },
  { language: "Swift", icon: "🐦", color: "bg-rose-50" }
];

export default function MessagingIntegrations() {
  return (
    <section className="py-16 md:py-24 relative">
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
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-cyan-50 px-4 py-2 mb-4">
            <span className="text-sm font-semibold text-cyan-700">
              INTEGRATIONS & SDKs
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Developer First Experience
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive SDKs, tools, and integrations to get started quickly
          </p>
        </div>

        {/* SDKs Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Official SDKs
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {sdks.map((sdk, index) => (
              <motion.div
                key={sdk.language}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <div className={`p-4 rounded-xl border border-gray-200 text-center ${sdk.color} hover:border-cyan-200 transition-all`}>
                  <div className="text-2xl mb-2">{sdk.icon}</div>
                  <div className="font-semibold text-gray-900">{sdk.language}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Integration Tools */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white border border-gray-200 rounded-xl">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-cyan-50 mb-4">
              <Code2 className="h-6 w-6 text-cyan-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-3">REST API</h3>
            <p className="text-gray-600 mb-4">
              Full RESTful API with detailed documentation
            </p>
            <Link
              href="/docs/api"
              className="text-sm font-medium text-cyan-600 hover:text-cyan-700"
            >
              View API Reference →
            </Link>
          </div>

          <div className="p-6 bg-white border border-gray-200 rounded-xl">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-50 mb-4">
              <Terminal className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-3">CLI Tool</h3>
            <p className="text-gray-600 mb-4">
              Command line interface for automation and scripting
            </p>
            <Link
              href="/cli"
              className="text-sm font-medium text-cyan-600 hover:text-cyan-700"
            >
              Install CLI →
            </Link>
          </div>

          <div className="p-6 bg-white border border-gray-200 rounded-xl">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-emerald-50 mb-4">
              <Zap className="h-6 w-6 text-emerald-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-3">Webhooks</h3>
            <p className="text-gray-600 mb-4">
              Real-time event notifications and delivery reports
            </p>
            <Link
              href="/docs/webhooks"
              className="text-sm font-medium text-cyan-600 hover:text-cyan-700"
            >
              Setup Webhooks →
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-gray-200"
        >
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { label: "API Documentation", href: "/docs" },
              { label: "Quick Start Guide", href: "/docs/getting-started" },
              { label: "API Playground", href: "/playground" },
              { label: "Support Forum", href: "/support" }
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-cyan-600 font-medium hover:text-cyan-700"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}