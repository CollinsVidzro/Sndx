
// components/about/AboutHero.tsx - Updated Version
"use client";
import { motion } from "framer-motion";
import { Building, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function AboutHero() {
  return (
    <section className="relative py-13  overflow-hidden bg-gradient-to-b from-white via-cyan-50/20 to-white">
      {/* Abstract Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
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
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-100 px-4 py-2 mb-6"
            >
              <Building className="h-4 w-4 text-cyan-600" />
              <span className="text-sm font-semibold text-cyan-700 tracking-wide">
                ABOUT SENDEXA
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8"
            >
              <span className="block text-gray-900 mb-2">Building the Future of</span>
              <span className="block bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                Global Infrastructure
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed"
            >
              We&apos;re creating the foundational layer for modern businesses to communicate, 
              authenticate, and transact globally. One unified platform for all your 
              infrastructure needs.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 px-8 py-3 font-semibold text-white hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
              >
                Contact Sales
                <ChevronRight className="h-5 w-5" />
              </Link>
              <Link
                href="/docs"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-8 py-3 font-semibold text-gray-900 hover:border-gray-400 hover:shadow-sm transition-all"
              >
                View Documentation
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}