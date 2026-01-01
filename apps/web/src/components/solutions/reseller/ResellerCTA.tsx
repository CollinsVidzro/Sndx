// components/solutions/reseller/ResellerCTA.tsx
"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle, Briefcase, DollarSign } from "lucide-react";

export default function ResellerCTA() {
  return (
    <section className="py-13 relative">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-50 to-violet-50">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(to right, #6366f1 1px, transparent 1px),
              linear-gradient(to bottom, #6366f1 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            {/* Icons */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex justify-center gap-4 mb-8"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600">
                <Briefcase className="h-8 w-8 text-white" />
              </div>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600">
                <DollarSign className="h-8 w-8 text-white" />
              </div>
            </motion.div>

            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Ready to Build Your Reseller Business?
              </h2>
              <p className="text-gray-600">
                Join hundreds of successful agencies and partners using our 
                white-label platform to build recurring revenue streams.
              </p>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
            >
              {[
                "Up to 35% commission",
                "Full white-label branding",
                "Dedicated partner support",
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              ].map((item, index) => (
                <div
                  key={item}
                  className="flex items-center justify-center gap-2 p-3 bg-white/80 rounded-lg backdrop-blur-sm"
                >
                  <CheckCircle className="h-5 w-5 text-emerald-500" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
            >
              <Link
                href="/apply/reseller"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-8 py-4 font-semibold text-white hover:shadow-lg transition-all group"
              >
                Apply to Become a Reseller
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact/reseller"
                className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-8 py-4 font-semibold text-gray-700 hover:border-gray-400 transition-all"
              >
                Talk to Partner Manager
              </Link>
            </motion.div>

            {/* Footer Note */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="text-sm text-gray-500"
            >
              <p className="mb-2">
                No upfront fees • Monthly revenue share • Marketing support included
              </p>
              <p>
                Have questions about the program?{" "}
                <Link href="/partner/faq" className="text-indigo-600 hover:text-indigo-700">
                  Read our Partner FAQ
                </Link>
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}