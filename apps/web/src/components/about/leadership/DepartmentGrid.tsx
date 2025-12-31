// components/leadership/DepartmentGrid.tsx
"use client";
import { motion } from "framer-motion";
import { 
  Code, Shield, TrendingUp, MessageCircleMore,
  CreditCard,
} from "lucide-react";
import Image from "next/image";

const departmentLeaders = [
  {
    department: "Engineering",
    icon: <Code className="h-6 w-6" />,
    color: "from-cyan-500 to-blue-500",
    leaders: [
      {
        name: "David Kim",
        role: "VP of Engineering",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
      },
      {
        name: "Lisa Wang",
        role: "Head of Platform",
        image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=200&h=200&fit=crop",
      },
    ]
  },
  {
    department: "Product",
    icon: <MessageCircleMore className="h-6 w-6" />,
    color: "from-emerald-500 to-green-500",
    leaders: [
      {
        name: "Maria Gonzalez",
        role: "VP of Product",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop",
      },
      {
        name: "Thomas Reed",
        role: "Head of Payment Products",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
      },
    ]
  },
  {
    department: "Security",
    icon: <Shield className="h-6 w-6" />,
    color: "from-violet-500 to-purple-500",
    leaders: [
      {
        name: "James Wilson",
        role: "Chief Security Officer",
        image: "https://images.unsplash.com/photo-1507591064344-4c6ce005-128?w=200&h=200&fit=crop",
      },
      {
        name: "Sophia Chen",
        role: "Head of Compliance",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
      },
    ]
  },
  {
    department: "Revenue",
    icon: <TrendingUp className="h-6 w-6" />,
    color: "from-amber-500 to-orange-500",
    leaders: [
      {
        name: "Robert Taylor",
        role: "VP of Sales",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop",
      },
      {
        name: "Emma Davis",
        role: "Head of Partnerships",
        image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop",
      },
    ]
  },
  {
    department: "Communication",
    icon: <MessageCircleMore className="h-6 w-6" />,
    color: "from-blue-500 to-cyan-500",
    leaders: [
      {
        name: "Olivia Martinez",
        role: "Head of Messaging",
        image: "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=200&h=200&fit=crop",
      },
      {
        name: "Kevin Brown",
        role: "Head of Email Products",
        image: "https://images.unsplash.com/photo-1509783236416-c9ad59bae472?w=200&h=200&fit=crop",
      },
    ]
  },
  {
    department: "Payments",
    icon: <CreditCard className="h-6 w-6" />,
    color: "from-emerald-500 to-teal-500",
    leaders: [
      {
        name: "Michael Clark",
        role: "Head of Payment Infrastructure",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
      },
      {
        name: "Jennifer Lee",
        role: "Head of Payment Products",
        image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=200&h=200&fit=crop",
      },
    ]
  },
];

export default function DepartmentGrid() {
  return (
    <section className="py-13 bg-gray-50 relative">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, #9ca3af 1px, transparent 1px),
              linear-gradient(to bottom, #9ca3af 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Department Leadership
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Specialized leaders driving innovation across our platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {departmentLeaders.map((department, index) => (
            <motion.div
              key={department.department}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all h-full">
                {/* Department Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${department.color}`}>
                    <div className="text-white">
                      {department.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">{department.department}</h3>
                    <div className="text-sm text-gray-500">{department.leaders.length} Leaders</div>
                  </div>
                </div>

                {/* Leaders */}
                <div className="space-y-4">
                  {department.leaders.map((leader) => (
                    <div key={leader.name} className="flex items-center gap-4 p-3 rounded-lg bg-gray-50">
                      <div className="flex-shrink-0">
                        <Image
                          src={leader.image}
                          alt={leader.name}
                          width={48}
                          height={48}
                          className="rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{leader.name}</div>
                        <div className="text-sm text-gray-600">{leader.role}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}