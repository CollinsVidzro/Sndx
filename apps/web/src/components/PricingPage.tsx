// PricingPage.tsx - Complete pricing page with SMS focus
"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Check, X, Zap, Shield, Globe, 
  MessageCircle, 
  HelpCircle, BarChart, 
  Cloud,  Clock, Star
} from "lucide-react";

const SMS_RATE_GHS = 0.035;
const USD_TO_GHS = 12.0; // Approximate conversion rate

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");
  const [currency, setCurrency] = useState<"ghs" | "usd">("ghs");

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small projects & startups",
      price: currency === "ghs" ? "₵0" : "$0",
      billing: "Free forever",
      smsRate: currency === "ghs" ? `₵${SMS_RATE_GHS}` : `$${(SMS_RATE_GHS / USD_TO_GHS).toFixed(3)}`,
      features: [
        { text: "1,000 SMS/month free", included: true },
        { text: "Basic email support", included: true },
        { text: "Standard delivery", included: true },
        { text: "Basic analytics", included: true },
        { text: "Single user", included: true },
        { text: "Priority support", included: false },
        { text: "Custom sender IDs", included: false },
        { text: "Advanced routing", included: false },
        { text: "SLA guarantee", included: false },
        { text: "Dedicated account manager", included: false },
      ],
      ctaText: "Get Started Free",
      ctaVariant: "outline",
      popular: false,
      color: "border-gray-200",
      badge: null,
    },
    {
      name: "Growth",
      description: "For growing businesses with scale",
      price: currency === "ghs" ? "₵299" : "$25",
      billing: billingCycle === "monthly" ? "per month" : "per year",
      smsRate: currency === "ghs" ? `₵${SMS_RATE_GHS}` : `$${(SMS_RATE_GHS / USD_TO_GHS).toFixed(3)}`,
      features: [
        { text: "10,000 SMS included", included: true },
        { text: "Priority email & chat support", included: true },
        { text: "Standard delivery", included: true },
        { text: "Advanced analytics", included: true },
        { text: "Up to 5 team members", included: true },
        { text: "Custom sender IDs", included: true },
        { text: "Basic routing", included: true },
        { text: "99.5% SLA", included: true },
        { text: "WhatsApp API access", included: false },
        { text: "Dedicated account manager", included: false },
      ],
      ctaText: "Start Growing",
      ctaVariant: "primary",
      popular: true,
      color: "border-cyan-300",
      badge: "Most Popular",
    },
    {
      name: "Enterprise",
      description: "For mission-critical communication",
      price: currency === "ghs" ? "₵Custom" : "$Custom",
      billing: "Volume-based pricing",
      smsRate: currency === "ghs" ? `From ₵${(SMS_RATE_GHS * 0.8).toFixed(3)}` : `From $${((SMS_RATE_GHS * 0.8) / USD_TO_GHS).toFixed(3)}`,
      features: [
        { text: "100,000+ SMS included", included: true },
        { text: "24/7 phone & chat support", included: true },
        { text: "Priority delivery", included: true },
        { text: "Enterprise analytics", included: true },
        { text: "Unlimited team members", included: true },
        { text: "Custom sender IDs", included: true },
        { text: "Advanced routing", included: true },
        { text: "99.99% SLA guarantee", included: true },
        { text: "WhatsApp & RCS API", included: true },
        { text: "Dedicated account manager", included: true },
      ],
      ctaText: "Contact Sales",
      ctaVariant: "outline",
      popular: false,
      color: "border-gray-200",
      badge: null,
    },
  ];

  const smsCalculatorItems = [
    { messages: "1,000", costGHS: (1000 * SMS_RATE_GHS).toFixed(1), costUSD: ((1000 * SMS_RATE_GHS) / USD_TO_GHS).toFixed(2) },
    { messages: "5,000", costGHS: (5000 * SMS_RATE_GHS).toFixed(1), costUSD: ((5000 * SMS_RATE_GHS) / USD_TO_GHS).toFixed(2) },
    { messages: "10,000", costGHS: (10000 * SMS_RATE_GHS).toFixed(1), costUSD: ((10000 * SMS_RATE_GHS) / USD_TO_GHS).toFixed(2) },
    { messages: "50,000", costGHS: (50000 * SMS_RATE_GHS).toFixed(0), costUSD: ((50000 * SMS_RATE_GHS) / USD_TO_GHS).toFixed(0) },
    { messages: "100,000", costGHS: (100000 * SMS_RATE_GHS).toFixed(0), costUSD: ((100000 * SMS_RATE_GHS) / USD_TO_GHS).toFixed(0) },
    { messages: "500,000", costGHS: (500000 * SMS_RATE_GHS).toFixed(0), costUSD: ((500000 * SMS_RATE_GHS) / USD_TO_GHS).toFixed(0) },
  ];

  const features = [
    {
      icon: <MessageCircle className="h-5 w-5" />,
      title: "Reliable SMS Delivery",
      description: "99.9% delivery rate with instant delivery",
      color: "bg-cyan-50 text-cyan-600"
    },
    {
      icon: <Shield className="h-5 w-5" />,
      title: "Enterprise Security",
      description: "End-to-end encryption & compliance",
      color: "bg-emerald-50 text-emerald-600"
    },
    {
      icon: <Globe className="h-5 w-5" />,
      title: "Global Coverage",
      description: "Send to 200+ countries worldwide",
      color: "bg-blue-50 text-blue-600"
    },
    {
      icon: <BarChart className="h-5 w-5" />,
      title: "Detailed Analytics",
      description: "Real-time delivery reports & insights",
      color: "bg-violet-50 text-violet-600"
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: "24/7 Support",
      description: "Round-the-clock developer support",
      color: "bg-orange-50 text-orange-600"
    },
    {
      icon: <Cloud className="h-5 w-5" />,
      title: "Scalable Infrastructure",
      description: "Handle millions of messages per day",
      color: "bg-rose-50 text-rose-600"
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
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
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-cyan-50 px-4 py-2 mb-6">
                <Star className="h-4 w-4 text-cyan-600" />
                <span className="text-sm font-semibold text-cyan-700">
                  SIMPLE, TRANSPARENT PRICING
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                <span className="block">SMS at</span>
                <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                  ₵{SMS_RATE_GHS}/message
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                Pay only for what you use. No hidden fees, no surprises. 
                Everything you need to power your communication.
              </p>

              {/* Currency & Billing Toggle */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-gray-700">Currency:</span>
                  <div className="inline-flex items-center rounded-lg bg-gray-100 p-1">
                    <button
                      onClick={() => setCurrency("ghs")}
                      className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                        currency === "ghs" 
                          ? "bg-white text-gray-900 shadow-sm" 
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      GHS
                    </button>
                    <button
                      onClick={() => setCurrency("usd")}
                      className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                        currency === "usd" 
                          ? "bg-white text-gray-900 shadow-sm" 
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      USD
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-gray-700">Billing:</span>
                  <div className="inline-flex items-center rounded-lg bg-gray-100 p-1">
                    <button
                      onClick={() => setBillingCycle("monthly")}
                      className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                        billingCycle === "monthly" 
                          ? "bg-white text-gray-900 shadow-sm" 
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      Monthly
                    </button>
                    <button
                      onClick={() => setBillingCycle("annual")}
                      className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                        billingCycle === "annual" 
                          ? "bg-white text-gray-900 shadow-sm" 
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      Annual (Save 20%)
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-10 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="inline-flex items-center rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 px-4 py-1 text-sm font-semibold text-white">
                      {plan.badge}
                    </span>
                  </div>
                )}
                
                <div className={`p-8 bg-white rounded-2xl border-2 ${plan.color} h-full flex flex-col ${
                  plan.popular ? "shadow-xl" : "shadow-lg"
                }`}>
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {plan.description}
                    </p>
                    
                    <div className="mb-4">
                      <div className="flex items-baseline">
                        <span className="text-4xl font-bold text-gray-900">
                          {plan.price}
                        </span>
                        {plan.price !== "₵Custom" && plan.price !== "$Custom" && (
                          <span className="text-gray-600 ml-2">
                            {plan.billing}
                          </span>
                        )}
                      </div>
                      <div className="mt-2">
                        <span className="text-sm text-gray-600">
                          SMS rate: {plan.smsRate}/message
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex-grow">
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          {feature.included ? (
                            <Check className="h-5 w-5 text-emerald-500 mr-3 flex-shrink-0" />
                          ) : (
                            <X className="h-5 w-5 text-gray-300 mr-3 flex-shrink-0" />
                          )}
                          <span className={`${!feature.included ? "text-gray-400" : "text-gray-700"}`}>
                            {feature.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={plan.name === "Enterprise" ? "/contact" : "/signup"}
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all ${
                      plan.ctaVariant === "primary"
                        ? "bg-gradient-to-r from-cyan-600 to-blue-600 text-white hover:shadow-lg"
                        : "border-2 border-gray-300 text-gray-700 hover:border-gray-400"
                    }`}
                  >
                    {plan.ctaText}
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SMS Cost Calculator */}
      <section className="py-20 bg-gray-50 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                SMS Cost Calculator
              </h2>
              <p className="text-gray-600">
                See exactly how much you&apos;ll pay based on your SMS volume
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Calculator Input */}
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">
                    Calculate Your Cost
                  </h3>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Monthly SMS Volume
                      </label>
                      <input
                        type="range"
                        min="1000"
                        max="1000000"
                        step="1000"
                        defaultValue="10000"
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                      />
                      <div className="flex justify-between text-sm text-gray-600 mt-2">
                        <span>1K</span>
                        <span>100K</span>
                        <span>1M</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="text-sm text-gray-600 mb-1">SMS Rate</div>
                        <div className="text-2xl font-bold text-gray-900">
                          {currency === "ghs" ? `₵${SMS_RATE_GHS}` : `$${(SMS_RATE_GHS / USD_TO_GHS).toFixed(3)}`}
                        </div>
                        <div className="text-xs text-gray-500">per message</div>
                      </div>
                      <div className="bg-cyan-50 p-4 rounded-lg">
                        <div className="text-sm text-cyan-600 mb-1">Estimated Cost</div>
                        <div className="text-2xl font-bold text-gray-900">
                          {currency === "ghs" ? "₵350" : "$29"}
                        </div>
                        <div className="text-xs text-cyan-600">per month</div>
                      </div>
                    </div>

                    <button className="w-full py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all">
                      Get Started with 1,000 Free SMS
                    </button>
                  </div>
                </div>

                {/* Cost Table */}
                <div className="bg-gray-50 p-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-6">
                    Common Volume Pricing
                  </h4>
                  
                  <div className="space-y-3">
                    {smsCalculatorItems.map((item) => (
                      <div key={item.messages} className="flex justify-between items-center p-3 bg-white rounded-lg">
                        <div className="font-medium text-gray-900">
                          {item.messages} SMS
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-gray-900">
                            {currency === "ghs" ? `₵${item.costGHS}` : `$${item.costUSD}`}
                          </div>
                          <div className="text-xs text-gray-500">per month</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 text-sm text-gray-600">
                    <p>• Volume discounts available for 1M+ messages</p>
                    <p>• All prices exclude VAT where applicable</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything Included
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              All plans include these powerful features to help you succeed
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="p-6 bg-white rounded-xl border border-gray-200 hover:border-cyan-200 transition-all h-full">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${feature.color.split(' ')[0]} mb-4`}>
                    <div className={feature.color.split(' ')[1]}>
                      {feature.icon}
                    </div>
                  </div>
                  
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600">
                Get answers to common questions about our pricing
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  q: "Is there really no credit card required for the free plan?",
                  a: "Yes! You can sign up and start sending up to 1,000 SMS per month completely free, no credit card required."
                },
                {
                  q: "How are SMS charges calculated?",
                  a: "You pay only for delivered SMS at ₵0.035 per message. Failed or undelivered messages are not charged."
                },
                {
                  q: "Can I switch between plans?",
                  a: "Yes, you can upgrade, downgrade, or cancel your plan at any time. Changes take effect immediately."
                },
                {
                  q: "Do you offer custom pricing for high volume?",
                  a: "Absolutely! Contact our sales team for custom enterprise pricing with volume discounts for 1M+ messages per month."
                },
                {
                  q: "What payment methods do you accept?",
                  a: "We accept mobile money (all networks), credit/debit cards, and bank transfers for Ghanaian customers."
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl border border-gray-200"
                >
                  <h3 className="font-semibold text-gray-900 mb-2 flex items-start">
                    <HelpCircle className="h-5 w-5 text-cyan-600 mr-3 flex-shrink-0" />
                    {faq.q}
                  </h3>
                  <p className="text-gray-600 ml-8">
                    {faq.a}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Final CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-16 text-center"
            >
              <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">
                  Ready to Get Started?
                </h3>
                <p className="mb-6 opacity-90">
                  Join thousands of developers who trust Sendexa for their SMS delivery
                </p>
                <Link
                  href="/signup"
                  className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all"
                >
                  Get Started Free
                  <Zap className="h-5 w-5" />
                </Link>
                <p className="mt-4 text-sm opacity-80">
                  1,000 free SMS every month • No credit card required
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}