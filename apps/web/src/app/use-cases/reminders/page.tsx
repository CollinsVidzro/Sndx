// app/use-cases/reminders/page.tsx
"use client";

import RemindersHero from "@/components/use-cases/reminders/RemindersHero";
import RemindersStats from "@/components/use-cases/reminders/RemindersStats";
import RemindersTemplates from "@/components/use-cases/reminders/RemindersTemplates";
import RemindersFeatures from "@/components/use-cases/reminders/RemindersFeatures";
import RemindersAutomation from "@/components/use-cases/reminders/RemindersAutomation";
import RemindersCTA from "@/components/use-cases/reminders/RemindersCTA";

export default function RemindersPage() {
  return (
    <main className="space-y-0">
      <RemindersHero />
      <RemindersStats />
      <RemindersTemplates />
      <RemindersFeatures />
      <RemindersAutomation />
      <RemindersCTA />
    </main>
  );
}