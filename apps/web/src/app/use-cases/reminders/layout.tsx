// app/use-cases/reminders/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Automated Reminders & Scheduling | Sendexa",
  description: "Automate appointment reminders, follow-ups, and scheduled notifications with 9 pre-built templates. Reduce no-shows and increase engagement.",
  keywords: ["reminders", "scheduling", "appointment reminders", "follow-up", "automated notifications", "calendar integration"],
};

export default function RemindersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}