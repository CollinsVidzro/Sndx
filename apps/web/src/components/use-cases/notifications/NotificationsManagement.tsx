// components/use-cases/notifications/NotificationsManagement.tsx
"use client";
import { motion } from "framer-motion";
import { Filter, Bell, Users, Clock, BarChart, Settings } from "lucide-react";

const managementFeatures = [
  {
    icon: <Filter className="h-5 w-5" />,
    title: "Advanced Filtering",
    description: "Route notifications based on rules",
    benefits: ["Regex pattern matching", "Custom routing rules", "Priority queuing"],
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: "Team Management",
    description: "Role-based access and escalation",
    benefits: ["On-call schedules", "Escalation policies", "Team notifications"],
  },
  {
    icon: <Clock className="h-5 w-5" />,
    title: "Scheduled Maintenance",
    description: "Plan and communicate downtime",
    benefits: ["Maintenance windows", "Automated reminders", "Status pages"],
  },
  {
    icon: <BarChart className="h-5 w-5" />,
    title: "Audit Logging",
    description: "Complete notification history",
    benefits: ["Delivery tracking", "Access logs", "Compliance reports"],
  },
  {
    icon: <Bell className="h-5 w-5" />,
    title: "Noise Reduction",
    description: "Smart alert grouping and deduplication",
    benefits: ["Alert correlation", "Deduplication", "Intelligent grouping"],
  },
  {
    icon: <Settings className="h-5 w-5" />,
    title: "API Management",
    description: "Full control via API",
    benefits: ["REST API", "Webhooks", "SDKs available"],
  },
];

export default function NotificationsManagement() {
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
              Comprehensive Notification Management
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Advanced tools and features to manage, monitor, and optimize your 
              system notification workflows.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {managementFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="p-6 bg-white border border-gray-200 rounded-xl hover:border-slate-200 hover:shadow-lg transition-all h-full">
                  <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-slate-50 group-hover:bg-slate-100 transition-colors">
                    <div className="text-slate-600">
                      {feature.icon}
                    </div>
                  </div>
                  
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {feature.description}
                  </p>
                  
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-slate-500" />
                        <span className="text-xs text-gray-500">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Management Dashboard */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-slate-50 to-gray-50 rounded-2xl p-8 border border-slate-200"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Unified Management Dashboard
                </h3>
                <p className="text-gray-600 mb-6">
                  Monitor and manage all your system notifications from a single 
                  pane of glass with real-time insights and controls.
                </p>
                <div className="space-y-4">
                  {[
                    { feature: "Real-time monitoring", status: "Live updates" },
                    { feature: "Alert analytics", status: "Trend analysis" },
                    { feature: "Team collaboration", status: "Shared workspaces" },
                    { feature: "Compliance reporting", status: "Automated audits" },
                  ].map((item) => (
                    <div key={item.feature} className="flex items-center justify-between">
                      <div className="text-gray-700">{item.feature}</div>
                      <div className="text-sm text-slate-600">{item.status}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-sm text-gray-500">Notifications today</div>
                      <div className="text-sm font-medium text-slate-600">12,458</div>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-slate-500 w-3/4" />
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-sm text-gray-500">Delivery success rate</div>
                      <div className="text-sm font-medium text-slate-600">99.97%</div>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-slate-500 to-gray-500 w-[99.97%]" />
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-sm text-gray-500">Average response time</div>
                      <div className="text-sm font-medium text-slate-600">2.4 minutes</div>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-slate-500 w-1/3" />
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-100">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900 mb-2">
                        85% Less
                      </div>
                      <div className="text-gray-600">Manual intervention required</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}