// components/solutions/support/SupportFeatures.tsx
"use client";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import {
  MessageSquare,
  Headphones,
  Zap,
  Clock,
  Users,
  FileText,
  Bell,
  Shield,
} from "lucide-react";

const features = [
  {
    icon: <MessageSquare className="h-5 w-5" />,
    title: "Automated Responses",
    description: "Instant replies to common questions",
    benefits: ["Reduce wait times", "24/7 support", "Consistent answers"],
  },
  {
    icon: <Headphones className="h-5 w-5" />,
    title: "Ticket Management",
    description: "Streamline support ticket workflows",
    benefits: ["Auto-assignment", "Priority routing", "Status updates"],
  },
  {
    icon: <Zap className="h-5 w-5" />,
    title: "Live Chat Integration",
    description: "Real-time customer conversations",
    benefits: ["Instant connection", "Chat transcripts", "Agent handoff"],
  },
  {
    icon: <Clock className="h-5 w-5" />,
    title: "SLA Monitoring",
    description: "Track and maintain service levels",
    benefits: ["Auto-escalation", "Performance tracking", "Alerting"],
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: "Team Collaboration",
    description: "Internal communication and notes",
    benefits: ["Internal notes", "@mentions", "Knowledge sharing"],
  },
  {
    icon: <FileText className="h-5 w-5" />,
    title: "Knowledge Base",
    description: "Self-service customer portal",
    benefits: ["Reduce tickets", "Empower customers", "Centralized info"],
  },
  {
    icon: <Bell className="h-5 w-5" />,
    title: "Proactive Notifications",
    description: "Keep customers informed",
    benefits: ["Status updates", "Outage alerts", "Maintenance notices"],
  },
  {
    icon: <Shield className="h-5 w-5" />,
    title: "Security & Compliance",
    description: "Secure customer data handling",
    benefits: ["Data encryption", "Access controls", "Audit logs"],
  },
];

export default function SupportFeatures() {
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
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-50/10 to-transparent" />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-4 py-2 mb-4">
              <span className="text-sm font-semibold text-amber-700">
                SUPPORT FEATURES
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Customer Support Platform
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need to automate, manage, and optimize customer 
              support across all channels
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="p-6 bg-white border border-gray-200 rounded-xl hover:border-amber-200 hover:shadow-lg transition-all h-full">
                  <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-amber-50 group-hover:bg-amber-100 transition-colors">
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
                    {feature.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle className="h-3 w-3 text-emerald-500 flex-shrink-0" />
                        <span className="text-xs text-gray-500">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Automation Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-200">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Intelligent Automation Engine
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Our AI-powered automation identifies common questions, 
                    provides instant answers, and routes complex issues to 
                    the right agents automatically.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Natural language understanding",
                      "Intent detection and routing",
                      "Context-aware responses",
                      "Continuous learning from interactions",
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="h-2 w-2 rounded-full bg-amber-500" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500">First Response Time</div>
                      <div className="font-semibold text-amber-600">↓ 80%</div>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-amber-500 to-orange-500 w-4/5" />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500">Ticket Volume</div>
                      <div className="font-semibold text-amber-600">↓ 60%</div>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-amber-500 to-orange-500 w-2/3" />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500">Customer Satisfaction</div>
                      <div className="font-semibold text-amber-600">↑ 45%</div>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-amber-500 to-orange-500 w-5/6" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}