// PricingCards.tsx
"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Check, X, Zap, ArrowRight, MessageCircle, Shield, Mail } from "lucide-react";

interface PricingCardsProps {
  selectedService: "sms" | "otp" | "email";
  selectedCurrency: "ghs" | "ngn" | "usd" | "eur";
}

const getServiceData = (currency: "ghs" | "ngn" | "usd" | "eur") => {
  // Define pricing in different currencies
const pricing = {
  ghs: {
    sms: { price: "₵0.35", unit: "per SMS" },
    otp: { price: "₵0.45", unit: "per OTP" },
    email: { price: "₵0.04", unit: "per email" }
  },

  ngn: {
    sms: { price: "₦15", unit: "per SMS" },
    otp: { price: "₦20", unit: "per OTP" },
    email: { price: "₦5", unit: "per email" }
  },

  usd: {
    sms: { price: "$0.012", unit: "per SMS" },
    otp: { price: "$0.045", unit: "per OTP" },
    email: { price: "$0.006", unit: "per email" }
  },

  eur: {
    sms: { price: "€0.05", unit: "per SMS" },
    otp: { price: "€0.045", unit: "per OTP" },
    email: { price: "€0.006", unit: "per email" }
  }
};


  const services = [
    {
      id: "sms",
      name: "SMS Messaging",
      icon: MessageCircle,
      description: "Send bulk SMS messages to your customers",
      features: [
        "Global coverage",
        "Real-time delivery reports",
        "Scheduled messaging",
        "Custom sender IDs",
        "Two-way messaging",
        "API access",
        "24/7 support",
        "99.9% uptime SLA"
      ],
      included: [true, true, true, true, true, true, true, true],
      cta: "Start Sending",
      color: "border-blue-200"
    },
    {
      id: "otp",
      name: "OTP/2FA",
      icon: Shield,
      description: "Secure authentication and verification",
      features: [
        "High delivery speed",
        "Advanced security",
        "Multi-language support",
        "Custom templates",
        "Delivery reports",
        "API access",
        "24/7 support",
        "99.99% uptime SLA"
      ],
      included: [true, true, true, true, true, true, true, true],
      cta: "Secure Now",
      color: "border-green-200"
    },
    {
      id: "email",
      name: "Email Service",
      icon: Mail,
      description: "Transactional and marketing emails",
      features: [
        "High deliverability",
        "Advanced analytics",
        "Template builder",
        "A/B testing",
        "Email tracking",
        "API access",
        "24/7 support",
        "99.9% uptime SLA"
      ],
      included: [true, true, true, true, true, true, true, true],
      cta: "Start Emailing",
      color: "border-purple-200"
    }
  ];

  return { services, pricing: pricing[currency] };
};

export default function PricingCards({ selectedService, selectedCurrency }: PricingCardsProps) {
  const { services, pricing } = getServiceData(selectedCurrency);

  return (
    <section className="py-10 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            All Services Pricing
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Simple, transparent pricing for all our communication services. Pay only for what you use.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isSelected = selectedService === service.id;
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative w-full max-w-md ${isSelected ? "z-10" : ""}`}
                onClick={() => {}}
              >
                {isSelected && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 px-4 py-1.5 text-sm font-semibold text-white">
                      <Zap className="h-3 w-3" />
                      Selected
                    </span>
                  </div>
                )}
                
                <div className={`p-8 bg-white rounded-2xl border-2 ${service.color} h-full flex flex-col transition-all ${
                  isSelected ? "shadow-xl scale-105" : "shadow-lg hover:shadow-xl"
                }`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {service.name}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-4xl font-bold text-gray-900">
                        {pricing[service.id as keyof typeof pricing].price}
                      </span>
                      <span className="text-gray-600">
                        {pricing[service.id as keyof typeof pricing].unit}
                      </span>
                    </div>
                  </div>

                  <div className="flex-grow">
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          {service.included[i] ? (
                            <Check className="h-5 w-5 text-emerald-500 mr-3 flex-shrink-0" />
                          ) : (
                            <X className="h-5 w-5 text-gray-300 mr-3 flex-shrink-0" />
                          )}
                          <span className={`text-sm ${!service.included[i] ? "text-gray-400" : "text-gray-700"}`}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href="/signup"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all flex items-center justify-center gap-2 ${
                      isSelected
                        ? "bg-gradient-to-r from-cyan-600 to-blue-600 text-white hover:shadow-lg"
                        : "border-2 border-gray-300 text-gray-700 hover:border-gray-400"
                    }`}
                  >
                    {service.cta}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Pay-as-you-go note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-cyan-50 text-cyan-700 px-6 py-3 rounded-xl">
            <span className="font-medium">All plans include:</span>
            <span>Pay-as-you-go pricing • No monthly commitments • Cancel anytime</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}