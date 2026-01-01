"use client";

import { Users, Briefcase, Newspaper, Building2 } from "lucide-react";
import Link from "next/link";

const companyLinks = [
  {
    title: "Company",
    items: [
      { name: "Why Sendexa?", href: "/about", icon: Building2 },
      { name: "Leadership & Team", href: "/about/team", icon: Users },
      { name: "Join the Team", href: "/careers", icon: Briefcase },
      { name: "Blog", href: "/blog", icon: Newspaper },
    ],
  },
];

export default function CompanyDropdown() {
  return (
    <div className="w-[290px] rounded-xl border border-gray-200 bg-white p-6 shadow-xl">
      <div className="grid grid-cols-1 gap-6">
        {companyLinks.map((section) => (
          <div key={section.title}>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
              {section.title}
            </h3>

            <div className="space-y-2">
              {section.items.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group flex items-center gap-3 rounded-lg p-2.5 transition hover:bg-gray-50"
                >
                  <div className="rounded-md bg-gray-100 p-2 group-hover:bg-cyan-100">
                    <item.icon className="h-4 w-4 text-gray-600 group-hover:text-cyan-600" />
                  </div>

                  <span className="text-sm font-medium text-gray-700 group-hover:text-cyan-600">
                    {item.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
