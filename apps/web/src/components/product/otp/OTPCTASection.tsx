// components/product/otp/OTPCTASection.tsx
"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Shield, Lock, CheckCircle } from "lucide-react";

export default function OTPCTASection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-white to-gray-50 relative">
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
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r from-violet-500 to-purple-500">
              <Shield className="h-10 w-10 text-white" />
            </div>
          </motion.div>

          {/* Header */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Secure Your Application Today
          </h2>
          
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Join thousands of developers who trust Sendexa for enterprise-grade authentication
          </p>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: <CheckCircle className="h-5 w-5" />,
                title: "Free Tier",
                description: "1,000 OTPs/month"
              },
              {
                icon: <Lock className="h-5 w-5" />,
                title: "No Setup Fees",
                description: "Start securing immediately"
              },
              {
                icon: <ArrowRight className="h-5 w-5" />,
                title: "5-Minute Setup",
                description: "Get started in minutes"
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 justify-center"
              >
                <div className="text-violet-600">{benefit.icon}</div>
                <div className="text-left">
                  <div className="font-semibold text-gray-900">{benefit.title}</div>
                  <div className="text-sm text-gray-600">{benefit.description}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/signup"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 px-8 py-4 text-lg font-semibold text-white hover:shadow-xl transition-all"
            >
              Start Free Trial
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/demo"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-8 py-4 text-lg font-semibold text-gray-700 hover:border-gray-400 transition-all"
            >
              Schedule Security Audit
            </Link>
          </motion.div>

          {/* Trust Note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-8 text-sm text-gray-500"
          >
            Trusted by financial institutions and enterprises worldwide
          </motion.p>
        </div>
      </div>
    </section>
  );
}