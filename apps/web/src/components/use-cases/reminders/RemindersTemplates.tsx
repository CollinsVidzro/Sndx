// components/use-cases/reminders/RemindersTemplates.tsx
"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, FileText, Calendar, Bell, Clock, CheckCircle,  Download, Eye } from "lucide-react";

const templates = [
  {
    name: "Appointment Reminder",
    description: "Reduce no-shows with timely reminders",
    channels: ["SMS", "Email"],
    messages: 3,
    timing: "24h, 2h, 30min before",
    color: "from-teal-500 to-emerald-500",
    icon: <Calendar className="h-5 w-5" />,
  },
  {
    name: "Payment Due",
    description: "Gentle payment reminder series",
    channels: ["Email", "SMS"],
    messages: 4,
    timing: "7d, 3d, 1d, day of",
    color: "from-blue-500 to-cyan-500",
    icon: <Bell className="h-5 w-5" />,
  },
  {
    name: "Follow-up Sequence",
    description: "Automated client follow-ups",
    channels: ["Email"],
    messages: 5,
    timing: "1d, 3d, 7d, 14d, 30d",
    color: "from-purple-500 to-pink-500",
    icon: <CheckCircle className="h-5 w-5" />,
  },
  {
    name: "Event Registration",
    description: "Event reminders and updates",
    channels: ["Email", "SMS"],
    messages: 4,
    timing: "7d, 1d, 2h, during",
    color: "from-amber-500 to-orange-500",
    icon: <Clock className="h-5 w-5" />,
  },
  {
    name: "Medication Reminder",
    description: "Healthcare compliance reminders",
    channels: ["SMS", "Push"],
    messages: 2,
    timing: "Daily, weekly schedules",
    color: "from-red-500 to-rose-500",
    icon: <Bell className="h-5 w-5" />,
  },
  {
    name: "Subscription Renewal",
    description: "Service renewal reminders",
    channels: ["Email"],
    messages: 3,
    timing: "30d, 7d, 1d before",
    color: "from-indigo-500 to-violet-500",
    icon: <Calendar className="h-5 w-5" />,
  },
  {
    name: "Task Deadline",
    description: "Project and task reminders",
    channels: ["Email", "SMS"],
    messages: 3,
    timing: "3d, 1d, day of deadline",
    color: "from-slate-500 to-gray-500",
    icon: <Clock className="h-5 w-5" />,
  },
  {
    name: "Birthday & Anniversary",
    description: "Personal celebration reminders",
    channels: ["Email", "SMS"],
    messages: 2,
    timing: "7d before, day of",
    color: "from-pink-500 to-rose-500",
    icon: <Calendar className="h-5 w-5" />,
  },
  {
    name: "Maintenance Schedule",
    description: "Regular maintenance reminders",
    channels: ["Email"],
    messages: 3,
    timing: "Monthly, quarterly, yearly",
    color: "from-green-500 to-emerald-500",
    icon: <CheckCircle className="h-5 w-5" />,
  },
];

export default function RemindersTemplates() {
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
            <div className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-4 py-2 mb-4">
              <FileText className="h-4 w-4 text-teal-600" />
              <span className="text-sm font-semibold text-teal-700">
                9 REMINDER TEMPLATES
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Smart Reminder Templates for Every Scenario
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Professionally designed templates with optimal timing sequences 
              to ensure your reminders are effective and well-received.
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
                <div className="p-6 bg-white border border-gray-200 rounded-xl hover:border-teal-200 hover:shadow-lg transition-all h-full">
                  <div className="mb-4 flex items-start justify-between">
                    <div className={`rounded-lg p-3 bg-gradient-to-br ${template.color} bg-opacity-10`}>
                      <div className={`text-white bg-gradient-to-br ${template.color} p-2 rounded-lg`}>
                        {template.icon}
                      </div>
                    </div>
                    <div className="text-xs font-medium text-teal-600 bg-teal-50 px-2 py-1 rounded-full">
                      {template.timing}
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
                    <button className="flex items-center gap-1 text-sm text-teal-600 hover:text-teal-700 font-medium">
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

          {/* Industry Applications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-flex flex-wrap gap-4 justify-center items-center mb-6">
              {["Healthcare", "Education", "Legal", "Finance", "Fitness", "Beauty"].map((industry) => (
                <div
                  key={industry}
                  className="px-4 py-2 bg-teal-50 text-teal-700 rounded-lg text-sm font-medium"
                >
                  {industry}
                </div>
              ))}
            </div>
            
            <Link
              href="/templates/reminders"
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-teal-600 bg-white px-8 py-4 font-semibold text-teal-600 hover:bg-teal-50 transition-all group"
            >
              Explore All 9 Templates
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <p className="mt-4 text-sm text-gray-500">
              All templates include smart timing algorithms • Customizable content • Analytics tracking
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}