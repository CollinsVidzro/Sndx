// components/solutions/reseller/ResellerHero.tsx
"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, ChevronRight, Users, Briefcase, Globe } from "lucide-react";

export default function ResellerHero() {
  return (
    <section className="relative py-10 overflow-hidden">
      {/* Grid Background with Indigo Gradient */}
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
        
        {/* Indigo Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/20 to-transparent" />
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
              <Link href="/" className="hover:text-indigo-600">
                Home
              </Link>
              <ChevronRight className="h-4 w-4" />
              <Link href="/solutions" className="hover:text-indigo-600">
                Solutions
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-gray-700 font-medium">Reseller</span>
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
              <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-2">
                <Sparkles className="h-4 w-4 text-indigo-600" />
                <span className="text-sm font-medium text-indigo-700">
                  RESELLER SOLUTION
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                <span className="block text-gray-900">White-label Solutions</span>
                <span className="block bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                  for Partners & Agencies
                </span>
              </h1>

              <p className="text-lg text-gray-600">
                Build your own branded communication platform with our 
                white-label reseller program. Scale your agency with enterprise 
                features under your brand.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="/signup?solution=reseller"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-8 py-4 text-base font-semibold text-white shadow-lg hover:shadow-xl transition-all group"
                >
                  Become a Reseller
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/demo/reseller"
                  className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-8 py-4 text-base font-semibold text-gray-700 hover:border-gray-400 transition-all"
                >
                  View Reseller Demo
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
              <div className="relative bg-gradient-to-br from-indigo-50 to-violet-50 rounded-2xl p-8 border border-indigo-100">
                <div className="absolute -top-6 -right-6">
                  <div className="bg-gradient-to-br from-indigo-600 to-violet-600 rounded-xl p-4">
                    <Briefcase className="h-8 w-8 text-white" />
                  </div>
                </div>
                
                {/* Reseller Metrics */}
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-white rounded-lg border border-indigo-200">
                    <Users className="h-4 w-4 text-indigo-600" />
                    <span className="text-sm font-medium text-gray-700">Partners</span>
                    <span className="text-sm font-bold text-indigo-600">500+</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-white rounded-lg border border-indigo-200">
                    <Globe className="h-4 w-4 text-indigo-600" />
                    <span className="text-sm font-medium text-gray-700">Countries</span>
                    <span className="text-sm font-bold text-indigo-600">50+</span>
                  </div>
                </div>
                
                {/* White-label Examples */}
                <div className="space-y-4">
                  <div className="bg-white rounded-xl p-4 border border-gray-200">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-indigo-50 flex items-center justify-center">
                        <div className="h-6 w-6 rounded bg-gradient-to-r from-indigo-500 to-violet-500" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Your Agency Brand</div>
                        <div className="text-sm text-gray-500">Fully white-labeled dashboard</div>
                      </div>
                      <div className="ml-auto text-sm text-indigo-600 font-medium">
                        ✓ Custom
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl p-4 border border-gray-200">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-violet-50 flex items-center justify-center">
                        <Users className="h-4 w-4 text-violet-500" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Client Management</div>
                        <div className="text-sm text-gray-500">Manage all client accounts</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl p-4 border border-gray-200">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-indigo-50 flex items-center justify-center">
                        <div className="h-2 w-2 rounded-full bg-indigo-500 animate-pulse" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Revenue Dashboard</div>
                        <div className="text-sm text-gray-500">Track commissions & earnings</div>
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