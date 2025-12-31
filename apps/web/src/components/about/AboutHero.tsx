// components/about/AboutHero.tsx
"use client";
import { motion } from "framer-motion";
import {Building } from "lucide-react";
//import Link from "next/link";

export default function AboutHero() {
  return (
    <section className="relative py-10 overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 -z-10">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(to right, #e5e7eb 1px, transparent 1px),
              linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-50 to-blue-50 px-4 py-2 mb-6">
              <Building className="h-4 w-4 text-cyan-600" />
              <span className="text-sm font-semibold text-cyan-700">
                ABOUT SENDEXA
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8">
              <span className="block text-gray-900">Powering the Future of</span>
              <span className="block bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                Communication & Payment
              </span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto">
              We&apos;re building the infrastructure layer for modern businesses to communicate 
              and transact globally. One API for all your messaging and payment needs.
            </p>
          </motion.div>

          {/* Value Props */}
          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="group"
            >
              <Link
                href="/product/messaging"
                className="block p-8 bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-100 rounded-2xl hover:shadow-xl transition-all"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="rounded-xl bg-white p-3 shadow-sm">
                    <MessageCircleMore className="h-8 w-8 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-xl">Communication</h3>
                    <p className="text-sm text-cyan-600">SMS, WhatsApp, Email</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  Deliver messages globally with 99.99% uptime. Connect with customers 
                  on their preferred channels instantly.
                </p>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="group"
            >
              <Link
                href="/product/payment"
                className="block p-8 bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-100 rounded-2xl hover:shadow-xl transition-all"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="rounded-xl bg-white p-3 shadow-sm">
                    <CreditCard className="h-8 w-8 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-xl">Payment</h3>
                    <p className="text-sm text-emerald-600">Global transactions made easy</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  Process payments securely across 200+ countries. Built for developers 
                  with simple APIs and comprehensive documentation.
                </p>
              </Link>
            </motion.div>
          </div> */}

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { value: "10K+", label: "Businesses" },
              { value: "200+", label: "Countries" },
              { value: "99.99%", label: "Uptime" },
              { value: "1B+", label: "Transactions" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}