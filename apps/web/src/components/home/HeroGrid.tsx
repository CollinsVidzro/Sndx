// HeroGrid.tsx - Cleaner version with visible grid
"use client";
import { MessageCircleMore, Mail, Shield, CreditCard, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const products = [
  {
    icon: <MessageCircleMore className="text-white h-6 w-6" />,
    title: "Messaging API",
    description: "Reliable SMS, WhatsApp & multi-channel messaging",
    href: "/product/messaging",
    badge: "Popular",
    color: "from-cyan-500 to-blue-600",
    bgColor: "bg-gradient-to-br from-cyan-50 to-blue-50",
    borderColor: "border-cyan-100",
  },
  {
    icon: <Mail className="text-white h-6 w-6" />,
    title: "Email Service",
    description: "Transactional & marketing email delivery",
    href: "/product/email",
    badge: "Beta",
    color: "from-emerald-500 to-green-600",
    bgColor: "bg-gradient-to-br from-emerald-50 to-green-50",
    borderColor: "border-emerald-100",
  },
  {
    icon: <Shield className="text-white h-6 w-6" />,
    title: "2FA & OTP Service",
    description: "Military-grade two-factor authentication",
    href: "/product/otp",
    badge: "New",
    color: "from-violet-500 to-purple-600",
    bgColor: "bg-gradient-to-br from-violet-50 to-purple-50",
    borderColor: "border-violet-100",
  },
  {
    icon: <CreditCard className="text-white h-6 w-6" />,
    title: "Payment Service",
    description: "Digital payments made easy",
    href: "/product/payment",
    badge: "Soon",
    color: "from-yellow-500 to-orange-600",
    bgColor: "bg-gradient-to-br from-yellow-50 to-orange-50",
    borderColor: "border-yellow-100",
  },
];

export default function HeroGrid() {
  return (
    <section className="relative py-10  overflow-hidden">
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
        
        {/* Grid Highlights */}
        <motion.div
          className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-cyan-300/20 to-transparent"
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className="space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-cyan-50 px-4 py-2">
                <Sparkles className="h-4 w-4 text-cyan-600" />
                <span className="text-sm font-medium text-cyan-700">
                  Enterprise-Grade Infrastructure
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                <span className="block text-gray-900">Reliable Messaging &</span>
                <span className="block bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                  Payment Infrastructure
                </span>
              </h1>
              
              <p className="text-lg text-gray-600">
                Sendexa provides enterprise-grade APIs for messaging, authentication, 
                and payments. Scale your customer communication with confidence.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/signup"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg hover:shadow-xl transition-all"
              >
                Start Building Free
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/demo"
                className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-8 py-4 text-base font-semibold text-gray-700 hover:border-gray-400 transition-all"
              >
                View Live Demo
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">99.99%</div>
                <div className="text-xs text-gray-500">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">1M+</div>
                <div className="text-xs text-gray-500">Messages/Day</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">24/7</div>
                <div className="text-xs text-gray-500">Support</div>
              </div>
            </div>
          </div>

          {/* Right Column - Products Grid */}
          <div className="grid grid-cols-2 gap-4">
            {products.map((product, index) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={product.href}
                  className="group block p-6 bg-white border border-gray-200 rounded-xl hover:border-cyan-200 hover:shadow-lg transition-all"
                >
                  <div className="mb-4 flex items-start justify-between">
                    <div className={`rounded-lg p-3 ${product.bgColor}`}>
                      <div className={`p-2 rounded ${product.color.replace('from-', 'bg-gradient-to-br from-')}`}>
                        {product.icon}
                      </div>
                    </div>
                    {product.badge && (
                      <span className={`text-xs font-semibold px-2 py-1 rounded-full text-white ${
                        product.badge === 'Popular' ? 'bg-gradient-to-r from-cyan-500 to-blue-600' :
                        product.badge === 'Beta' ? 'bg-gradient-to-r from-emerald-500 to-green-600' :
                        product.badge === 'New' ? 'bg-gradient-to-r from-violet-500 to-purple-600' :
                        'bg-gradient-to-r from-yellow-500 to-orange-600'
                      }`}>
                        {product.badge}
                      </span>
                    )}
                  </div>
                  
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {product.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {product.description}
                  </p>
                  
                  <div className="flex items-center text-sm text-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity">
                    Explore feature
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}