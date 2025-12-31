// IntegrationGrid.tsx - Shows integrations and platforms
"use client";
import { motion } from "framer-motion";
import { 
  Code2, Terminal, Cloud, Server,
  GitBranch, Database, Cpu, Network
} from "lucide-react";

const integrations = [
  { icon: <Code2 className="h-5 w-5" />, name: "REST API", description: "Full RESTful API access" },
  { icon: <Terminal className="h-5 w-5" />, name: "CLI Tool", description: "Command line interface" },
  { icon: <GitBranch className="h-5 w-5" />, name: "GitHub", description: "GitHub Actions integration" },
  { icon: <Cloud className="h-5 w-5" />, name: "Cloudflare", description: "Workers integration" },
  { icon: <Server className="h-5 w-5" />, name: "Docker", description: "Container support" },
  { icon: <Database className="h-5 w-5" />, name: "PostgreSQL", description: "Direct database sync" },
  { icon: <Cpu className="h-5 w-5" />, name: "AWS Lambda", description: "Serverless functions" },
  { icon: <Network className="h-5 w-5" />, name: "Vercel", description: "Edge functions support" },
];

export default function IntegrationGrid() {
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
              INTEGRATIONS
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Seamless Platform Integrations
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Connect Sendexa with your favorite tools and platforms in minutes
          </p>
        </div>

        {/* Integrations Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {integrations.map((integration, index) => (
            <motion.div
              key={integration.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="p-4 bg-white rounded-xl border border-gray-200 hover:border-cyan-200 transition-all text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-cyan-50 mb-3 group-hover:bg-cyan-100 transition-colors">
                  <div className="text-cyan-600">
                    {integration.icon}
                  </div>
                </div>
                
                <div className="font-semibold text-gray-900 mb-1">
                  {integration.name}
                </div>
                <div className="text-xs text-gray-500">
                  {integration.description}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="/integrations"
            className="inline-flex items-center gap-2 text-cyan-600 font-semibold hover:text-cyan-700"
          >
            View all integrations
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div> */}
      </div>
    </section>
  );
}