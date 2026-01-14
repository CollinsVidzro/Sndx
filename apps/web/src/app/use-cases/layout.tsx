// app/use-cases/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Use Cases | Sendexa - Communication Automation Solutions",
  description: "Explore Sendexa's communication automation use cases: Customer Engagement, Transactional Alerts, Marketing Campaigns, System Notifications, Authentication, and Reminders.",
  keywords: ["use cases", "communication automation", "customer engagement", "transactional alerts", "marketing campaigns", "system notifications"],
};

export default function UseCasesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}