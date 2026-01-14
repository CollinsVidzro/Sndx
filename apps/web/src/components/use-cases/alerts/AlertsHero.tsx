// components/use-cases/alerts/AlertsHero.tsx
"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, Bell, Shield, Zap, Clock, ChevronRight } from "lucide-react";

export default function AlertsHero() {
  const keyPoints = [
    { icon: <Bell className="h-4 w-4" />, text: "8 pre-built templates" },
    { icon: <Shield className="h-4 w-4" />, text: "Bank-level security" },
    { icon: <Zap className="h-4 w-4" />, text: "99.9% delivery rate" },
    { icon: <Clock className="h-4 w-4" />, text: "< 1 second delivery" },
  ];

  return (
    <section className="relative py-10 overflow-hidden">
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
        
        {/* Green/Blue Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/20 to-blue-50/20" />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Link href="/" className="hover:text-emerald-600">
                Home
              </Link>
              <ChevronRight className="h-4 w-4" />
              <Link href="/use-cases" className="hover:text-emerald-600">
                Use Cases
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-gray-700 font-medium">Transactional Alerts</span>
            </div>
          </motion.div>

          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2">
                <Sparkles className="h-4 w-4 text-emerald-600" />
                <span className="text-sm font-medium text-emerald-700">
                  TRANSACTIONAL ALERTS
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                <span className="block text-gray-900">Secure, Real-Time</span>
                <span className="block bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                  Transactional Alerts
                </span>
              </h1>

              <p className="text-lg text-gray-600">
                Deliver critical notifications instantly with 99.9% reliability. 
                Perfect for payments, security alerts, order updates, and system 
                notifications.
              </p>

              {/* Key Points */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                {keyPoints.map((point, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="flex-shrink-0 text-emerald-600">
                      {point.icon}
                    </div>
                    <span className="text-sm text-gray-700">{point.text}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="/templates/alerts"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg hover:shadow-xl transition-all group"
                >
                  Browse 8 Templates
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/demo/alerts"
                  className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-8 py-4 text-base font-semibold text-gray-700 hover:border-gray-400 transition-all"
                >
                  View Security Demo
                </Link>
              </div>
            </motion.div>

            {/* Hero Graphic */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl p-8 border border-emerald-100">
                <div className="absolute -top-6 -right-6">
                  <div className="bg-gradient-to-br from-emerald-600 to-blue-600 rounded-xl p-4">
                    <Bell className="h-8 w-8 text-white" />
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-white rounded-xl p-4 border border-gray-200">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-emerald-50 flex items-center justify-center">
                        <Shield className="h-5 w-5 text-emerald-500" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Security Alert</div>
                        <div className="text-sm text-gray-500">New login detected</div>
                      </div>
                      <div className="ml-auto text-xs text-emerald-600 font-semibold">
                        High Priority
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl p-4 border border-gray-200">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-blue-50 flex items-center justify-center">
                        <Zap className="h-5 w-5 text-blue-500" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Payment Confirmed</div>
                        <div className="text-sm text-gray-500">$249.99 received</div>
                      </div>
                      <div className="ml-auto text-xs text-emerald-600 font-semibold">
                        0.2s delivery
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl p-4 border border-gray-200">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-emerald-50 flex items-center justify-center">
                        <Clock className="h-5 w-5 text-emerald-500" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Order Shipped</div>
                        <div className="text-sm text-gray-500">Tracking: #XYZ789</div>
                      </div>
                      <div className="ml-auto text-xs text-emerald-600 font-semibold">
                        Real-time
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}