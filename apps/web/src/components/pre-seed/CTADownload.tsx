// components/pre-seed/CTADownload.tsx
"use client";
import { motion } from "framer-motion";
import { ArrowDown, FileText, Calendar, Mail } from "lucide-react";
import Link from "next/link";

export default function CTADownload() {
  return (
    <section id="pitch-deck" className="py-20 relative overflow-hidden bg-gradient-to-br from-gray-900 to-blue-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, #ffffff 1px, transparent 1px),
              linear-gradient(to bottom, #ffffff 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Invest?
              </h2>
              <p className="text-gray-300 text-lg">
                Download our detailed pitch deck and financial projections
              </p>
            </motion.div>

            {/* Download Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-8 mb-8"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500">
                    <FileText className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="text-white font-semibold">
                      Sendexa Pre-Seed Pitch Deck
                    </div>
                    <div className="text-gray-300 text-sm">
                      Includes market analysis, financial projections, and team details
                    </div>
                  </div>
                </div>
                <div className="text-sm text-gray-300">
                  25 Slides • Updated Feb 2024
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {[
                  "Market Opportunity",
                  "Financial Projections",
                  "Team & Advisors",
                  "Product Roadmap",
                  "Competitive Analysis",
                  "Investment Terms"
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center justify-center gap-2 p-3 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10"
                  >
                    <div className="w-2 h-2 rounded-full bg-cyan-500" />
                    <span className="text-gray-200 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/downloads/sendexa-pre-seed-pitch-deck.pdf"
                className="inline-flex items-center justify-center gap-2 w-full rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 px-8 py-4 font-semibold text-white hover:shadow-lg transition-all group"
              >
                Download Full Pitch Deck
                <ArrowDown className="h-5 w-5 transition-transform group-hover:translate-y-1" />
              </Link>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="https://cal.com/sendexa/investor-call"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-gray-900 hover:shadow-lg transition-all"
              >
                <Calendar className="h-5 w-5" />
                Schedule Investor Call
              </Link>
              <Link
                href="mailto:support@sendexa.co"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 px-8 py-4 font-semibold text-white hover:bg-white/20 transition-all"
              >
                <Mail className="h-5 w-5" />
                Email Investors Relations
              </Link>
            </motion.div>

            {/* Footer Note */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="text-sm text-gray-400 mt-8 pt-8 border-t border-white/10"
            >
              <p>
                All investment materials are confidential. By downloading, you agree to keep this information private.
              </p>
              <p className="mt-2">
                © 2026 Sendexa. All rights reserved.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}