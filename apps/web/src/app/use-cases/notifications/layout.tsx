// app/use-cases/notifications/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "System Notifications & Alerts",
  description: "Automate system notifications, alerts, and status updates with 6 pre-built templates. Reliable, scalable, and enterprise-ready.",
  keywords: ["system notifications", "alerts", "status updates", "monitoring alerts", "system alerts", "maintenance notifications"],
};

export default function NotificationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}