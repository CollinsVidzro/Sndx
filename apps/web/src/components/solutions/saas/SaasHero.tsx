// components/solutions/saas/SaasHero.tsx
"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, Building, ChevronRight, Users, BarChart } from "lucide-react";

export default function SaasHero() {
  return (
    <section className="relative py-10 overflow-hidden">
      {/* Grid Background with Purple Gradient */}
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
        
        {/* Purple Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-50/20 to-transparent" />
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
              <Link href="/" className="hover:text-purple-600">
                Home
              </Link>
              <ChevronRight className="h-4 w-4" />
              <Link href="/solutions" className="hover:text-purple-600">
                Solutions
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-gray-700 font-medium">SaaS</span>
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
              <div className="inline-flex items-center gap-2 rounded-full bg-purple-50 px-4 py-2">
                <Sparkles className="h-4 w-4 text-purple-600" />
                <span className="text-sm font-medium text-purple-700">
                  SAAS SOLUTION
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                <span className="block text-gray-900">Engage Users</span>
                <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Throughout Their Journey
                </span>
              </h1>

              <p className="text-lg text-gray-600">
                Drive user activation, adoption, and retention with intelligent 
                communication workflows designed for SaaS businesses.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="/signup?solution=saas"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 text-base font-semibold text-white shadow-lg hover:shadow-xl transition-all group"
                >
                  Start Free for SaaS
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/demo/saas"
                  className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-8 py-4 text-base font-semibold text-gray-700 hover:border-gray-400 transition-all"
                >
                  View SaaS Demo
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
              <div className="relative bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100">
                <div className="absolute -top-6 -right-6">
                  <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl p-4">
                    <Building className="h-8 w-8 text-white" />
                  </div>
                </div>
                
                <div className="space-y-6">
                  {/* User Journey */}
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col items-center">
                      <div className="h-10 w-10 rounded-full bg-purple-100 border-2 border-purple-200 flex items-center justify-center">
                        <Users className="h-5 w-5 text-purple-600" />
                      </div>
                      <span className="text-xs text-gray-500 mt-2">Signup</span>
                    </div>
                    <div className="h-1 w-8 bg-gradient-to-r from-purple-300 to-pink-300" />
                    <div className="flex flex-col items-center">
                      <div className="h-10 w-10 rounded-full bg-purple-100 border-2 border-purple-200 flex items-center justify-center">
                        <Sparkles className="h-5 w-5 text-purple-600" />
                      </div>
                      <span className="text-xs text-gray-500 mt-2">Activation</span>
                    </div>
                    <div className="h-1 w-8 bg-gradient-to-r from-purple-300 to-pink-300" />
                    <div className="flex flex-col items-center">
                      <div className="h-10 w-10 rounded-full bg-purple-100 border-2 border-purple-200 flex items-center justify-center">
                        <BarChart className="h-5 w-5 text-purple-600" />
                      </div>
                      <span className="text-xs text-gray-500 mt-2">Adoption</span>
                    </div>
                  </div>
                  
                  {/* Notifications */}
                  <div className="space-y-4">
                    <div className="bg-white rounded-xl p-4 border border-gray-200">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-lg bg-purple-50 flex items-center justify-center">
                          <div className="h-2 w-2 rounded-full bg-purple-500 animate-pulse" />
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">Welcome to Acme SaaS!</div>
                          <div className="text-sm text-gray-500">Complete your setup to get started</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-xl p-4 border border-gray-200">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-lg bg-pink-50 flex items-center justify-center">
                          <div className="h-2 w-2 rounded-full bg-pink-500 animate-pulse" />
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">New feature available</div>
                          <div className="text-sm text-gray-500">Check out our latest update</div>
                        </div>
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