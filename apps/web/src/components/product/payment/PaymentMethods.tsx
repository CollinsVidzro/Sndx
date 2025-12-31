// components/product/payment/PaymentMethods.tsx
"use client";
import { motion } from "framer-motion";
import { 
  CreditCard, Building, Smartphone, Wallet,
  Landmark, Receipt, QrCode, Bitcoin,
  CheckCircle
} from "lucide-react";

const paymentMethods = [
  {
    icon: <CreditCard className="h-5 w-5" />,
    name: "Credit & Debit Cards",
    description: "Visa, Mastercard, Amex, Discover",
    features: ["3D Secure", "Tokenization", "Instant processing"],
    coverage: "Global",
    fees: "2.9% + $0.30"
  },
  {
    icon: <Building className="h-5 w-5" />,
    name: "Bank Transfers",
    description: "ACH, SEPA, Faster Payments",
    features: ["Direct debit", "Recurring payments", "Bulk processing"],
    coverage: "Region specific",
    fees: "1% + $0.25"
  },
  {
    icon: <Smartphone className="h-5 w-5" />,
    name: "Digital Wallets",
    description: "Apple Pay, Google Pay, PayPal",
    features: ["One-click checkout", "Mobile optimized", "High conversion"],
    coverage: "Global",
    fees: "2.5% + $0.30"
  },
  {
    icon: <Wallet className="h-5 w-5" />,
    name: "Bank Redirects",
    description: "iDEAL, Sofort, Giropay",
    features: ["Local payment methods", "High trust", "No chargebacks"],
    coverage: "Europe",
    fees: "1.5% + $0.20"
  },
  {
    icon: <Landmark className="h-5 w-5" />,
    name: "Bank Accounts",
    description: "Direct account access",
    features: ["Plaid integration", "Instant verification", "High limits"],
    coverage: "US, Canada, EU",
    fees: "0.8% + $0.25"
  },
  {
    icon: <QrCode className="h-5 w-5" />,
    name: "QR Payments",
    description: "Scan-to-pay solutions",
    features: ["Offline payments", "Contactless", "Mobile-first"],
    coverage: "Asia, Latin America",
    fees: "1.2% + $0.15"
  },
  {
    icon: <Bitcoin className="h-5 w-5" />,
    name: "Cryptocurrency",
    description: "Bitcoin, Ethereum, USDC",
    features: ["Borderless", "Low fees", "Settlement"],
    coverage: "Global",
    fees: "1.0% flat"
  },
  {
    icon: <Receipt className="h-5 w-5" />,
    name: "Alternative Payments",
    description: "Klarna, Afterpay, Affirm",
    features: ["Buy now, pay later", "Installments", "Consumer credit"],
    coverage: "Select regions",
    fees: "3.5% + $0.30"
  }
];

export default function PaymentMethods() {
  return (
    <section className="py-16 md:py-24 bg-gray-50 relative">
      {/* Grid Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(to right, #9ca3af 1px, transparent 1px),
              linear-gradient(to bottom, #9ca3af 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-4 py-2 mb-4">
            <span className="text-sm font-semibold text-amber-700">
              PAYMENT METHODS
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            100+ Payment Methods Worldwide
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Accept payments from anywhere in the world with our comprehensive payment methods
          </p>
        </div>

        {/* Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {paymentMethods.map((method, index) => (
            <motion.div
              key={method.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <div className="p-6 bg-white border border-gray-200 rounded-xl hover:border-amber-200 transition-all h-full">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-amber-50">
                      <div className="text-amber-600">
                        {method.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {method.name}
                      </h3>
                      <p className="text-sm text-gray-600">{method.description}</p>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-4 space-y-2">
                  {method.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-amber-500" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex justify-between text-sm border-t border-gray-100 pt-4">
                  <div>
                    <div className="font-medium text-gray-900">Coverage</div>
                    <div className="text-gray-600">{method.coverage}</div>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Fees</div>
                    <div className="text-gray-600">{method.fees}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Unified Checkout */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 p-8 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl border border-amber-200"
        >
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <CreditCard className="h-5 w-5 text-amber-600" />
                <span className="font-semibold text-amber-700">Unified Checkout</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Smart Payment Routing
              </h3>
              <p className="text-gray-600">
                Automatically present the best payment methods based on customer location, 
                device, and transaction type. Increase conversion rates with intelligent routing.
              </p>
            </div>
            <div className="hidden md:block">
              <div className="text-6xl font-bold text-amber-600 opacity-50">₹€$¥</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}