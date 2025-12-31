// StatsGrid.tsx - Clean stats with grid layout
"use client";
import { motion } from "framer-motion";
import { TrendingUp, Globe, Clock, Users } from "lucide-react";

const stats = [
  { icon: <TrendingUp className="h-6 w-6" />, value: "99.99%", label: "Platform Uptime" },
  { icon: <Globe className="h-6 w-6" />, value: "200+", label: "Countries" },
  { icon: <Clock className="h-6 w-6" />, value: "< 1s", label: "Delivery Time" },
  { icon: <Users className="h-6 w-6" />, value: "10K+", label: "Developers" },
];

export default function StatsGrid() {
  return (
    <section className="py-13 bg-gray-50 relative">
      {/* Grid Overlay */}
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
        {/* Grid Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From startups to Fortune 500 companies, businesses rely on Sendexa for critical communication
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-sm mb-4">
                <div className="text-cyan-600">
                  {stat.icon}
                </div>
              </div>
              
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {stat.value}
              </div>
              
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Company Logos Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 pt-12 border-t border-gray-200"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["TechCorp", "GlobalBank", "StartupX", "EnterpriseY"].map((company) => (
              <div
                key={company}
                className="text-center p-6 bg-white rounded-xl border border-gray-200"
              >
                <div className="text-lg font-semibold text-gray-900">{company}</div>
                <div className="text-sm text-gray-500 mt-1">Trusted Partner</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}