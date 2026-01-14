// ExaBanner.tsx - Fixed version
'use client';

import { useState, useEffect } from 'react';
import { X, ExternalLink, Gift, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { announcements } from '@/data/info';
import { Announcement } from '@/types/announcement';

const colorConfig = {
  blue: {
    bg: 'bg-gradient-to-r from-blue-50 to-cyan-50',
    border: 'border-blue-200',
    text: 'text-blue-700',
    hover: 'hover:bg-blue-100',
    badge: 'bg-blue-100 text-blue-700',
  },
  green: {
    bg: 'bg-gradient-to-r from-emerald-50 to-green-50',
    border: 'border-emerald-200',
    text: 'text-emerald-700',
    hover: 'hover:bg-emerald-100',
    badge: 'bg-emerald-100 text-emerald-700',
  },
  orange: {
    bg: 'bg-gradient-to-r from-orange-50 to-amber-50',
    border: 'border-orange-200',
    text: 'text-orange-700',
    hover: 'hover:bg-orange-100',
    badge: 'bg-orange-100 text-orange-700',
  },
  purple: {
    bg: 'bg-gradient-to-r from-violet-50 to-purple-50',
    border: 'border-violet-200',
    text: 'text-violet-700',
    hover: 'hover:bg-violet-100',
    badge: 'bg-violet-100 text-violet-700',
  },
  gray: {
    bg: 'bg-gradient-to-r from-gray-50 to-slate-50',
    border: 'border-gray-200',
    text: 'text-gray-700',
    hover: 'hover:bg-gray-100',
    badge: 'bg-gray-100 text-gray-700',
  },
  red: {
    bg: 'bg-gradient-to-r from-red-50 to-rose-50',
    border: 'border-red-200',
    text: 'text-red-700',
    hover: 'hover:bg-red-100',
    badge: 'bg-red-100 text-red-700',
  },
};

const isChristmas = () => {
  const today = new Date();
  return today.getMonth() === 11 && today.getDate() === 25;
};

const isNewYear = () => {
  const today = new Date();
  return today.getMonth() === 0 && today.getDate() === 1;
}
const christmasAnnouncement: Announcement = {
  id: 'christmas-2025',
  title: '🎄 Merry Christmas from Sendexa!',
  description: 'Enjoy the holidays with your loved ones',
  href: '/blog/christmas-greetings',
  cta: 'Read our message',
  badge: 'Holiday',
  color: 'red',
  startDate: new Date('2025-12-24'),
  endDate: new Date('2025-12-26'),
  isActive: true,
};

//New Year announcement can be added similarly
const newYearAnnouncement: Announcement = {
  id: 'new-year-2026',
  title: '🎉 Happy New Year from Sendexa!',
  description: 'Kickstart your year with our latest updates',
  href: '/blog/new-year-2026-updates',
  cta: 'Discover more',
  badge: 'Announcement',
  color: 'green',
  startDate: new Date('2026-01-01'),
  endDate: new Date('2026-01-10'),
  isActive: true,
};

export default function ExaBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [items, setItems] = useState<Announcement[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const now = new Date();
    let active = announcements.filter((a) => {
      if (!a.isActive) return false;
      if (a.startDate > now) return false;
      if (a.endDate && a.endDate < now) return false;
      return true;
    });

    if (isChristmas()) {
      active = [christmasAnnouncement, ...active];
    }
    // Future seasonal announcements can be added similarly
    if (isNewYear()) {
      active = [newYearAnnouncement, ...active];
    }

    
    setItems(active);
    setIsLoading(false);
    
    if (active.length === 0) {
      setIsVisible(false);
    }
  }, []);

  // Auto rotate (optional but 🔥)
  useEffect(() => {
    if (items.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % items.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [items.length]);

  useEffect(() => {
    const dismissed = localStorage.getItem('bannerDismissed');
    if (dismissed) {
      const hours =
        (Date.now() - new Date(dismissed).getTime()) / (1000 * 60 * 60);
      if (hours < 24) setIsVisible(false);
      else localStorage.removeItem('bannerDismissed');
    }
  }, []);

  // Add loading state check
  if (isLoading) {
    return null;
  }

  // Add safety check for items array
  if (!isVisible || items.length === 0) return null;

  // Get current announcement with safety check
  const current = items[currentIndex];
  
  // Add null check for current
  if (!current) return null;

  const color = colorConfig[current.color];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className={`relative border-b ${color.border} ${color.bg}`}
      >
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-center">
            {/* Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.98 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="flex flex-col items-center gap-2 text-center sm:flex-row sm:gap-3"
              >
                {current.badge && (
                  <motion.span
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${color.badge}`}
                  >
                    {current.badge}
                    {current.id === 'christmas-2025' && (
                      <Sparkles className="ml-1 inline h-3 w-3" />
                    )}
                  </motion.span>
                )}

                <p className="text-sm font-medium">
                  <span className={color.text}>{current.title}</span>
                  {current.description && (
                    <span className="block text-gray-600 sm:ml-2 sm:inline">
                      {current.description}
                    </span>
                  )}
                </p>

                {current.href && current.cta && (
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                    <Link
                      href={current.href}
                      className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold ${color.text} ${color.hover}`}
                    >
                      {current.cta}
                      {current.id === 'christmas-2025' ? (
                        <Gift className="h-3 w-3" />
                      ) : (
                        <ExternalLink className="h-3 w-3" />
                      )}
                    </Link>
                  </motion.div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Dismiss */}
            <button
              onClick={() => {
                setIsVisible(false);
                localStorage.setItem(
                  'bannerDismissed',
                  new Date().toISOString()
                );
              }}
              className="absolute right-0 rounded-full p-1 hover:bg-gray-200"
              aria-label="Dismiss"
            >
              <X className="h-4 w-4 text-gray-500" />
            </button>

            {/* Navigation dots for multiple announcements */}
            {/* {items.length > 1 && (
              <div className="absolute left-0 flex items-center gap-1">
                {items.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 w-2 rounded-full transition-all ${
                      index === currentIndex 
                        ? 'bg-current opacity-100' 
                        : 'bg-gray-300 opacity-50 hover:opacity-75'
                    }`}
                    aria-label={`Go to announcement ${index + 1}`}
                  />
                ))}
              </div>
            )} */}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}