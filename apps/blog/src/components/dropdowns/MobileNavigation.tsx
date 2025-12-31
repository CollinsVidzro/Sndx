"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  Globe,
  MessageSquare,
  Users,
  Briefcase,
  Award,
  X,
  Book,
  NotebookPen,
  Cpu,
  CodeXml,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Main navigation items (matching the header)
const navigation = [
  { name: "Insights & Stories", href: "/", icon: Book },
  { name: "Product Updates", href: "/", icon: MessageSquare },
  { name: "Success Stories", href: "/", icon: Award },
  { name: "Press & Media", href: "/", icon: Globe },
  { 
    name: "More on Sendexa", 
    href: "/company", 
    icon: Briefcase,
    subItems: [
      { name: "Developer Guides", href: "/", icon: CodeXml },
      { name: "Tech & Engineering", href: "/", icon: Cpu },
      { name: "Founder's Notes", href: "/", icon: NotebookPen },
      { name: "Life at Sendexa", href: "/", icon: Users },
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
              </div>
              <button
                onClick={onClose}
                className="rounded-lg p-2 hover:bg-gray-100"
              >
                <X className="h-6 w-6 text-gray-700" />
              </button>
            </div>

            {/* Navigation Content */}
            <div className="h-[calc(100vh-5rem)] overflow-y-auto bg-white pb-24">
              {/* Navigation Items */}
              <nav className="p-4">
                <ul className="space-y-1">
                  {navigation.map((item) => {
                    const hasSubItems = (item.subItems && item.subItems.length > 0) ?? false;
                    const isExpanded = expandedItem === item.name;

                    return (
                      <li key={item.name}>
                        {hasSubItems ? (
                          <button
                            onClick={() => handleItemClick(item.name, hasSubItems)}
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
                            <ChevronRight
                              className={`h-5 w-5 text-gray-400 transition-transform ${
                                isExpanded ? "rotate-90" : ""
                              }`}
                            />
                          </button>
                        ) : (
                          <Link
                            href={item.href}
                            onClick={onClose}
                            className="flex w-full items-center rounded-lg p-3 text-left hover:bg-gray-50"
                          >
                            <div className="flex items-center space-x-3">
                              <div className="rounded-lg bg-gray-100 p-2">
                                <item.icon className="h-5 w-5 text-gray-600" />
                              </div>
                              <span className="font-medium text-gray-900">
                                {item.name}
                              </span>
                            </div>
                          </Link>
                        )}

                        {/* Sub Items for "More on Sendexa" */}
                        <AnimatePresence>
                          {hasSubItems && isExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <ul className="ml-8 space-y-1 border-l border-gray-200 pl-4 pt-2">
                                {item.subItems!.map((subItem) => (
                                  <li key={subItem.name}>
                                    <Link
                                      href={subItem.href}
                                      // target={subItem.external ? "_blank" : undefined}
                                      onClick={handleSubItemClick}
                                      className="group flex items-center gap-3 rounded-lg p-2.5 hover:bg-gray-50"
                                    >
                                      <div className="rounded-md bg-gray-100 p-2 group-hover:bg-cyan-100">
                                        <subItem.icon className="h-4 w-4 text-gray-600 group-hover:text-cyan-600" />
                                      </div>
                                      <span className="text-sm font-medium text-gray-700 group-hover:text-cyan-600">
                                        {subItem.name}
                                      </span>
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
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}