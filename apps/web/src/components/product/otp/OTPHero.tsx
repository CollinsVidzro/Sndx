// components/product/otp/OTPHero.tsx
"use client";
import { motion } from "framer-motion";
import { Shield, Lock,  ArrowRight,  Zap, Users } from "lucide-react";
import Link from "next/link";

export default function OTPHero() {
  return (
    <section className="py-12 relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 -z-10">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(to right, #e5e7eb 1px, transparent 1px),
              linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
        
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-50/30 via-white to-purple-50/30" />
        
        {/* Animated Shield */}
        <motion.div
          className="absolute right-10 top-1/4 opacity-10"
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        >
          <Shield className="h-64 w-64 text-violet-300" />
        </motion.div>
      </div>

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
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-purple-500 px-4 py-2 mb-6">
              <Shield className="h-4 w-4 text-white" />
              <span className="text-sm font-semibold text-white">
                OTP & 2FA SERVICE
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              <span className="block text-gray-900">Military-Grade</span>
              <span className="block bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                Authentication Security
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Secure your applications with enterprise-grade OTP and two-factor authentication. 
              Protect user accounts with industry-leading security standards.
            </p>
          </div>

          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: <Lock className="h-5 w-5" />,
                title: "Bank-Level Security",
                description: "SOC 2 Type II & GDPR compliant"
              },
              {
                icon: <Zap className="h-5 w-5" />,
                title: "Instant Delivery",
                description: "Sub-second OTP delivery globally"
              },
              {
                icon: <Users className="h-5 w-5" />,
                title: "Developer First",
                description: "Simple API, comprehensive SDKs"
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-xl p-6 text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-violet-50 mb-4">
                  <div className="text-violet-600">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 px-8 py-4 text-lg font-semibold text-white hover:shadow-xl transition-all"
            >
              Start Securing Your App
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/docs/otp"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-8 py-4 text-lg font-semibold text-gray-700 hover:border-gray-400 transition-all"
            >
              View Documentation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}