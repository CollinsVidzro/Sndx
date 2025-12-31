// components/product/payment/PaymentFeatures.tsx
"use client";
import { motion } from "framer-motion";
import { 
  ShoppingCart, Repeat, CreditCard, Receipt,
  Shield, Zap, Globe, BarChart,
  Lock, Users, Bell, Database
} from "lucide-react";

const features = [
  {
    icon: <ShoppingCart className="h-5 w-5" />,
    title: "Checkout",
    description: "Optimized checkout flows",
    details: [
      "Embedded & hosted checkout",
      "Mobile-optimized",
      "One-click payments"
    ]
  },
  {
    icon: <CreditCard className="h-5 w-5" />,
    title: "Card Processing",
    description: "Secure card handling",
    details: [
      "PCI DSS Level 1",
      "3D Secure 2.0",
      "Tokenization"
    ]
  },
  {
    icon: <Repeat className="h-5 w-5" />,
    title: "Recurring Billing",
    description: "Subscription management",
    details: [
      "Flexible billing cycles",
      "Proration",
      "Dunning management"
    ]
  },
  {
    icon: <Receipt className="h-5 w-5" />,
    title: "Invoicing",
    description: "Professional invoices",
    details: [
      "Custom templates",
      "Automated reminders",
      "Multi-currency"
    ]
  },
  {
    icon: <Shield className="h-5 w-5" />,
    title: "Fraud Prevention",
    description: "Advanced security",
    details: [
      "Machine learning",
      "Risk scoring",
      "Chargeback protection"
    ]
  },
  {
    icon: <Globe className="h-5 w-5" />,
    title: "Global Payments",
    description: "International support",
    details: [
      "100+ currencies",
      "Local payment methods",
      "Currency conversion"
    ]
  },
  {
    icon: <BarChart className="h-5 w-5" />,
    title: "Revenue Operations",
    description: "Business intelligence",
    details: [
      "Real-time reporting",
      "Revenue recognition",
      "Tax automation"
    ]
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: "Team Management",
    description: "Collaboration tools",
    details: [
      "Role-based access",
      "Audit logs",
      "Team permissions"
    ]
  },
  {
    icon: <Zap className="h-5 w-5" />,
    title: "Instant Payouts",
    description: "Fast settlement",
    details: [
      "Same-day transfers",
      "Scheduled payouts",
      "Multi-bank support"
    ]
  },
  {
    icon: <Bell className="h-5 w-5" />,
    title: "Notifications",
    description: "Payment alerts",
    details: [
      "Webhooks",
      "Email notifications",
      "SMS alerts"
    ]
  },
  {
    icon: <Lock className="h-5 w-5" />,
    title: "Compliance",
    description: "Regulatory support",
    details: [
      "KYC/KYB verification",
      "Tax compliance",
      "Regulatory reporting"
    ]
  },
  {
    icon: <Database className="h-5 w-5" />,
    title: "Data Portability",
    description: "Data management",
    details: [
      "Export capabilities",
      "API access",
      "Migration tools"
    ]
  }
];

export default function PaymentFeatures() {
  return (
    <section className="py-16 md:py-24 relative">
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
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 mb-4">
            <span className="text-sm font-semibold text-gray-700">
              COMPLETE PAYMENT SUITE
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Enterprise-Grade Payment Infrastructure
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Everything you need to build, scale, and optimize your payment operations
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.03 }}
              viewport={{ once: true }}
            >
              <div className="p-6 bg-white border border-gray-200 rounded-xl hover:border-amber-200 transition-all h-full">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-amber-50 mb-4">
                  <div className="text-amber-600">
                    {feature.icon}
                  </div>
                </div>
                
                <h3 className="font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {feature.description}
                </p>
                
                <div className="space-y-2">
                  {feature.details.map((detail, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                      <span className="text-xs text-gray-500">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 pt-12 border-t border-gray-200"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-600 mb-2">99.99%</div>
              <div className="font-semibold text-gray-900 mb-1">Uptime</div>
              <p className="text-sm text-gray-600">Payment processing</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-600 mb-2">200+</div>
              <div className="font-semibold text-gray-900 mb-1">Countries</div>
              <p className="text-sm text-gray-600">Global coverage</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-600 mb-2">100+</div>
              <div className="font-semibold text-gray-900 mb-1">Currencies</div>
              <p className="text-sm text-gray-600">Supported</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-600 mb-2">24/7</div>
              <div className="font-semibold text-gray-900 mb-1">Support</div>
              <p className="text-sm text-gray-600">Enterprise support</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}