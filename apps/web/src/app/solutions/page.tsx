// app/solutions/page.tsx
"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle } from "lucide-react";
import {
  ShoppingCart,
  Building,
  CreditCard,
  Heart,
  MessageSquare,
  UsersIcon,
} from "lucide-react";

const solutions = [
  {
    icon: <ShoppingCart className="h-5 w-5" />,
    title: "E-commerce",
    description: "Boost sales with automated customer communication",
    href: "/solutions/ecommerce",
    badge: "Popular",
    color: "from-blue-500 to-cyan-600",
    bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
  },
  {
    icon: <Building className="h-5 w-5" />,
    title: "SaaS",
    description: "Engage users throughout their journey",
    href: "/solutions/saas",
    badge: null,
    color: "from-purple-500 to-pink-600",
    bgColor: "bg-gradient-to-br from-purple-50 to-pink-50",
  },
  {
    icon: <CreditCard className="h-5 w-5" />,
    title: "Finance",
    description: "Secure and timely financial notifications",
    href: "/solutions/finance",
    badge: null,
    color: "from-emerald-500 to-green-600",
    bgColor: "bg-gradient-to-br from-emerald-50 to-green-50",
  },
  {
    icon: <Heart className="h-5 w-5" />,
    title: "Healthcare",
    description: "Improve patient care with reliable communication",
    href: "/solutions/healthcare",
    badge: null,
    color: "from-rose-500 to-red-600",
    bgColor: "bg-gradient-to-br from-rose-50 to-red-50",
  },
  {
    icon: <MessageSquare className="h-5 w-5" />,
    title: "Customer Support",
    description: "Enhance support with automated responses",
    href: "/solutions/support",
    badge: "New",
    color: "from-amber-500 to-orange-600",
    bgColor: "bg-gradient-to-br from-amber-50 to-orange-50",
  },
  {
    icon: <UsersIcon className="h-5 w-5" />,
    title: "Reseller",
    description: "White-label solutions for partners and agencies",
    href: "/solutions/reseller",
    badge: "Soon",
    color: "from-indigo-500 to-violet-600",
    bgColor: "bg-gradient-to-br from-indigo-50 to-violet-50",
  },
];

const benefits = [
  "Industry-specific templates",
  "Pre-built integrations",
  "Compliance-ready workflows",
  "Enterprise-grade security",
  "24/7 customer support",
  "Scalable infrastructure",
];

export default function SolutionsIndexPage() {
  return (
    <main className="space-y-0">
      {/* Hero Section */}
      <section className="relative py-10 overflow-hidden">
        {/* Grid Background */}
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute inset-0 opacity-20"
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
          <div className="max-w-4xl mx-auto text-center">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6 mb-12"
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-cyan-50 px-4 py-2">
                <Sparkles className="h-4 w-4 text-cyan-600" />
                <span className="text-sm font-medium text-cyan-700">
                  INDUSTRY SOLUTIONS
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                <span className="block text-gray-900">Solutions for</span>
                <span className="block bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                  Every Industry
                </span>
              </h1>

              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Tailored communication solutions that drive growth, enhance
                engagement, and streamline operations across industries.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-13 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Industry Solution
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Select your industry to explore tailored communication solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link
                  href={solution.href}
                  className="group block p-6 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-all h-full"
                >
                  <div className="mb-4 flex items-start justify-between">
                    <div className={`rounded-lg p-3 ${solution.bgColor}`}>
                      <div
                        className={`text-white bg-gradient-to-br ${solution.color} p-2 rounded-md`}
                      >
                        {solution.icon}
                      </div>
                    </div>
                    {solution.badge && (
                      <span
                        className={`rounded-full px-2.5 py-0.5 text-xs font-semibold text-white ${
                          solution.badge === "Popular"
                            ? "bg-gradient-to-r from-cyan-500 to-blue-600"
                            : solution.badge === "New"
                            ? "bg-gradient-to-r from-amber-500 to-orange-600"
                            : "bg-gradient-to-r from-indigo-500 to-violet-600"
                        }`}
                      >
                        {solution.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="font-semibold text-gray-900 mb-2 text-lg">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{solution.description}</p>

                  <div className="flex items-center text-sm text-cyan-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Explore solution
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-13 bg-gray-50 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Sendexa Solutions
              </h2>
              <p className="text-gray-600">
                Discover the benefits of our industry-specific solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3 p-4 bg-white rounded-lg border border-gray-200"
                >
                  <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-13 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-cyan-50 px-4 py-2 mb-4">
              <span className="text-sm font-semibold text-cyan-700">
                PLATFORM FEATURES
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Built for Scale and Security
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Enterprise-grade infrastructure that grows with your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "🌍",
                title: "Global Reach",
                description: "200+ countries with local infrastructure",
              },
              {
                icon: "⚡",
                title: "High Performance",
                description: "99.99% uptime SLA guarantee",
              },
              {
                icon: "🔒",
                title: "Enterprise Security",
                description: "SOC 2 Type II compliant",
              },
              {
                icon: "🛠️",
                title: "Developer First",
                description: "Comprehensive SDKs & APIs",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-white border border-gray-200 rounded-xl text-center"
              >
                <div className="text-2xl mb-4">{feature.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-13 bg-gradient-to-br from-cyan-50 to-blue-50 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Ready to Transform Your Communication?
              </h2>
              <p className="text-gray-600">
                Join thousands of businesses that trust Sendexa for their
                communication infrastructure
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/signup"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 px-8 py-4 font-semibold text-white hover:shadow-lg transition-all"
                >
                  Start Free Trial
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-8 py-4 font-semibold text-gray-700 hover:border-gray-400 transition-all"
                >
                  Schedule Demo
                </Link>
              </div>
              <p className="text-sm text-gray-500">
                No credit card required • Free tier includes 1,000 messages/month
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}