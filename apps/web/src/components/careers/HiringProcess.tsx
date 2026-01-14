// components/careers/HiringProcess.tsx
"use client";
import { motion } from "framer-motion";
import { 
  Search, 
  Phone, 
  Code, 
  Users, 
  CheckCircle,
  Award
} from "lucide-react";

export default function HiringProcess() {
  const steps = [
    {
      icon: <Search className="h-6 w-6" />,
      title: "Application Review",
      description: "Our team reviews your application within 48 hours",
      duration: "1-3 days",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Initial Call",
      description: "30-minute chat with our recruiting team",
      duration: "30 mins",
      color: "from-purple-500 to-violet-500"
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Technical Assessment",
      description: "Role-specific challenge or take-home assignment",
      duration: "2-4 hours",
      color: "from-emerald-500 to-green-500"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Team Interviews",
      description: "Virtual interviews with team members and leads",
      duration: "2-4 hours",
      color: "from-amber-500 to-orange-500"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Final Review",
      description: "Interview with leadership and offer discussion",
      duration: "1-2 days",
      color: "from-rose-500 to-pink-500"
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Offer & Onboarding",
      description: "Welcome to the team! Smooth onboarding experience",
      duration: "2-4 weeks",
      color: "from-cyan-500 to-blue-500"
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Hiring Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Transparent, respectful, and designed to find the best fit for both sides
            </p>
          </div>

          {/* Process Timeline */}
          <div className="relative">
            {/* Timeline Line - Desktop */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500 hidden lg:block" />
            
            {/* Timeline Line - Mobile */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500 lg:hidden" />

            <div className="space-y-8 lg:space-y-0">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Desktop Layout */}
                  <div className="hidden lg:flex items-center">
                    {/* Left side (even indices) */}
                    {index % 2 === 0 ? (
                      <>
                        <div className="w-1/2 pr-12 text-right">
                          <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all ml-auto max-w-md">
                            <div className="flex flex-col items-end">
                              <div className="flex items-center justify-between w-full mb-2">
                                <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                                  {step.duration}
                                </span>
                                <h3 className="font-bold text-gray-900">{step.title}</h3>
                              </div>
                              <p className="text-gray-600 text-sm text-right">{step.description}</p>
                            </div>
                          </div>
                        </div>
                        
                        {/* Center Icon */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                          <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} border-4 border-white shadow-lg`}>
                            <div className="text-white">
                              {step.icon}
                            </div>
                          </div>
                        </div>
                        
                        {/* Right side placeholder */}
                        <div className="w-1/2"></div>
                      </>
                    ) : (
                      <>
                        {/* Left side placeholder */}
                        <div className="w-1/2"></div>
                        
                        {/* Center Icon */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                          <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} border-4 border-white shadow-lg`}>
                            <div className="text-white">
                              {step.icon}
                            </div>
                          </div>
                        </div>
                        
                        {/* Right side (odd indices) */}
                        <div className="w-1/2 pl-12">
                          <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all max-w-md">
                            <div className="flex flex-col">
                              <div className="flex items-center justify-between w-full mb-2">
                                <h3 className="font-bold text-gray-900">{step.title}</h3>
                                <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                                  {step.duration}
                                </span>
                              </div>
                              <p className="text-gray-600 text-sm">{step.description}</p>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Mobile Layout */}
                  <div className="lg:hidden">
                    <div className="flex">
                      {/* Timeline Icon - Mobile */}
                      <div className="flex-shrink-0 mr-6 relative">
                        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} border-4 border-white shadow-lg relative z-10`}>
                          <div className="text-white">
                            {step.icon}
                          </div>
                        </div>
                      </div>
                      
                      {/* Content - Mobile */}
                      <div className="flex-1">
                        <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all">
                          <div className="flex flex-col">
                            <div className="flex items-center justify-between w-full mb-2">
                              <h3 className="font-bold text-gray-900">{step.title}</h3>
                              <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                                {step.duration}
                              </span>
                            </div>
                            <p className="text-gray-600 text-sm">{step.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Process Notes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 p-8 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl border border-cyan-100"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-gray-900 mb-4">What to Expect</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Timely updates at every stage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Clear communication about next steps</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Respect for your time and effort</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-4">Our Promise</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">No surprise coding tests</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Feedback provided after interviews</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Transparent salary ranges</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}