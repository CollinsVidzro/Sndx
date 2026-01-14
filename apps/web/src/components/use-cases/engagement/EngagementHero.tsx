// components/use-cases/engagement/EngagementHero.tsx
"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, Users, MessageSquare, Target, TrendingUp, ChevronRight } from "lucide-react";

export default function EngagementHero() {
  const keyPoints = [
    { icon: <MessageSquare className="h-4 w-4" />, text: "12 pre-built templates" },
    { icon: <Target className="h-4 w-4" />, text: "Personalized automation" },
    { icon: <TrendingUp className="h-4 w-4" />, text: "Increase retention by 40%" },
    { icon: <Users className="h-4 w-4" />, text: "Multi-channel engagement" },
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
        
        {/* Purple Gradient Overlay (matches engagement theme) */}
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
              <Link href="/use-cases" className="hover:text-purple-600">
                Use Cases
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-gray-700 font-medium">Customer Engagement</span>
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
                  CUSTOMER ENGAGEMENT
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                <span className="block text-gray-900">Build Lasting</span>
                <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Customer Relationships
                </span>
              </h1>

              <p className="text-lg text-gray-600">
                Automate personalized communication across email, SMS, and push 
                notifications to increase retention, boost loyalty, and drive 
                sustainable growth.
              </p>

              {/* Key Points */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                {keyPoints.map((point, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="flex-shrink-0 text-purple-600">
                      {point.icon}
                    </div>
                    <span className="text-sm text-gray-700">{point.text}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="/templates/engagement"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 text-base font-semibold text-white shadow-lg hover:shadow-xl transition-all group"
                >
                  Browse 12 Templates
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/demo/engagement"
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
              <div className="relative bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100">
                <div className="absolute -top-6 -right-6">
                  <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl p-4">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-white rounded-xl p-4 border border-gray-200">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-purple-50 flex items-center justify-center">
                        <MessageSquare className="h-5 w-5 text-purple-500" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Welcome Series</div>
                        <div className="text-sm text-gray-500">3-day onboarding sequence</div>
                      </div>
                      <div className="ml-auto text-xs text-purple-600 font-semibold">
                        82% open rate
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl p-4 border border-gray-200">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-pink-50 flex items-center justify-center">
                        <Target className="h-5 w-5 text-pink-500" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Feature Adoption</div>
                        <div className="text-sm text-gray-500">Personalized tips</div>
                      </div>
                      <div className="ml-auto text-xs text-purple-600 font-semibold">
                        +45% adoption
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl p-4 border border-gray-200">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-purple-50 flex items-center justify-center">
                        <TrendingUp className="h-5 w-5 text-purple-500" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Win-back Campaign</div>
                        <div className="text-sm text-gray-500">Re-engage inactive users</div>
                      </div>
                      <div className="ml-auto text-xs text-purple-600 font-semibold">
                        28% recovery
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