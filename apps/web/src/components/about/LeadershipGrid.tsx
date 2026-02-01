// components/about/LeadershipGrid.tsx
"use client";

import { motion } from "framer-motion";
import { Twitter, Linkedin } from "lucide-react";
import Image from "next/image";

const leadership = [
  {
    name: "Collins Vidzro",
    role: "CEO & Founder",
    bio: "Former engineering lead at major tech companies with 15+ years in infrastructure",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
    twitter: "alexjohnson",
    linkedin: "alexjohnson",
  },
  {
    name: "Sarah Chen",
    role: "CTO",
    bio: "15+ years in infrastructure engineering and distributed systems",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
    twitter: "sarahchen",
    linkedin: "sarahchen",
  },
  {
    name: "Marcus Rivera",
    role: "Head of Payments",
    bio: "Former fintech executive specializing in global payment systems",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    twitter: "marcus_r",
    linkedin: "marcusrivera",
  },
];

export default function LeadershipGrid() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-50 to-white">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Leadership
          </h2>

          <p className="text-gray-600 text-lg">
            Meet the experienced professionals shaping the future of
            communication and payments.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {leadership.map((person, index) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              {/* Card */}
              <div className="relative h-full bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                {/* Top Gradient Bar */}
                <div className="h-24 bg-gradient-to-r from-cyan-500 to-blue-600" />

                <div className="px-6 pb-6 text-center">
                  {/* Avatar */}
                  <div className="relative -mt-14 mb-4 flex justify-center">
                    <div className="p-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600">
                      <div className="bg-white p-1 rounded-full">
                        <Image
                          src={person.image}
                          alt={person.name}
                          width={96}
                          height={96}
                          className="rounded-full object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Info */}
                  <h3 className="text-lg font-semibold text-gray-900">
                    {person.name}
                  </h3>

                  <p className="text-sm font-medium text-cyan-600 mb-3">
                    {person.role}
                  </p>

                  <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                    {person.bio}
                  </p>

                  {/* Socials */}
                  <div className="flex justify-center gap-4">
                    <a
                      href={`https://twitter.com/${person.twitter}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full border border-gray-200 text-gray-500 transition hover:bg-cyan-50 hover:text-cyan-600 hover:border-cyan-200"
                    >
                      <Twitter className="h-4 w-4" />
                    </a>

                    <a
                      href={`https://linkedin.com/in/${person.linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full border border-gray-200 text-gray-500 transition hover:bg-cyan-50 hover:text-cyan-600 hover:border-cyan-200"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
