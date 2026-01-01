// components/solutions/finance/FinanceHero.tsx
"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, CreditCard, ChevronRight, Shield, Lock } from "lucide-react";

export default function FinanceHero() {
  return (
    <section className="relative py-10 overflow-hidden">
      {/* Grid Background with Emerald Gradient */}
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
        
        {/* Emerald Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/20 to-transparent" />
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
              <Link href="/solutions" className="hover:text-emerald-600">
                Solutions
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-gray-700 font-medium">Finance</span>
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
                  FINANCIAL SOLUTIONS
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                <span className="block text-gray-900">Secure & Timely</span>
                <span className="block bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                  Financial Notifications
                </span>
              </h1>

              <p className="text-lg text-gray-600">
                Deliver critical financial notifications with bank-grade security 
                and reliability. Build trust with transparent, real-time communication.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="/signup?solution=finance"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-green-600 px-8 py-4 text-base font-semibold text-white shadow-lg hover:shadow-xl transition-all group"
                >
                  Start Free for Finance
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/demo/finance"
                  className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-8 py-4 text-base font-semibold text-gray-700 hover:border-gray-400 transition-all"
                >
                  View Finance Demo
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
              <div className="relative bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-8 border border-emerald-100">
                <div className="absolute -top-6 -right-6">
                  <div className="bg-gradient-to-br from-emerald-600 to-green-600 rounded-xl p-4">
                    <CreditCard className="h-8 w-8 text-white" />
                  </div>
                </div>
                
                {/* Security Badges */}
                <div className="flex flex-wrap gap-3 mb-6">
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-white rounded-lg border border-emerald-200">
                    <Shield className="h-4 w-4 text-emerald-600" />
                    <span className="text-sm font-medium text-gray-700">SOC 2</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-white rounded-lg border border-emerald-200">
                    <Lock className="h-4 w-4 text-emerald-600" />
                    <span className="text-sm font-medium text-gray-700">GDPR</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-white rounded-lg border border-emerald-200">
                    <Shield className="h-4 w-4 text-emerald-600" />
                    <span className="text-sm font-medium text-gray-700">PCI DSS</span>
                  </div>
                </div>
                
                {/* Notifications */}
                <div className="space-y-4">
                  <div className="bg-white rounded-xl p-4 border border-gray-200">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-emerald-50 flex items-center justify-center">
                        <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Payment Successful</div>
                        <div className="text-sm text-gray-500">$250.00 to Acme Inc.</div>
                      </div>
                      <div className="ml-auto text-sm text-emerald-600 font-medium">
                        ✓ Verified
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl p-4 border border-gray-200">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-green-50 flex items-center justify-center">
                        <Lock className="h-4 w-4 text-green-500" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Security Alert</div>
                        <div className="text-sm text-gray-500">New login detected</div>
                      </div>
                      <div className="ml-auto text-sm text-amber-600 font-medium">
                        ⚠️ Action
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl p-4 border border-gray-200">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-emerald-50 flex items-center justify-center">
                        <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Statement Ready</div>
                        <div className="text-sm text-gray-500">Monthly statement available</div>
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