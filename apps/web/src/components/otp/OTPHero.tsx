// OtpHero.tsx - Dedicated hero for OTP & 2FA Service
"use client";
import { 
  Shield, 
  Lock, 
  Zap, 
  Smartphone, 
  CheckCircle,
  ArrowRight,
  Key,
  Fingerprint,
  EyeOff,
  Clock,
  Globe
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const features = [
  {
    icon: <Lock className="h-5 w-5" />,
    title: "Military-Grade Security",
    description: "End-to-end encrypted OTP delivery",
  },
  {
    icon: <Zap className="h-5 w-5" />,
    title: "99.99% Delivery Rate",
    description: "Guaranteed OTP delivery within seconds",
  },
  {
    icon: <Globe className="h-5 w-5" />,
    title: "Global Coverage",
    description: "Deliver OTPs to 190+ countries",
  },
  {
    icon: <EyeOff className="h-5 w-5" />,
    title: "Zero Phishing Risk",
    description: "Protected against SIM swap attacks",
  },
];

const useCases = [
  {
    title: "Account Login",
    description: "Secure user authentication",
    icon: <Key className="h-5 w-5" />,
    color: "from-violet-500 to-purple-600",
  },
  {
    title: "Transaction Verification",
    description: "Banking & payment confirmations",
    icon: <Fingerprint className="h-5 w-5" />,
    color: "from-emerald-500 to-green-600",
  },
  {
    title: "Password Reset",
    description: "Secure account recovery",
    icon: <Shield className="h-5 w-5" />,
    color: "from-cyan-500 to-blue-600",
  },
  {
    title: "Device Authorization",
    description: "New device verification",
    icon: <Smartphone className="h-5 w-5" />,
    color: "from-yellow-500 to-orange-600",
  },
];

const securityStandards = [
  "GDPR Compliant",
  "HIPAA Ready",
  "SOC2 Type II",
  "ISO 27001"
];

export default function OtpHero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-32 md:pt-28 md:pb-40">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        {/* Security pattern background */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(99,102,241,0.02)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px]" />
        
        {/* Gradient orbs */}
        <div className="absolute left-1/3 top-1/4 -translate-x-1/2 -translate-y-1/2">
          <div className="h-[500px] w-[500px] rounded-full bg-gradient-to-r from-violet-500/10 via-indigo-500/10 to-transparent blur-3xl" />
        </div>
        <div className="absolute right-1/3 bottom-1/4 translate-x-1/2 translate-y-1/2">
          <div className="h-[400px] w-[400px] rounded-full bg-gradient-to-l from-emerald-500/10 via-green-500/10 to-transparent blur-3xl" />
        </div>
        
        {/* Animated security grid */}
        <div className="absolute inset-0 opacity-30">
          <div className="h-full w-full bg-[linear-gradient(90deg,rgba(99,102,241,0.1)_1px,transparent_1px),linear-gradient(180deg,rgba(99,102,241,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>
      </div>

      {/* Animated OTP digits */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute font-mono font-bold text-sm text-violet-400/20 select-none"
            initial={{
              x: Math.random() * 100 + "vw",
              y: Math.random() * 100 + "vh",
              rotate: Math.random() * 360,
            }}
            animate={{
              y: [null, Math.random() * 100 + "vh"],
              opacity: [0, 0.3, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            }}
          >
            {Math.floor(Math.random() * 10)}
          </motion.div>
        ))}
      </div>

      {/* Animated secure connection lines */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg className="absolute inset-0 h-full w-full">
          {[...Array(6)].map((_, i) => (
            <motion.path
              key={i}
              d={`M${5 + i * 15}%,${10 + i * 5}% C${30 + i * 10}%,${40 + i * 10}% ${70 - i * 5}%,${60 - i * 10}% ${95 - i * 15}%,${90 - i * 5}%`}
              stroke="url(#secureGradient)"
              strokeWidth="1"
              fill="none"
              strokeDasharray="4,4"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: 1, 
                opacity: [0.05, 0.15, 0.05],
                strokeDashoffset: [0, -8] 
              }}
              transition={{ 
                duration: 6 + i,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.5
              }}
            />
          ))}
          <defs>
            <linearGradient id="secureGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.3" />
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
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-50 to-indigo-50 px-4 py-2 mb-6"
            >
              <Shield className="h-4 w-4 text-violet-600" />
              <span className="text-sm font-medium text-violet-700">
                2FA & OTP Service
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6"
            >
              Secure Authentication
              <span className="block bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                For Every User
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10"
            >
              Protect user accounts with military-grade two-factor authentication. 
              Deliver OTPs via SMS, email, or voice with 99.99% reliability.
            </motion.p>

            {/* Security standards badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap justify-center gap-3 mb-12"
            >
              {securityStandards.map((standard, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm border border-violet-100"
                >
                  <CheckCircle className="h-4 w-4 text-emerald-500" />
                  <span className="text-sm font-medium text-gray-700">
                    {standard}
                  </span>
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
                href="/signup?plan=otp"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-violet-500/25 hover:shadow-xl hover:shadow-violet-500/35 transition-all duration-300"
              >
                <Shield className="h-5 w-5" />
                Secure Your App
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/demo/otp"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-8 py-4 text-base font-semibold text-gray-700 hover:border-gray-400 hover:shadow-md transition-all duration-300"
              >
                Try OTP Demo
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
                  className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 hover:border-violet-200 hover:shadow-xl transition-all duration-300"
                >
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-violet-50 to-indigo-50 p-3">
                      <div className="rounded-lg bg-gradient-to-r from-violet-600 to-indigo-600 p-2">
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

          {/* Use cases showcase */}
          <div className="rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 p-8 md:p-12 overflow-hidden mb-20">
            <div className="relative">
              {/* Background shield icon */}
              <div className="absolute right-0 top-0 opacity-10">
                <Shield className="h-64 w-64" />
              </div>

              <div className="relative z-10">
                <div className="mb-10 max-w-2xl">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Secure Every Critical Action
                  </h2>
                  <p className="text-lg text-gray-300">
                    From user logins to financial transactions—add an extra layer 
                    of security where it matters most.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {useCases.map((useCase, index) => (
                    <motion.div
                      key={useCase.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm p-6 hover:bg-white/10 transition-all duration-300"
                    >
                      <div className="mb-4">
                        <div className={`rounded-xl bg-gradient-to-br ${useCase.color} p-3 w-fit`}>
                          {useCase.icon}
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {useCase.title}
                      </h3>
                      <p className="text-gray-300">
                        {useCase.description}
                      </p>
                      
                      {/* Animated verification dot */}
                      <div className="absolute right-4 top-4">
                        <div className="relative">
                          <div className="h-2 w-2 rounded-full bg-emerald-400 group-hover:animate-ping" />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Delivery methods */}
                <div className="mt-12 pt-8 border-t border-white/10">
                  <h4 className="text-xl font-semibold text-white mb-6 text-center">
                    Deliver OTPs via Multiple Channels
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                      { name: "SMS", desc: "Global SMS delivery", time: "<5s", color: "from-cyan-500 to-blue-600" },
                      { name: "Email", desc: "Transactional email", time: "<2s", color: "from-emerald-500 to-green-600" },
                      { name: "Voice", desc: "Phone call delivery", time: "<10s", color: "from-violet-500 to-purple-600" },
                    ].map((channel) => (
                      <div key={channel.name} className="rounded-xl bg-white/5 p-6 text-center">
                        <div className="inline-flex rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 p-3 mb-4">
                          <Clock className="h-6 w-6 text-gray-300" />
                        </div>
                        <div className="text-2xl font-bold text-white mb-2">{channel.time}</div>
                        <div className="text-sm text-gray-300">Average Delivery Time</div>
                        <div className="mt-4 pt-4 border-t border-white/10">
                          <div className="text-lg font-semibold text-white mb-1">{channel.name}</div>
                          <div className="text-sm text-gray-400">{channel.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Security stats */}
          <div className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { value: "99.99%", label: "Delivery Success Rate", icon: <CheckCircle className="h-6 w-6" /> },
                { value: "<3s", label: "Average Delivery Time", icon: <Zap className="h-6 w-6" /> },
                { value: "190+", label: "Countries Covered", icon: <Globe className="h-6 w-6" /> },
                { value: "Zero", label: "Reported Breaches", icon: <Shield className="h-6 w-6" /> },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="rounded-2xl border border-gray-200 bg-white p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="mb-4 inline-flex rounded-lg bg-gradient-to-br from-violet-50 to-indigo-50 p-3">
                    <div className="text-violet-600">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Integration CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="text-center"
          >
            <div className="rounded-2xl bg-gradient-to-r from-violet-50 to-indigo-50 p-8 border border-violet-100">
              <div className="max-w-2xl mx-auto">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Start Securing Your Users Today
                </h3>
                <p className="text-gray-600 mb-8">
                  Get 1,000 free OTPs monthly. Easy integration with comprehensive 
                  documentation and SDKs for all major platforms.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/docs/otp"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-violet-600 bg-white px-8 py-3 text-base font-semibold text-violet-700 hover:bg-violet-50 transition-colors"
                  >
                    View API Docs
                  </Link>
                  <Link
                    href="/signup?plan=otp"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-8 py-3 text-base font-semibold text-white shadow-lg shadow-violet-500/25 hover:shadow-xl hover:shadow-violet-500/35 transition-all duration-300"
                  >
                    Get Started Free
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
                <div className="mt-6 text-sm text-gray-500">
                  No credit card required • 1,000 free OTPs monthly • Cancel anytime
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}