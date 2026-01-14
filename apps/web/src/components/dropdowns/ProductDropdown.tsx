"use client";
import { MessageCircleMore, Mail, Shield,  Hash, PhoneCall, CreditCard } from "lucide-react";
import Link from "next/link";


const productItems = [
  {
    icon: <MessageCircleMore className="h-5 w-5" />,
    title: "Messaging API",
    description: "Carrier-grade SMS delivery across Africa with high throughput and reliability.",
    href: "/products/messaging",
    badge: "Popular",
    color: "from-cyan-500 to-blue-600",
    bgColor: "bg-gradient-to-br from-cyan-50 to-blue-50",
  },
  {
    icon: <Shield className="h-5 w-5" />,
    title: "OTP & Verification",
    description: "Secure one-time passwords and phone verification built for scale.",
    href: "/products/otp",
    badge: null,
    color: "from-violet-500 to-purple-600",
    bgColor: "bg-gradient-to-br from-violet-50 to-purple-50",
  },
  {
    icon: <Mail className="h-5 w-5" />,
    title: "Email API",
    description: "Reliable transactional and notification emails for modern applications.",
    href: "/products/email",
    badge: "Beta",
    color: "from-emerald-500 to-green-600",
    bgColor: "bg-gradient-to-br from-emerald-50 to-green-50",
  },
  {
    icon: <PhoneCall className="h-5 w-5" />,
    title: "Voice API",
    description: "Programmable voice calls, alerts, and IVR solutions.",
    href: "/products/voice",
    badge: "Coming Soon",
    color: "from-pink-500 to-rose-600",
    bgColor: "bg-gradient-to-br from-pink-50 to-rose-50",
  },
  {
    icon: <Hash className="h-5 w-5" />,
    title: "USSD API",
    description: "Build interactive USSD applications for feature phones and mobile networks.",
    href: "/products/ussd",
    badge: "Coming Soon",
    color: "from-indigo-500 to-blue-600",
    bgColor: "bg-gradient-to-br from-indigo-50 to-blue-50",
  },
  {
    icon: <CreditCard className="h-5 w-5" />,
    title: "Payment Service",
    description: "Mobile money and digital payment infrastructure for African businesses.",
    href: "/products/payment",
    badge: "Coming Soon",
    color: "from-yellow-500 to-orange-600",
    bgColor: "bg-gradient-to-br from-yellow-50 to-orange-50",
  },
];


export default function ProductDropdown() {
  return (
    <div className="w-[700px] rounded-xl border border-gray-200 bg-white p-8 shadow-2xl">
      <div className="grid grid-cols-1 gap-8">
        {/* Products Grid */}
        <div>
          <div className="mb-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-2">
              Products
            </h3>
            {/* <p className="text-sm text-gray-600">Choose your messaging solution</p> */}
          </div>

          <div className="grid grid-cols-3 gap-4">
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
                      <div
                        className={`text-white bg-gradient-to-br ${item.color} p-1 rounded-md`}
                      >
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
      </div>
    </div>
  );
}
