// components/solutions/ecommerce/EcommerceUseCases.tsx
"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, FileText, PlayCircle } from "lucide-react";

const useCases = [
  {
    title: "Order Confirmation Flow",
    description: "Automated sequence for new orders",
    steps: [
      "Instant order confirmation",
      "Payment processing update",
      "Shipping preparation notification",
    ],
    templates: "3 templates",
    link: "/templates/ecommerce/order-confirmation",
  },
  {
    title: "Cart Recovery Campaign",
    description: "Win back abandoned carts",
    steps: [
      "1-hour reminder email",
      "24-hour SMS follow-up",
      "48-hour final offer",
    ],
    templates: "5 templates",
    link: "/templates/ecommerce/cart-recovery",
  },
  {
    title: "Shipping Updates",
    description: "Keep customers informed",
    steps: [
      "Order shipped notification",
      "Delivery day reminder",
      "Post-delivery follow-up",
    ],
    templates: "4 templates",
    link: "/templates/ecommerce/shipping-updates",
  },
  {
    title: "Review Request Sequence",
    description: "Build social proof automatically",
    steps: [
      "Delivery confirmation",
      "Product experience check",
      "Review request",
    ],
    templates: "3 templates",
    link: "/templates/ecommerce/review-requests",
  },
];

const templates = [
  {
    name: "Welcome Series",
    messages: 4,
    channel: "Email & SMS",
    preview: "Welcome to [Store]! Get 10% off your first order.",
  },
  {
    name: "Birthday Offer",
    messages: 2,
    channel: "Email",
    preview: "Happy Birthday! Enjoy a special gift from us.",
  },
  {
    name: "Back in Stock Alert",
    messages: 1,
    channel: "SMS",
    preview: "Your waited item is back! Shop now before it's gone.",
  },
  {
    name: "Loyalty Program",
    messages: 5,
    channel: "Email & SMS",
    preview: "You've earned rewards! Redeem your points.",
  },
];

export default function EcommerceUseCases() {
  return (
    <section className="py-13 bg-gray-50 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 mb-4">
              <span className="text-sm font-semibold text-gray-700">
                USE CASES & TEMPLATES
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready-to-Use Workflows
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Pre-built automation workflows that work out of the box. Customize 
              to match your brand voice and start automating in minutes.
            </p>
          </div>

          {/* Use Cases Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Popular Automation Flows
              </h3>
              <div className="space-y-4">
                {useCases.map((useCase, index) => (
                  <motion.div
                    key={useCase.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      href={useCase.link}
                      className="group block p-6 bg-white rounded-xl border border-gray-200 hover:border-blue-200 hover:shadow-md transition-all"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                            {useCase.title}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {useCase.description}
                          </p>
                        </div>
                        <span className="inline-flex items-center gap-1 text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                          {useCase.templates}
                        </span>
                      </div>
                      
                      <div className="space-y-2 mb-4">
                        {useCase.steps.map((step, i) => (
                          <div key={i} className="flex items-center gap-3">
                            <div className="h-6 w-6 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold flex items-center justify-center">
                              {i + 1}
                            </div>
                            <span className="text-sm text-gray-700">{step}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex items-center text-sm text-blue-600 font-medium">
                        View templates
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Template Library
              </h3>
              <div className="space-y-4">
                {templates.map((template, index) => (
                  <motion.div
                    key={template.name}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="p-6 bg-white rounded-xl border border-gray-200">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">
                            {template.name}
                          </h4>
                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <span>{template.messages} messages</span>
                            <span>•</span>
                            <span>{template.channel}</span>
                          </div>
                        </div>
                        <button className="text-blue-600 hover:text-blue-700">
                          <FileText className="h-5 w-5" />
                        </button>
                      </div>
                      
                      <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                        <div className="text-sm text-gray-700">{template.preview}</div>
                      </div>
                      
                      <div className="mt-4 flex items-center gap-4">
                        <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                          Preview
                        </button>
                        <button className="text-sm text-gray-600 hover:text-gray-700 font-medium">
                          Customize
                        </button>
                        <button className="text-sm text-gray-600 hover:text-gray-700 font-medium ml-auto">
                          Use Template
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Start */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-200"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Get Started in 5 Minutes
                </h3>
                <p className="text-gray-600 mb-6">
                  Connect your e-commerce platform and launch your first automation 
                  workflow in less than 5 minutes. No coding required.
                </p>
                <div className="flex items-center gap-6">
                  <Link
                    href="/docs/ecommerce/quick-start"
                    className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700"
                  >
                    <PlayCircle className="h-5 w-5" />
                    Watch Tutorial
                  </Link>
                  <Link
                    href="/templates/ecommerce"
                    className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700"
                  >
                    <FileText className="h-5 w-5" />
                    Browse Templates
                  </Link>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    5 min
                  </div>
                  <div className="text-gray-600">Setup time</div>
                  <div className="mt-4 text-sm text-gray-500">
                    Average time to first automation
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