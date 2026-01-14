// components/careers/CultureSection.tsx
"use client";
import { motion } from "framer-motion";
import { 
  Heart, 
  Zap, 
  Users, 
  Award,
  Coffee,
  Palette
} from "lucide-react";

export default function CultureSection() {
  const cultureValues = [
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Customer Obsessed",
      description: "Everything we do starts with our customers' success",
      color: "from-rose-500 to-pink-500"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Move Fast",
      description: "Ship quickly, learn faster, and iterate constantly",
      color: "from-amber-500 to-orange-500"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Collaborative",
      description: "Great ideas can come from anywhere in the company",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Excellence",
      description: "Strive for quality in everything we build",
      color: "from-emerald-500 to-green-500"
    },
    {
      icon: <Coffee className="h-6 w-6" />,
      title: "Work-Life Balance",
      description: "Sustainable pace leads to better results",
      color: "from-purple-500 to-violet-500"
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "Diverse & Inclusive",
      description: "Different perspectives drive innovation",
      color: "from-cyan-500 to-blue-500"
    },
  ];

  const teamPhotos = [
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w-800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&h=600&fit=crop",
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Culture
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We believe that great culture drives great results
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {cultureValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all h-full">
                  <div className={`mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${value.color}`}>
                    <div className="text-white">
                      {value.icon}
                    </div>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Team Photos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {teamPhotos.map((photo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="aspect-[4/3] rounded-xl overflow-hidden"
              >
                <div 
                  className="w-full h-full bg-gray-200 bg-cover bg-center"
                  style={{ backgroundImage: `url(${photo})` }}
                />
              </motion.div>
            ))}
          </div>

          {/* Culture Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-lg text-gray-600 mb-6">
              At Sendexa, we&apos;ve built a culture of trust, autonomy, and accountability. 
              We hire exceptional people and give them the freedom to do their best work. 
              We&apos;re remote-first but deeply connected, using modern tools to collaborate 
              effectively across time zones.
            </p>
            <p className="text-lg text-gray-600">
              We believe in transparency, direct feedback, and continuous learning. 
              Every team member has a voice, and we celebrate wins big and small together.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}