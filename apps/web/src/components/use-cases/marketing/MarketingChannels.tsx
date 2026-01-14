// components/use-cases/marketing/MarketingChannels.tsx
"use client";
import { motion } from "framer-motion";
import { Mail, MessageSquare, Bell, Target, Zap, BarChart } from "lucide-react";

const channels = [
  {
    icon: <Mail className="h-5 w-5" />,
    title: "Email Marketing",
    description: "High-impact newsletters and campaigns",
    metrics: "42% avg. open rate",
    features: ["Drag & drop editor", "Personalization", "Automated sequences"],
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: <MessageSquare className="h-5 w-5" />,
    title: "SMS Marketing",
    description: "Direct-to-pocket messaging",
    metrics: "98% open rate",
    features: ["Short links", "Automated replies", "Opt-in management"],
    color: "bg-green-100 text-green-600",
  },
  {
    icon: <Bell className="h-5 w-5" />,
    title: "Push Notifications",
    description: "Instant website/app notifications",
    metrics: "22% avg. CTR",
    features: ["Rich media", "Segmentation", "Time optimization"],
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: <Target className="h-5 w-5" />,
    title: "Multi-Channel Orchestration",
    description: "Coordinated campaigns across all channels",
    metrics: "3.5x better results",
    features: ["Cross-channel flows", "Unified analytics", "Smart scheduling"],
    color: "bg-amber-100 text-amber-600",
  },
];

export default function MarketingChannels() {
  return (
    <section className="py-13 bg-gray-50 relative">
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
            <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 mb-4">
              <Zap className="h-4 w-4 text-gray-600" />
              <span className="text-sm font-semibold text-gray-700">
                MULTI-CHANNEL MARKETING
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Reach Customers Everywhere They Are
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Engage your audience across every channel with coordinated, 
              personalized messaging that drives results.
            </p>
          </div>

          {/* Channels Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {channels.map((channel, index) => (
              <motion.div
                key={channel.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="p-6 bg-white border border-gray-200 rounded-xl hover:border-amber-200 hover:shadow-lg transition-all h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`rounded-lg p-2 ${channel.color}`}>
                      {channel.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {channel.title}
                      </h3>
                      <div className="text-sm text-gray-600">
                        {channel.description}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-lg font-bold text-amber-600">
                      {channel.metrics}
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {channel.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Channel Performance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-200"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Multi-Channel Performance
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="space-y-6">
                  {[
                    { channel: "Email", openRate: "42%", ctr: "4.2%" },
                    { channel: "SMS", openRate: "98%", ctr: "8.1%" },
                    { channel: "Push", openRate: "85%", ctr: "22%" },
                    { channel: "Multi-Channel", openRate: "92%", ctr: "12.5%" },
                  ].map((item) => (
                    <div key={item.channel} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="font-medium text-gray-900">{item.channel}</div>
                        <div className="flex gap-4">
                          <div className="text-sm text-gray-600">
                            {item.openRate} open
                          </div>
                          <div className="text-sm text-gray-600">
                            {item.ctr} CTR
                          </div>
                        </div>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-amber-500 to-orange-500" style={{ 
                          width: item.channel === "Email" ? "84%" : 
                                 item.channel === "SMS" ? "98%" : 
                                 item.channel === "Push" ? "85%" : "92%" 
                        }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    3.5x
                  </div>
                  <div className="text-gray-600">Higher conversions with multi-channel</div>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>Single channel</span>
                      <span>4.2% avg. CTR</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-gray-300 w-1/4" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>Multi-channel</span>
                      <span>12.5% avg. CTR</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-amber-500 to-orange-500 w-3/4" />
                    </div>
                  </div>
                  <div className="pt-4 text-center">
                    <div className="text-sm text-gray-500">
                      <BarChart className="h-4 w-4 inline-block mr-2" />
                      298% increase in campaign effectiveness
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