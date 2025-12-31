// components/about/LeadershipGrid.tsx
"use client";
import { motion } from "framer-motion";
import { Twitter, Linkedin } from "lucide-react";
import Image from "next/image";

const leadership = [
  {
    name: "Alex Johnson",
    role: "CEO & Founder",
    bio: "Former engineering lead at major tech companies with 15+ years in infrastructure",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
    twitter: "@alexjohnson",
    linkedin: "/alexjohnson"
  },
  {
    name: "Sarah Chen",
    role: "CTO",
    bio: "15+ years in infrastructure engineering and distributed systems",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
    twitter: "@sarahchen",
    linkedin: "/sarahchen"
  },
  {
    name: "Marcus Rivera",
    role: "Head of Payments",
    bio: "Former fintech executive specializing in global payment systems",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    twitter: "@marcus_r",
    linkedin: "/marcusrivera"
  },
  {
    name: "Priya Patel",
    role: "Head of Communication",
    bio: "10+ years scaling messaging platforms for global enterprises",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop",
    twitter: "@priyapatel",
    linkedin: "/priyapatel"
  },
  {
    name: "David Kim",
    role: "Head of Engineering",
    bio: "Scaling engineering teams and infrastructure for 12+ years",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    twitter: "@davidkim",
    linkedin: "/davidkim"
  },
  {
    name: "Maria Gonzalez",
    role: "Head of Product",
    bio: "Product strategy leader from top SaaS companies",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
    twitter: "@mariagonz",
    linkedin: "/mariagonzalez"
  },
];

export default function LeadershipGrid() {
  return (
    <section className="py-13 bg-gray-50 relative">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0"
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
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Leadership Team
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experienced leaders driving innovation in communication and payment technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {leadership.map((person, index) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all h-full">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <Image
                      src={person.image}
                      alt={person.name}
                      width={80}
                      height={80}
                      className="rounded-full object-cover w-20 h-20"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900">{person.name}</h3>
                    <div className="text-sm text-cyan-600 mb-2">{person.role}</div>
                    <p className="text-sm text-gray-600 mb-3">{person.bio}</p>
                    <div className="flex items-center gap-3">
                      <a 
                        href={`https://twitter.com/${person.twitter}`}
                        className="text-gray-400 hover:text-cyan-600"
                      >
                        <Twitter className="h-4 w-4" />
                      </a>
                      <a 
                        href={`https://linkedin.com/in${person.linkedin}`}
                        className="text-gray-400 hover:text-cyan-600"
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                    </div>
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