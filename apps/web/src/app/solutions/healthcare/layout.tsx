// app/solutions/healthcare/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Healthcare Solution | Sendexa",
  description: "Improve patient care with reliable, HIPAA-compliant communication for healthcare providers. Enhance engagement and streamline clinical workflows.",
  keywords: ["healthcare", "HIPAA", "patient communication", "appointment reminders", "medication adherence", "EHR integration", "healthcare compliance"],
};

export default function HealthcareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}