
"use client";
import { MessageCircleMore, Mail, Shield, Zap,  CreditCard } from "lucide-react";
import Link from "next/link";

const productItems = [
  {
    icon: <MessageCircleMore className="h-5 w-5" />,
    title: "Messaging API",
    description: "Reliable SMS, WhatsApp & multi-channel messaging",
    href: "/product/messaging",
    badge: "Popular",
    color: "from-cyan-500 to-blue-600",
    bgColor: "bg-gradient-to-br from-cyan-50 to-blue-50",
  },
  {
    icon: <Mail className="h-5 w-5" />,
    title: "Email Service",
    description: "Transactional & marketing email delivery",
    href: "/product/email",
    badge: "Beta",
    color: "from-emerald-500 to-green-600",
    bgColor: "bg-gradient-to-br from-emerald-50 to-green-50",
  },
  {
    icon: <Shield className="h-5 w-5" />,
    title: "2FA & OTP Service",
    description: "Military-grade two-factor authentication",
    href: "/product/otp",
    badge: "New",
    color: "from-violet-500 to-purple-600",
    bgColor: "bg-gradient-to-br from-violet-50 to-purple-50",
  },
  //payments
  {
    icon: <CreditCard className="h-5 w-5" />,
    title: "Payment Service",
    description: "Digital payments made easy",
    href: "/product/payment",
    color: "from-yellow-500 to-orange-600",
    badge: "Soon",
    bgColor: "bg-gradient-to-br from-yellow-50 to-orange-50",
  },
];

export default function ProductDropdown() {
  return (
    <div className="w-[800px] rounded-xl border border-gray-200 bg-white p-8 shadow-2xl">
      <div className="grid grid-cols-2 gap-8">
        {/* Products Grid */}
        <div>
          <div className="mb-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-2">
              Products
            </h3>
            {/* <p className="text-sm text-gray-600">Choose your messaging solution</p> */}
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {productItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group relative overflow-hidden rounded-xl border border-gray-200 p-4 transition-all hover:border-transparent hover:shadow-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 opacity-0 transition-opacity group-hover:opacity-100" />
                
                <div className="relative z-10">
                  <div className="mb-3 flex items-start justify-between">
                    <div className={`rounded-lg p-2.5 ${item.bgColor}`}>
                      <div className={`text-white bg-gradient-to-br ${item.color} p-1 rounded-md`}>
                        {item.icon}
                      </div>
                    </div>
                    {item.badge && (
                      <span className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-2.5 py-0.5 text-xs font-semibold text-white">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  
                  <h4 className="mb-1.5 font-semibold text-gray-900 group-hover:text-cyan-700">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Resources & CTA */}
        <div className="space-y-6">
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-500">
              Resources
            </h3>
            
            <div className="space-y-4">
              <div className="rounded-xl bg-gradient-to-br from-cyan-50 to-blue-50 p-5 border border-cyan-100">
                <div className="mb-3">
                  <Zap className="h-5 w-5 text-cyan-600" />
                </div>
                <h4 className="font-semibold text-gray-900">Quick Start Guide</h4>
                <p className="mt-1 text-sm text-gray-600">
                  Start sending messages in 5 minutes
                </p>
                <Link
                  href="/docs/quickstart"
                  className="mt-3 inline-flex items-center text-sm font-medium text-cyan-600 hover:text-cyan-700"
                >
                  Get started →
                </Link>
              </div>
{/* 
              <div className="rounded-xl border border-gray-200 p-5 hover:border-cyan-200 transition-colors">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-900">Customer Stories</h4>
                    <p className="mt-1 text-sm text-gray-600">
                      See how companies scale with Sendexa
                    </p>
                  </div>
                  <MessageCircleMore className="h-5 w-5 text-gray-400" />
                </div>
                <Link
                  href="/customers"
                  className="mt-3 inline-flex items-center text-sm font-medium text-gray-700 hover:text-cyan-600"
                >
                  Read stories →
                </Link>
              </div> */}
            </div>
          </div>

          {/* CTA */}
          <div className="rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 p-6">
            <div className="mb-4">
              <div className="mb-2 flex items-center gap-2">
                <div className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
                <span className="text-sm font-medium text-green-400">Live Demo</span>
              </div>
              <h4 className="text-lg font-semibold text-white">
                Try it yourself
              </h4>
              <p className="mt-1 text-sm text-gray-300">
                Send your first message in seconds
              </p>
            </div>
            
            <div className="flex gap-3">
              <Link
                href="/playground"
                className="flex-1 rounded-lg bg-white px-4 py-2.5 text-center text-sm font-semibold text-gray-900 hover:bg-gray-100"
              >
                Try Demo
              </Link>
              <Link
                href="/signup"
                className="flex-1 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2.5 text-center text-sm font-semibold text-white hover:shadow-lg hover:shadow-cyan-500/25"
              >
                Start Free
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}