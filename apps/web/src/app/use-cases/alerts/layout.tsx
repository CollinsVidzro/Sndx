// app/use-cases/alerts/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Transactional Alerts & Notifications | Sendexa",
  description: "Automate secure, real-time transactional alerts for payments, orders, security, and more. 99.9% delivery rate with enterprise-grade reliability.",
  keywords: ["transactional alerts", "notifications", "real-time alerts", "payment notifications", "security alerts", "order updates"],
};

export default function AlertsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}