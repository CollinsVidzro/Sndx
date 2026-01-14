// components/about/Timeline.tsx - Updated with better spacing
"use client";
import { motion } from "framer-motion";
import { Calendar, Rocket} from "lucide-react";

const timelineEvents = [
  {
    year: "2025",
    title: "Company Founded",
    description: "Sendexa was founded with a vision to simplify communication infrastructure",
    icon: <Rocket className="h-5 w-5" />,
    color: "from-blue-500 to-cyan-500"
  },
];

export default function Timeline() {
  return (
    <section className="py-13 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <Calendar className="h-5 w-5 text-cyan-600" />
              <span className="text-sm font-semibold text-cyan-700 uppercase tracking-wider">
                Our Journey
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Building the Future, Step by Step
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              From a simple idea to a global infrastructure platform
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500 hidden md:block" />

            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                className={`relative mb-12 ${index === timelineEvents.length - 1 ? 'mb-0' : ''}`}
              >
                <div className="flex flex-col md:flex-row items-center">
                  {/* Left side (even index) */}
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:order-2'}`}>
                    <motion.div
                      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      className="p-8 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-br ${event.color} shadow-md`}>
                          <div className="text-white">
                            {event.icon}
                          </div>
                        </div>
                        <span className="text-2xl font-bold text-gray-900">
                          {event.year}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {event.title}
                      </h3>
                      <p className="text-gray-600">
                        {event.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Center dot */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white border-4 border-cyan-500 rounded-full z-10" />

                  {/* Right side placeholder (odd index) */}
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 md:order-1'}`} />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}