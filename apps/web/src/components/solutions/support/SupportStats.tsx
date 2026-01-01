// components/solutions/support/SupportStats.tsx
"use client";
import { motion } from "framer-motion";
import { Zap, Users, Clock, TrendingUp } from "lucide-react";

export default function SupportStats() {
  const stats = [
    {
      icon: <Zap className="h-6 w-6" />,
      value: "80%",
      label: "Faster response time",
      description: "with automated replies",
    },
    {
      icon: <Users className="h-6 w-6" />,
      value: "45%",
      label: "Higher satisfaction",
      description: "improved CSAT scores",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      value: "60%",
      label: "Ticket reduction",
      description: "through automation",
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      value: "3.5x",
      label: "Agent productivity",
      description: "more tickets per agent",
    },
  ];

  return (
    <section className="py-13 bg-gradient-to-b from-white to-amber-50/30 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Transform Your Support Operations
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Leading support teams use Sendexa to automate responses, 
              reduce ticket volume, and improve customer satisfaction
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
                <div className="p-6 bg-white border border-gray-200 rounded-xl hover:border-amber-200 hover:shadow-lg transition-all text-center h-full">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-amber-50 mb-4 group-hover:bg-amber-100 transition-colors">
                    <div className="text-amber-600">
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

          {/* Trusted by support teams */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 pt-12 border-t border-gray-200"
          >
            <p className="text-center text-gray-600 mb-8">
              Trusted by leading support teams
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: "SupportPro", volume: "10K+ tickets/month" },
                { name: "HelpDesk Inc", volume: "Enterprise support" },
                { name: "CustomerCare", volume: "24/7 support" },
                { name: "ServiceFirst", volume: "Global team" },
              ].map((team) => (
                <div
                  key={team.name}
                  className="p-4 bg-white rounded-xl border border-gray-200 text-center"
                >
                  <div className="font-semibold text-gray-900 mb-1">
                    {team.name}
                  </div>
                  <div className="text-sm text-gray-500">{team.volume}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}