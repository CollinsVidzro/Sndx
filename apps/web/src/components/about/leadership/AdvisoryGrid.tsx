// components/leadership/AdvisoryGrid.tsx
"use client";
import { motion } from "framer-motion";
import { Award, Globe, Building, TrendingUp } from "lucide-react";
import Image from "next/image";

const advisors = [
  {
    name: "Dr. Michael Reynolds",
    role: "Infrastructure Advisor",
    former: "Former CTO at CloudScale Inc.",
    bio: "Advising on global infrastructure scaling and reliability",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop",
  },
  {
    name: "Sarah Williams",
    role: "Payment Systems Advisor",
    former: "Former Head of Payments at Fintech Global",
    bio: "Expert in global payment systems and compliance",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop",
  },
  {
    name: "James Rodriguez",
    role: "Growth Strategy Advisor",
    former: "Former VP of Growth at TechUnicorn",
    bio: "Specializes in scaling technology platforms globally",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop",
  },
  {
    name: "Dr. Lisa Chen",
    role: "Security & Compliance Advisor",
    former: "Former Chief Security Officer at SecureCorp",
    bio: "Expert in enterprise security and regulatory compliance",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
  },
];

export default function AdvisoryGrid() {
  return (
    <section className="py-13 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Advisory Board
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Industry experts guiding our strategic direction and growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {advisors.map((advisor, index) => (
            <motion.div
              key={advisor.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all h-full">
                {/* Image */}
                <div className="mb-4">
                  <Image
                    src={advisor.image}
                    alt={advisor.name}
                    width={80}
                    height={80}
                    className="rounded-full mx-auto mb-4 object-cover"
                  />
                  <div className="text-center">
                    <h3 className="font-bold text-gray-900">{advisor.name}</h3>
                    <div className="text-sm text-cyan-600 mb-2">{advisor.role}</div>
                    <div className="text-xs text-gray-500 mb-3">{advisor.former}</div>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-sm text-gray-600 text-center mb-4">
                  {advisor.bio}
                </p>

                {/* Expertise Badge */}
                <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 mx-auto">
                  <Award className="h-3 w-3 text-gray-600" />
                  <span className="text-xs font-medium text-gray-700">Industry Expert</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 pt-12 border-t border-gray-200"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: <Award className="h-5 w-5" />, value: "100+", label: "Years Combined Experience" },
              { icon: <Globe className="h-5 w-5" />, value: "50+", label: "Countries Experience" },
              { icon: <Building className="h-5 w-5" />, value: "30+", label: "Companies Represented" },
              { icon: <TrendingUp className="h-5 w-5" />, value: "10+", label: "Industry Specialties" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-gray-50 to-gray-100 mb-3">
                  <div className="text-gray-600">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}