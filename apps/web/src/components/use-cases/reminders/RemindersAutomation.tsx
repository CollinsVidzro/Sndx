// components/use-cases/reminders/RemindersAutomation.tsx
"use client";
import { motion } from "framer-motion";
import { Calendar, Users, BarChart, Settings, Repeat, Bell, CheckCircle } from "lucide-react";

const automationFlows = [
  {
    title: "Appointment Management",
    description: "Complete workflow from booking to follow-up",
    steps: [
      "Booking confirmation",
      "24-hour reminder",
      "2-hour reminder",
      "Post-appointment follow-up",
      "Review request",
    ],
    results: "95% less no-shows",
    icon: <Calendar className="h-5 w-5" />,
    color: "bg-teal-100 text-teal-600",
  },
  {
    title: "Payment Collection",
    description: "Automated payment reminder series",
    steps: [
      "Invoice sent",
      "7-day reminder",
      "3-day reminder",
      "Due date reminder",
      "Overdue follow-up",
    ],
    results: "40% faster payments",
    icon: <BarChart className="h-5 w-5" />,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Client Onboarding",
    description: "Automated new client journey",
    steps: [
      "Welcome message",
      "Day 3 check-in",
      "Week 1 progress",
      "Month 1 review",
      "Quarterly check-in",
    ],
    results: "65% higher retention",
    icon: <Users className="h-5 w-5" />,
    color: "bg-purple-100 text-purple-600",
  },
  {
    title: "Maintenance Scheduling",
    description: "Regular maintenance reminders",
    steps: [
      "Schedule creation",
      "30-day notice",
      "7-day reminder",
      "Day before",
      "Completion follow-up",
    ],
    results: "92% compliance rate",
    icon: <Settings className="h-5 w-5" />,
    color: "bg-emerald-100 text-emerald-600",
  },
];

export default function RemindersAutomation() {
  return (
    <section className="py-13 bg-white relative">
      {/* Grid Background */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-5"
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
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Automation Workflows
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              End-to-end automation workflows that handle everything from initial 
              scheduling to post-event follow-up, completely hands-free.
            </p>
          </div>

          {/* Automation Flows */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {automationFlows.map((flow, index) => (
              <motion.div
                key={flow.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="p-6 bg-white border border-gray-200 rounded-xl hover:border-teal-200 hover:shadow-lg transition-all h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`rounded-lg p-2 ${flow.color}`}>
                      {flow.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {flow.title}
                      </h3>
                      <div className="text-sm text-gray-600">
                        {flow.description}
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    {flow.steps.map((step, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="h-6 w-6 rounded-full bg-teal-50 text-teal-600 text-xs font-semibold flex items-center justify-center">
                          {i + 1}
                        </div>
                        <span className="text-sm text-gray-700">{step}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500">
                        Average results:
                      </div>
                      <div className="text-sm font-semibold text-teal-600">
                        {flow.results}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Workflow Visualization */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-2xl p-8 border border-teal-200"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Complete Reminder Automation Timeline
            </h3>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-gradient-to-r from-teal-500 to-emerald-500 transform -translate-y-1/2 hidden md:block" />
              
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-0 relative">
                {[
                  { step: "Scheduled", time: "Day -30", icon: <Calendar className="h-5 w-5" /> },
                  { step: "First Reminder", time: "Day -7", icon: <Bell className="h-5 w-5" /> },
                  { step: "Second Reminder", time: "Day -1", icon: <Bell className="h-5 w-5" /> },
                  { step: "Final Reminder", time: "Day 0 - 2h", icon: <Bell className="h-5 w-5" /> },
                  { step: "Follow-up", time: "Day +1", icon: <CheckCircle className="h-5 w-5" /> },
                ].map((item, index) => (
                  <div key={item.step} className="relative z-10">
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white border-4 border-white mb-4 mx-auto shadow-lg">
                        <div className="rounded-full p-3 bg-teal-100 text-teal-600">
                          {item.icon}
                        </div>
                      </div>
                      
                      <div className="text-sm font-semibold text-gray-900 mb-1">
                        {item.step}
                      </div>
                      <div className="text-xs text-gray-500 mb-3">
                        {item.time}
                      </div>
                      
                      <div className="text-xs text-teal-600 font-medium">
                        {index === 0 && "Automated scheduling"}
                        {index === 1 && "Early notification"}
                        {index === 2 && "24-hour reminder"}
                        {index === 3 && "Final reminder"}
                        {index === 4 && "Automated follow-up"}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <div className="inline-flex items-center gap-2 text-teal-600 font-semibold">
                  <Repeat className="h-4 w-4" />
                  Fully automated workflow - Zero manual intervention
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}