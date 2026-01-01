// components/solutions/reseller/ResellerStats.tsx
"use client";
import { motion } from "framer-motion";
import { Users, TrendingUp, DollarSign, Globe } from "lucide-react";

export default function ResellerStats() {
  const stats = [
    {
      icon: <Users className="h-6 w-6" />,
      value: "500+",
      label: "Active partners",
      description: "global reseller network",
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      value: "40%",
      label: "Higher margins",
      description: "compared to other platforms",
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      value: "$2M+",
      label: "Total payouts",
      description: "to our reseller partners",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      value: "50+",
      label: "Countries",
      description: "served by resellers",
    },
  ];

  return (
    <section className="py-13 bg-gradient-to-b from-white to-indigo-50/30 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Join a Growing Reseller Network
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Agencies and partners worldwide are building successful businesses 
              with our white-label reseller program
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
                <div className="p-6 bg-white border border-gray-200 rounded-xl hover:border-indigo-200 hover:shadow-lg transition-all text-center h-full">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-indigo-50 mb-4 group-hover:bg-indigo-100 transition-colors">
                    <div className="text-indigo-600">
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

          {/* Success Stories */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 pt-12 border-t border-gray-200"
          >
            <p className="text-center text-gray-600 mb-8">
              Success stories from our reseller partners
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: "AgencyPro", revenue: "$250K+ annual" },
                { name: "TechPartners", clients: "100+ clients" },
                { name: "GlobalComm", growth: "3x year-over-year" },
                { name: "DigitalAgency", team: "15 person agency" },
              ].map((partner) => (
                <div
                  key={partner.name}
                  className="p-4 bg-white rounded-xl border border-gray-200 text-center"
                >
                  <div className="font-semibold text-gray-900 mb-1">
                    {partner.name}
                  </div>
                  <div className="text-sm text-gray-500">{partner.revenue || partner.clients || partner.growth || partner.team}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}