// components/leadership/ExecutiveGrid.tsx
"use client";
import { motion } from "framer-motion";
import { Twitter, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

const executives = [
  {
    name: "Alex Johnson",
    role: "CEO & Founder",
    department: "Executive",
    bio: "Alex founded Sendexa with a vision to simplify communication infrastructure. With 15+ years in tech, he previously led engineering at major communication platforms.",
    expertise: ["Infrastructure", "Scale", "Product Strategy"],
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
    linkedin: "https://linkedin.com/in/alexjohnson",
    twitter: "https://twitter.com/alexjohnson",
  },
  {
    name: "Sarah Chen",
    role: "Chief Technology Officer",
    department: "Technology",
    bio: "Sarah leads our technology vision with 15+ years in infrastructure engineering. She specializes in distributed systems and global scale architecture.",
    expertise: ["Distributed Systems", "DevOps", "Security"],
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
    linkedin: "https://linkedin.com/in/sarahchen",
    twitter: "https://twitter.com/sarahchen",
  },
  {
    name: "Marcus Rivera",
    role: "Chief Product Officer",
    department: "Product",
    bio: "Marcus drives product strategy with expertise from fintech unicorns. He focuses on delivering intuitive developer experiences and enterprise solutions.",
    expertise: ["Product Strategy", "UX", "Developer Experience"],
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    linkedin: "https://linkedin.com/in/marcusrivera",
    twitter: "https://twitter.com/marcus_r",
  },
  {
    name: "Priya Patel",
    role: "Chief Revenue Officer",
    department: "Revenue",
    bio: "Priya leads global revenue growth with 12+ years scaling SaaS companies. She focuses on building strategic partnerships and enterprise relationships.",
    expertise: ["Sales", "Partnerships", "Growth"],
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop",
    linkedin: "https://linkedin.com/in/priyapatel",
    twitter: "https://twitter.com/priyapatel",
  },
];

export default function ExecutiveGrid() {
  return (
    <section className="py-13 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Executive Leadership
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our executive team brings decades of experience building and scaling 
            global technology platforms
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {executives.map((executive, index) => (
            <motion.div
              key={executive.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all h-full">
                <div className="md:flex">
                  {/* Image Column */}
                  <div className="md:w-2/5 p-8 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                    <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg">
                      <Image
                        src={executive.image}
                        alt={executive.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* Content Column */}
                  <div className="md:w-3/5 p-8">
                    <div className="mb-4">
                      <span className="inline-block rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold text-cyan-700 mb-2">
                        {executive.department}
                      </span>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {executive.name}
                      </h3>
                      <div className="text-lg text-cyan-600 mb-4">
                        {executive.role}
                      </div>
                      <p className="text-gray-600 mb-6">
                        {executive.bio}
                      </p>
                    </div>

                    {/* Expertise */}
                    <div className="mb-6">
                      <div className="text-sm font-semibold text-gray-700 mb-2">Expertise</div>
                      <div className="flex flex-wrap gap-2">
                        {executive.expertise.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-4">
                      <a 
                        href={executive.linkedin}
                        className="text-gray-400 hover:text-cyan-600 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                      <a 
                        href={executive.twitter}
                        className="text-gray-400 hover:text-cyan-600 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Twitter className="h-5 w-5" />
                      </a>
                      <a 
                        href={`mailto:${executive.name.toLowerCase().replace(' ', '.')}@sndx.com`}
                        className="text-gray-400 hover:text-cyan-600 transition-colors"
                      >
                        <Mail className="h-5 w-5" />
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