// components/solutions/ecommerce/EcommerceHero.tsx
"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, ShoppingCart, ChevronRight } from "lucide-react";

export default function EcommerceHero() {
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
        
        {/* Blue Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/20 to-transparent" />
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
              <Link href="/" className="hover:text-cyan-600">
                Home
              </Link>
              <ChevronRight className="h-4 w-4" />
              <Link href="/solutions" className="hover:text-cyan-600">
                Solutions
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-gray-700 font-medium">E-commerce</span>
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
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2">
                <Sparkles className="h-4 w-4 text-blue-600" />
                <span className="text-sm font-medium text-blue-700">
                  E-COMMERCE SOLUTION
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                <span className="block text-gray-900">Boost Sales with</span>
                <span className="block bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Automated Communication
                </span>
              </h1>

              <p className="text-lg text-gray-600">
                Drive conversions, reduce cart abandonment, and enhance customer 
                experience with automated messaging tailored for e-commerce businesses.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="/signup?solution=ecommerce"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 px-8 py-4 text-base font-semibold text-white shadow-lg hover:shadow-xl transition-all group"
                >
                  Start Free for E-commerce
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/demo/ecommerce"
                  className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-8 py-4 text-base font-semibold text-gray-700 hover:border-gray-400 transition-all"
                >
                  View Demo
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
              <div className="relative bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100">
                <div className="absolute -top-6 -right-6">
                  <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl p-4">
                    <ShoppingCart className="h-8 w-8 text-white" />
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-white rounded-xl p-4 border border-gray-200">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-blue-50 flex items-center justify-center">
                        <div className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Order Confirmed!</div>
                        <div className="text-sm text-gray-500">Thank you for your purchase</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl p-4 border border-gray-200">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-cyan-50 flex items-center justify-center">
                        <div className="h-2 w-2 rounded-full bg-cyan-500 animate-pulse" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Your order has shipped</div>
                        <div className="text-sm text-gray-500">Tracking: #XYZ123456</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl p-4 border border-gray-200">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-blue-50 flex items-center justify-center">
                        <div className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Cart reminder</div>
                        <div className="text-sm text-gray-500">Complete your purchase</div>
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