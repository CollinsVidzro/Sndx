// components/product/email/EmailAnalytics.tsx
"use client";
import { motion } from "framer-motion";
import { 
  BarChart, TrendingUp, Eye, MousePointer,
  Clock, Globe, Users, Filter
} from "lucide-react";

const analyticsFeatures = [
  {
    icon: <Eye className="h-5 w-5" />,
    title: "Open Tracking",
    description: "Real-time open rates",
    details: "Track email opens across devices and clients"
  },
  {
    icon: <MousePointer className="h-5 w-5" />,
    title: "Click Tracking",
    description: "Link click analytics",
    details: "Monitor which links get the most engagement"
  },
  {
    icon: <Clock className="h-5 w-5" />,
    title: "Delivery Timing",
    description: "Delivery speed analytics",
    details: "Track email delivery times across ISPs"
  },
  {
    icon: <Globe className="h-5 w-5" />,
    title: "Geographic Analytics",
    description: "Location-based insights",
    details: "See where your emails are being opened"
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: "Engagement Scoring",
    description: "Subscriber engagement",
    details: "Score subscribers based on interaction"
  },
  {
    icon: <BarChart className="h-5 w-5" />,
    title: "Performance Comparison",
    description: "Campaign benchmarking",
    details: "Compare performance across campaigns"
  },
  {
    icon: <TrendingUp className="h-5 w-5" />,
    title: "Trend Analysis",
    description: "Long-term performance",
    details: "Track performance trends over time"
  },
  {
    icon: <Filter className="h-5 w-5" />,
    title: "Segmented Reporting",
    description: "Filtered analytics",
    details: "Analyze performance by segments"
  }
];

const metrics = [
  { label: "Delivered", value: "99.9%", change: "+0.1%" },
  { label: "Open Rate", value: "24.5%", change: "+2.1%" },
  { label: "Click Rate", value: "3.8%", change: "+0.4%" },
  { label: "Bounce Rate", value: "0.1%", change: "-0.05%" },
  { label: "Unsubscribe", value: "0.2%", change: "-0.1%" },
  { label: "Spam Rate", value: "0.05%", change: "-0.02%" }
];

export default function EmailAnalytics() {
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
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 mb-4">
            <BarChart className="h-4 w-4 text-blue-600" />
            <span className="text-sm font-semibold text-blue-700">
              ANALYTICS & REPORTING
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Email Analytics
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Track every aspect of your email performance with real-time analytics 
            and detailed reporting
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {analyticsFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <div className="p-6 bg-white border border-gray-200 rounded-xl hover:border-blue-200 transition-all h-full">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-50 mb-4">
                  <div className="text-blue-600">
                    {feature.icon}
                  </div>
                </div>
                
                <h3 className="font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  {feature.description}
                </p>
                <p className="text-xs text-gray-500">
                  {feature.details}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Metrics Dashboard */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Real-time Performance Metrics
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-4 rounded-xl border border-gray-200"
              >
                <div className="text-sm text-gray-500 mb-1">{metric.label}</div>
                <div className="flex items-baseline gap-2 mb-1">
                  <div className="text-2xl font-bold text-gray-900">{metric.value}</div>
                  <div className={`text-sm font-medium ${metric.change.startsWith('+') ? 'text-emerald-600' : 'text-rose-600'}`}>
                    {metric.change}
                  </div>
                </div>
                <div className="text-xs text-gray-400">vs previous period</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Analytics Example */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="p-8 bg-white rounded-2xl border border-gray-200 shadow-sm"
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Campaign Performance Dashboard
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-sm font-medium text-gray-500 mb-1">Campaign</div>
                  <div className="font-semibold text-gray-900">Q1 Newsletter</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-500 mb-1">Sent</div>
                  <div className="font-semibold text-gray-900">50,241</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-500 mb-1">Unique Opens</div>
                  <div className="font-semibold text-gray-900">12,312 (24.5%)</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-500 mb-1">Unique Clicks</div>
                  <div className="font-semibold text-gray-900">1,909 (3.8%)</div>
                </div>
              </div>
            </div>
            <div className="lg:text-right">
              <div className="text-sm text-gray-500 mb-2">Top Performing Links</div>
              <div className="space-y-1">
                <div className="text-sm font-medium text-gray-700">Learn More → 423 clicks</div>
                <div className="text-sm font-medium text-gray-700">View Offer → 312 clicks</div>
                <div className="text-sm font-medium text-gray-700">Download → 287 clicks</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}