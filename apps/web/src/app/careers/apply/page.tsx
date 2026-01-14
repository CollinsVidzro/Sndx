// app/careers/apply/page.tsx
"use client";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle, Upload } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import ApplicationForm from "@/components/careers/ApplicationForm";
import { getJobById } from "@/data/jobs";

export default function ApplyPage() {
  const searchParams = useSearchParams();
  const positionId = searchParams.get("position");
  const position = positionId ? getJobById(positionId) : null;

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header with Back Button */}
        <div className="mb-8">
          <Link
            href={position ? `/careers/positions/${position.id}` : "/careers"}
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to {position ? position.title : "Careers"}
          </Link>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Apply for Position
            </h1>
            {position && (
              <div className="inline-block bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-100 rounded-xl px-6 py-3 mb-6">
                <p className="text-lg font-semibold text-gray-900">
                  {position.title}
                </p>
                <p className="text-gray-600 text-sm">
                  {position.departmentLabel} • {position.location} • {position.type}
                </p>
              </div>
            )}
            <p className="text-gray-600 max-w-2xl mx-auto">
              Submit your application and join our team building the future of infrastructure
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Application Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg">
                    <Upload className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Application Form</h2>
                    <p className="text-gray-600">Complete the form below to submit your application</p>
                  </div>
                </div>

                <ApplicationForm positionId={positionId} />
              </div>
            </motion.div>

            {/* Right Column - Process Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              {/* What to Expect */}
              <div className="bg-white rounded-2xl border border-gray-200 p-6">
                <h3 className="font-bold text-gray-900 mb-4">What to Expect</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Application review within 48 hours</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Interview feedback provided</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Transparent process updates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Respect for your time and effort</span>
                  </li>
                </ul>
              </div>

              {/* Requirements */}
              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl border border-cyan-100 p-6">
                <h3 className="font-bold text-gray-900 mb-4">Requirements</h3>
                <ul className="space-y-2">
                  <li className="text-sm text-gray-700">• Resume/CV (PDF format preferred)</li>
                  <li className="text-sm text-gray-700">• Cover letter (optional but recommended)</li>
                  <li className="text-sm text-gray-700">• Portfolio or GitHub link for technical roles</li>
                  <li className="text-sm text-gray-700">• Minimum 2 professional references</li>
                </ul>
              </div>

              {/* Contact Info */}
              <div className="bg-white rounded-2xl border border-gray-200 p-6">
                <h3 className="font-bold text-gray-900 mb-4">Need Help?</h3>
                <p className="text-gray-600 text-sm mb-4">
                  If you encounter any issues with the application process or have questions:
                </p>
                <div className="space-y-2">
                  <a
                    href="mailto:careers@sendexa.com"
                    className="block text-cyan-600 hover:text-cyan-700 text-sm"
                  >
                    ✉️ careers@sendexa.co
                  </a>
                  <Link
                    href="/careers/faq"
                    className="block text-cyan-600 hover:text-cyan-700 text-sm"
                  >
                    📋 Careers FAQ
                  </Link>
                </div>
              </div>

              {/* Privacy Notice */}
              <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6">
                <h3 className="font-bold text-gray-900 mb-3">Privacy Notice</h3>
                <p className="text-gray-600 text-xs">
                  Your information will be used solely for recruitment purposes. We comply with data protection regulations and will not share your information with third parties without your consent.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}