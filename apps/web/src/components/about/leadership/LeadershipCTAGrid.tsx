// components/leadership/LeadershipCTAGrid.tsx
"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Briefcase, Users, Mail } from "lucide-react";

export default function LeadershipCTAGrid() {
  return (
    <section className="py-13 relative">
      {/* Grid Background */}
      <div className="absolute inset-0 -z-10">
        <div 
          className="absolute inset-0 opacity-10"
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
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Connect With Our Leaders
            </h2>
            <p className="text-gray-600">
              Get in touch or join our growing team
            </p>
          </motion.div>

          {/* Action Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Link
                href="/careers"
                className="group block p-6 bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-100 rounded-xl hover:shadow-lg transition-all"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-white mb-4">
                  <Briefcase className="h-6 w-6 text-cyan-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-3">Join Our Team</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Work with our leadership team to build the future of communication
                </p>
                <div className="inline-flex items-center text-cyan-600 font-medium">
                  View Open Roles
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Link
                href="/about"
                className="group block p-6 bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-100 rounded-xl hover:shadow-lg transition-all"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-white mb-4">
                  <Users className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-3">Our Culture</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Learn about our values and how we work together
                </p>
                <div className="inline-flex items-center text-emerald-600 font-medium">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Link
                href="/contact"
                className="group block p-6 bg-gradient-to-br from-violet-50 to-purple-50 border border-violet-100 rounded-xl hover:shadow-lg transition-all"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-white mb-4">
                  <Mail className="h-6 w-6 text-violet-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-3">Contact Us</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Get in touch with our leadership team
                </p>
                <div className="inline-flex items-center text-violet-600 font-medium">
                  Send Message
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-gray-600 mb-4">
              Looking for media inquiries or partnership opportunities?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/press"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:border-gray-400 transition-all"
              >
                Media Kit
              </Link>
              <Link
                href="/partners"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:border-gray-400 transition-all"
              >
                Partnership Inquiries
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}