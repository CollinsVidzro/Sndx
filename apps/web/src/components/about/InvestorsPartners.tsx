// components/about/InvestorsPartners.tsx
"use client";
import { motion } from "framer-motion";
import { Building2, Award, Handshake } from "lucide-react";

const investors = [
  { name: "Sequoia Capital", type: "Series A Lead" },
  { name: "Andreessen Horowitz", type: "Seed & Series A" },
  { name: "YC Continuity", type: "Seed Investor" },
  { name: "Tiger Global", type: "Series A" }
];

const partners = [
  { name: "AWS", description: "Cloud Infrastructure Partner" },
  { name: "Stripe", description: "Payment Processing" },
  { name: "Telecel", description: "Communication Infrastructure" },
  { name: "Google Cloud", description: "AI & Analytics" }
];

export default function InvestorsPartners() {
  return (
    <section className="py-13 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <Handshake className="h-5 w-5 text-cyan-600" />
              <span className="text-sm font-semibold text-cyan-700 uppercase tracking-wider">
                Backed by the Best
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Investors & Partners
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Supported by top-tier investors and partnered with industry leaders
            </p>
          </div>

          {/* Investors */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-6">
              <Building2 className="h-5 w-5 text-gray-700" />
              <h3 className="text-xl font-semibold text-gray-900">Our Investors</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {investors.map((investor) => (
                <div
                  key={investor.name}
                  className="p-6 bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl hover:border-cyan-200 hover:shadow-sm transition-all"
                >
                  <div className="text-lg font-semibold text-gray-900 mb-1">
                    {investor.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {investor.type}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Partners */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Award className="h-5 w-5 text-gray-700" />
              <h3 className="text-xl font-semibold text-gray-900">Strategic Partners</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {partners.map((partner) => (
                <div
                  key={partner.name}
                  className="p-6 bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl hover:border-cyan-200 hover:shadow-sm transition-all"
                >
                  <div className="text-lg font-semibold text-gray-900 mb-1">
                    {partner.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {partner.description}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}