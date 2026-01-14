// components/use-cases/authentication/AuthenticationTemplates.tsx
"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, FileText, Key, Lock, User, Smartphone, Mail, Download, Eye } from "lucide-react";

const templates = [
  {
    name: "Login OTP",
    description: "One-time password for login verification",
    channels: ["SMS", "Email"],
    messages: 1,
    expiry: "10 minutes",
    color: "from-indigo-500 to-blue-500",
    icon: <Key className="h-5 w-5" />,
  },
  {
    name: "Signup Verification",
    description: "Verify new user accounts",
    channels: ["Email", "SMS"],
    messages: 2,
    expiry: "24 hours",
    color: "from-violet-500 to-purple-500",
    icon: <User className="h-5 w-5" />,
  },
  {
    name: "Password Reset",
    description: "Secure password reset links",
    channels: ["Email"],
    messages: 1,
    expiry: "1 hour",
    color: "from-red-500 to-rose-500",
    icon: <Lock className="h-5 w-5" />,
  },
  {
    name: "2FA Codes",
    description: "Two-factor authentication codes",
    channels: ["SMS", "Authenticator"],
    messages: 1,
    expiry: "30 seconds",
    color: "from-emerald-500 to-green-500",
    icon: <Smartphone className="h-5 w-5" />,
  },
  {
    name: "Magic Links",
    description: "One-click authentication links",
    channels: ["Email"],
    messages: 1,
    expiry: "15 minutes",
    color: "from-amber-500 to-orange-500",
    icon: <Mail className="h-5 w-5" />,
  },
  {
    name: "Device Verification",
    description: "Verify new devices",
    channels: ["Email", "SMS"],
    messages: 2,
    expiry: "10 minutes",
    color: "from-blue-500 to-cyan-500",
    icon: <Smartphone className="h-5 w-5" />,
  },
  {
    name: "Account Recovery",
    description: "Recover locked accounts",
    channels: ["Email", "SMS"],
    messages: 3,
    expiry: "1 hour",
    color: "from-slate-500 to-gray-500",
    icon: <Lock className="h-5 w-5" />,
  },
];

export default function AuthenticationTemplates() {
  return (
    <section className="py-13 bg-white relative">
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
            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-2 mb-4">
              <FileText className="h-4 w-4 text-indigo-600" />
              <span className="text-sm font-semibold text-indigo-700">
                7 AUTHENTICATION TEMPLATES
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Secure Authentication Templates
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Pre-built templates for every authentication scenario. Secure, 
              compliant, and optimized for high conversion rates.
            </p>
          </div>

          {/* Templates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {templates.map((template, index) => (
              <motion.div
                key={template.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="p-6 bg-white border border-gray-200 rounded-xl hover:border-indigo-200 hover:shadow-lg transition-all h-full">
                  <div className="mb-4 flex items-start justify-between">
                    <div className={`rounded-lg p-3 bg-gradient-to-br ${template.color} bg-opacity-10`}>
                      <div className={`text-white bg-gradient-to-br ${template.color} p-2 rounded-lg`}>
                        {template.icon}
                      </div>
                    </div>
                    <div className="text-xs font-medium text-indigo-600 bg-indigo-50 px-2 py-1 rounded-full">
                      {template.expiry}
                    </div>
                  </div>
                  
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {template.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {template.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <div className="text-xs text-gray-500">
                        {template.messages} {template.messages === 1 ? 'message' : 'messages'}
                      </div>
                    </div>
                    <div className="flex gap-1">
                      {template.channels.map((channel, i) => (
                        <span
                          key={i}
                          className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded"
                        >
                          {channel}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <button className="flex items-center gap-1 text-sm text-indigo-600 hover:text-indigo-700 font-medium">
                      <Eye className="h-4 w-4" />
                      Preview
                    </button>
                    <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-700 font-medium">
                      <Download className="h-4 w-4" />
                      Use Template
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Security Standards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-flex flex-wrap gap-4 justify-center items-center mb-6">
              {["SOC2", "GDPR", "HIPAA", "PCI DSS", "ISO 27001", "FIDO2"].map((standard) => (
                <div
                  key={standard}
                  className="px-4 py-2 bg-indigo-50 text-indigo-700 rounded-lg text-sm font-medium"
                >
                  {standard}
                </div>
              ))}
            </div>
            
            <Link
              href="/templates/authentication"
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-indigo-600 bg-white px-8 py-4 font-semibold text-indigo-600 hover:bg-indigo-50 transition-all group"
            >
              Explore All 7 Templates
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <p className="mt-4 text-sm text-gray-500">
              All templates include security audit trails • Encryption at rest • Compliance ready
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}