// components/use-cases/marketing/MarketingTemplates.tsx
"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, FileText, Mail, MessageSquare, Target, Gift, Tag, Users, Calendar, TrendingUp, Download, Eye } from "lucide-react";

const templates = [
  {
    name: "Welcome Series",
    description: "Onboard new subscribers effectively",
    channels: ["Email", "SMS"],
    messages: 3,
    conversion: "35% activation",
    color: "from-amber-500 to-orange-500",
    icon: <Mail className="h-5 w-5" />,
  },
  {
    name: "Cart Abandonment",
    description: "Recover lost sales automatically",
    channels: ["Email", "SMS"],
    messages: 3,
    conversion: "28% recovery",
    color: "from-red-500 to-pink-500",
    icon: <Target className="h-5 w-5" />,
  },
  {
    name: "Flash Sale",
    description: "Time-sensitive promotion campaigns",
    channels: ["Email", "SMS", "Push"],
    messages: 4,
    conversion: "18% conversion",
    color: "from-purple-500 to-pink-500",
    icon: <Tag className="h-5 w-5" />,
  },
  {
    name: "Product Launch",
    description: "Build excitement for new products",
    channels: ["Email"],
    messages: 5,
    conversion: "42% open rate",
    color: "from-blue-500 to-cyan-500",
    icon: <TrendingUp className="h-5 w-5" />,
  },
  {
    name: "Win-back Series",
    description: "Re-engage inactive customers",
    channels: ["Email", "SMS"],
    messages: 4,
    conversion: "22% recovery",
    color: "from-green-500 to-emerald-500",
    icon: <Users className="h-5 w-5" />,
  },
  {
    name: "Seasonal Campaign",
    description: "Holiday and seasonal promotions",
    channels: ["Email", "SMS"],
    messages: 6,
    conversion: "45% engagement",
    color: "from-red-500 to-rose-500",
    icon: <Calendar className="h-5 w-5" />,
  },
  {
    name: "Upsell Sequence",
    description: "Increase customer lifetime value",
    channels: ["Email"],
    messages: 3,
    conversion: "15% upsell",
    color: "from-indigo-500 to-violet-500",
    icon: <ArrowRight className="h-5 w-5" />,
  },
  {
    name: "Birthday Offers",
    description: "Personalized birthday campaigns",
    channels: ["Email", "SMS"],
    messages: 2,
    conversion: "68% redemption",
    color: "from-pink-500 to-rose-500",
    icon: <Gift className="h-5 w-5" />,
  },
  {
    name: "Replenishment Reminder",
    description: "Automated product restock alerts",
    channels: ["Email", "SMS"],
    messages: 2,
    conversion: "32% repurchase",
    color: "from-teal-500 to-emerald-500",
    icon: <MessageSquare className="h-5 w-5" />,
  },
  {
    name: "Loyalty Program",
    description: "Reward loyal customers",
    channels: ["Email"],
    messages: 5,
    conversion: "45% enrollment",
    color: "from-yellow-500 to-amber-500",
    icon: <Target className="h-5 w-5" />,
  },
  {
    name: "Review Request",
    description: "Collect customer reviews",
    channels: ["Email", "SMS"],
    messages: 2,
    conversion: "25% response",
    color: "from-cyan-500 to-blue-500",
    icon: <FileText className="h-5 w-5" />,
  },
  {
    name: "Educational Series",
    description: "Build authority and trust",
    channels: ["Email"],
    messages: 7,
    conversion: "52% open rate",
    color: "from-slate-500 to-gray-500",
    icon: <FileText className="h-5 w-5" />,
  },
  {
    name: "Cross-sell Campaign",
    description: "Recommend related products",
    channels: ["Email"],
    messages: 3,
    conversion: "12% conversion",
    color: "from-orange-500 to-red-500",
    icon: <Target className="h-5 w-5" />,
  },
  {
    name: "Event Promotion",
    description: "Promote webinars and events",
    channels: ["Email", "SMS"],
    messages: 5,
    conversion: "38% registration",
    color: "from-violet-500 to-purple-500",
    icon: <Calendar className="h-5 w-5" />,
  },
  {
    name: "Feedback Survey",
    description: "Gather customer insights",
    channels: ["Email"],
    messages: 2,
    conversion: "18% completion",
    color: "from-emerald-500 to-green-500",
    icon: <FileText className="h-5 w-5" />,
  },
];

export default function MarketingTemplates() {
  return (
    <section className="py-13 bg-white relative">
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
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-4 py-2 mb-4">
              <FileText className="h-4 w-4 text-amber-600" />
              <span className="text-sm font-semibold text-amber-700">
                15 PRE-BUILT TEMPLATES
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              High-Converting Campaign Templates
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Professionally designed templates for every stage of the customer 
              journey. Tested and optimized for maximum conversions.
            </p>
          </div>

          {/* Templates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {templates.map((template, index) => (
              <motion.div
                key={template.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.03 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="p-6 bg-white border border-gray-200 rounded-xl hover:border-amber-200 hover:shadow-lg transition-all h-full">
                  <div className="mb-4 flex items-start justify-between">
                    <div className={`rounded-lg p-3 bg-gradient-to-br ${template.color} bg-opacity-10`}>
                      <div className={`text-white bg-gradient-to-br ${template.color} p-2 rounded-lg`}>
                        {template.icon}
                      </div>
                    </div>
                    <div className="text-xs font-medium text-amber-600 bg-amber-50 px-2 py-1 rounded-full">
                      {template.conversion}
                    </div>
                  </div>
                  
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {template.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {template.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <div className="text-xs text-gray-500">
                        {template.messages} {template.messages === 1 ? 'message' : 'messages'}
                      </div>
                    </div>
                    <div className="flex gap-1">
                      {template.channels.map((channel, i) => (
                        <span
                          key={i}
                          className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded"
                        >
                          {channel}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <button className="flex items-center gap-1 text-sm text-amber-600 hover:text-amber-700 font-medium">
                      <Eye className="h-4 w-4" />
                      Preview
                    </button>
                    <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-700 font-medium">
                      <Download className="h-4 w-4" />
                      Use Template
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Template Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-flex flex-wrap gap-3 justify-center items-center mb-6">
              {["Acquisition", "Activation", "Retention", "Revenue", "Referral"].map((category) => (
                <div
                  key={category}
                  className="px-4 py-2 bg-amber-50 text-amber-700 rounded-lg text-sm font-medium"
                >
                  {category}
                </div>
              ))}
            </div>
            
            <Link
              href="/templates/marketing"
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-amber-600 bg-white px-8 py-4 font-semibold text-amber-600 hover:bg-amber-50 transition-all group"
            >
              Explore All 15 Templates
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <p className="mt-4 text-sm text-gray-500">
              All templates include A/B testing • Analytics dashboard • ROI tracking
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}