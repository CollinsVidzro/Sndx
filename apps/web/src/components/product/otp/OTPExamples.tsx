// components/product/otp/OTPExamples.tsx
"use client";
import { motion } from "framer-motion";
import { 
  Lock, CreditCard, ShoppingCart, Users,
  Building, Smartphone, Shield, CheckCircle
} from "lucide-react";

const examples = [
  {
    icon: <Lock className="h-5 w-5" />,
    category: "Authentication",
    title: "User Login",
    description: "Secure user login with 2FA",
    code: `POST /v1/otp/send
{
  "phone": "+1234567890",
  "channel": "sms",
  "purpose": "login"
}

POST /v1/otp/verify
{
  "phone": "+1234567890",
  "code": "123456"
}`
  },
  {
    icon: <CreditCard className="h-5 w-5" />,
    category: "Transactions",
    title: "Payment Verification",
    description: "Verify high-value transactions",
    code: `POST /v1/otp/send
{
  "phone": "+1234567890",
  "channel": "whatsapp",
  "amount": "500.00",
  "merchant": "Example Store"
}

// User receives: 
// "Approve $500.00 payment 
// to Example Store? Code: 654321"`
  },
  {
    icon: <ShoppingCart className="h-5 w-5" />,
    category: "E-commerce",
    title: "Order Confirmation",
    description: "Confirm purchases with OTP",
    code: `POST /v1/otp/send
{
  "email": "user@example.com",
  "channel": "email",
  "order_id": "ORD-12345",
  "template": "order_confirm"
}`
  },
  {
    icon: <Building className="h-5 w-5" />,
    category: "Enterprise",
    title: "Admin Access",
    description: "Secure administrative panel access",
    code: `POST /v1/otp/send
{
  "user_id": "admin_123",
  "channel": "totp",
  "permissions": ["admin", "billing"]
}

// User authenticates via 
// Google Authenticator app`
  }
];

export default function OTPExamples() {
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
          <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 mb-4">
            <span className="text-sm font-semibold text-gray-700">
              IMPLEMENTATION EXAMPLES
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Secure Your Applications
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See how to implement OTP and 2FA in common scenarios
          </p>
        </div>

        {/* Examples Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {examples.map((example, index) => (
            <motion.div
              key={example.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden h-full">
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-violet-50">
                      <div className="text-violet-600">
                        {example.icon}
                      </div>
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-violet-600 uppercase">
                        {example.category}
                      </div>
                      <h3 className="font-semibold text-gray-900">
                        {example.title}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6">
                    {example.description}
                  </p>
                  
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

        {/* More Use Cases */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 p-8 bg-white rounded-2xl border border-gray-200"
        >
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Shield className="h-5 w-5 text-violet-600" />
              <span className="font-semibold text-violet-700">Additional Use Cases</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: <Users className="h-4 w-4" />, label: "Account Recovery" },
                { icon: <Smartphone className="h-4 w-4" />, label: "Device Setup" },
                { icon: <CheckCircle className="h-4 w-4" />, label: "Email Verification" },
                { icon: <Lock className="h-4 w-4" />, label: "API Access" }
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-2 px-4 py-3 bg-gray-50 rounded-lg"
                >
                  <div className="text-violet-600">{item.icon}</div>
                  <span className="text-sm font-medium text-gray-700">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}