// components/use-cases/marketing/MarketingHero.tsx
"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, TrendingUp, Target, BarChart, Users, ChevronRight } from "lucide-react";

export default function MarketingHero() {
  const keyPoints = [
    { icon: <TrendingUp className="h-4 w-4" />, text: "15 pre-built templates" },
    { icon: <Target className="h-4 w-4" />, text: "AI-powered optimization" },
    { icon: <BarChart className="h-4 w-4" />, text: "3.5x higher conversions" },
    { icon: <Users className="h-4 w-4" />, text: "Multi-channel campaigns" },
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
        
        {/* Orange/Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-amber-50/20 to-orange-50/20" />
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
              <Link href="/" className="hover:text-amber-600">
                Home
              </Link>
              <ChevronRight className="h-4 w-4" />
              <Link href="/use-cases" className="hover:text-amber-600">
                Use Cases
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-gray-700 font-medium">Marketing Campaigns</span>
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
              <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-4 py-2">
                <Sparkles className="h-4 w-4 text-amber-600" />
                <span className="text-sm font-medium text-amber-700">
                  MARKETING CAMPAIGNS
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                <span className="block text-gray-900">Drive Growth with</span>
                <span className="block bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                  Automated Campaigns
                </span>
              </h1>

              <p className="text-lg text-gray-600">
                Create high-converting marketing campaigns across email, SMS, and push 
                notifications. Automate segmentation, personalization, and optimization.
              </p>

              {/* Key Points */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                {keyPoints.map((point, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="flex-shrink-0 text-amber-600">
                      {point.icon}
                    </div>
                    <span className="text-sm text-gray-700">{point.text}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="/templates/marketing"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-600 to-orange-600 px-8 py-4 text-base font-semibold text-white shadow-lg hover:shadow-xl transition-all group"
                >
                  Explore 15 Templates
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/demo/marketing"
                  className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-8 py-4 text-base font-semibold text-gray-700 hover:border-gray-400 transition-all"
                >
                  Watch Campaign Demo
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
              <div className="relative bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-100">
                <div className="absolute -top-6 -right-6">
                  <div className="bg-gradient-to-br from-amber-600 to-orange-600 rounded-xl p-4">
                    <TrendingUp className="h-8 w-8 text-white" />
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-white rounded-xl p-4 border border-gray-200">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-amber-50 flex items-center justify-center">
                        <Target className="h-5 w-5 text-amber-500" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Welcome Campaign</div>
                        <div className="text-sm text-gray-500">3-email sequence</div>
                      </div>
                      <div className="ml-auto text-xs text-amber-600 font-semibold">
                        42% open rate
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl p-4 border border-gray-200">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-orange-50 flex items-center justify-center">
                        <BarChart className="h-5 w-5 text-orange-500" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Flash Sale</div>
                        <div className="text-sm text-gray-500">24-hour promotion</div>
                      </div>
                      <div className="ml-auto text-xs text-amber-600 font-semibold">
                        18% conversion
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl p-4 border border-gray-200">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-amber-50 flex items-center justify-center">
                        <Users className="h-5 w-5 text-amber-500" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Win-back Series</div>
                        <div className="text-sm text-gray-500">Re-engage inactive users</div>
                      </div>
                      <div className="ml-auto text-xs text-amber-600 font-semibold">
                        22% recovery
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