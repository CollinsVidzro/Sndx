// TestimonialsGrid.tsx
"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    content:
      "sendexa is amazing, with a very good user dashboard experience and very fast sms delivery rate. i truly recommend sendexa to businesses who wants to use SMS has means to reach out to their customers.",
    author: "David",
    role: "CTO at Bulksms Provider",
    image: "https://user-images.trustpilot.com/69452a8d6148ea59f9101e91/73x73.png",
  },
  {
    content:
      "I've been searching and testing sms integration platforms for my project. And no doubt sendexa has stood out of all. Super clean UI, very affordable pricing and my personal favorite, a very fast support service. Highly recommended!",
    author: "Eric Boateng",
    role: "CEO at Omini Mall",
    image: "https://user-images.trustpilot.com/68f88cfff647b7e1136a8149/73x73.png",
  },
  {
    content:
      "The developer experience is exceptionalI would say so far so good, Sendexa is a great platform with a liable service. Keep up the good work ✅",
    author: "Emmanuel Abruquah",
    role: "CEO at Blomvo",
    image: "https://user-images.trustpilot.com/68eac9f2b411c1197dc00fb7/73x73.png",
  },
];

export default function TestimonialsGrid() {
  return (
    <section className="relative py-13">
      {/* Grid Background */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, #e5e7eb 1px, transparent 1px),
              linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center rounded-full bg-blue-50 px-4 py-2">
            <span className="text-sm font-semibold text-blue-700">
              CUSTOMER STORIES
            </span>
          </div>

          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Loved by Developers Worldwide
          </h2>

          <p className="mx-auto max-w-2xl text-gray-600">
            See how teams are building better products with Sendexa
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.12, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="h-full"
            >
              <div className="flex h-full flex-col rounded-xl border border-gray-200 bg-white p-8">
                <Quote className="mb-4 h-8 w-8 text-cyan-600 opacity-40" />

                <p className="mb-6 flex-1 italic text-gray-700">
                  &quot;{testimonial.content}&quot;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    width={44}
                    height={44}
                    className="rounded-full object-cover"
                  />

                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.role}
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
