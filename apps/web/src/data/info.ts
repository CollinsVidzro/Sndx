import { Announcement } from '@/types/announcement';

export const announcements: Announcement[] = [
  // Sendexa Pre-Seed Fundraising
  {
    id: 'sendexa-preseed-2026',
    title: 'Pre-Seed Fundraising Round',
    description:
      'Sendexa is raising a pre-seed round to build reliable SMS, OTP, and voice infrastructure for businesses in Ghana.',
    href: '/fundraising/pre-seed',
    cta: 'View Pitch Deck',
    badge: 'Fundraising',
    color: 'blue',
    startDate: new Date('2026-01-01'),
    endDate: new Date('2026-12-31'),
    isActive: true,
  },

  // Sendexa Mobile App Launch
  // {
  //   id: 'sendexa-mobile-app',
  //   title: 'Sendexa Mobile App Launching Q1 2026',
  //   description:
  //     'Manage your messaging, credits, and reports on the go with the Sendexa mobile app.',
  //   href: '/mobile-app',
  //   cta: 'Join Waitlist',
  //   badge: 'Coming Soon',
  //   color: 'green',
  //   startDate: new Date('2026-01-01'),
  //   endDate: new Date('2027-01-15'),
  //   isActive: true,
  // },
];
