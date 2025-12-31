// components/about/ValuesGrid.tsx
"use client";
import { motion } from "framer-motion";
import { 
  Shield, Zap, Globe, Users, 
  Code, TrendingUp 
} from "lucide-react";

const values = [
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Security First",
    description: "Enterprise-grade security in everything we build",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Developer First",
    description: "Built by developers, for developers",
    color: "from-violet-500 to-purple-500"
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Global Scale",
    description: "Designed for worldwide reliability",
    color: "from-emerald-500 to-green-500"
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Customer Obsessed",
    description: "Every decision starts with our customers",
    color: "from-rose-500 to-pink-500"
  },
  {
    icon: <Code className="h-6 w-6" />,
    title: "Technical Excellence",
    description: "Striving for engineering perfection",
    color: "from-amber-500 to-orange-500"
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: "Continuous Innovation",
    description: "Always pushing boundaries forward",
    color: "from-cyan-500 to-blue-500"
  },
];

export default function ValuesGrid() {
  return (
    <section className="py-13 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Values
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The principles that guide our work and define our culture
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="p-8 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-all h-full">
                <div className={`mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} p-1`}>
                  <div className="w-full h-full rounded-xl bg-white flex items-center justify-center">
                    <div className={`bg-gradient-to-br ${value.color} bg-clip-text text-transparent`}>
                      {value.icon}
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}