"use client";
import { ShoppingCart, Building, CreditCard, Heart, Users, TrendingUp, Shield, Bell, ChevronRight, MessageSquare,  UsersIcon, Key, Clock } from "lucide-react";
import Link from "next/link";

const solutions = [
  {
    icon: <ShoppingCart className="h-5 w-5" />,
    title: "E-commerce",
    description: "Boost sales with automated customer communication",
    href: "/solutions/ecommerce",
    badge: "Popular",
    color: "from-blue-500 to-cyan-600",
    bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
  },
  {
    icon: <Building className="h-5 w-5" />,
    title: "SaaS",
    description: "Engage users throughout their journey",
    href: "/solutions/saas",
    badge: null,
    color: "from-purple-500 to-pink-600",
    bgColor: "bg-gradient-to-br from-purple-50 to-pink-50",
  },
  {
    icon: <CreditCard className="h-5 w-5" />,
    title: "Finance",
    description: "Secure and timely financial notifications",
    href: "/solutions/finance",
    badge: null,
    color: "from-emerald-500 to-green-600",
    bgColor: "bg-gradient-to-br from-emerald-50 to-green-50",
  },
  {
    icon: <Heart className="h-5 w-5" />,
    title: "Healthcare",
    description: "Improve patient care with reliable communication",
    href: "/solutions/healthcare",
    badge: null,
    color: "from-rose-500 to-red-600",
    bgColor: "bg-gradient-to-br from-rose-50 to-red-50",
  },
  {
    icon: <MessageSquare className="h-5 w-5" />,
    title: "Customer Support",
    description: "Enhance support with automated responses",
    href: "/solutions/support",
    badge: "New",
    color: "from-amber-500 to-orange-600",
    bgColor: "bg-gradient-to-br from-amber-50 to-orange-50",
  },
  {
    icon: <UsersIcon className="h-5 w-5" />,
    title: "Reseller",
    description: "White-label solutions for partners and agencies",
    href: "/solutions/reseller",
    badge: "Soon",
    color: "from-indigo-500 to-violet-600",
    bgColor: "bg-gradient-to-br from-indigo-50 to-violet-50",
  },
];

const useCases = [
  {
    icon: <Users className="h-4 w-4" />,
    title: "Customer Engagement",
    href: "/use-cases/engagement",
    count: "12 templates",
  },
  {
    icon: <Bell className="h-4 w-4" />,
    title: "Transactional Alerts",
    href: "/use-cases/alerts",
    count: "8 templates",
  },
  {
    icon: <TrendingUp className="h-4 w-4" />,
    title: "Marketing Campaigns",
    href: "/use-cases/marketing",
    count: "15 templates",
  },
  {
    icon: <Shield className="h-4 w-4" />,
    title: "System Notifications",
    href: "/use-cases/notifications",
    count: "6 templates",
  },
  {
    icon: <Key className="h-4 w-4" />,
    title: "Authentication & OTP",
    href: "/use-cases/authentication",
    count: "7 templates",
  },
  {
    icon: <Clock className="h-4 w-4" />,
    title: "Reminders & Scheduling",
    href: "/use-cases/reminders",
    count: "9 templates",
  },
];


export default function SolutionsDropdown() {
  return (
    <div className="w-[1000px] rounded-xl border border-gray-200 bg-white p-8 shadow-2xl">
      <div className="grid grid-cols-3 gap-8">
        {/* Solutions Grid - Takes 2 columns */}
        <div className="col-span-2">
          <div className="mb-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-2">
              Industry Solutions
            </h3>
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            {solutions.map((solution) => (
              <Link
                key={solution.title}
                href={solution.href}
                className="group relative overflow-hidden rounded-xl border border-gray-200 p-4 transition-all hover:border-transparent hover:shadow-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 opacity-0 transition-opacity group-hover:opacity-100" />
                
                <div className="relative z-10">
                  <div className="mb-3 flex items-start justify-between">
                    <div className={`rounded-lg p-2.5 ${solution.bgColor}`}>
                      <div className={`text-white bg-gradient-to-br ${solution.color} p-1 rounded-md`}>
                        {solution.icon}
                      </div>
                    </div>
                    {solution.badge && (
                      <span className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-2.5 py-0.5 text-xs font-semibold text-white">
                        {solution.badge}
                      </span>
                    )}
                  </div>
                  
                  <h4 className="mb-1.5 font-semibold text-gray-900 group-hover:text-cyan-700">
                    {solution.title}
                  </h4>
                  <p className="text-sm text-gray-600">{solution.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Right Column - Takes 1 column */}
        <div className="space-y-8">
          {/* Use Cases */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-500">
              Popular Use Cases
            </h3>
            
            <div className="space-y-2">
              {useCases.map((useCase) => (
                <Link
                  key={useCase.title}
                  href={useCase.href}
                  className="group flex items-center justify-between rounded-lg p-3 text-sm transition-colors hover:bg-gray-50"
                >
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-gray-100 p-1.5 group-hover:bg-cyan-100">
                      <div className="text-gray-600 group-hover:text-cyan-600">
                        {useCase.icon}
                      </div>
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="font-medium text-gray-700 group-hover:text-cyan-600 truncate">
                        {useCase.title}
                      </div>
                      <div className="text-xs text-gray-500">{useCase.count}</div>
                    </div>
                  </div>
                  <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-cyan-600 flex-shrink-0" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}