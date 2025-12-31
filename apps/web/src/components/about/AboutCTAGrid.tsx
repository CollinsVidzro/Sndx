// components/about/AboutCTAGrid.tsx
"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Briefcase, MessageSquare, Globe, Shield } from "lucide-react";

export default function AboutCTAGrid() {
  return (
    <section className="py-13 relative">
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
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Join Us on Our Mission
            </h2>
            <p className="text-gray-600">
              Whether you&apos;re building with our APIs or building our platform with us
            </p>
          </motion.div>

          {/* Action Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="p-8 bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-100 rounded-2xl">
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white mb-4">
                    <Globe className="h-6 w-6 text-cyan-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Build with Us</h3>
                  <p className="text-gray-600 mb-6">
                    Start building your communication and payment infrastructure with our APIs
                  </p>
                </div>
                <Link
                  href="/signup"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 px-8 py-3 font-semibold text-white hover:shadow-lg transition-all"
                >
                  Get Started Free
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="p-8 bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-100 rounded-2xl">
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white mb-4">
                    <Briefcase className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Build Our Platform</h3>
                  <p className="text-gray-600 mb-6">
                    Join our team and help build the future of communication infrastructure
                  </p>
                </div>
                <Link
                  href="/careers"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-green-600 px-8 py-3 font-semibold text-white hover:shadow-lg transition-all"
                >
                  View Open Roles
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Additional Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 pt-8 border-t border-gray-200"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link
                href="/contact"
                className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-xl hover:border-cyan-200 transition-all"
              >
                <MessageSquare className="h-5 w-5 text-gray-600" />
                <span className="font-medium text-gray-900">Contact Us</span>
              </Link>
              <Link
                href="/press"
                className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-xl hover:border-cyan-200 transition-all"
              >
                <Globe className="h-5 w-5 text-gray-600" />
                <span className="font-medium text-gray-900">Press Kit</span>
              </Link>
              <Link
                href="/blog"
                className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-xl hover:border-cyan-200 transition-all"
              >
                <div className="h-5 w-5 text-gray-600">📰</div>
                <span className="font-medium text-gray-900">Blog</span>
              </Link>
              <Link
                href="/security"
                className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-xl hover:border-cyan-200 transition-all"
              >
                <Shield className="h-5 w-5 text-gray-600" />
                <span className="font-medium text-gray-900">Security</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}