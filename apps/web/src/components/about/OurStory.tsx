// components/about/OurStory.tsx
"use client";
import { motion } from "framer-motion";
import { Target, Globe, Zap, Users } from "lucide-react";

export default function OurStory() {
  return (
    <section className="py-13 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>
            <div className="text-lg text-gray-600 space-y-4">
              <p>
                Founded in 2020, Sendexa started with a simple observation: businesses were 
                using multiple providers for messaging, email, authentication, and payments.
              </p>
              <p>
                We built Sendexa to simplify this complexity—one unified platform for all 
                communication and payment infrastructure needs.
              </p>
              <p>
                Today, we serve thousands of businesses globally, processing billions of 
                messages and transactions with enterprise-grade reliability.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                icon: <Target className="h-6 w-6" />,
                title: "Mission",
                description: "Simplify communication & payment infrastructure"
              },
              {
                icon: <Globe className="h-6 w-6" />,
                title: "Vision",
                description: "Global connectivity for every business"
              },
              {
                icon: <Zap className="h-6 w-6" />,
                title: "Innovation",
                description: "Constantly pushing technology boundaries"
              },
              {
                icon: <Users className="h-6 w-6" />,
                title: "Community",
                description: "Built by developers, for developers"
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white border border-gray-200 rounded-xl"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-cyan-50 to-blue-50 mb-4">
                  <div className="text-cyan-600">
                    {item.icon}
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}