// components/pre-seed/PreSeedHero.tsx
"use client";
import { motion } from "framer-motion";
import { TrendingUp, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function PreSeedHero() {
  return (
    <section className="relative py-5 overflow-hidden bg-gradient-to-b from-white via-blue-50/20 to-white">
      {/* Abstract Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100 px-4 py-2 mb-6"
            >
              <TrendingUp className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-700 tracking-wide">
                PRE-SEED INVESTMENT OPPORTUNITY
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8"
            >
              <span className="block text-gray-900 mb-2">
                Invest in Ghana&apos;s
              </span>
              <span className="block bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 bg-clip-text text-transparent">
                Messaging Infrastructure
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed"
            >
              Sendexa is raising a <strong>$250K–$300K pre-seed round</strong> to
              build reliable SMS, OTP, and voice infrastructure for businesses
              in Ghana, starting with a developer-first platform.
            </motion.p>

            {/* Key Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
            >
              {[
                { value: "$1.8M–$2.0M", label: "Valuation Cap" },
                { value: "15%–20%", label: "Discount" },
                { value: "$250K–$300K", label: "Raise Target" },
                { value: "~13%–15%", label: "Target Dilution" },
              ].map((metric) => (
                <div key={metric.label} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-gray-900">
                    {metric.value}
                  </div>
                  <div className="text-sm text-gray-600 mt-1">
                    {metric.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link
                href="#pitch-deck"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 px-8 py-4 font-semibold text-white hover:shadow-lg hover:shadow-blue-500/25 transition-all"
              >
                View Pitch Deck
                <ChevronRight className="h-5 w-5" />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-8 py-4 font-semibold text-gray-900 hover:border-gray-400 hover:shadow-sm transition-all"
              >
                Contact Founder
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
