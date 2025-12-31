// components/product/messaging/MessagingHero.tsx
"use client";
import { motion } from "framer-motion";
import { MessageCircleMore, ArrowRight, CheckCircle, Zap, Shield } from "lucide-react";
import Link from "next/link";

export default function MessagingHero() {
  return (
    <section className="py-12  relative overflow-hidden">
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
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/30 via-white to-blue-50/30" />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-2 mb-6">
              <MessageCircleMore className="h-4 w-4 text-white" />
              <span className="text-sm font-semibold text-white">
                MESSAGING API
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              <span className="block text-gray-900">Reliable</span>
              <span className="block bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                Multi-Channel Messaging
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Send SMS, WhatsApp, and push notifications through a single, unified API. 
              Built for scale with enterprise-grade reliability.
            </p>
          </div>

          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: <Zap className="h-5 w-5" />,
                title: "High Performance",
                description: "99.99% uptime with sub-second delivery"
              },
              {
                icon: <Shield className="h-5 w-5" />,
                title: "Enterprise Security",
                description: "SOC 2 Type II compliant"
              },
              {
                icon: <CheckCircle className="h-5 w-5" />,
                title: "Global Coverage",
                description: "200+ countries, direct carrier connections"
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-xl p-6 text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-cyan-50 mb-4">
                  <div className="text-cyan-600">
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
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 px-8 py-4 text-lg font-semibold text-white hover:shadow-xl transition-all"
            >
              Start Building Free
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/docs/messaging"
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