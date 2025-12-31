// components/product/payment/PaymentSubscriptions.tsx
"use client";
import { motion } from "framer-motion";
import { 
  Calendar, Repeat, Users, TrendingUp,
  CreditCard, Bell, Settings, Download,
  CheckCircle
} from "lucide-react";

const subscriptionFeatures = [
  {
    icon: <Calendar className="h-5 w-5" />,
    title: "Flexible Billing Cycles",
    description: "Daily, weekly, monthly, annual, or custom intervals",
    details: "Support for any billing frequency"
  },
  {
    icon: <Repeat className="h-5 w-5" />,
    title: "Automatic Retry Logic",
    description: "Intelligent failed payment recovery",
    details: "Customizable retry schedules"
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: "Customer Management",
    description: "Complete customer profiles and history",
    details: "Payment methods, invoices, and usage"
  },
  {
    icon: <TrendingUp className="h-5 w-5" />,
    title: "Usage-Based Billing",
    description: "Metered and tiered pricing",
    details: "Real-time usage tracking"
  },
  {
    icon: <CreditCard className="h-5 w-5" />,
    title: "Multiple Payment Methods",
    description: "Cards, bank accounts, wallets",
    details: "Automatic payment method updates"
  },
  {
    icon: <Bell className="h-5 w-5" />,
    title: "Dunning Management",
    description: "Automated recovery workflows",
    details: "Email, SMS, and in-app notifications"
  },
  {
    icon: <Settings className="h-5 w-5" />,
    title: "Plan Management",
    description: "Upgrades, downgrades, cancellations",
    details: "Prorated charges and credits"
  },
  {
    icon: <Download className="h-5 w-5" />,
    title: "Revenue Recognition",
    description: "GAAP-compliant revenue reporting",
    details: "Automated deferral schedules"
  }
];

const subscriptionExamples = [
  {
    name: "SaaS Subscription",
    description: "Monthly software subscription",
    features: ["Recurring billing", "Seat-based pricing", "Annual discounts"],
    code: `POST /v1/subscriptions
{
  "customer_id": "cus_123",
  "plan_id": "plan_pro_monthly",
  "quantity": 5,
  "billing_cycle": "month",
  "trial_days": 14
}`
  },
  {
    name: "Usage-Based Billing",
    description: "Pay-per-use metered billing",
    features: ["Real-time metering", "Tiered pricing", "Overage charges"],
    code: `POST /v1/metered_usage
{
  "subscription_id": "sub_123",
  "meter_name": "api_calls",
  "quantity": 15000,
  "timestamp": "2024-01-15T10:30:00Z"
}`
  }
];

export default function PaymentSubscriptions() {
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
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 mb-4">
            <Repeat className="h-4 w-4 text-amber-700" />
            <span className="text-sm font-semibold text-amber-700">
              SUBSCRIPTION MANAGEMENT
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Advanced Subscription Billing
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Build and scale subscription businesses with flexible billing, 
            usage-based pricing, and automated revenue operations
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {subscriptionFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <div className="p-6 bg-white rounded-xl border border-gray-200 hover:border-amber-200 transition-all h-full">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-amber-50 mb-4">
                  <div className="text-amber-600">
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

        {/* Examples */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Subscription Examples
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {subscriptionExamples.map((example, index) => (
              <motion.div
                key={example.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-white rounded-xl border border-gray-200 overflow-hidden h-full">
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-amber-50">
                        <div className="text-amber-600">
                          {example.name.includes("SaaS") ? <Users className="h-5 w-5" /> : <TrendingUp className="h-5 w-5" />}
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          {example.name}
                        </h3>
                        <p className="text-sm text-gray-600">{example.description}</p>
                      </div>
                    </div>
                    
                    {/* Features */}
                    <div className="mb-6 space-y-2">
                      {example.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <CheckCircle className="h-3 w-3 text-amber-500" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Code */}
                    <div className="bg-gray-900 rounded-lg p-4">
                      <pre className="text-sm text-gray-300 overflow-x-auto">
                        <code>{example.code}</code>
                      </pre>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Pricing Models */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="p-8 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl border border-amber-200"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Flexible Pricing Models
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-white rounded-xl">
                <div className="text-lg font-semibold text-gray-900 mb-2">Flat Rate</div>
                <p className="text-sm text-gray-600 mb-4">Fixed monthly/annual pricing</p>
                <div className="text-xs text-gray-500">Ideal for: SaaS products</div>
              </div>
              <div className="p-6 bg-white rounded-xl">
                <div className="text-lg font-semibold text-gray-900 mb-2">Usage-Based</div>
                <p className="text-sm text-gray-600 mb-4">Pay for what you use</p>
                <div className="text-xs text-gray-500">Ideal for: APIs, utilities</div>
              </div>
              <div className="p-6 bg-white rounded-xl">
                <div className="text-lg font-semibold text-gray-900 mb-2">Tiered</div>
                <p className="text-sm text-gray-600 mb-4">Volume discounts</p>
                <div className="text-xs text-gray-500">Ideal for: Enterprise</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}