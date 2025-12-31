// PaymentHero.tsx - Dedicated hero for Payment Service product
"use client";
import { 
  CreditCard, 
  Shield, 
  Zap, 
  Globe, 
  Lock, 
  CheckCircle,
  ArrowRight,
  DollarSign,
  TrendingUp,
  Clock
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const features = [
  {
    icon: <Shield className="h-5 w-5" />,
    title: "Bank-Level Security",
    description: "PCI DSS Level 1 compliant, end-to-end encryption",
  },
  {
    icon: <Zap className="h-5 w-5" />,
    title: "Instant Settlements",
    description: "Real-time processing with 99.9% uptime",
  },
  {
    icon: <Globe className="h-5 w-5" />,
    title: "Global Payments",
    description: "Accept payments in 130+ currencies",
  },
  {
    icon: <Lock className="h-5 w-5" />,
    title: "Fraud Prevention",
    description: "AI-powered fraud detection system",
  },
];

const paymentMethods = [
  {
    name: "Credit Cards",
    icon: <CreditCard className="h-6 w-6" />,
    color: "from-violet-500 to-purple-600",
    supported: ["Visa", "Mastercard", "Amex", "Discover"],
  },
  {
    name: "Digital Wallets",
    icon: <DollarSign className="h-6 w-6" />,
    color: "from-emerald-500 to-green-600",
    supported: ["Apple Pay", "Google Pay", "PayPal"],
  },
  {
    name: "Bank Transfer",
    icon: <TrendingUp className="h-6 w-6" />,
    color: "from-cyan-500 to-blue-600",
    supported: ["ACH", "SEPA", "Wire Transfer"],
  },
  {
    name: "Alternative",
    icon: <Globe className="h-6 w-6" />,
    color: "from-yellow-500 to-orange-600",
    supported: ["Crypto", "Mobile Money", "Local Methods"],
  },
];

const benefits = [
  "No setup fees",
  "Competitive pricing",
  "24/7 support",
  "Easy integration"
];

export default function PaymentHero() {
  return (
    <section className="relative overflow-hidden pt-4 pb-32 md:pt-10 md:pb-40">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient orbs */}
        <div className="absolute left-1/4 top-1/4 -translate-x-1/2 -translate-y-1/2">
          <div className="h-[500px] w-[500px] rounded-full bg-gradient-to-r from-violet-500/10 via-purple-500/10 to-transparent blur-3xl" />
        </div>
        <div className="absolute right-1/4 bottom-1/4 translate-x-1/2 translate-y-1/2">
          <div className="h-[400px] w-[400px] rounded-full bg-gradient-to-l from-emerald-500/10 via-green-500/10 to-transparent blur-3xl" />
        </div>
        
        {/* Animated security rings */}
        <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2">
          <motion.div
            className="absolute h-96 w-96 rounded-full border border-violet-200/20"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute h-64 w-64 rounded-full border border-emerald-200/20"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />
        </div>
      </div>

      {/* Animated transaction lines */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-[1px] bg-gradient-to-r from-transparent via-violet-400/20 to-transparent"
            style={{
              top: `${15 + i * 8}%`,
              left: "-10%",
              width: "120%",
              transform: `rotate(${Math.random() * 10 - 5}deg)`,
            }}
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 8 + Math.random() * 8,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 4,
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
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-50 to-purple-50 px-4 py-2 mb-6"
            >
              <CreditCard className="h-4 w-4 text-violet-600" />
              <span className="text-sm font-medium text-violet-700">
                Payment Service
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6"
            >
              Secure Payments
              <span className="block bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                Made Simple
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10"
            >
              Accept payments globally with our developer-friendly API. 
              Built with security at its core, designed for scale.
            </motion.p>

            {/* Benefits badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap justify-center gap-3 mb-12"
            >
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm border border-gray-200"
                >
                  <CheckCircle className="h-4 w-4 text-emerald-500" />
                  <span className="text-sm font-medium text-gray-700">
                    {benefit}
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
                href="/signup?plan=payment"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-violet-500/25 hover:shadow-xl hover:shadow-violet-500/35 transition-all duration-300"
              >
                <CreditCard className="h-5 w-5" />
                Start Processing Payments
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/demo/payment"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-8 py-4 text-base font-semibold text-gray-700 hover:border-gray-400 hover:shadow-md transition-all duration-300"
              >
                View Payment Demo
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
                  <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-violet-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-violet-50 to-purple-50 p-3">
                      <div className="rounded-lg bg-gradient-to-r from-violet-600 to-purple-600 p-2">
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

          {/* Payment methods showcase */}
          <div className="rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 p-8 md:p-12 overflow-hidden mb-20">
            <div className="relative">
              {/* Background pattern */}
              <div className="absolute right-0 top-0 opacity-10">
                <CreditCard className="h-64 w-64" />
              </div>

              <div className="relative z-10">
                <div className="mb-10 max-w-2xl">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Accept All Payment Methods
                  </h2>
                  <p className="text-lg text-gray-300">
                    From credit cards to digital wallets and local payment methods—all 
                    through a single, unified API.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {paymentMethods.map((method, index) => (
                    <motion.div
                      key={method.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm p-6 hover:bg-white/10 transition-all duration-300"
                    >
                      <div className="mb-4">
                        <div className={`rounded-xl bg-gradient-to-br ${method.color} p-3 w-fit`}>
                          {method.icon}
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-4">
                        {method.name}
                      </h3>
                      <div className="space-y-2">
                        {method.supported.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                            <span className="text-sm text-gray-300">{item}</span>
                          </div>
                        ))}
                      </div>
                      
                      {/* Hover glow */}
                      <div className="absolute inset-0 rounded-2xl border border-white/0 group-hover:border-white/10 transition-colors duration-300" />
                    </motion.div>
                  ))}
                </div>

                <div className="mt-12 pt-8 border-t border-white/10">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="h-5 w-5 text-emerald-400" />
                        <span className="text-sm font-medium text-emerald-400">Quick Setup</span>
                      </div>
                      <h4 className="text-xl font-semibold text-white mb-2">
                        Go live in minutes, not weeks
                      </h4>
                      <p className="text-gray-300">
                        Complete documentation and pre-built SDKs for all major platforms.
                      </p>
                    </div>
                    <Link
                      href="/docs/payment"
                      className="group inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-base font-semibold text-gray-900 hover:bg-gray-100 transition-colors"
                    >
                      View Documentation
                      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats & trust indicators */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: "99.9%", label: "Payment Success Rate", icon: <TrendingUp className="h-6 w-6" /> },
              { value: "&lt;500ms", label: "Average Processing Time", icon: <Zap className="h-6 w-6" /> },
              { value: "130+", label: "Currencies Supported", icon: <Globe className="h-6 w-6" /> },
              { value: "24/7", label: "Fraud Monitoring", icon: <Shield className="h-6 w-6" /> },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="rounded-2xl border border-gray-200 bg-white p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="mb-4 inline-flex rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 p-3">
                  <div className="text-gray-700">
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

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="mt-20 text-center"
          >
            <div className="rounded-2xl bg-gradient-to-r from-violet-50 to-purple-50 p-8 border border-violet-100">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Ready to simplify your payment processing?
              </h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Join thousands of businesses processing payments securely with Sendexa.
                No hidden fees, transparent pricing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/pricing/payment"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-violet-600 bg-white px-8 py-3 text-base font-semibold text-violet-700 hover:bg-violet-50 transition-colors"
                >
                  View Pricing
                </Link>
                <Link
                  href="/contact/sales"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 px-8 py-3 text-base font-semibold text-white shadow-lg shadow-violet-500/25 hover:shadow-xl hover:shadow-violet-500/35 transition-all duration-300"
                >
                  Contact Sales
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}