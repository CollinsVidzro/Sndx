// PricingHeader.tsx
"use client";
import { motion } from "framer-motion";
import { Star, ChevronDown } from "lucide-react";

interface PricingHeaderProps {
  selectedService: "sms" | "otp" | "email";
  setSelectedService: (service: "sms" | "otp" | "email") => void;
  selectedCurrency: "ghs" | "ngn" | "usd" | "eur";
  setSelectedCurrency: (currency: "ghs" | "ngn" | "usd" | "eur") => void;
}

export default function PricingHeader({
  selectedCurrency,
  setSelectedCurrency,
}: PricingHeaderProps) {
  const currencies = {
    ghs: { symbol: "₵", name: "Ghana Cedi", flag: "🇬🇭" },
    ngn: { symbol: "₦", name: "Nigerian Naira", flag: "🇳🇬" },
    usd: { symbol: "$", name: "US Dollar", flag: "🇺🇸" },
    eur: { symbol: "€", name: "Euro", flag: "🇪🇺" }
  };

  return (
    <section className="relative py-10 overflow-hidden">
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
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Header Badge */}
            <div className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-50 px-4 py-2 mb-6">
              <Star className="h-4 w-4 text-cyan-600" />
              <span className="text-sm font-semibold text-cyan-700">
                SIMPLE, TRANSPARENT PRICING
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              <span className="block">Pay Only for</span>
              <span className="block bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                What You Use
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              No monthly subscriptions. Pay per message with our simple,
              usage-based pricing.
            </p>

            {/* Currency Selector */}
            <div className="mb-6 flex justify-center">
              <div className="relative inline-block">
                <select
                  value={selectedCurrency}
                  onChange={(e) => setSelectedCurrency(e.target.value as "ghs" | "usd" | "eur")}
                  className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-10 text-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent cursor-pointer"
                >
                  <option value="ghs">{currencies.ghs.flag} {currencies.ghs.name} ({currencies.ghs.symbol})</option>
                  <option value="ngn">{currencies.ngn.flag} {currencies.ngn.name} ({currencies.ngn.symbol})</option>
                  <option value="usd">{currencies.usd.flag} {currencies.usd.name} ({currencies.usd.symbol})</option>
                  <option value="eur">{currencies.eur.flag} {currencies.eur.name} ({currencies.eur.symbol})</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <ChevronDown className="h-4 w-4" />
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}