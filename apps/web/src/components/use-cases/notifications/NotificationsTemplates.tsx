// components/use-cases/notifications/NotificationsTemplates.tsx
"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, FileText, AlertTriangle, Server, Wrench, Cloud, Database, Download, Eye } from "lucide-react";

const templates = [
  {
    name: "System Alerts",
    description: "Critical system monitoring notifications",
    channels: ["Email", "SMS", "Webhook"],
    messages: 3,
    priority: "Critical",
    color: "from-red-500 to-rose-500",
    icon: <AlertTriangle className="h-5 w-5" />,
  },
  {
    name: "Maintenance Notices",
    description: "Scheduled maintenance announcements",
    channels: ["Email", "SMS"],
    messages: 4,
    priority: "High",
    color: "from-amber-500 to-orange-500",
    icon: <Wrench className="h-5 w-5" />,
  },
  {
    name: "Status Updates",
    description: "Service health and status changes",
    channels: ["Email", "Webhook"],
    messages: 2,
    priority: "Medium",
    color: "from-blue-500 to-cyan-500",
    icon: <Server className="h-5 w-5" />,
  },
  {
    name: "Capacity Alerts",
    description: "Resource utilization warnings",
    channels: ["Email", "SMS"],
    messages: 2,
    priority: "High",
    color: "from-purple-500 to-pink-500",
    icon: <Database className="h-5 w-5" />,
  },
  {
    name: "Security Notifications",
    description: "Security event and breach alerts",
    channels: ["Email", "SMS", "Webhook"],
    messages: 3,
    priority: "Critical",
    color: "from-slate-500 to-gray-500",
    icon: <AlertTriangle className="h-5 w-5" />,
  },
  {
    name: "Deployment Updates",
    description: "Application deployment status",
    channels: ["Email", "Webhook"],
    messages: 3,
    priority: "Medium",
    color: "from-emerald-500 to-green-500",
    icon: <Cloud className="h-5 w-5" />,
  },
];

export default function NotificationsTemplates() {
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
            <div className="inline-flex items-center gap-2 rounded-full bg-slate-50 px-4 py-2 mb-4">
              <FileText className="h-4 w-4 text-slate-600" />
              <span className="text-sm font-semibold text-slate-700">
                6 SYSTEM TEMPLATES
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Enterprise System Notification Templates
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Pre-built templates designed specifically for system administrators, 
              DevOps teams, and IT operations.
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
                <div className="p-6 bg-white border border-gray-200 rounded-xl hover:border-slate-200 hover:shadow-lg transition-all h-full">
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
                    <button className="flex items-center gap-1 text-sm text-slate-600 hover:text-slate-700 font-medium">
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

          {/* Integration Methods */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-flex flex-wrap gap-4 justify-center items-center mb-6">
              {["REST API", "Webhooks", "SNMP", "Syslog", "Prometheus", "GraphQL"].map((integration) => (
                <div
                  key={integration}
                  className="px-4 py-2 bg-slate-50 text-slate-700 rounded-lg text-sm font-medium"
                >
                  {integration}
                </div>
              ))}
            </div>
            
            <Link
              href="/templates/notifications"
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-slate-600 bg-white px-8 py-4 font-semibold text-slate-600 hover:bg-slate-50 transition-all group"
            >
              Explore All 6 Templates
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <p className="mt-4 text-sm text-gray-500">
              All templates include enterprise integrations • Audit logging • Compliance ready
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}