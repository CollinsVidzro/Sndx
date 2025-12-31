// components/leadership/LeadershipHero.tsx
"use client";
import { motion } from "framer-motion";
import { Users, Target, Award, Building } from "lucide-react";

export default function LeadershipHero() {
  return (
    <section className="relative py-10 overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 -z-10">
        <div 
          className="absolute inset-0 opacity-10"
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
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-50 to-blue-50 px-4 py-2 mb-6">
              <Users className="h-4 w-4 text-cyan-600" />
              <span className="text-sm font-semibold text-cyan-700">
                LEADERSHIP TEAM
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8">
              <span className="block text-gray-900">Guiding the Future of</span>
              <span className="block bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                Communication & Payments
              </span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto">
              Meet the experienced leaders building the infrastructure layer for 
              modern businesses. From communication APIs to payment processing, 
              our team drives innovation across every aspect of our platform.
            </p>
          </motion.div>

          {/* Leadership Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { icon: <Users className="h-5 w-5" />, value: "50+", label: "Leadership Team" },
              { icon: <Target className="h-5 w-5" />, value: "15+", label: "Years Avg Experience" },
              { icon: <Award className="h-5 w-5" />, value: "10+", label: "Industries Covered" },
              { icon: <Building className="h-5 w-5" />, value: "20+", label: "Countries" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-cyan-50 to-blue-50 mb-3">
                  <div className="text-cyan-600">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-2xl md:text-3xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}