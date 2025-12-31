// DocumentationGrid.tsx - Shows developer resources
"use client";
import { motion } from "framer-motion";
import { 
  BookOpen, FileText, PlayCircle, Terminal,
  Code, Download, Search, HelpCircle
} from "lucide-react";
import Link from "next/link";

const resources = [
  {
    icon: <BookOpen className="h-5 w-5" />,
    title: "Getting Started",
    description: "Quick start guides for all platforms",
    link: "/docs/getting-started",
    color: "bg-cyan-50 text-cyan-600"
  },
  {
    icon: <FileText className="h-5 w-5" />,
    title: "API Reference",
    description: "Complete API documentation",
    link: "/docs/api",
    color: "bg-blue-50 text-blue-600"
  },
  {
    icon: <PlayCircle className="h-5 w-5" />,
    title: "Tutorials",
    description: "Step-by-step tutorials",
    link: "/tutorials",
    color: "bg-emerald-50 text-emerald-600"
  },
  {
    icon: <Terminal className="h-5 w-5" />,
    title: "SDKs",
    description: "Client libraries & SDKs",
    link: "/sdk",
    color: "bg-violet-50 text-violet-600"
  },
  {
    icon: <Code className="h-5 w-5" />,
    title: "Examples",
    description: "Real-world code examples",
    link: "/examples",
    color: "bg-orange-50 text-orange-600"
  },
  {
    icon: <Download className="h-5 w-5" />,
    title: "CLI Tool",
    description: "Command line interface",
    link: "/cli",
    color: "bg-rose-50 text-rose-600"
  },
  {
    icon: <Search className="h-5 w-5" />,
    title: "Best Practices",
    description: "Production-ready patterns",
    link: "/docs/best-practices",
    color: "bg-amber-50 text-amber-600"
  },
  {
    icon: <HelpCircle className="h-5 w-5" />,
    title: "Support",
    description: "Help center & support",
    link: "/support",
    color: "bg-gray-50 text-gray-600"
  }
];

export default function DocumentationGrid() {
  return (
    <section className="py-13 bg-gray-50 relative">
      {/* Grid Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-10"
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
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 mb-4">
            <span className="text-sm font-semibold text-gray-700">
              DEVELOPER RESOURCES
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to Build
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive documentation, tutorials, and tools to help you succeed
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {resources.map((resource, index) => (
            <motion.div
              key={resource.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <Link
                href={resource.link}
                className="group block"
              >
                <div className="p-6 bg-white rounded-xl border border-gray-200 hover:border-cyan-200 transition-all h-full">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${resource.color.split(' ')[0]} mb-4`}>
                    <div className={resource.color.split(' ')[1]}>
                      {resource.icon}
                    </div>
                  </div>
                  
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-cyan-600 transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {resource.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}