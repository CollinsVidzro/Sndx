// FeaturesGridClean.tsx - Simplified features grid
"use client";
import { 
  MessageCircle, Mail, Shield, CreditCard,
  Globe, Zap, Lock, Code
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
  { icon: <MessageCircle className="h-5 w-5" />, title: "Multi-Channel Messaging", description: "SMS, WhatsApp & push notifications" },
  { icon: <Mail className="h-5 w-5" />, title: "Email Infrastructure", description: "Transactional & marketing emails" },
  { icon: <Shield className="h-5 w-5" />, title: "Secure Authentication", description: "Military-grade 2FA & OTP" },
  { icon: <CreditCard className="h-5 w-5" />, title: "Payment Services", description: "Global payment processing" },
  { icon: <Globe className="h-5 w-5" />, title: "Global Network", description: "200+ carrier connections" },
  { icon: <Zap className="h-5 w-5" />, title: "High Performance", description: "99.99% uptime SLA" },
  { icon: <Lock className="h-5 w-5" />, title: "Enterprise Security", description: "SOC 2 Type II compliant" },
  { icon: <Code className="h-5 w-5" />, title: "Developer First", description: "Comprehensive SDKs & docs" },
];

export default function FeaturesGridClean() {
  return (
    <section className="py-13 relative">
      {/* Grid Background */}
      <div className="absolute inset-0 -z-10">
        <div 
          className="absolute inset-0 opacity-15"
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
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-cyan-50 px-4 py-2 mb-4">
            <span className="text-sm font-semibold text-cyan-700">
              ENTERPRISE FEATURES
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Complete Infrastructure Platform
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Everything you need to build, scale, and secure your customer communication
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="p-6 bg-white border border-gray-200 rounded-xl hover:border-cyan-200 transition-all h-full">
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-cyan-50">
                  <div className="text-cyan-600">
                    {feature.icon}
                  </div>
                </div>
                
                <h3 className="font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}