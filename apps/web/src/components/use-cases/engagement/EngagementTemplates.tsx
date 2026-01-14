// components/use-cases/engagement/EngagementTemplates.tsx
"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, FileText, Mail, MessageSquare, Bell, Download, Eye } from "lucide-react";

const templates = [
  {
    name: "Welcome Series",
    description: "3-day onboarding sequence for new users",
    channels: ["Email", "SMS"],
    messages: 4,
    metrics: "82% open rate",
    color: "from-purple-500 to-pink-500",
    icon: <Mail className="h-5 w-5" />,
  },
  {
    name: "Feature Adoption",
    description: "Guide users to discover key features",
    channels: ["Email", "In-app"],
    messages: 6,
    metrics: "+45% adoption",
    color: "from-blue-500 to-cyan-500",
    icon: <Bell className="h-5 w-5" />,
  },
  {
    name: "Win-back Campaign",
    description: "Re-engage inactive customers",
    channels: ["Email", "SMS", "Push"],
    messages: 3,
    metrics: "28% recovery",
    color: "from-amber-500 to-orange-500",
    icon: <MessageSquare className="h-5 w-5" />,
  },
  {
    name: "Milestone Celebration",
    description: "Celebrate customer achievements",
    channels: ["Email"],
    messages: 2,
    metrics: "94% positive sentiment",
    color: "from-emerald-500 to-green-500",
    icon: <Bell className="h-5 w-5" />,
  },
  {
    name: "Feedback Request",
    description: "Collect valuable customer insights",
    channels: ["Email", "In-app"],
    messages: 2,
    metrics: "62% response rate",
    color: "from-indigo-500 to-violet-500",
    icon: <MessageSquare className="h-5 w-5" />,
  },
  {
    name: "Anniversary Series",
    description: "Celebrate yearly milestones",
    channels: ["Email", "SMS"],
    messages: 3,
    metrics: "76% engagement",
    color: "from-rose-500 to-pink-500",
    icon: <Mail className="h-5 w-5" />,
  },
];

export default function EngagementTemplates() {
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
            <div className="inline-flex items-center gap-2 rounded-full bg-purple-50 px-4 py-2 mb-4">
              <FileText className="h-4 w-4 text-purple-600" />
              <span className="text-sm font-semibold text-purple-700">
                12 PRE-BUILT TEMPLATES
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready-to-Use Engagement Templates
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Professionally designed templates that work across industries. 
              Customize and launch in minutes.
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
                <div className="p-6 bg-white border border-gray-200 rounded-xl hover:border-purple-200 hover:shadow-lg transition-all h-full">
                  <div className="mb-4 flex items-start justify-between">
                    <div className={`rounded-lg p-3 bg-gradient-to-br ${template.color} bg-opacity-10`}>
                      <div className={`text-white bg-gradient-to-br ${template.color} p-2 rounded-lg`}>
                        {template.icon}
                      </div>
                    </div>
                    <div className="text-xs font-medium text-purple-600 bg-purple-50 px-2 py-1 rounded-full">
                      {template.metrics}
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
                        {template.messages} messages
                      </div>
                    </div>
                    <div className="flex gap-2">
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
                    <button className="flex items-center gap-1 text-sm text-purple-600 hover:text-purple-700 font-medium">
                      <Eye className="h-4 w-4" />
                      Preview
                    </button>
                    <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-700 font-medium">
                      <Download className="h-4 w-4" />
                      Use Template
                    </button>
                    <Link
                      href={`/templates/engagement/${template.name.toLowerCase().replace(/\s+/g, '-')}`}
                      className="ml-auto text-sm text-gray-500 hover:text-gray-700"
                    >
                      Learn more →
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* All Templates CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link
              href="/templates/engagement"
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-purple-600 bg-white px-8 py-4 font-semibold text-purple-600 hover:bg-purple-50 transition-all group"
            >
              View All 12 Templates
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <p className="mt-4 text-sm text-gray-500">
              All templates include unlimited customization • Free to use • No credit card required
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}