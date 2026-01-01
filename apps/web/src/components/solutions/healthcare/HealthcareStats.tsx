// components/solutions/healthcare/HealthcareStats.tsx
"use client";
import { motion } from "framer-motion";
import { Users, Clock, Heart, Shield } from "lucide-react";

export default function HealthcareStats() {
  const stats = [
    {
      icon: <Users className="h-6 w-6" />,
      value: "40%",
      label: "Fewer no-shows",
      description: "with automated reminders",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      value: "50%",
      label: "Time saved",
      description: "for administrative staff",
    },
    {
      icon: <Heart className="h-6 w-6" />,
      value: "35%",
      label: "Better outcomes",
      description: "with medication adherence",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      value: "100%",
      label: "HIPAA compliant",
      description: "secure communication",
    },
  ];

  return (
    <section className="py-13 bg-gradient-to-b from-white to-rose-50/30 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Transforming Healthcare Communication
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Trusted by hospitals, clinics, and healthcare providers to enhance 
              patient care through secure, automated communication
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
                <div className="p-6 bg-white border border-gray-200 rounded-xl hover:border-rose-200 hover:shadow-lg transition-all text-center h-full">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-rose-50 mb-4 group-hover:bg-rose-100 transition-colors">
                    <div className="text-rose-600">
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

          {/* Trusted by healthcare providers */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 pt-12 border-t border-gray-200"
          >
            <p className="text-center text-gray-600 mb-8">
              Trusted by leading healthcare providers
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: "City Medical", type: "Hospital Network" },
                { name: "HealthPlus", type: "Clinic Chain" },
                { name: "CareFirst", type: "Primary Care" },
                { name: "MedTech", type: "Health Tech" },
              ].map((provider) => (
                <div
                  key={provider.name}
                  className="p-4 bg-white rounded-xl border border-gray-200 text-center"
                >
                  <div className="font-semibold text-gray-900 mb-1">
                    {provider.name}
                  </div>
                  <div className="text-sm text-gray-500">{provider.type}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}