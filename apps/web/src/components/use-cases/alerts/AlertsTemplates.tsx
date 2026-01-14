// components/use-cases/alerts/AlertsTemplates.tsx
"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, FileText, Shield, CreditCard, Package, Lock, AlertCircle, Download, Eye } from "lucide-react";

const templates = [
  {
    name: "Payment Confirmations",
    description: "Instant payment receipt notifications",
    channels: ["Email", "SMS"],
    messages: 2,
    priority: "High",
    color: "from-emerald-500 to-green-500",
    icon: <CreditCard className="h-5 w-5" />,
  },
  {
    name: "Security Alerts",
    description: "Real-time security notifications",
    channels: ["Email", "SMS", "Push"],
    messages: 3,
    priority: "Critical",
    color: "from-red-500 to-rose-500",
    icon: <Shield className="h-5 w-5" />,
  },
  {
    name: "Order Updates",
    description: "Shipping and delivery notifications",
    channels: ["Email", "SMS"],
    messages: 4,
    priority: "Medium",
    color: "from-blue-500 to-cyan-500",
    icon: <Package className="h-5 w-5" />,
  },
  {
    name: "Login Notifications",
    description: "New device login alerts",
    channels: ["Email", "SMS"],
    messages: 1,
    priority: "High",
    color: "from-amber-500 to-orange-500",
    icon: <Lock className="h-5 w-5" />,
  },
  {
    name: "Password Changes",
    description: "Password reset confirmations",
    channels: ["Email"],
    messages: 1,
    priority: "High",
    color: "from-purple-500 to-pink-500",
    icon: <Lock className="h-5 w-5" />,
  },
  {
    name: "System Outages",
    description: "Service disruption notifications",
    channels: ["Email", "SMS"],
    messages: 2,
    priority: "Critical",
    color: "from-gray-500 to-slate-500",
    icon: <AlertCircle className="h-5 w-5" />,
  },
  {
    name: "Subscription Updates",
    description: "Billing and renewal notifications",
    channels: ["Email"],
    messages: 3,
    priority: "Medium",
    color: "from-indigo-500 to-violet-500",
    icon: <CreditCard className="h-5 w-5" />,
  },
  {
    name: "Document Ready",
    description: "Important document availability",
    channels: ["Email", "SMS"],
    messages: 1,
    priority: "Medium",
    color: "from-teal-500 to-emerald-500",
    icon: <FileText className="h-5 w-5" />,
  },
];

export default function AlertsTemplates() {
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
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 mb-4">
              <FileText className="h-4 w-4 text-emerald-600" />
              <span className="text-sm font-semibold text-emerald-700">
                8 PRE-BUILT TEMPLATES
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Critical Alert Templates
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Professionally designed templates for mission-critical notifications. 
              Secure, compliant, and ready to use.
            </p>
          </div>

          {/* Templates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {templates.map((template, index) => (
              <motion.div
                key={template.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="p-6 bg-white border border-gray-200 rounded-xl hover:border-emerald-200 hover:shadow-lg transition-all h-full">
                  <div className="mb-4 flex items-start justify-between">
                    <div className={`rounded-lg p-3 bg-gradient-to-br ${template.color} bg-opacity-10`}>
                      <div className={`text-white bg-gradient-to-br ${template.color} p-2 rounded-lg`}>
                        {template.icon}
                      </div>
                    </div>
                    <div className={`text-xs font-medium px-2 py-1 rounded-full ${
                      template.priority === "Critical" 
                        ? "text-red-700 bg-red-50" 
                        : template.priority === "High"
                        ? "text-amber-700 bg-amber-50"
                        : "text-blue-700 bg-blue-50"
                    }`}>
                      {template.priority}
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
                    <button className="flex items-center gap-1 text-sm text-emerald-600 hover:text-emerald-700 font-medium">
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

          {/* Compliance Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-flex flex-wrap gap-4 justify-center items-center mb-6">
              {["GDPR", "HIPAA", "SOC2", "PCI DSS", "ISO 27001"].map((cert) => (
                <div
                  key={cert}
                  className="px-4 py-2 bg-emerald-50 text-emerald-700 rounded-lg text-sm font-medium"
                >
                  {cert}
                </div>
              ))}
            </div>
            
            <Link
              href="/templates/alerts"
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-emerald-600 bg-white px-8 py-4 font-semibold text-emerald-600 hover:bg-emerald-50 transition-all group"
            >
              View All 8 Templates
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <p className="mt-4 text-sm text-gray-500">
              All templates include audit trails • Encryption at rest & in transit • Compliance-ready
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}