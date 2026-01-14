// components/use-cases/marketing/MarketingAutomation.tsx
"use client";
import { motion } from "framer-motion";
import { CheckCircle, Zap, Target, Users, BarChart, Clock, Filter, Palette } from "lucide-react";

const automationFeatures = [
  {
    icon: <Target className="h-5 w-5" />,
    title: "Smart Segmentation",
    description: "Automatically group customers based on behavior",
    benefits: ["Behavior-based segments", "Real-time updates", "Predictive scoring"],
  },
  {
    icon: <Zap className="h-5 w-5" />,
    title: "Trigger Automation",
    description: "Launch campaigns based on customer actions",
    benefits: ["Event-based triggers", "Time-based sequences", "Cross-channel flows"],
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: "Personalization Engine",
    description: "Dynamic content tailored to each recipient",
    benefits: ["AI recommendations", "Dynamic content blocks", "Personalized timing"],
  },
  {
    icon: <BarChart className="h-5 w-5" />,
    title: "A/B Testing",
    description: "Optimize every element of your campaigns",
    benefits: ["Multi-variant testing", "Statistical significance", "Automated winners"],
  },
  {
    icon: <Clock className="h-5 w-5" />,
    title: "Smart Scheduling",
    description: "Send at the perfect time for each customer",
    benefits: ["Timezone optimization", "Send time optimization", "Frequency capping"],
  },
  {
    icon: <Filter className="h-5 w-5" />,
    title: "Advanced Analytics",
    description: "Deep insights into campaign performance",
    benefits: ["ROI tracking", "Attribution modeling", "Predictive analytics"],
  },
];

export default function MarketingAutomation() {
  return (
    <section className="py-13 bg-white relative">
      {/* Grid Background */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-5"
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Intelligent Marketing Automation
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Advanced automation features that make every campaign smarter, 
              more personalized, and more effective.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {automationFeatures.map((feature, index) => (
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
                        <CheckCircle className="h-3 w-3 text-amber-500 flex-shrink-0" />
                        <span className="text-xs text-gray-500">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Automation Workflow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-200"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Complete Campaign Automation
                </h3>
                <p className="text-gray-600 mb-6">
                  From segmentation to optimization, Sendexa handles your entire 
                  marketing workflow automatically.
                </p>
                <div className="space-y-4">
                  {[
                    { step: "1", title: "Data Collection", desc: "Track customer behavior" },
                    { step: "2", title: "Segmentation", desc: "Automated audience grouping" },
                    { step: "3", title: "Trigger Detection", desc: "Identify campaign opportunities" },
                    { step: "4", title: "Personalization", desc: "Dynamic content generation" },
                    { step: "5", title: "Delivery", desc: "Optimized timing & channel" },
                    { step: "6", title: "Optimization", desc: "AI-powered A/B testing" },
                  ].map((step) => (
                    <div key={step.step} className="flex items-center gap-4">
                      <div className="h-8 w-8 rounded-full bg-white border border-amber-200 text-amber-600 font-bold flex items-center justify-center">
                        {step.step}
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{step.title}</div>
                        <div className="text-sm text-gray-500">{step.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    85% Less
                  </div>
                  <div className="text-gray-600">Manual work required</div>
                </div>
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <Palette className="h-5 w-5 text-amber-500" />
                      <div className="text-sm text-gray-700">Campaign creation time</div>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-amber-500 to-orange-500 w-1/4" />
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      From 8 hours to 1.2 hours
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <Target className="h-5 w-5 text-amber-500" />
                      <div className="text-sm text-gray-700">Segmentation accuracy</div>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-amber-500 to-orange-500 w-4/5" />
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      94% accurate vs. 65% manual
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <BarChart className="h-5 w-5 text-amber-500" />
                      <div className="text-sm text-gray-700">Campaign performance</div>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-amber-500 to-orange-500 w-3/4" />
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      3.5x higher conversions
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