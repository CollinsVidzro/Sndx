// app/use-cases/marketing/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marketing Campaign Automation | Sendexa",
  description: "Create, automate, and optimize multi-channel marketing campaigns with 15 pre-built templates. Drive engagement, conversions, and ROI.",
  keywords: ["marketing campaigns", "email marketing", "SMS marketing", "automated campaigns", "marketing automation", "campaign templates"],
};

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}