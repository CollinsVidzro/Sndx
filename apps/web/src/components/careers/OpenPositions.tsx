// components/careers/OpenPositions.tsx (updated)
"use client";
import { motion } from "framer-motion";
import { MapPin, Briefcase, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import { departments, getJobsByDepartment } from "@/data/jobs";

interface OpenPositionsProps {
  selectedDepartment: string;
  onDepartmentChange: (dept: string) => void;
}

export default function OpenPositions({ selectedDepartment, onDepartmentChange }: OpenPositionsProps) {
  const filteredPositions = getJobsByDepartment(selectedDepartment);

  return (
    <section id="positions" className="py-13 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Open Positions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find your perfect role and help shape the future of infrastructure
            </p>
          </div>

          {/* Department Filters */}
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {departments.map((dept) => (
              <button
                key={dept.id}
                onClick={() => onDepartmentChange(dept.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  selectedDepartment === dept.id
                    ? "bg-cyan-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {dept.label}
              </button>
            ))}
          </div>

          {/* Positions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredPositions.map((position, index) => (
              <motion.div
                key={position.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link
                  href={`/careers/positions/${position.id}`}
                  className="block bg-white rounded-xl border border-gray-200 p-6 hover:shadow-xl hover:border-cyan-200 transition-all"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-cyan-600 transition-colors">
                        {position.title}
                      </h3>
                      <p className="text-gray-600 mt-1">{position.description}</p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-cyan-600 group-hover:translate-x-1 transition-all" />
                  </div>

                  <div className="flex flex-wrap gap-4 mt-6">
                    <div className="flex items-center gap-2">
                      <Briefcase className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{position.departmentLabel}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{position.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{position.type}</span>
                    </div>
                    <div className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                      {position.experience}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {filteredPositions.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">📋</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No positions found
              </h3>
              <p className="text-gray-600">
                There are currently no open positions in this department.
              </p>
            </div>
          )}

          {/* General Application */}
          <div className="text-center mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-600 mb-6">
              Don&apos;t see a role that fits? We&apos;re always looking for talented people.
            </p>
            <Link
              href="/careers/apply"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-cyan-600 text-cyan-600 px-6 py-3 font-semibold hover:bg-cyan-50 transition-colors"
            >
              Submit General Application
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}