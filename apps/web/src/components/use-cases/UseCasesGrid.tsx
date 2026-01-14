// components/use-cases/UseCasesGrid.tsx
"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Users, 
  Bell, 
  TrendingUp, 
  Shield, 
  Key, 
  Clock,
  ArrowRight,
  Zap,
  CheckCircle
} from "lucide-react";

// Matching the exact use cases from SolutionsDropdown.tsx
const useCases = [
  {
    icon: <Users className="h-5 w-5" />,
    title: "Customer Engagement",
    href: "/use-cases/engagement",
    count: "12 templates",
    description: "Automate engagement across multiple channels to increase retention and loyalty.",
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-gradient-to-br from-purple-50 to-pink-50",
    stats: ["40% higher retention", "3.5x engagement", "Multi-channel"],
  },
  {
    icon: <Bell className="h-5 w-5" />,
    title: "Transactional Alerts",
    href: "/use-cases/alerts",
    count: "8 templates",
    description: "Secure, real-time alerts for payments, security, and system notifications.",
    color: "from-emerald-500 to-green-500",
    bgColor: "bg-gradient-to-br from-emerald-50 to-green-50",
    stats: ["99.9% delivery", "< 1s latency", "Enterprise security"],
  },
  {
    icon: <TrendingUp className="h-5 w-5" />,
    title: "Marketing Campaigns",
    href: "/use-cases/marketing",
    count: "15 templates",
    description: "Create high-converting marketing campaigns across email, SMS, and push.",
    color: "from-amber-500 to-orange-500",
    bgColor: "bg-gradient-to-br from-amber-50 to-orange-50",
    stats: ["3.5x conversions", "42% open rate", "Multi-channel"],
  },
  {
    icon: <Shield className="h-5 w-5" />,
    title: "System Notifications",
    href: "/use-cases/notifications",
    count: "6 templates",
    description: "Enterprise-grade system alerts and monitoring notifications.",
    color: "from-slate-500 to-gray-500",
    bgColor: "bg-gradient-to-br from-slate-50 to-gray-50",
    stats: ["99.99% uptime", "Global infrastructure", "24/7 monitoring"],
  },
  {
    icon: <Key className="h-5 w-5" />,
    title: "Authentication & OTP",
    href: "/use-cases/authentication",
    count: "7 templates",
    description: "Secure authentication flows with OTP, magic links, and verification codes.",
    color: "from-indigo-500 to-violet-500",
    bgColor: "bg-gradient-to-br from-indigo-50 to-violet-50",
    stats: ["Bank-level security", "< 5s delivery", "Zero breaches"],
  },
  {
    icon: <Clock className="h-5 w-5" />,
    title: "Reminders & Scheduling",
    href: "/use-cases/reminders",
    count: "9 templates",
    description: "Automate appointment reminders, follow-ups, and scheduled notifications.",
    color: "from-teal-500 to-emerald-500",
    bgColor: "bg-gradient-to-br from-teal-50 to-emerald-50",
    stats: ["95% less no-shows", "Calendar integration", "AI timing"],
  },
];

export default function UseCasesGrid() {
  return (
    <section id="use-cases-grid" className="py-13 bg-white relative">
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
            <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 mb-4">
              <Zap className="h-4 w-4 text-gray-600" />
              <span className="text-sm font-semibold text-gray-700">
                6 COMPLETE USE CASES
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Communication Solutions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose from 6 professionally designed use cases with 57 pre-built 
              templates. Each solution is tailored for specific business needs.
            </p>
          </div>

          {/* Use Cases Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link
                  href={useCase.href}
                  className="block h-full"
                >
                  <div className="p-6 bg-white border border-gray-200 rounded-xl hover:border-gray-300 hover:shadow-xl transition-all h-full group-hover:scale-[1.02]">
                    {/* Icon & Badge */}
                    <div className="mb-6 flex items-start justify-between">
                      <div className={`rounded-xl p-3 ${useCase.bgColor}`}>
                        <div className={`text-white bg-gradient-to-br ${useCase.color} p-2 rounded-lg`}>
                          {useCase.icon}
                        </div>
                      </div>
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-white bg-gradient-to-r from-gray-700 to-gray-900 px-3 py-1 rounded-full">
                        {useCase.count}
                      </span>
                    </div>
                    
                    {/* Title & Description */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600">
                      {useCase.title}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {useCase.description}
                    </p>
                    
                    {/* Stats */}
                    <div className="space-y-2 mb-6">
                      {useCase.stats.map((stat, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{stat}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* CTA */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <span className="text-sm font-semibold text-indigo-600 group-hover:text-indigo-700">
                        Explore templates
                      </span>
                      <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-indigo-600 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Total Templates Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 border border-indigo-200">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    57 Pre-Built Templates
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Across all 6 use cases, you get access to 57 professionally 
                    designed templates that work out of the box. Customize and 
                    launch in minutes.
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-indigo-600">57</div>
                      <div className="text-sm text-gray-600">Total templates</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-indigo-600">6</div>
                      <div className="text-sm text-gray-600">Use cases</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-indigo-600">3</div>
                      <div className="text-sm text-gray-600">Channels each</div>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <div className="space-y-4">
                    {useCases.map((useCase) => (
                      <div key={useCase.title} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`h-8 w-8 rounded-lg ${useCase.bgColor} flex items-center justify-center`}>
                            <div className={`text-white bg-gradient-to-br ${useCase.color} p-1.5 rounded-md`}>
                              {useCase.icon}
                            </div>
                          </div>
                          <span className="text-sm text-gray-700">{useCase.title}</span>
                        </div>
                        <span className="text-sm font-semibold text-gray-900">
                          {useCase.count}
                        </span>
                      </div>
                    ))}
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