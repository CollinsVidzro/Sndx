// components/use-cases/reminders/RemindersHero.tsx
"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, Clock, Calendar, Bell, CheckCircle, ChevronRight } from "lucide-react";

export default function RemindersHero() {
  const keyPoints = [
    { icon: <Clock className="h-4 w-4" />, text: "9 reminder templates" },
    { icon: <Calendar className="h-4 w-4" />, text: "Calendar integration" },
    { icon: <Bell className="h-4 w-4" />, text: "95% reduction in no-shows" },
    { icon: <CheckCircle className="h-4 w-4" />, text: "Automated follow-ups" },
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
        
        {/* Teal/Green Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-teal-50/20 to-emerald-50/20" />
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
              <Link href="/" className="hover:text-teal-600">
                Home
              </Link>
              <ChevronRight className="h-4 w-4" />
              <Link href="/use-cases" className="hover:text-teal-600">
                Use Cases
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-gray-700 font-medium">Reminders & Scheduling</span>
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
              <div className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-4 py-2">
                <Sparkles className="h-4 w-4 text-teal-600" />
                <span className="text-sm font-medium text-teal-700">
                  REMINDERS & SCHEDULING
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                <span className="block text-gray-900">Never Miss</span>
                <span className="block bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
                  Important Dates Again
                </span>
              </h1>

              <p className="text-lg text-gray-600">
                Automate appointment reminders, follow-ups, and scheduled 
                notifications. Reduce no-shows, improve attendance, and keep 
                everyone on schedule.
              </p>

              {/* Key Points */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                {keyPoints.map((point, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="flex-shrink-0 text-teal-600">
                      {point.icon}
                    </div>
                    <span className="text-sm text-gray-700">{point.text}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="/templates/reminders"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-teal-600 to-emerald-600 px-8 py-4 text-base font-semibold text-white shadow-lg hover:shadow-xl transition-all group"
                >
                  Explore 9 Templates
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/demo/reminders"
                  className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-8 py-4 text-base font-semibold text-gray-700 hover:border-gray-400 transition-all"
                >
                  View Scheduling Demo
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
              <div className="relative bg-gradient-to-br from-teal-50 to-emerald-50 rounded-2xl p-8 border border-teal-100">
                <div className="absolute -top-6 -right-6">
                  <div className="bg-gradient-to-br from-teal-600 to-emerald-600 rounded-xl p-4">
                    <Clock className="h-8 w-8 text-white" />
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-white rounded-xl p-4 border border-gray-200">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-teal-50 flex items-center justify-center">
                        <Calendar className="h-5 w-5 text-teal-500" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Appointment Tomorrow</div>
                        <div className="text-sm text-gray-500">10:00 AM - Dr. Smith</div>
                      </div>
                      <div className="ml-auto text-xs text-teal-600 font-semibold">
                        24h reminder
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl p-4 border border-gray-200">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-emerald-50 flex items-center justify-center">
                        <Bell className="h-5 w-5 text-emerald-500" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Payment Due</div>
                        <div className="text-sm text-gray-500">Invoice #12345 due in 3 days</div>
                      </div>
                      <div className="ml-auto text-xs text-teal-600 font-semibold">
                        3 day notice
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl p-4 border border-gray-200">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-teal-50 flex items-center justify-center">
                        <CheckCircle className="h-5 w-5 text-teal-500" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Follow-up Required</div>
                        <div className="text-sm text-gray-500">Check in with client</div>
                      </div>
                      <div className="ml-auto text-xs text-teal-600 font-semibold">
                        7 day follow-up
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