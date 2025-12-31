// MessagingHero.tsx - Dedicated hero for Messaging API product
"use client";
import { 
  MessageCircleMore, 
  Globe, 
  Zap, 
  Shield, 
  BarChart, 
  ArrowRight,
  Smartphone,
  Mail,
  MessageSquare
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const features = [
  {
    icon: <Globe className="h-5 w-5" />,
    title: "Global Reach",
    description: "Send messages to 190+ countries",
  },
  {
    icon: <Zap className="h-5 w-5" />,
    title: "99.99% Uptime",
    description: "Enterprise-grade reliability",
  },
  {
    icon: <Shield className="h-5 w-5" />,
    title: "Secure & Compliant",
    description: "GDPR, HIPAA, SOC2 compliant",
  },
  {
    icon: <BarChart className="h-5 w-5" />,
    title: "Real-time Analytics",
    description: "Track delivery & engagement",
  },
];

const channels = [
  {
    name: "SMS",
    icon: <Smartphone className="h-6 w-6" />,
    color: "from-cyan-500 to-blue-600",
    desc: "Bulk & transactional SMS",
  },
  {
    name: "WhatsApp",
    icon: <MessageSquare className="h-6 w-6" />,
    color: "from-emerald-500 to-green-600",
    desc: "Business API messaging",
  },
  {
    name: "Email",
    icon: <Mail className="h-6 w-6" />,
    color: "from-violet-500 to-purple-600",
    desc: "High-deliverability email",
  },
  {
    name: "Push",
    icon: <MessageCircleMore className="h-6 w-6" />,
    color: "from-yellow-500 to-orange-600",
    desc: "Mobile & web notifications",
  },
];

export default function MessagingHero() {
  return (
    <section className="relative overflow-hidden pt-4 pb-22 md:pt-6 md:pb-20">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/4 -translate-x-1/2">
          <div className="h-[600px] w-[600px] rounded-full bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-transparent blur-3xl" />
        </div>
        <div className="absolute right-0 top-0">
          <div className="h-[400px] w-[400px] rounded-full bg-gradient-to-l from-blue-500/10 to-transparent blur-3xl" />
        </div>
      </div>

      {/* Animated message lines */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"
            style={{
              top: `${20 + i * 12}%`,
              left: "-10%",
              width: "120%",
            }}
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-7xl">
          {/* Header section */}
          <div className="mb-16 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-50 to-blue-50 px-4 py-2 mb-6"
            >
              <MessageCircleMore className="h-4 w-4 text-cyan-600" />
              <span className="text-sm font-medium text-cyan-700">
                Messaging API
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6"
            >
              Reliable Messaging
              <span className="block bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                At Global Scale
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10"
            >
              Send transactional SMS, WhatsApp messages, emails, and push notifications 
              through a single API. Built for developers, trusted by enterprises.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            >
              <Link
                href="/signup"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/35 transition-all duration-300"
              >
                <MessageCircleMore className="h-5 w-5" />
                Start Free Trial
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/demo/messaging"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-8 py-4 text-base font-semibold text-gray-700 hover:border-gray-400 hover:shadow-md transition-all duration-300"
              >
                View Live Demo
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
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 hover:border-cyan-200 hover:shadow-xl transition-all duration-300"
                >
                  <div className="absolute right-0 top-0 -translate-y-1/2 translate-x-1/2">
                    <div className="h-20 w-20 rounded-full bg-gradient-to-r from-cyan-500/5 to-blue-500/5 group-hover:scale-125 transition-transform duration-300" />
                  </div>
                  
                  <div className="relative z-10">
                    <div className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-cyan-50 to-blue-50 p-3">
                      <div className="rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 p-2">
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

          {/* Messaging channels */}
          <div className="rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 p-8 md:p-12 overflow-hidden">
            <div className="relative">
              {/* Background pattern */}
              <div className="absolute right-0 top-0 opacity-10">
                <MessageCircleMore className="h-64 w-64" />
              </div>

              <div className="relative z-10">
                <div className="mb-10 max-w-2xl">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Unified Messaging Platform
                  </h2>
                  <p className="text-lg text-gray-300">
                    Manage all your communication channels through a single, powerful API.
                    No more juggling between different providers.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {channels.map((channel, index) => (
                    <motion.div
                      key={channel.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm p-6 hover:bg-white/10 transition-all duration-300"
                    >
                      <div className="mb-4">
                        <div className={`rounded-xl bg-gradient-to-br ${channel.color} p-3 w-fit`}>
                          {channel.icon}
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {channel.name}
                      </h3>
                      <p className="text-gray-300">
                        {channel.desc}
                      </p>
                      
                      {/* Hover line animation */}
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/50 to-transparent transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    </motion.div>
                  ))}
                </div>

                <div className="mt-10 pt-8 border-t border-white/10">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">
                        Ready to scale your messaging?
                      </h4>
                      <p className="text-gray-300">
                        Get started with 10,000 free messages monthly.
                      </p>
                    </div>
                    <Link
                      href="/signup?plan=messaging"
                      className="group inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-base font-semibold text-gray-900 hover:bg-gray-100 transition-colors"
                    >
                      Get Started Free
                      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust indicators */}
          <div className="mt-20">
            <div className="rounded-2xl border border-gray-200 bg-white p-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    Trusted by thousands of companies
                  </h3>
                  <p className="text-gray-600">
                    Delivering billions of messages with 99.99% reliability
                  </p>
                </div>
                <div className="flex items-center gap-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-900">10B+</div>
                    <div className="text-sm text-gray-500">Messages Sent</div>
                  </div>
                  <div className="h-12 w-px bg-gray-300" />
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-900">190+</div>
                    <div className="text-sm text-gray-500">Countries</div>
                  </div>
                  <div className="h-12 w-px bg-gray-300" />
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-900">&lt;50ms</div>
                    <div className="text-sm text-gray-500">Average Latency</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}