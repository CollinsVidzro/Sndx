// CTAGrid.tsx - Clean CTA section
"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function CTAGrid() {
  return (
    <section className="py-13 relative">
      {/* Grid Background */}
      <div className="absolute inset-0 -z-10 bg-white">
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
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Start Building Today
            </h2>
            <p className="text-gray-600">
              Join thousands of developers who trust Sendexa for their communication infrastructure
            </p>
          </motion.div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {[
              "No credit card required",
              "Free tier available",
              "24/7 developer support"
            ].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center justify-center gap-2"
              >
                <CheckCircle className="h-5 w-5 text-cyan-600" />
                <span className="text-gray-700">{item}</span>
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          >
            <Link
              href="/signup"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 px-8 py-4 font-semibold text-white hover:shadow-lg transition-all"
            >
              Get Started Free
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-8 py-4 font-semibold text-gray-700 hover:border-gray-400 transition-all"
            >
              Contact Sales
            </Link>
          </motion.div>

          {/* Footer Note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="text-sm text-gray-500"
          >
            Free forever plan includes 1,000 messages/month • No setup fees
          </motion.p>
        </div>
      </div>
    </section>
  );
}