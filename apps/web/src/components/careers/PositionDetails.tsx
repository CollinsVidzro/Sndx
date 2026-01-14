// components/careers/PositionDetails.tsx (updated)
"use client";
import { motion } from "framer-motion";
import { 
  MapPin, 
  Briefcase, 
  Clock, 
  DollarSign,
  CheckCircle,
  Users,
  Zap,
  Award,
  Calendar
} from "lucide-react";
import Link from "next/link";
import { Job } from "@/data/jobs";

interface PositionDetailsProps {
  position: Job;
}

export default function PositionDetails({ position }: PositionDetailsProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {position.title}
            </h1>
            <p className="text-xl text-gray-600 mb-6">{position.description}</p>
            
            <div className="flex flex-wrap gap-4 mb-2">
              <div className="flex items-center gap-2">
                <Briefcase className="h-5 w-5 text-gray-400" />
                <span className="text-gray-700">{position.departmentLabel}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-gray-400" />
                <span className="text-gray-700">{position.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-gray-400" />
                <span className="text-gray-700">{position.type}</span>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-gray-400" />
                <span className="text-gray-700">{position.salary}</span>
              </div>
              <div className="text-gray-700 bg-gray-100 px-4 py-2 rounded-full">
                {position.experience}
              </div>
            </div>
            
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Calendar className="h-4 w-4" />
              <span>Posted: {formatDate(position.postedDate)}</span>
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="lg:w-80"
          >
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl border border-cyan-100 p-6">
              <h3 className="font-bold text-gray-900 mb-4">Ready to apply?</h3>
              <p className="text-gray-600 text-sm mb-6">
                We typically review applications within 48 hours. Our process is transparent and respectful of your time.
              </p>
              <Link
                href={`/careers/apply?position=${position.id}`}
                className="block w-full text-center rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 px-6 py-3 font-semibold text-white hover:shadow-lg transition-all mb-4"
              >
                Apply Now
              </Link>
              <Link
                href="/careers"
                className="block w-full text-center rounded-xl border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-700 hover:border-gray-400 transition-colors"
              >
                View Other Positions
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Content Sections */}
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-8">
          {/* Responsibilities */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-xl border border-gray-200 p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">What You&apos;ll Do</h2>
            </div>
            <ul className="space-y-3">
              {position.responsibilities.map((resp, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{resp}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Requirements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl border border-gray-200 p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-gradient-to-br from-emerald-500 to-green-500 rounded-lg">
                <Award className="h-5 w-5 text-white" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">What We&apos;re Looking For</h2>
            </div>
            <ul className="space-y-3">
              {position.requirements.map((req, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{req}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-xl border border-gray-200 p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg">
                <Users className="h-5 w-5 text-white" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">Benefits</h2>
            </div>
            <ul className="space-y-3">
              {position.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="h-2 w-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* About Team */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-100 p-6"
          >
            <h3 className="font-bold text-gray-900 mb-3">About the Team</h3>
            <p className="text-gray-700 text-sm mb-4">
              You&apos;ll be joining a world-class team of professionals who are passionate about building scalable infrastructure. We value collaboration, continuous learning, and work-life balance.
            </p>
            <div className="text-sm text-gray-600">
              <p className="mb-1">• 100% remote team</p>
              <p className="mb-1">• Async-first communication</p>
              <p className="mb-1">• Quarterly team retreats</p>
              <p>• Inclusive and diverse culture</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-12 pt-8 border-t border-gray-200"
      >
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to make an impact?
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Join us in building the infrastructure that powers modern businesses worldwide. We can&apos;t wait to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/careers/apply?position=${position.id}`}
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 px-8 py-4 font-semibold text-white hover:shadow-lg transition-all"
            >
              Apply for this Position
            </Link>
            <Link
              href="/careers"
              className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-8 py-4 font-semibold text-gray-700 hover:border-gray-400 transition-colors"
            >
              View All Positions
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}