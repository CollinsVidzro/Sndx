// components/product/messaging/MessagingExamples.tsx
"use client";
import { motion } from "framer-motion";
import { 
  ShoppingCart, Bell, Lock, Users,
  Truck, Heart, CreditCard, Calendar
} from "lucide-react";

const examples = [
  {
    icon: <ShoppingCart className="h-5 w-5" />,
    category: "E-commerce",
    title: "Order Confirmation",
    description: "Send instant order confirmations and tracking updates",
    code: `POST /v1/messages
{
  "to": "+1234567890",
  "channel": "sms",
  "content": "Your order #12345 is confirmed!"
}`
  },
  {
    icon: <Lock className="h-5 w-5" />,
    category: "Security",
    title: "2FA Authentication",
    description: "Send one-time passwords for secure login",
    code: `POST /v1/messages
{
  "to": "+1234567890",
  "channel": "whatsapp",
  "content": "Your login code: 123456"
}`
  },
  {
    icon: <Bell className="h-5 w-5" />,
    category: "Notifications",
    title: "Appointment Reminder",
    description: "Send automated appointment reminders",
    code: `POST /v1/messages
{
  "to": "+1234567890",
  "channel": "sms",
  "content": "Reminder: Your appointment tomorrow at 2 PM"
}`
  },
  {
    icon: <Truck className="h-5 w-5" />,
    category: "Logistics",
    title: "Delivery Updates",
    description: "Real-time delivery status notifications",
    code: `POST /v1/messages
{
  "to": "+1234567890",
  "channel": "whatsapp",
  "content": "Your package is out for delivery!"
}`
  }
];

export default function MessagingExamples() {
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
              USE CASES
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Real-World Examples
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See how businesses use our Messaging API in production
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
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-cyan-50">
                      <div className="text-cyan-600">
                        {example.icon}
                      </div>
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-cyan-600 uppercase">
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

        {/* More Examples */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex flex-wrap justify-center gap-4">
            {[
              { icon: <Users className="h-4 w-4" />, label: "Customer Support" },
              { icon: <Heart className="h-4 w-4" />, label: "Marketing Campaigns" },
              { icon: <CreditCard className="h-4 w-4" />, label: "Payment Notifications" },
              { icon: <Calendar className="h-4 w-4" />, label: "Event Reminders" }
            ].map((item) => (
              <div
                key={item.label}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg"
              >
                <div className="text-cyan-600">{item.icon}</div>
                <span className="text-sm font-medium text-gray-700">{item.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}