// app/use-cases/engagement/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customer Engagement Automation | Sendexa",
  description: "Automate customer engagement across multiple channels. Increase retention, boost loyalty, and drive growth with personalized communication.",
  keywords: ["customer engagement", "retention", "automation", "personalization", "customer journey"],
};

export default function EngagementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}