"use client";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  Product: [
    { name: "Messaging API", href: "/product/api" },
    { name: "Email Service", href: "/product/email" },
    { name: "Voice API", href: "/product/voice" },
    { name: "Chat API", href: "/product/chat" },
    { name: "2FA & OTP", href: "/product/otp" },
  ],
  Solutions: [
    { name: "E-commerce", href: "/solutions/ecommerce" },
    { name: "SaaS Platforms", href: "/solutions/saas" },
    { name: "Financial Services", href: "/solutions/finance" },
    { name: "Healthcare", href: "/solutions/healthcare" },
    { name: "Customer Support", href: "/solutions/support" },
  ],

  Resources: [
    { name: "Help Center", href: "/help" },
    { name: "Community", href: "/community" },
    { name: "Partners", href: "/partners" },
    { name: "Guides", href: "/guides" },
    { name: "Developers Hub", href: "/developers" },
  ],
  Company: [
    { name: "About", href: "/about" },
    { name: "Blog", href: "https://blog.sendexa.co" },
    { name: "Careers", href: "/careers" },
    { name: "Contact Sales", href: "/contact" },
    { name: "Security", href: "/security" },
  ],
};

const socialLinks = [
  {
    icon: FaInstagram,
    href: "https://instagram.com/sendexa",
    label: "Instagram",
    className:
      "hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600",
  },
  {
    icon: FaXTwitter,
    href: "https://twitter.com/sendexaHQ",
    label: "Twitter/X",
    className: "hover:bg-gray-800",
  },
  {
    icon: FaLinkedin,
    href: "https://linkedin.com/company/sendexa",
    label: "LinkedIn",
    className: "hover:bg-blue-700",
  },
  {
    icon: FaFacebook,
    href: "https://facebook.com/sendexa",
    label: "Facebook",
    className: "hover:bg-blue-600",
  },
  {
    icon: FaGithub,
    href: "https://github.com/sendexa",
    label: "GitHub",
    className: "hover:bg-gray-800",
  },
];

export default function ExaFooter() {
  return (
    <motion.footer
      className="relative bg-gradient-to-br from-gray-950 via-gray-900 to-black border-t border-gray-800/30"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/5 via-transparent to-transparent" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)] opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Logo and description - 3 columns */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-3 group">
                <div className="relative">
                  <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl blur-lg group-hover:opacity-100 opacity-0 transition-all duration-300" />
                  <Image
                    src="https://cdn.sendexa.co/logos/exaweb.png"
                    alt="Sendexa Logo"
                    width={140}
                    height={35}
                    className="relative object-contain"
                  />
                </div>
              </Link>
            </div>

            <p className="text-gray-400 text-base max-w-md leading-relaxed">
              Sendexa is a modern communication platform built to power seamless
              messaging, OTP, email, and voice solutions. Our mission is to help
              businesses connect, verify, and engage their customers with speed,
              reliability, and ease.
            </p>

            {/* Social links */}
            <div className="pt-1">
              <p className="text-sm font-medium text-gray-300 mb-4">
                Follow us
              </p>
              <div className="flex flex-wrap gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="relative group"
                    aria-label={social.label}
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div
                      className={`relative rounded-lg p-3 bg-gray-900/50 backdrop-blur-sm border border-gray-800 group-hover:border-gray-700 transition-all duration-300 ${social.className}`}
                    >
                      <social.icon className="h-4 w-4 text-gray-300 group-hover:text-white" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Footer links - 4 columns */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <div key={category} className="space-y-5">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300">
                {category}
              </h3>

              {/* Subtle vertical divider for non-first columns */}
              {index > 0 && (
                <div className="hidden lg:block">
                  <div className="h-px w-8 bg-gradient-to-r from-transparent via-gray-800 to-transparent mb-4" />
                </div>
              )}

              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="group flex items-center text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      <span className="relative">
                        {link.name}
                        <span className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300" />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Elegant Divider */}
        <div className="relative my-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-800/50"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="px-4 bg-gray-950 text-gray-500 text-xs font-medium uppercase tracking-wider">
              Trusted Worldwide
            </span>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Copyright */}
          <div className="order-2 lg:order-1">
            <div className="text-sm text-gray-500">
              © {new Date().getFullYear()} Sendexa Technologies, LLC.
            </div>
          </div>

          {/* Legal links with subtle dividers */}
          <div className="order-1 lg:order-2 flex flex-wrap items-center justify-center gap-6">
            <Link
              href="/privacy"
              className="text-gray-400 hover:text-white transition-colors text-sm hover:underline underline-offset-2"
            >
              Privacy Policy
            </Link>
            <div className="h-4 w-px bg-gray-800" />
            <Link
              href="/terms"
              className="text-gray-400 hover:text-white transition-colors text-sm hover:underline underline-offset-2"
            >
              Terms of Service
            </Link>
            <div className="h-4 w-px bg-gray-800" />
            <Link
              href="/cookies"
              className="text-gray-400 hover:text-white transition-colors text-sm hover:underline underline-offset-2"
            >
              Cookie Policy
            </Link>
            <div className="h-4 w-px bg-gray-800" />
            <Link
              href="/gdpr"
              className="text-gray-400 hover:text-white transition-colors text-sm hover:underline underline-offset-2"
            >
              GDPR
            </Link>
          </div>

          {/* System status */}
          <div className="order-3">
            <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-lg bg-gray-900/50 backdrop-blur-sm border border-emerald-500/20 shadow-lg">
              <div className="relative">
                <div className="absolute inset-0 animate-ping rounded-full bg-emerald-500/40" />
                <div className="relative h-2 w-2 rounded-full bg-emerald-500" />
              </div>
              <span className="text-sm font-medium text-emerald-400">
                All systems operational
              </span>
            </div>
          </div>
        </div>

        {/* Trust badges with professional dividers */}
        {/* <div className="mt-10 pt-8 border-t border-gray-800/30">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
            <div className="flex items-center gap-3 group">
              <div className="h-7 w-7 rounded-full bg-gradient-to-br from-cyan-500/10 to-blue-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-xs font-bold text-cyan-400">ISO</span>
              </div>
              <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">ISO 27001</span>
            </div>
            
            <div className="hidden md:block h-6 w-px bg-gradient-to-b from-transparent via-gray-800 to-transparent" />
            
            <div className="flex items-center gap-3 group">
              <div className="h-7 w-7 rounded-full bg-gradient-to-br from-emerald-500/10 to-green-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-xs font-bold text-emerald-400">GDPR</span>
              </div>
              <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">GDPR Compliant</span>
            </div>
            
            <div className="hidden md:block h-6 w-px bg-gradient-to-b from-transparent via-gray-800 to-transparent" />
            
            <div className="flex items-center gap-3 group">
              <div className="h-7 w-7 rounded-full bg-gradient-to-br from-purple-500/10 to-pink-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-xs font-bold text-purple-400">SOC2</span>
              </div>
              <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">SOC2 Type II</span>
            </div>
            
            <div className="hidden md:block h-6 w-px bg-gradient-to-b from-transparent via-gray-800 to-transparent" />
            
            <div className="flex items-center gap-3 group">
              <div className="h-7 w-7 rounded-full bg-gradient-to-br from-orange-500/10 to-red-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-xs font-bold text-orange-400">99.9%</span>
              </div>
              <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">Uptime SLA</span>
            </div>
          </div>
        </div> */}
      </div>
    </motion.footer>
  );
}
