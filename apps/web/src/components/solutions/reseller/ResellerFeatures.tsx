// components/solutions/reseller/ResellerFeatures.tsx
"use client";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import {
  Briefcase,
  Users,
  Globe,
  DollarSign,
  Shield,
  Code,
  BarChart,
  Settings,
} from "lucide-react";

const features = [
  {
    icon: <Briefcase className="h-5 w-5" />,
    title: "White-label Dashboard",
    description: "Fully branded client portal",
    benefits: ["Your logo & colors", "Custom domain", "Branded emails"],
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: "Client Management",
    description: "Manage all client accounts",
    benefits: ["Bulk onboarding", "Usage monitoring", "Client billing"],
  },
  {
    icon: <Globe className="h-5 w-5" />,
    title: "Multi-region Support",
    description: "Global infrastructure access",
    benefits: ["Local numbers", "Regional pricing", "Compliance support"],
  },
  {
    icon: <DollarSign className="h-5 w-5" />,
    title: "Revenue Sharing",
    description: "Competitive commission structure",
    benefits: ["Monthly payouts", "Volume discounts", "Tiered commissions"],
  },
  {
    icon: <Shield className="h-5 w-5" />,
    title: "Security & Compliance",
    description: "Enterprise-grade security",
    benefits: ["SOC 2 certified", "GDPR ready", "Data encryption"],
  },
  {
    icon: <Code className="h-5 w-5" />,
    title: "API Access",
    description: "Full platform API access",
    benefits: ["White-label APIs", "Custom integrations", "Documentation"],
  },
  {
    icon: <BarChart className="h-5 w-5" />,
    title: "Analytics & Reporting",
    description: "Comprehensive performance data",
    benefits: ["Revenue reports", "Usage analytics", "Client insights"],
  },
  {
    icon: <Settings className="h-5 w-5" />,
    title: "Custom Pricing",
    description: "Flexible pricing models",
    benefits: ["Markup control", "Custom plans", "Trial management"],
  },
];

export default function ResellerFeatures() {
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
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-50/10 to-transparent" />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-2 mb-4">
              <span className="text-sm font-semibold text-indigo-700">
                RESELLER FEATURES
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete White-label Platform
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need to build and scale your own branded 
              communication platform under your agency&apos;s brand
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
                <div className="p-6 bg-white border border-gray-200 rounded-xl hover:border-indigo-200 hover:shadow-lg transition-all h-full">
                  <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-indigo-50 group-hover:bg-indigo-100 transition-colors">
                    <div className="text-indigo-600">
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

          {/* Revenue Model Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <div className="bg-gradient-to-br from-indigo-50 to-violet-50 rounded-2xl p-8 border border-indigo-200">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Lucrative Revenue Sharing
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Earn competitive commissions with our tiered revenue 
                    sharing model. The more you sell, the higher your earnings.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Tiered commission structure",
                      "Monthly recurring revenue",
                      "Volume-based discounts",
                      "Accelerator bonuses",
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="h-2 w-2 rounded-full bg-indigo-500" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500">Tier 1 Commission</div>
                      <div className="font-semibold text-indigo-600">25%</div>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-indigo-500 to-violet-500 w-1/4" />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500">Tier 2 Commission</div>
                      <div className="font-semibold text-indigo-600">30%</div>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-indigo-500 to-violet-500 w-3/10" />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500">Tier 3 Commission</div>
                      <div className="font-semibold text-indigo-600">35%</div>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-indigo-500 to-violet-500 w-7/20" />
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