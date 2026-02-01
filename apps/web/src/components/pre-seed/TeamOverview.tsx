// components/pre-seed/TeamOverview.tsx
"use client";
import { motion } from "framer-motion";
import { Users, Rocket, Globe, Zap } from "lucide-react";
import Image from "next/image";

export default function TeamOverview() {
  const teamMembers = [
    {
      name: "Collins Vidzro",
      role: "Founder & CEO",
      experience: "Founder-led, technical background",
      background:
        "Builder with hands-on experience designing APIs, dashboards, and messaging infrastructure focused on real-world reliability in Ghana.",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
      expertise: ["Product", "Infrastructure", "Execution"],
    },
    {
      name: "Technical Co-Founder",
      role: "CTO (Planned Hire)",
      experience: "Senior infrastructure engineer",
      background:
        "Seeking an experienced systems engineer to lead scalability, reliability, and carrier-grade architecture as the company grows.",
      image:
        "https://images.unsplash.com/photo-1551836026-d5c2c3e5d6e3?w=400&h=400&fit=crop",
      expertise: ["Distributed Systems", "DevOps", "Reliability"],
    },
  ];

  const teamStrengths = [
    {
      icon: <Rocket className="h-5 w-5" />,
      title: "Founder-Led Execution",
      description:
        "Product and infrastructure are built directly by the founder, enabling fast iteration and clear ownership.",
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "Lean & Focused Team",
      description:
        "Capital-efficient structure optimized for early-stage execution and learning.",
    },
    {
      icon: <Zap className="h-5 w-5" />,
      title: "Infrastructure Mindset",
      description:
        "Decisions prioritize reliability, monitoring, and long-term scalability over shortcuts.",
    },
    {
      icon: <Globe className="h-5 w-5" />,
      title: "Local Market Understanding",
      description:
        "Built with a deep understanding of Ghanaian businesses, carriers, and compliance realities.",
    },
  ];

  return (
    <section className="py-20 bg-white relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, #3b82f6 1px, transparent 1px),
              linear-gradient(to bottom, #3b82f6 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              The Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Founder-led execution with a focus on building reliable
              communication infrastructure
            </p>
          </motion.div>

          {/* Core Team */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Founding Team
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                A lean team intentionally structured for early-stage execution
                and learning
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-xl hover:border-blue-200 transition-all duration-300 h-full">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                      <div className="relative">
                        <Image
                          src={member.image}
                          alt={member.name}
                          width={120}
                          height={120}
                          className="rounded-2xl object-cover"
                        />
                        {member.role.includes("Founder") && (
                          <div className="absolute -top-2 -right-2 px-3 py-1 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-xs font-bold">
                            FOUNDER
                          </div>
                        )}
                      </div>

                      <div className="flex-1 text-center md:text-left">
                        <h4 className="text-xl font-bold text-gray-900 mb-1">
                          {member.name}
                        </h4>
                        <div className="text-blue-600 font-medium mb-2">
                          {member.role}
                        </div>
                        <div className="text-sm text-gray-600 mb-3">
                          {member.experience}
                        </div>
                        <p className="text-gray-700 mb-4">
                          {member.background}
                        </p>

                        <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                          {member.expertise.map((skill) => (
                            <span
                              key={skill}
                              className="px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-700"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>

                        {member.role.includes("Planned") && (
                          <div className="mt-6 p-3 rounded-xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200">
                            <div className="text-sm font-medium text-amber-700">
                              ⚡ Key technical hire planned post pre-seed
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Team Strengths */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
              How the Team Wins
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamStrengths.map((strength) => (
                <div
                  key={strength.title}
                  className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-all"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 mb-4">
                    <div className="text-blue-600">
                      {strength.icon}
                    </div>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">
                    {strength.title}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {strength.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
