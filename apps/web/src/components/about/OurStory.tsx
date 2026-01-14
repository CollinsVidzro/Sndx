
// components/about/OurStory.tsx - Updated Version
"use client";
import { motion } from "framer-motion";
import { Target, Globe, Zap, Users} from "lucide-react";
//import Link from "next/link";

export default function OurStory() {
  return (
    <section className="py-13 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 mb-4">
                  <span className="text-sm font-semibold text-cyan-700 uppercase tracking-wider">
                    Our Story
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  From Vision to Global Impact
                </h2>
                <div className="space-y-4 text-gray-600">
                  <p className="text-lg">
                    Founded in 2025, Sendexa emerged from a simple realization: businesses were 
                    stitching together multiple APIs for communication, authentication, and 
                    payments—creating complexity and technical debt.
                  </p>
                  <p>
                    Our founders, veterans from infrastructure companies, envisioned a unified 
                    platform that could handle it all with enterprise-grade reliability. Today, 
                    we serve thousands of businesses globally, processing billions of 
                    messages and transactions.
                  </p>
                  <p>
                    We&apos;re not just building APIs—we&apos;re building the infrastructure layer 
                    that powers modern digital experiences.
                  </p>
                </div>
                
                {/* <Link
                  href="/company/mission"
                  className="inline-flex items-center gap-2 text-cyan-600 hover:text-cyan-700 font-medium mt-6 group"
                >
                  Learn more about our mission
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link> */}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                {
                  icon: <Target className="h-6 w-6" />,
                  title: "Our Mission",
                  description: "Simplify global communication and payment infrastructure for every business",
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  icon: <Globe className="h-6 w-6" />,
                  title: "Global Vision",
                  description: "Enable seamless connectivity across 200+ countries and regions",
                  color: "from-emerald-500 to-green-500"
                },
                {
                  icon: <Zap className="h-6 w-6" />,
                  title: "Innovation Drive",
                  description: "Constantly pushing the boundaries of what's possible in infrastructure",
                  color: "from-violet-500 to-purple-500"
                },
                {
                  icon: <Users className="h-6 w-6" />,
                  title: "Community First",
                  description: "Built with and for our developer community",
                  color: "from-amber-500 to-orange-500"
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-all"
                >
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} mb-4`}>
                    <div className="text-white">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}