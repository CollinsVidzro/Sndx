// EmailHero.tsx - Dedicated hero for Email Service
"use client";
import { 
  Mail, 
  Zap, 
  Shield, 
  ArrowRight,
  Globe,
  Inbox,
  Send,
  Clock,
  TrendingUp
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const features = [
  {
    icon: <Inbox className="h-5 w-5" />,
    title: "99.9% Deliverability",
    description: "Industry-leading inbox placement rates",
  },
  {
    icon: <Zap className="h-5 w-5" />,
    title: "Real-time Analytics",
    description: "Track opens, clicks, and engagement",
  },
  {
    icon: <Shield className="h-5 w-5" />,
    title: "Enterprise Security",
    description: "SOC2, GDPR, and HIPAA compliant",
  },
  {
    icon: <Globe className="h-5 w-5" />,
    title: "Global Infrastructure",
    description: "Deliver to any inbox worldwide",
  },
];

const emailTypes = [
  {
    name: "Transactional",
    description: "Order confirmations, receipts, alerts",
    icon: <Send className="h-6 w-6" />,
    color: "from-emerald-500 to-green-600",
    stats: "<1s delivery",
  },
  {
    name: "Marketing",
    description: "Newsletters, campaigns, promotions",
    icon: <TrendingUp className="h-6 w-6" />,
    color: "from-cyan-500 to-blue-600",
    stats: "99%+ deliverability",
  },
  {
    name: "Bulk",
    description: "Mass notifications, announcements",
    icon: <Mail className="h-6 w-6" />,
    color: "from-violet-500 to-purple-600",
    stats: "Millions/hour",
  },
];

const integrations = [
  "React",
  "Node.js",
  "Python",
  "PHP",
  "Ruby",
  "Java",
  "Go",
  ".NET"
];

export default function EmailHero() {
  return (
    <section className="relative overflow-hidden pt-10 pb-16 md:pt-18 md:pb-20">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient orbs */}
        <div className="absolute left-1/4 top-1/3 -translate-x-1/2 -translate-y-1/2">
          <div className="h-[600px] w-[600px] rounded-full bg-gradient-to-r from-emerald-500/10 via-green-500/10 to-transparent blur-3xl" />
        </div>
        <div className="absolute right-1/4 bottom-1/3 translate-x-1/2 translate-y-1/2">
          <div className="h-[500px] w-[500px] rounded-full bg-gradient-to-l from-cyan-500/10 via-blue-500/10 to-transparent blur-3xl" />
        </div>
        
        {/* Email pattern background */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full bg-[linear-gradient(45deg,transparent_98%,rgba(16,185,129,0.3)_100%)] bg-[size:60px_60px]" />
        </div>
      </div>

      {/* Animated email lines */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              top: `${10 + i * 6}%`,
              left: "-50px",
            }}
            animate={{
              x: ["-100px", "calc(100vw + 100px)"],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            }}
          >
            <Mail className="h-4 w-4 text-emerald-400/20" />
          </motion.div>
        ))}
      </div>

      {/* Animated delivery paths */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg className="absolute inset-0 h-full w-full">
          {[...Array(8)].map((_, i) => (
            <motion.path
              key={i}
              d={`M${0}%,${30 + i * 8}% C${20 + i * 5}%,${40 + i * 10}% ${60 + i * 5}%,${50 - i * 5}% ${100}%,${60 + i * 8}%`}
              stroke="url(#emailGradient)"
              strokeWidth="1"
              fill="none"
              strokeDasharray="3,3"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: 1, 
                opacity: [0.05, 0.2, 0.05],
                strokeDashoffset: [0, -6] 
              }}
              transition={{ 
                duration: 5 + i,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.3
              }}
            />
          ))}
          <defs>
            <linearGradient id="emailGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-7xl">
          {/* Header section */}
          <div className="mb-16 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-50 to-green-50 px-4 py-2 mb-6"
            >
              <Mail className="h-4 w-4 text-emerald-600" />
              <span className="text-sm font-medium text-emerald-700">
                Email Service
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6"
            >
              Reliable Email Delivery
              <span className="block bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                At Any Scale
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10"
            >
              Send transactional, marketing, and bulk emails with 99.9% deliverability. 
              Built for developers, trusted by enterprises worldwide.
            </motion.p>

            {/* Quick stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap justify-center gap-6 mb-12"
            >
              {[
                { value: "99.9%", label: "Deliverability Rate" },
                { value: "<1s", label: "Average Send Time" },
                { value: "100M+", label: "Emails Monthly" },
                { value: "24/7", label: "Monitoring" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            >
              <Link
                href="/signup?plan=email"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-green-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:shadow-emerald-500/35 transition-all duration-300"
              >
                <Mail className="h-5 w-5" />
                Start Sending Free
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/demo/email"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-8 py-4 text-base font-semibold text-gray-700 hover:border-gray-400 hover:shadow-md transition-all duration-300"
              >
                Try Email Demo
              </Link>
            </motion.div>
          </div>

          {/* Features grid */}
          <div className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 hover:border-emerald-200 hover:shadow-xl transition-all duration-300"
                >
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-emerald-50 to-green-50 p-3">
                      <div className="rounded-lg bg-gradient-to-r from-emerald-600 to-green-600 p-2">
                        {feature.icon}
                      </div>
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Email types showcase */}
          <div className="rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 p-8 md:p-12 overflow-hidden mb-20">
            <div className="relative">
              {/* Background mail icon */}
              <div className="absolute right-0 top-0 opacity-10">
                <Mail className="h-64 w-64" />
              </div>

              <div className="relative z-10">
                <div className="mb-10 max-w-2xl">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Email Types for Every Use Case
                  </h2>
                  <p className="text-lg text-gray-300">
                    From time-sensitive transactional emails to large-scale marketing 
                    campaigns—all managed through a single API.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {emailTypes.map((type, index) => (
                    <motion.div
                      key={type.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm p-6 hover:bg-white/10 transition-all duration-300"
                    >
                      <div className="mb-4">
                        <div className={`rounded-xl bg-gradient-to-br ${type.color} p-3 w-fit`}>
                          {type.icon}
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {type.name}
                      </h3>
                      <p className="text-gray-300 mb-4">
                        {type.description}
                      </p>
                      <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1">
                        <Clock className="h-3 w-3 text-emerald-400" />
                        <span className="text-sm text-white">{type.stats}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Analytics preview */}
                <div className="mt-12 pt-8 border-t border-white/10">
                  <h4 className="text-xl font-semibold text-white mb-6">
                    Comprehensive Analytics
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {[
                      { metric: "Open Rate", value: "98.2%", change: "+2.1%" },
                      { metric: "Click Rate", value: "24.7%", change: "+5.3%" },
                      { metric: "Delivery Rate", value: "99.9%", change: "+0.4%" },
                      { metric: "Spam Rate", value: "0.02%", change: "-0.01%" },
                    ].map((stat) => (
                      <div key={stat.metric} className="rounded-xl bg-white/5 p-4">
                        <div className="text-sm text-gray-400 mb-1">{stat.metric}</div>
                        <div className="flex items-end gap-2">
                          <div className="text-2xl font-bold text-white">{stat.value}</div>
                          <div className={`text-sm ${stat.change.startsWith('+') ? 'text-emerald-400' : 'text-rose-400'}`}>
                            {stat.change}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Integrations */}
          <div className="mb-20">
            <div className="text-center mb-10">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Integrate in Minutes
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Pre-built SDKs and comprehensive documentation for all major 
                programming languages and frameworks.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {integrations.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.05 }}
                  className="rounded-xl border border-gray-200 bg-white px-4 py-2 hover:border-emerald-300 hover:shadow-md transition-all"
                >
                  <span className="text-sm font-medium text-gray-700">{tech}</span>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/docs/email"
                className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium"
              >
                View all integrations and SDKs
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {[
              { 
                value: "Enterprise", 
                label: "Infrastructure", 
                description: "Multi-region, auto-scaling clusters" 
              },
              { 
                value: "24/7", 
                label: "Support", 
                description: "Expert team always available" 
              },
              { 
                value: "99.95%", 
                label: "SLA", 
                description: "Uptime guarantee" 
              },
              { 
                value: "Zero", 
                label: "Lock-in", 
                description: "Migrate anytime, no penalties" 
              },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="rounded-2xl border border-gray-200 bg-white p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-2xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-gray-700 mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-600">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="text-center"
          >
            <div className="rounded-2xl bg-gradient-to-r from-emerald-50 to-green-50 p-8 border border-emerald-100">
              <div className="max-w-2xl mx-auto">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Start with 10,000 Free Emails Monthly
                </h3>
                <p className="text-gray-600 mb-8">
                  No credit card required. Scale as you grow with transparent 
                  pricing and no hidden fees.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/pricing/email"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-600 bg-white px-8 py-3 text-base font-semibold text-emerald-700 hover:bg-emerald-50 transition-colors"
                  >
                    View Pricing
                  </Link>
                  <Link
                    href="/signup?plan=email"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-green-600 px-8 py-3 text-base font-semibold text-white shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:shadow-emerald-500/35 transition-all duration-300"
                  >
                    Get Started Free
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
                <div className="mt-6 text-sm text-gray-500">
                  • 10,000 free emails monthly • No credit card required • Cancel anytime
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}