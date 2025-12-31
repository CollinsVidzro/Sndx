"use client";
import { Book, Code, Terminal, GitBranch, Server, FileText, PlayCircle, ChevronRight } from "lucide-react";
import Link from "next/link";

const developerResources = [
  {
    category: "Documentation",
    icon: <Book className="h-5 w-5" />,
    items: [
      { name: "API Reference", href: "/docs/api", badge: "v1.0.0", badgeColor: "bg-blue-50 text-blue-700 border border-blue-100" },
      { name: "Getting Started", href: "/docs/start", badge: "New", badgeColor: "bg-emerald-50 text-emerald-700 border border-emerald-100" },
      { name: "Guides & Tutorials", href: "/docs/guides", badge: "Updated", badgeColor: "bg-purple-50 text-purple-700 border border-purple-100" },
      { name: "Best Practices", href: "/docs/best-practices", badge: "updated", badgeColor: "bg-emerald-50 text-emerald-700 border border-emerald-100" },
    ],
  },
  {
    category: "SDKs & Libraries",
    icon: <Code className="h-5 w-5" />,
    items: [
      { name: "Node.js", href: "/sdks/javascript", badge: "v2.1.0", badgeColor: "bg-emerald-50 text-emerald-700 border border-emerald-100" },
      { name: "Python", href: "/sdks/python", badge: "v1.4.0", badgeColor: "bg-emerald-50 text-emerald-700 border border-emerald-100" },
      { name: "Java", href: "/sdks/java", badge: "v3.0.0", badgeColor: "bg-emerald-50 text-emerald-700 border border-emerald-100" },
      { name: "Go", href: "/sdks/go", badge: "v2.0.0", badgeColor: "bg-emerald-50 text-emerald-700 border border-emerald-100" },
      { name: "PHP", href: "/sdks/php", badge: "v1.2.0", badgeColor: "bg-emerald-50 text-emerald-700 border border-emerald-100" },
    ],
  },
  {
    category: "Tools",
    icon: <Terminal className="h-5 w-5" />,
    items: [
      { name: "CLI Tool", href: "/tools/cli", badge: "v0.5.0", badgeColor: "bg-purple-50 text-purple-700 border border-purple-100" },
      { name: "Postman Collection", href: "/tools/postman", badge: "Latest", badgeColor: "bg-orange-50 text-orange-700 border border-orange-100" },
      { name: "VS Code Extension", href: "/tools/vscode", badge: "Beta", badgeColor: "bg-blue-50 text-blue-700 border border-blue-100" },
      { name: "Webhooks Debugger", href: "/tools/webhooks", badge: "New", badgeColor: "bg-emerald-50 text-emerald-700 border border-emerald-100" },
    ],
  },
];

const quickLinks = [
  {
    icon: <GitBranch className="h-4 w-4" />,
    title: "GitHub",
    description: "Open source libraries & examples",
    href: "https://github.com/sendexa",
    external: true,
  },
  {
    icon: <Server className="h-4 w-4" />,
    title: "API Status",
    description: "System health & incidents",
    href: "https://status.sendexa.co",
    badge: "All Systems Go",
    badgeColor: "bg-emerald-50 text-emerald-700 border border-emerald-100",
  },
];

export default function DevelopersDropdown() {
  return (
    <div className="w-[900px] rounded-xl border border-gray-200 bg-white p-6 shadow-2xl">
      <div className="grid grid-cols-3 gap-8">
        {/* Main Documentation Sections */}
        <div className="col-span-2 space-y-6">
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-500">
              Developer Resources
            </h3>
            <div className="grid grid-cols-3 gap-6">
              {developerResources.map((section) => (
                <div key={section.category} className="space-y-3">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="rounded-lg bg-gray-50 p-2">
                      <div className="text-gray-700">
                        {section.icon}
                      </div>
                    </div>
                    <h4 className="font-medium text-gray-900">{section.category}</h4>
                  </div>
                  <ul className="space-y-2">
                    {section.items.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="group flex items-center justify-between rounded-lg p-2 text-sm text-gray-600 hover:bg-gray-50"
                        >
                          <span className="group-hover:text-cyan-600">{item.name}</span>
                          {item.badge && (
                            <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${item.badgeColor}`}>
                              {item.badge}
                            </span>
                          )}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Demo */}
          <div className="rounded-lg bg-gradient-to-r from-gray-900 to-gray-800 p-5">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Terminal className="h-5 w-5 text-green-400" />
                  <span className="font-mono font-medium text-white">Try in Console</span>
                </div>
                <p className="text-sm text-gray-300">
                  Test our API directly in your browser
                </p>
              </div>
              <Link
                href="/playground"
                className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-green-700"
              >
                <PlayCircle className="h-4 w-4" />
                Open Playground
              </Link>
            </div>
          </div>
        </div>

        {/* Right column - Quick Links */}
        <div className="space-y-6">
          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-500">
              Quick Links
            </h3>
            <div className="space-y-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  className="group flex items-center gap-3 rounded-lg border border-gray-200 p-3 transition-all hover:border-cyan-200 hover:bg-gray-50"
                >
                  <div className="rounded-lg bg-gray-100 p-2 group-hover:bg-cyan-100">
                    <div className="text-gray-600 group-hover:text-cyan-600">
                      {link.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-gray-900 group-hover:text-cyan-600">{link.title}</span>
                      {link.badge && (
                        <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${link.badgeColor}`}>
                          {link.badge}
                        </span>
                      )}
                    </div>
                    <p className="mt-0.5 text-sm text-gray-500">{link.description}</p>
                  </div>
                  <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-cyan-600" />
                </Link>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="rounded-lg bg-cyan-50 border border-cyan-100 p-4">
            <div className="flex items-center gap-2 mb-2">
              <FileText className="h-5 w-5 text-cyan-600" />
              <span className="text-sm font-medium text-gray-900">Dev Newsletter</span>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              Get API updates & development tips
            </p>
            <Link
              href="/newsletter"
              className="inline-flex items-center text-sm font-medium text-cyan-600 hover:text-cyan-700"
            >
              Subscribe →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}