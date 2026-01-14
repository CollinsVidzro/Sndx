// components/about/Testimonials.tsx
"use client";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    quote: "Sendexa's platform reduced our integration time from weeks to days. Their APIs are a game-changer.",
    author: "Sarah Chen",
    role: "CTO at TechScale",
    company: "TechScale",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop"
  },
  {
    quote: "The reliability and global reach of Sendexa's communication infrastructure is unmatched.",
    author: "Marcus Johnson",
    role: "Product Director",
    company: "GlobalPay",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
  },
  {
    quote: "We've processed millions of transactions with zero downtime. Enterprise-grade performance.",
    author: "Priya Patel",
    role: "Engineering Lead",
    company: "Fintech Corp",
    rating: 5,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop"
  }
];

export default function Testimonials() {
  return (
    <section className="py-13 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <Quote className="h-5 w-5 text-cyan-600" />
              <span className="text-sm font-semibold text-cyan-700 uppercase tracking-wider">
                Testimonials
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See what our customers say about working with Sendexa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all h-full relative">
                  <div className="absolute -top-3 -left-3">
                    <div className="p-2 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500">
                      <Quote className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  
                  <blockquote className="text-gray-700 mb-6 text-lg leading-relaxed">
                    &quot;{testimonial.quote}&quot;
                  </blockquote>
                  
                  <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                    <div className="relative">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.author}
                        width={48}
                        height={48}
                        className="rounded-full object-cover w-12 h-12"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        {testimonial.author}
                      </div>
                      <div className="text-sm text-gray-600">
                        {testimonial.role}
                      </div>
                      <div className="text-sm text-cyan-600 font-medium">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}