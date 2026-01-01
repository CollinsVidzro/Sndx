"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  Home,
  Package,
  Puzzle,
  Code,
  CreditCard,
  Building,
  Globe,
  MessageSquare,
  Mail,
  Shield,
  Bell,
  ShoppingCart,
  Heart,
  TrendingUp,
  Book,
  Terminal,
  GitBranch,
  Users,
  Briefcase,
  Award,
  X,
  Webhook,
  Clock,
  Key,
  UsersIcon,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const navigation = [
  {
    name: "Home",
    href: "/",
    icon: Home,
  },
  {
    name: "Product",
    href: "/product",
    icon: Package,
    subItems: [
      {
        name: "Messaging API",
        href: "/product/messaging",
        icon: MessageSquare,
        badge: "Popular",
      },
      {
        name: "Email Service",
        href: "/product/email",
        icon: Mail,
        badge: "Beta",
      },
      {
        name: "2FA & OTP Service",
        href: "/product/otp",
        icon: Shield,
        badge: "New",
      },
      {
        name: "Payment Service",
        href: "/product/payment",
        icon: CreditCard,
        badge: "Soon",
      },
    ],
  },
 {
  name: "Solutions",
  href: "/solutions",
  icon: Puzzle,
  subItems: [
    // Industry Solutions (Desktop cards)
    { name: "E-commerce", href: "/solutions/ecommerce", icon: ShoppingCart },
    { name: "SaaS", href: "/solutions/saas", icon: Building },
    { name: "Finance", href: "/solutions/finance", icon: CreditCard },
    { name: "Healthcare", href: "/solutions/healthcare", icon: Heart },
    { name: "Customer Support", href: "/solutions/support", icon: MessageSquare },
    { name: "Reseller", href: "/solutions/reseller", icon: UsersIcon },

    // Use Cases (Desktop list)
    {
      name: "Customer Engagement",
      href: "/use-cases/engagement",
      icon: Users,
    },
    {
      name: "Transactional Alerts",
      href: "/use-cases/alerts",
      icon: Bell,
    },
    {
      name: "Marketing Campaigns",
      href: "/use-cases/marketing",
      icon: TrendingUp,
    },
    {
      name: "System Notifications",
      href: "/use-cases/notifications",
      icon: Shield,
    },
    {
      name: "Authentication & OTP",
      href: "/use-cases/authentication",
      icon: Key,
    },
    {
      name: "Reminders & Scheduling",
      href: "/use-cases/reminders",
      icon: Clock,
    },
  ],
}
,
  {
    name: "Developers",
    href: "/developers",
    icon: Code,
    subItems: [
      {
        name: "API Reference",
        href: "/docs/api",
        icon: Book,
        badge: "Updated",
      },
      { name: "SDKs & Libraries", href: "/sdks", icon: Code },
      { name: "CLI Tool", href: "/tools/cli", icon: Terminal },
      {
        name: "GitHub",
        href: "https://github.com/sendexa",
        icon: GitBranch,
        external: true,
      },
      { name: "Webhooks", href: "/docs/webhooks", icon: Webhook },
      { name: "Playground", href: "/playground", icon: Terminal },
    ],
  },
  {
    name: "Pricing",
    href: "/pricing",
    icon: CreditCard,
  },
  {
    name: "Company",
    href: "/company",
    icon: Building,
    subItems: [
      { name: "Our Story", href: "/about", icon: Users },
      { name: "Leadership", href: "/about/team", icon: Users },
      { name: "Careers", href: "/careers", icon: Briefcase, badge: "15 Roles" },
      { name: "Press & Media", href: "/press", icon: Award },
      { name: "Contact Sales", href: "/contact/sales", icon: MessageSquare },
      { name: "Support", href: "/support", icon: Shield },
    ],
  },
];

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileNavigation({
  isOpen,
  onClose,
}: MobileNavigationProps) {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const handleItemClick = (itemName: string, hasSubItems: boolean) => {
    if (hasSubItems) {
      setExpandedItem(expandedItem === itemName ? null : itemName);
    } else {
      onClose();
    }
  };

  const handleSubItemClick = () => {
    onClose();
    setExpandedItem(null);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Navigation Panel */}
          <motion.div
            key="panel"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 z-[60] w-full max-w-sm bg-white shadow-2xl lg:hidden"
          >
            {/* Header */}
            <div className="flex h-20 items-center justify-between border-b border-gray-100 px-6">
              <div className="flex items-center space-x-3">
                {/* using sendexa logo from https://cdn.sendexa.co/logos/exaweb.png */}
                <div className="flex items-center">
                  <Link href="/" className="flex items-center space-x-2">
                    <Image
                      src="https://cdn.sendexa.co/logos/exaweb.png"
                      alt="Sendexa Logo"
                      width={120}
                      height={30}
                      className="object-contain"
                    />
                  </Link>
                </div>
              </div>
              <button
                onClick={onClose}
                className="rounded-lg p-2 hover:bg-gray-100"
              >
                <X className="h-6 w-6 text-gray-700" />
              </button>
            </div>

            {/* Navigation Content  */}
            <div className="h-[calc(100vh-5rem)] bg-white backdrop-blur-md overflow-y-auto pb-24">
              {/* Navigation Items */}
              <nav className="p-4">
                <ul className="space-y-1">
                  {navigation.map((item) => {
                    const hasSubItems =
                      (item.subItems && item.subItems.length > 0) ?? false;
                    const isExpanded = expandedItem === item.name;

                    return (
                      <li key={item.name}>
                        <button
                          onClick={() =>
                            handleItemClick(item.name, hasSubItems)
                          }
                          className="flex w-full items-center justify-between rounded-lg p-3 text-left hover:bg-gray-50"
                        >
                          <div className="flex items-center space-x-3">
                            <div className="rounded-lg bg-gray-100 p-2">
                              <item.icon className="h-5 w-5 text-gray-600" />
                            </div>
                            <span className="font-medium text-gray-900">
                              {item.name}
                            </span>
                          </div>
                          {hasSubItems && (
                            <ChevronRight
                              className={`h-5 w-5 text-gray-400 transition-transform ${
                                isExpanded ? "rotate-90" : ""
                              }`}
                            />
                          )}
                        </button>

                        {/* Sub Items */}
                        <AnimatePresence>
                          {hasSubItems && isExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <ul className="ml-8 space-y-1 border-l border-gray-200 pl-4">
                                {item.subItems!.map((subItem) => (
                                  <li key={subItem.name}>
                                    <Link
                                      href={subItem.href}
                                      target={
                                        subItem.external ? "_blank" : undefined
                                      }
                                      onClick={handleSubItemClick}
                                      className="flex items-center justify-between rounded-lg p-2.5 hover:bg-gray-50"
                                    >
                                      <div className="flex items-center space-x-3">
                                        <div className="rounded-lg bg-gray-100 p-1.5">
                                          <subItem.icon className="h-4 w-4 text-gray-500" />
                                        </div>
                                        <span className="text-sm text-gray-700">
                                          {subItem.name}
                                        </span>
                                      </div>
                                      {subItem.badge && (
                                        <span className="rounded-full bg-cyan-100 px-2 py-0.5 text-xs font-medium text-cyan-700">
                                          {subItem.badge}
                                        </span>
                                      )}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              {/* Quick Links */}
              <div className="border-t border-gray-100 p-6">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-500">
                  Quick Links
                </h3>
                <div className="space-y-2">
                  {[
                    { name: "API Status", href: "/status", icon: Globe },
                    { name: "Documentation", href: "/docs", icon: Book },
                    {
                      name: "Customer Stories",
                      href: "/customers",
                      icon: Users,
                    },
                    { name: "Help Center", href: "/support", icon: Shield },
                  ].map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={onClose}
                      className="flex items-center space-x-3 rounded-lg p-3 hover:bg-gray-50"
                    >
                      <div className="rounded-lg bg-gray-100 p-1.5">
                        <link.icon className="h-4 w-4 text-gray-500" />
                      </div>
                      <span className="text-sm font-medium text-gray-700">
                        {link.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* User Actions */}
              <div className="border-b border-gray-100 p-6">
                <div className="space-y-3">
                  <Link
                    href="/signin"
                    onClick={onClose}
                    className="flex w-full items-center justify-center rounded-lg border border-gray-300 px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-50"
                  >
                    Sign in
                  </Link>
                  <Link
                    href="/signup"
                    onClick={onClose}
                    className="flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-3 text-base font-semibold text-white hover:shadow-md"
                  >
                    Sign up
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
