// app/use-cases/notifications/page.tsx
"use client";

import NotificationsHero from "@/components/use-cases/notifications/NotificationsHero";
import NotificationsStats from "@/components/use-cases/notifications/NotificationsStats";
import NotificationsTemplates from "@/components/use-cases/notifications/NotificationsTemplates";
import NotificationsReliability from "@/components/use-cases/notifications/NotificationsReliability";
import NotificationsManagement from "@/components/use-cases/notifications/NotificationsManagement";
import NotificationsCTA from "@/components/use-cases/notifications/NotificationsCTA";

export default function NotificationsPage() {
  return (
    <main className="space-y-0">
      <NotificationsHero />
      <NotificationsStats />
      <NotificationsTemplates />
      <NotificationsReliability />
      <NotificationsManagement />
      <NotificationsCTA />
    </main>
  );
}