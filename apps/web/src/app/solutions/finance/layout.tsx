// app/solutions/finance/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Finance Solution | Sendexa",
  description: "Secure and timely financial notifications for banks, fintechs, and financial services. Bank-grade security and compliance.",
  keywords: ["finance", "banking", "fintech", "security", "compliance", "payment notifications", "OTP", "fraud prevention"],
};

export default function FinanceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}