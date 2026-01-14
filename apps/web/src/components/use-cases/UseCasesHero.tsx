// components/use-cases/UseCasesHero.tsx
"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, Zap, ChevronRight } from "lucide-react";

export default function UseCasesHero() {
  const stats = [
    { value: "6", label: "Use Cases" },
    { value: "57", label: "Templates" },
    { value: "99.9%", label: "Delivery Rate" },
    { value: "40%", label: "Avg. Improvement" },
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
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/20 via-purple-50/10 to-teal-50/20" />
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
              <span className="text-gray-700 font-medium">Use Cases</span>
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
              <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-50 to-purple-50 px-4 py-2">
                <Sparkles className="h-4 w-4 text-indigo-600" />
                <span className="text-sm font-medium text-indigo-700">
                  COMMUNICATION AUTOMATION
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                <span className="block text-gray-900">Automate Every</span>
                <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
                  Communication Scenario
                </span>
              </h1>

              <p className="text-lg text-gray-600">
                Discover how Sendexa can transform your customer communication 
                across 6 key use cases with 57 pre-built templates. From engagement 
                to authentication, we&apos;ve got you covered.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + index * 0.1 }}
                    className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200"
                  >
                    <div className="text-2xl md:text-3xl font-bold text-gray-900">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="#use-cases-grid"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 text-base font-semibold text-white shadow-lg hover:shadow-xl transition-all group"
                >
                  <Zap className="h-5 w-5" />
                  Explore All Use Cases
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/templates"
                  className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-8 py-4 text-base font-semibold text-gray-700 hover:border-gray-400 transition-all"
                >
                  Browse All 57 Templates
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
              <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 border border-gray-200 shadow-xl">
                <div className="absolute -top-6 -right-6">
                  <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl p-4 shadow-lg">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <h3 className="text-xl font-bold text-gray-900">
                      Communication Matrix
                    </h3>
                    <p className="text-gray-600">6 use cases across 3 channels</p>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { name: "Email", color: "bg-blue-500" },
                      { name: "SMS", color: "bg-green-500" },
                      { name: "Push", color: "bg-purple-500" },
                    ].map((channel) => (
                      <div key={channel.name} className="text-center">
                        <div className={`h-10 w-10 rounded-lg ${channel.color} mx-auto mb-2 flex items-center justify-center`}>
                          <div className="text-white text-sm font-semibold">
                            {channel.name.charAt(0)}
                          </div>
                        </div>
                        <div className="text-sm font-medium text-gray-900">
                          {channel.name}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="space-y-3">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="text-sm text-gray-500 w-24">Use Case {i}</div>
                        <div className="flex gap-2 flex-1">
                          <div className="h-2 flex-1 rounded-full bg-blue-200" />
                          <div className="h-2 flex-1 rounded-full bg-green-200" />
                          <div className="h-2 flex-1 rounded-full bg-purple-200" />
                        </div>
                      </div>
                    ))}
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