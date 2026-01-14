// components/careers/BenefitsGrid.tsx
"use client";
import { motion } from "framer-motion";
import { 
  Home, 
  DollarSign, 
  Heart, 
  Brain, 
  Briefcase, 
  Globe,
  Zap,
  Users
} from "lucide-react";

export default function BenefitsGrid() {
  const benefits = [
    {
      icon: <Home className="h-6 w-6" />,
      title: "Remote First",
      description: "Work from anywhere in the world",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Competitive Pay",
      description: "Top-of-market compensation & equity",
      color: "from-emerald-500 to-green-500"
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Health & Wellness",
      description: "Comprehensive medical, dental & vision",
      color: "from-rose-500 to-pink-500"
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Learning Budget",
      description: "$5,000 annual learning stipend",
      color: "from-purple-500 to-violet-500"
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: "Flexible PTO",
      description: "Unlimited vacation & paid parental leave",
      color: "from-amber-500 to-orange-500"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Global Retreats",
      description: "Annual company-wide gatherings",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Latest Tech",
      description: "Top-notch equipment & tools",
      color: "from-violet-500 to-purple-500"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Team Events",
      description: "Regular virtual & in-person gatherings",
      color: "from-green-500 to-emerald-500"
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Perks & Benefits
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We invest in our team&apos;s well-being, growth, and success
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all h-full">
                  <div className={`mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${benefit.color}`}>
                    <div className="text-white">
                      {benefit.icon}
                    </div>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}