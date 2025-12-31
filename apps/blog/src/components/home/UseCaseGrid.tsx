// UseCaseGrid.tsx - Shows different use cases
"use client";
import { motion } from "framer-motion";
import { 
  ShoppingCart, Bell, Lock, CreditCard,
  MessageSquare, Users, BarChart, Globe
} from "lucide-react";

const useCases = [
  {
    icon: <ShoppingCart className="h-5 w-5" />,
    title: "E-commerce",
    description: "Order confirmations & shipping updates",
    features: ["Cart reminders", "Order tracking", "Delivery notifications"]
  },
  {
    icon: <Bell className="h-5 w-5" />,
    title: "Notifications",
    description: "Real-time alerts & updates",
    features: ["App notifications", "Security alerts", "System updates"]
  },
  {
    icon: <Lock className="h-5 w-5" />,
    title: "Security",
    description: "Authentication & verification",
    features: ["2FA codes", "Login alerts", "Account recovery"]
  },
  {
    icon: <MessageSquare className="h-5 w-5" />,
    title: "Customer Support",
    description: "Customer communication",
    features: ["Support tickets", "Chat responses", "Feedback requests"]
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: "Marketing",
    description: "Campaigns & outreach",
    features: ["Newsletters", "Promotions", "Lead nurturing"]
  },
  {
    icon: <BarChart className="h-5 w-5" />,
    title: "Analytics",
    description: "Insights & reporting",
    features: ["Delivery reports", "Performance metrics", "User engagement"]
  },
  {
    icon: <Globe className="h-5 w-5" />,
    title: "Global",
    description: "International communication",
    features: ["Multi-language", "Local numbers", "Regional compliance"]
  },
  {
    icon: <CreditCard className="h-5 w-5" />,
    title: "Finance",
    description: "Payment & transaction alerts",
    features: ["Payment confirmations", "Fraud alerts", "Account updates"]
  }
];

export default function UseCaseGrid() {
  return (
    <section className="py-13 relative">
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
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 mb-4">
            <span className="text-sm font-semibold text-blue-700">
              USE CASES
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Built for Every Industry
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Power your communication across various industries and applications
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="p-6 bg-white border border-gray-200 rounded-xl hover:border-cyan-200 transition-all h-full">
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-50">
                  <div className="text-blue-600">
                    {useCase.icon}
                  </div>
                </div>
                
                <h3 className="font-semibold text-gray-900 mb-2">
                  {useCase.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {useCase.description}
                </p>
                
                <div className="space-y-2">
                  {useCase.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
                      <span className="text-xs text-gray-500">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}