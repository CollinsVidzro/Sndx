"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, ChevronDown, Globe } from "lucide-react";
import Link from "next/link";
import ProductDropdown from "@/components/dropdowns/ProductDropdown";
import SolutionsDropdown from "@/components/dropdowns/SolutionsDropdown";
import DevelopersDropdown from "@/components/dropdowns/DevelopersDropdown";
import CompanyDropdown from "@/components/dropdowns/CompanyDropdown";
import MobileNavigation from "@/components/dropdowns/MobileNavigation";
import Image from "next/image";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Product", href: "/product", hasDropdown: true, id: "product" },
  { name: "Solutions", href: "/solutions", hasDropdown: true, id: "solutions" },
  { name: "Developers", href: "/developers", hasDropdown: true, id: "developers" },
  { name: "Pricing", href: "/pricing" },
  { name: "Company", href: "/company", hasDropdown: true, id: "company" },
];

export default function ExaHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [prevDropdown, setPrevDropdown] = useState<string | null>(null);
  const [isHovering, setIsHovering] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);

  // Handle hover with delay for better UX
  const handleMouseEnter = (id: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setPrevDropdown(activeDropdown);
      setActiveDropdown(id);
      setIsHovering(true);
    }, 150);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      if (!dropdownRef.current?.matches(':hover')) {
        setActiveDropdown(null);
        setIsHovering(false);
      }
    }, 200);
  };

  // Handle dropdown mouse enter
  const handleDropdownMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const handleDropdownMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
      setIsHovering(false);
    }, 150);
  };

  // Add this to see if the state is changing
useEffect(() => {
  console.log("Mobile menu is:", mobileMenuOpen);
}, [mobileMenuOpen]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const renderDropdown = () => {
    const direction = getSlideDirection(prevDropdown, activeDropdown);

    const dropdownComponents = {
      product: <ProductDropdown />,
      solutions: <SolutionsDropdown />,
      developers: <DevelopersDropdown />,
      company: <CompanyDropdown />,
    };

    return (
      <motion.div
        key={activeDropdown}
        initial={{ opacity: 0, x: direction === "left" ? 50 : -50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: direction === "left" ? -50 : 50 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className="absolute left-1/2 top-full mt-2 -translate-x-1/2"
        onMouseEnter={handleDropdownMouseEnter}
        onMouseLeave={handleDropdownMouseLeave}
      >
        {dropdownComponents[activeDropdown as keyof typeof dropdownComponents]}
      </motion.div>
    );
  };

  // Determine slide direction based on navigation order
  const getSlideDirection = (prev: string | null, current: string | null) => {
    if (!prev || !current) return "right";
    
    const prevIndex = navigation.findIndex(nav => nav.id === prev);
    const currentIndex = navigation.findIndex(nav => nav.id === current);
    
    return currentIndex > prevIndex ? "right" : "left";
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/90 backdrop-blur-md">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
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

          {/* Desktop Navigation */}
          <div 
            className="hidden items-center space-x-1 lg:flex" 
            ref={dropdownRef}
            onMouseLeave={handleMouseLeave}
          >
            {navigation.map((item) => (
              <div 
                key={item.name} 
                className="relative"
                onMouseEnter={() => item.hasDropdown && handleMouseEnter(item.id!)}
              >
                {item.hasDropdown ? (
                  <button className="group flex items-center px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:text-cyan-600">
                    {item.name}
                    <ChevronDown
                      className={`ml-1 h-4 w-4 transition-transform ${
                        activeDropdown === item.id ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:text-cyan-600"
                  >
                    {item.name}
                  </Link>
                )}

                {/* Active indicator */}
                {/* {activeDropdown === item.id && (
                  <div className="absolute bottom-0 left-1/2 h-0.5 w-8 -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600" />
                )} */}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden items-center space-x-4 lg:flex">
            <Link
              href="/signin"
              className="rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-700 transition-all hover:border-cyan-500 hover:text-cyan-600 hover:shadow-sm"
            >
              Sign in
            </Link>
            <Link
              href="/signup"
              className="rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:shadow-md hover:shadow-cyan-500/20"
            >
              Sign up
            </Link>
            <button className="rounded-lg border border-gray-200 p-2 hover:bg-gray-50">
              <Globe className="h-5 w-5 text-gray-600" />
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="h-6 w-6 text-gray-700" />
          </button>
        </div>

        {/* Dropdown Container */}
        <AnimatePresence mode="wait">
          {activeDropdown && isHovering && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.15 }}
              className="absolute left-0 right-0 top-full z-50 hidden lg:block"
              onMouseEnter={handleDropdownMouseEnter}
              onMouseLeave={handleDropdownMouseLeave}
            >
              {renderDropdown()}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Mobile Navigation */}
      <MobileNavigation 
        isOpen={mobileMenuOpen} 
        onClose={() => setMobileMenuOpen(false)} 
      />

     
    </header>
  );
}