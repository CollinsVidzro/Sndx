"use client";
import { motion } from "framer-motion";
import { Twitter, Github, Linkedin, MessageCircle, Globe } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  Product: [
    { name: "Messaging API", href: "/product/api" },
    { name: "Email Service", href: "/product/email" },
    { name: "SMS Gateway", href: "/product/sms" },
    { name: "Push Notifications", href: "/product/push" },
    { name: "Pricing", href: "/pricing" },
  ],
  Solutions: [
    { name: "E-commerce", href: "/solutions/ecommerce" },
    { name: "SaaS Platforms", href: "/solutions/saas" },
    { name: "Marketplaces", href: "/solutions/marketplaces" },
    { name: "Financial Services", href: "/solutions/finance" },
  ],
  Developers: [
    { name: "Documentation", href: "/docs" },
    { name: "API Reference", href: "/docs/api" },
    { name: "Libraries & SDKs", href: "/docs/sdks" },
    { name: "Guides", href: "/guides" },
    { name: "API Status", href: "/status" },
  ],
  Company: [
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
    { name: "Security", href: "/security" },
  ],
};

const socialLinks = [
  { icon: Twitter, href: "https://twitter.com/sendexa", label: "Twitter" },
  { icon: Github, href: "https://github.com/sendexa", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://linkedin.com/company/sendexa",
    label: "LinkedIn",
  },
  { icon: MessageCircle, href: "https://discord.gg/sendexa", label: "Discord" },
];

export default function ExaFooter() {
  return (
    <motion.footer
      className="border-t border-gray-100 bg-gradient-to-b from-white to-gray-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main footer content - 5 columns in one row on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Logo and description */}
          <div className="sm:col-span-2 lg:col-span-2">
            {/* using sendexa logo from https://cdn.sendexa.co/logos/exaweb.png */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <Image
                  src="https://cdn.sendexa.co/logos/exaweb.png"
                  alt="Sendexa Logo"
                  width={150}
                  height={40}
                  className="object-contain"
                />
              </Link>
            </div>
            <p className="mt-4 max-w-md text-gray-600">
              Enterprise-grade messaging infrastructure trusted by thousands of
              companies worldwide to deliver billions of messages.
            </p>

            {/* Social links */}
            <div className="mt-6 flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="rounded-lg border border-gray-200 p-2 text-gray-600 hover:border-cyan-500 hover:text-cyan-600"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer links - remaining 3 columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
                {category}
              </h3>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-cyan-600"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col items-center justify-between border-t border-gray-100 pt-8 md:flex-row">
          <div className="flex items-center space-x-6 text-sm text-gray-600">
            <span>
              © {new Date().getFullYear()} Sendexa. All rights reserved.
            </span>
          </div>
          <div className="mt-4 flex items-center space-x-4 md:mt-0">
            <div className="flex items-center space-x-2">
              <Link href="/privacy" className="hover:text-cyan-600 p-2">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-cyan-600 p-2">
                Terms
              </Link>
              <Link href="/cookies" className="hover:text-cyan-600 p-2">
                Cookies
              </Link>
            </div>
          </div>

          <div className="mt-4 flex items-center space-x-4 md:mt-0">
            <div className="flex items-center space-x-2">
              <div className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
              <span className="text-sm text-gray-600">
                All systems operational
              </span>
            </div>
            <Globe className="h-5 w-5 text-gray-400" />
          </div>
        </div>
      </div>
    </motion.footer>
  );
}