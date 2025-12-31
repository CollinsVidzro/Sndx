// components/product/email/EmailFeatures.tsx
"use client";
import { motion } from "framer-motion";
import { 
  Send, Inbox, Mail, Clock,
  Settings, Globe, Shield, Users,
  BarChart, Code, Database, Bell
} from "lucide-react";

const features = [
  {
    icon: <Send className="h-5 w-5" />,
    title: "Transactional Email",
    description: "Time-sensitive communications",
    details: ["Order confirmations", "Password resets", "Account alerts"]
  },
  {
    icon: <Mail className="h-5 w-5" />,
    title: "Marketing Campaigns",
    description: "Bulk email campaigns",
    details: ["Newsletters", "Promotions", "Announcements"]
  },
  {
    icon: <Inbox className="h-5 w-5" />,
    title: "High Deliverability",
    description: "Optimized inbox placement",
    details: ["Smart routing", "ISP monitoring", "Reputation management"]
  },
  {
    icon: <Clock className="h-5 w-5" />,
    title: "Scheduled Sending",
    description: "Send at optimal times",
    details: ["Timezone optimization", "Queue management", "Batch sending"]
  },
  {
    icon: <Settings className="h-5 w-5" />,
    title: "SMTP & API",
    description: "Multiple integration options",
    details: ["REST API", "SMTP relay", "Webhooks"]
  },
  {
    icon: <Globe className="h-5 w-5" />,
    title: "Global Infrastructure",
    description: "Worldwide delivery network",
    details: ["Multiple regions", "Local IPs", "Geo-routing"]
  },
  {
    icon: <Shield className="h-5 w-5" />,
    title: "Security & Compliance",
    description: "Enterprise-grade security",
    details: ["TLS encryption", "DMARC/DKIM/SPF", "GDPR compliant"]
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: "Team Collaboration",
    description: "Multi-user management",
    details: ["Role-based access", "Team templates", "Approval workflows"]
  },
  {
    icon: <BarChart className="h-5 w-5" />,
    title: "Real-time Analytics",
    description: "Comprehensive reporting",
    details: ["Open/click tracking", "Engagement metrics", "Delivery reports"]
  },
  {
    icon: <Code className="h-5 w-5" />,
    title: "Templates & Dynamic Content",
    description: "Personalized emails",
    details: ["HTML templates", "Merge tags", "Conditional logic"]
  },
  {
    icon: <Database className="h-5 w-5" />,
    title: "List Management",
    description: "Advanced segmentation",
    details: ["Import/export", "Segmentation", "Suppression lists"]
  },
  {
    icon: <Bell className="h-5 w-5" />,
    title: "Automated Workflows",
    description: "Trigger-based emails",
    details: ["Event triggers", "Drip campaigns", "Behavioral emails"]
  }
];

export default function EmailFeatures() {
  return (
    <section className="py-16 md:py-24 bg-gray-50 relative">
      {/* Grid Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(to right, #9ca3af 1px, transparent 1px),
              linear-gradient(to bottom, #9ca3af 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 mb-4">
            <span className="text-sm font-semibold text-gray-700">
              COMPLETE EMAIL SUITE
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Enterprise Email Infrastructure
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Everything you need to send, track, and optimize your email communication
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
              <div className="p-6 bg-white border border-gray-200 rounded-xl hover:border-emerald-200 transition-all h-full">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-emerald-50 mb-4">
                  <div className="text-emerald-600">
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
                      <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
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
              <div className="text-4xl font-bold text-emerald-600 mb-2">99.99%</div>
              <div className="font-semibold text-gray-900 mb-1">Deliverability</div>
              <p className="text-sm text-gray-600">Guaranteed inbox placement</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">&lt; 1s</div>
              <div className="font-semibold text-gray-900 mb-1">Delivery Time</div>
              <p className="text-sm text-gray-600">Average delivery latency</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">200+</div>
              <div className="font-semibold text-gray-900 mb-1">ISPs Supported</div>
              <p className="text-sm text-gray-600">Global coverage</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">10B+</div>
              <div className="font-semibold text-gray-900 mb-1">Emails Monthly</div>
              <p className="text-sm text-gray-600">Processed volume</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}