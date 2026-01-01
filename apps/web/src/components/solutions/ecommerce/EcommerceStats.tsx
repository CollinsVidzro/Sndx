// components/solutions/ecommerce/EcommerceStats.tsx
"use client";
import { motion } from "framer-motion";
import { TrendingUp, ShoppingCart, Users, DollarSign } from "lucide-react";

export default function EcommerceStats() {
  const stats = [
    {
      icon: <TrendingUp className="h-6 w-6" />,
      value: "40%",
      label: "Increase in conversions",
      description: "with automated messaging",
    },
    {
      icon: <ShoppingCart className="h-6 w-6" />,
      value: "35%",
      label: "Reduction in cart abandonment",
      description: "through timely reminders",
    },
    {
      icon: <Users className="h-6 w-6" />,
      value: "50%",
      label: "Higher customer retention",
      description: "with personalized communication",
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      value: "30%",
      label: "Lower support costs",
      description: "with automated responses",
    },
  ];

  return (
    <section className="py-13 bg-gradient-to-b from-white to-blue-50/30 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Proven Results for E-commerce
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See how leading e-commerce brands are transforming their customer 
              communication with Sendexa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="p-6 bg-white border border-gray-200 rounded-xl hover:border-blue-200 hover:shadow-lg transition-all text-center h-full">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-50 mb-4 group-hover:bg-blue-100 transition-colors">
                    <div className="text-blue-600">
                      {stat.icon}
                    </div>
                  </div>
                  
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    {stat.value}
                  </div>
                  
                  <div className="font-semibold text-gray-900 mb-1">
                    {stat.label}
                  </div>
                  
                  <div className="text-sm text-gray-500">
                    {stat.description}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Trusted by brands */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 pt-12 border-t border-gray-200"
          >
            <p className="text-center text-gray-600 mb-8">
              Trusted by leading e-commerce brands
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: "FashionHub", customers: "500K+ customers" },
                { name: "TechGear", customers: "1M+ orders" },
                { name: "HomeStyle", customers: "200K+ monthly" },
                { name: "BeautyBox", customers: "Rapid growth" },
              ].map((brand) => (
                <div
                  key={brand.name}
                  className="p-4 bg-white rounded-xl border border-gray-200 text-center"
                >
                  <div className="font-semibold text-gray-900 mb-1">
                    {brand.name}
                  </div>
                  <div className="text-sm text-gray-500">{brand.customers}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}