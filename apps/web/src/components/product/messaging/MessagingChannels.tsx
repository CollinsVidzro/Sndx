// components/product/messaging/MessagingChannels.tsx
"use client";
import { motion } from "framer-motion";
import { 
  MessageSquare, Mail, Bell, Globe,
  Smartphone, MessageCircle, Send, CheckCircle
} from "lucide-react";

const channels = [
  {
    icon: <MessageSquare className="h-5 w-5" />,
    name: "SMS",
    description: "Text messaging",
    features: ["Short codes", "Long codes", "Toll-free numbers"],
    coverage: "Global",
    delivery: "< 3s"
  },
  {
    icon: <MessageCircle className="h-5 w-5" />,
    name: "WhatsApp",
    description: "WhatsApp Business API",
    features: ["Templates", "Media messages", "Interactive buttons"],
    coverage: "150+ countries",
    delivery: "< 1s"
  },
  {
    icon: <Mail className="h-5 w-5" />,
    name: "Email",
    description: "Transactional emails",
    features: ["HTML templates", "Attachments", "Tracking"],
    coverage: "Global",
    delivery: "< 5s"
  },
  {
    icon: <Bell className="h-5 w-5" />,
    name: "Push",
    description: "Push notifications",
    features: ["iOS & Android", "Rich media", "Deep linking"],
    coverage: "Global",
    delivery: "< 500ms"
  },
  {
    icon: <Globe className="h-5 w-5" />,
    name: "RCS",
    description: "Rich Communication Services",
    features: ["Rich media", "Read receipts", "Branding"],
    coverage: "30+ countries",
    delivery: "< 2s"
  },
  {
    icon: <Smartphone className="h-5 w-5" />,
    name: "In-App",
    description: "In-app messaging",
    features: ["Custom UI", "Real-time", "User targeting"],
    coverage: "Global",
    delivery: "Real-time"
  }
];

export default function MessagingChannels() {
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
          <div className="inline-flex items-center gap-2 rounded-full bg-cyan-50 px-4 py-2 mb-4">
            <span className="text-sm font-semibold text-cyan-700">
              CHANNELS
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Omni-Channel Messaging
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Reach your customers wherever they are with our comprehensive channel support
          </p>
        </div>

        {/* Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {channels.map((channel, index) => (
            <motion.div
              key={channel.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="p-6 bg-white border border-gray-200 rounded-xl hover:border-cyan-200 transition-all h-full">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-cyan-50">
                      <div className="text-cyan-600">
                        {channel.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {channel.name}
                      </h3>
                      <p className="text-sm text-gray-600">{channel.description}</p>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-4 space-y-2">
                  {channel.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-cyan-500" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex justify-between text-sm border-t border-gray-100 pt-4">
                  <div>
                    <div className="font-medium text-gray-900">Coverage</div>
                    <div className="text-gray-600">{channel.coverage}</div>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Delivery</div>
                    <div className="text-gray-600">{channel.delivery}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Unified API Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 p-8 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl border border-cyan-200"
        >
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Send className="h-5 w-5 text-cyan-600" />
                <span className="font-semibold text-cyan-700">Unified API</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                One API for All Channels
              </h3>
              <p className="text-gray-600">
                All messaging channels are accessible through a single, consistent API. 
                Switch between channels without changing your integration.
              </p>
            </div>
            <div className="hidden md:block">
              <div className="text-6xl font-bold text-cyan-600 opacity-50">API</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}