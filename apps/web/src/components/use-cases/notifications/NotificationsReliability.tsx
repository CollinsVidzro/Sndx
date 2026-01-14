// components/use-cases/notifications/NotificationsReliability.tsx
"use client";
import { motion } from "framer-motion";
import { CheckCircle, Shield, Server, Globe, Zap, Database } from "lucide-react";

const reliabilityFeatures = [
  {
    icon: <Shield className="h-5 w-5" />,
    title: "Multi-Region Redundancy",
    description: "Automatic failover across global regions",
    benefits: ["99.99% uptime", "Zero downtime updates", "Disaster recovery"],
  },
  {
    icon: <Server className="h-5 w-5" />,
    title: "Distributed Architecture",
    description: "Horizontally scalable infrastructure",
    benefits: ["Unlimited scalability", "Load balancing", "Auto-scaling"],
  },
  {
    icon: <Zap className="h-5 w-5" />,
    title: "Low Latency Delivery",
    description: "Sub-100ms notification delivery",
    benefits: ["Edge computing", "Global CDN", "Protocol optimization"],
  },
  {
    icon: <Globe className="h-5 w-5" />,
    title: "Global Infrastructure",
    description: "15+ regions worldwide",
    benefits: ["Local compliance", "Reduced latency", "Geo-redundancy"],
  },
  {
    icon: <Database className="h-5 w-5" />,
    title: "Data Durability",
    description: "Enterprise-grade data protection",
    benefits: ["Multi-zone replication", "Encrypted backups", "Point-in-time recovery"],
  },
  {
    icon: <CheckCircle className="h-5 w-5" />,
    title: "Health Monitoring",
    description: "24/7 system monitoring",
    benefits: ["Real-time alerts", "Performance metrics", "Predictive analytics"],
  },
];

export default function NotificationsReliability() {
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
              <Shield className="h-4 w-4 text-gray-600" />
              <span className="text-sm font-semibold text-gray-700">
                ENTERPRISE RELIABILITY
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Built for Mission-Critical Systems
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              When your systems depend on reliable notifications, trust Sendexa&apos;s 
              enterprise-grade infrastructure and redundancy.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {reliabilityFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="p-6 bg-white border border-gray-200 rounded-xl hover:border-slate-200 hover:shadow-lg transition-all h-full">
                  <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-slate-50 group-hover:bg-slate-100 transition-colors">
                    <div className="text-slate-600">
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

          {/* Infrastructure Map */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-slate-50 to-gray-50 rounded-2xl p-8 border border-slate-200"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Global Infrastructure Network
                </h3>
                <p className="text-gray-600 mb-6">
                  Our distributed network ensures your notifications are delivered 
                  with the lowest possible latency, regardless of where your users 
                  or systems are located.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { region: "North America", locations: 5, latency: "< 50ms" },
                    { region: "Europe", locations: 4, latency: "< 80ms" },
                    { region: "Asia Pacific", locations: 4, latency: "< 120ms" },
                    { region: "South America", locations: 2, latency: "< 150ms" },
                  ].map((region) => (
                    <div key={region.region} className="bg-white p-4 rounded-lg border border-gray-200">
                      <div className="font-semibold text-gray-900 mb-1">
                        {region.region}
                      </div>
                      <div className="text-sm text-gray-600 mb-2">
                        {region.locations} locations
                      </div>
                      <div className="text-xs text-slate-600 font-medium">
                        {region.latency} latency
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    15+
                  </div>
                  <div className="text-gray-600">Global regions</div>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>Uptime SLA</span>
                      <span>99.99%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-slate-500 to-gray-500 w-[99.99%]" />
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      52 minutes downtime/year
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>Average latency</span>
                      <span>&lt; 100ms</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-slate-500 to-gray-500 w-4/5" />
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      5x faster than industry average
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>Data durability</span>
                      <span>99.999999999%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-slate-500 to-gray-500 w-full" />
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      11 nines durability
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