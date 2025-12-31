// components/product/email/EmailAutomation.tsx
"use client";
import { motion } from "framer-motion";
import { 
  Zap, Clock, Users, TrendingUp,
  Code, Bell, Repeat, Filter,
  CheckCircle,
  ShoppingCart
} from "lucide-react";

const automationFeatures = [
  {
    icon: <Zap className="h-5 w-5" />,
    title: "Trigger-Based Automation",
    description: "Send emails based on user actions",
    details: ["Sign-up", "Purchase", "Page view", "App event"]
  },
  {
    icon: <Clock className="h-5 w-5" />,
    title: "Drip Campaigns",
    description: "Timed email sequences",
    details: ["Onboarding series", "Educational content", "Nurture campaigns"]
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: "Behavioral Targeting",
    description: "Personalized based on behavior",
    details: ["Engagement level", "Purchase history", "Browsing behavior"]
  },
  {
    icon: <TrendingUp className="h-5 w-5" />,
    title: "A/B Testing",
    description: "Optimize email performance",
    details: ["Subject lines", "Content", "Send times", "CTAs"]
  },
  {
    icon: <Code className="h-5 w-5" />,
    title: "API Integration",
    description: "Connect with your stack",
    details: ["REST API", "Webhooks", "SDKs", "Zapier/IFTTT"]
  },
  {
    icon: <Bell className="h-5 w-5" />,
    title: "Real-time Triggers",
    description: "Instant email delivery",
    details: ["Instant notifications", "Real-time updates", "Live alerts"]
  },
  {
    icon: <Repeat className="h-5 w-5" />,
    title: "Workflow Automation",
    description: "Complex automation rules",
    details: ["Multi-step sequences", "Conditional logic", "Branching paths"]
  },
  {
    icon: <Filter className="h-5 w-5" />,
    title: "Advanced Segmentation",
    description: "Target specific audiences",
    details: ["Demographic filters", "Behavioral segments", "Custom attributes"]
  }
];

const automationExamples = [
  {
    name: "Welcome Series",
    description: "New user onboarding sequence",
    steps: ["Welcome email", "Feature guide", "Support resources"],
    code: `POST /v1/automations
{
  "trigger": "user_signup",
  "steps": [
    {
      "delay": "0 minutes",
      "template": "welcome_email"
    },
    {
      "delay": "1 day",
      "template": "feature_guide"
    },
    {
      "delay": "3 days",
      "template": "support_resources"
    }
  ]
}`
  },
  {
    name: "Cart Abandonment",
    description: "Recover abandoned shopping carts",
    steps: ["Reminder after 1 hour", "Offer after 1 day", "Final reminder after 3 days"],
    code: `POST /v1/automations
{
  "trigger": "cart_abandoned",
  "conditions": {
    "cart_value": "> 50",
    "items_count": "> 1"
  },
  "steps": [
    {
      "delay": "1 hour",
      "template": "cart_reminder"
    },
    {
      "delay": "1 day",
      "template": "special_offer"
    },
    {
      "delay": "3 days",
      "template": "final_reminder"
    }
  ]
}`
  }
];

export default function EmailAutomation() {
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
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 mb-4">
            <Zap className="h-4 w-4 text-emerald-700" />
            <span className="text-sm font-semibold text-emerald-700">
              EMAIL AUTOMATION
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Advanced Email Automation
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Automate your email communication with trigger-based workflows, 
            behavioral targeting, and intelligent sequencing
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {automationFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <div className="p-6 bg-white rounded-xl border border-gray-200 hover:border-emerald-200 transition-all h-full">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-emerald-50 mb-4">
                  <div className="text-emerald-600">
                    {feature.icon}
                  </div>
                </div>
                
                <h3 className="font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  {feature.description}
                </p>
                
                <div className="space-y-2">
                  {feature.details.map((detail, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-emerald-500" />
                      <span className="text-xs text-gray-500">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Examples */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Automation Examples
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {automationExamples.map((example, index) => (
              <motion.div
                key={example.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-white rounded-xl border border-gray-200 overflow-hidden h-full">
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-emerald-50">
                        <div className="text-emerald-600">
                          {example.name.includes("Welcome") ? <Users className="h-5 w-5" /> : <ShoppingCart className="h-5 w-5" />}
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          {example.name}
                        </h3>
                        <p className="text-sm text-gray-600">{example.description}</p>
                      </div>
                    </div>
                    
                    {/* Steps */}
                    <div className="mb-6 space-y-3">
                      {example.steps.map((step, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">
                            <span className="text-xs font-semibold text-emerald-700">{i + 1}</span>
                          </div>
                          <span className="text-sm text-gray-600">{step}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Code */}
                    <div className="bg-gray-900 rounded-lg p-4">
                      <pre className="text-sm text-gray-300 overflow-x-auto">
                        <code>{example.code}</code>
                      </pre>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Trigger Types */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="p-8 bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl border border-emerald-200"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Multiple Trigger Types
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-white rounded-xl">
                <div className="text-lg font-semibold text-gray-900 mb-2">Event Triggers</div>
                <p className="text-sm text-gray-600 mb-4">Based on user actions</p>
                <div className="text-xs text-gray-500">Sign-ups, purchases, clicks</div>
              </div>
              <div className="p-6 bg-white rounded-xl">
                <div className="text-lg font-semibold text-gray-900 mb-2">Time Triggers</div>
                <p className="text-sm text-gray-600 mb-4">Based on time intervals</p>
                <div className="text-xs text-gray-500">Delays, schedules, recurring</div>
              </div>
              <div className="p-6 bg-white rounded-xl">
                <div className="text-lg font-semibold text-gray-900 mb-2">Data Triggers</div>
                <p className="text-sm text-gray-600 mb-4">Based on data changes</p>
                <div className="text-xs text-gray-500">Attribute updates, milestones</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}