// components/product/email/EmailTypes.tsx
"use client";
import { motion } from "framer-motion";
import { 
  ShoppingCart, Key, Bell, FileText,
  Megaphone, Users, Calendar, Award,
  CheckCircle,
  Settings
} from "lucide-react";

const emailTypes = [
  {
    icon: <ShoppingCart className="h-5 w-5" />,
    name: "Transactional",
    description: "Trigger-based time-sensitive emails",
    features: ["Order confirmations", "Shipping updates", "Payment receipts"],
    volume: "High",
    priority: "Critical"
  },
  {
    icon: <Key className="h-5 w-5" />,
    name: "Authentication",
    description: "Security and verification emails",
    features: ["Password resets", "Email verification", "2FA codes"],
    volume: "Medium",
    priority: "High"
  },
  {
    icon: <Bell className="h-5 w-5" />,
    name: "Notifications",
    description: "User and system notifications",
    features: ["Account alerts", "System updates", "Activity notifications"],
    volume: "High",
    priority: "Medium"
  },
  {
    icon: <Megaphone className="h-5 w-5" />,
    name: "Marketing",
    description: "Promotional and engagement emails",
    features: ["Newsletters", "Promotions", "Product updates"],
    volume: "Bulk",
    priority: "Standard"
  },
  {
    icon: <FileText className="h-5 w-5" />,
    name: "Transactional Reports",
    description: "Data and report deliveries",
    features: ["Monthly statements", "Export reports", "Analytics digests"],
    volume: "Low",
    priority: "Medium"
  },
  {
    icon: <Users className="h-5 w-5" />,
    name: "Onboarding",
    description: "User welcome and education",
    features: ["Welcome series", "Feature guides", "Getting started"],
    volume: "Medium",
    priority: "High"
  },
  {
    icon: <Calendar className="h-5 w-5" />,
    name: "Event Reminders",
    description: "Calendar and appointment emails",
    features: ["Appointment reminders", "Event invites", "Schedule updates"],
    volume: "Medium",
    priority: "High"
  },
  {
    icon: <Award className="h-5 w-5" />,
    name: "Win-back & Retention",
    description: "Customer retention campaigns",
    features: ["Re-engagement", "Win-back", "Loyalty programs"],
    volume: "Medium",
    priority: "Standard"
  }
];

export default function EmailTypes() {
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
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 mb-4">
            <span className="text-sm font-semibold text-emerald-700">
              EMAIL TYPES
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Every Type of Email Covered
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From critical transactional emails to bulk marketing campaigns, 
            we handle every email type with appropriate priority and optimization
          </p>
        </div>

        {/* Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {emailTypes.map((type, index) => (
            <motion.div
              key={type.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <div className="p-6 bg-white border border-gray-200 rounded-xl hover:border-emerald-200 transition-all h-full">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-emerald-50">
                      <div className="text-emerald-600">
                        {type.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {type.name}
                      </h3>
                      <p className="text-sm text-gray-600">{type.description}</p>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-4 space-y-2">
                  {type.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-emerald-500" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex justify-between text-sm border-t border-gray-100 pt-4">
                  <div>
                    <div className="font-medium text-gray-900">Volume</div>
                    <div className="text-gray-600">{type.volume}</div>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Priority</div>
                    <div className="text-gray-600">{type.priority}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Smart Routing */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 p-8 bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl border border-emerald-200"
        >
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Settings className="h-5 w-5 text-emerald-600" />
                <span className="font-semibold text-emerald-700">Smart Routing</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Intelligent Email Routing
              </h3>
              <p className="text-gray-600">
                Automatically route different email types through optimized delivery channels. 
                Critical transactional emails get highest priority, while bulk marketing uses 
                dedicated infrastructure for maximum deliverability.
              </p>
            </div>
            <div className="hidden md:block">
              <div className="text-6xl font-bold text-emerald-600 opacity-50">✉️</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}