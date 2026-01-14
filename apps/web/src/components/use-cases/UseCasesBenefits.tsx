// components/use-cases/UseCasesBenefits.tsx
"use client";
import { motion } from "framer-motion";
import { CheckCircle, Zap, Shield, Users, BarChart, Clock } from "lucide-react";

const benefits = [
  {
    icon: <Zap className="h-5 w-5" />,
    title: "Quick Implementation",
    description: "Get started in minutes with pre-built templates and easy integration.",
    details: "Average setup time: 15 minutes",
  },
  {
    icon: <Shield className="h-5 w-5" />,
    title: "Enterprise Security",
    description: "Bank-grade security and compliance for all communication types.",
    details: "SOC2, GDPR, HIPAA compliant",
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: "Multi-Channel Delivery",
    description: "Reach customers across email, SMS, push, and more.",
    details: "3+ channels per use case",
  },
  {
    icon: <BarChart className="h-5 w-5" />,
    title: "Comprehensive Analytics",
    description: "Track performance with detailed insights and reports.",
    details: "40+ metrics tracked",
  },
  {
    icon: <CheckCircle className="h-5 w-5" />,
    title: "Proven Results",
    description: "Templates and workflows optimized for maximum effectiveness.",
    details: "40% average improvement",
  },
  {
    icon: <Clock className="h-5 w-5" />,
    title: "Time Savings",
    description: "Automate manual communication tasks and save hours weekly.",
    details: "65% time saved on average",
  },
];

export default function UseCasesBenefits() {
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Sendexa for Communication Automation?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Beyond just templates, Sendexa provides complete solutions with 
              enterprise-grade features and proven results.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="p-6 bg-white border border-gray-200 rounded-xl hover:border-indigo-200 hover:shadow-lg transition-all h-full">
                  <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-indigo-50 group-hover:bg-indigo-100 transition-colors">
                    <div className="text-indigo-600">
                      {benefit.icon}
                    </div>
                  </div>
                  
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    {benefit.description}
                  </p>
                  
                  <div className="text-xs font-medium text-indigo-700 bg-indigo-50 inline-block px-2 py-1 rounded">
                    {benefit.details}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Case Studies Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 border border-indigo-200"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Real Results Across Industries
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  industry: "Healthcare",
                  useCase: "Appointment Reminders",
                  result: "Reduced no-shows by 95%",
                  color: "from-teal-500 to-emerald-500",
                },
                {
                  industry: "E-commerce",
                  useCase: "Cart Abandonment",
                  result: "Increased conversions by 35%",
                  color: "from-amber-500 to-orange-500",
                },
                {
                  industry: "Finance",
                  useCase: "Security Alerts",
                  result: "Zero security breaches in 3 years",
                  color: "from-indigo-500 to-violet-500",
                },
              ].map((study) => (
                <div
                  key={study.industry}
                  className="bg-white rounded-xl p-6 border border-gray-200"
                >
                  <div className="mb-4">
                    <div className={`inline-block text-sm font-semibold text-white bg-gradient-to-br ${study.color} px-3 py-1 rounded-full`}>
                      {study.industry}
                    </div>
                  </div>
                  
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {study.useCase}
                  </h4>
                  <div className="text-lg font-bold text-gray-900 mb-2">
                    {study.result}
                  </div>
                  
                  <div className="text-sm text-gray-600">
                    Using Sendexa&apos;s pre-built templates and automation
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}