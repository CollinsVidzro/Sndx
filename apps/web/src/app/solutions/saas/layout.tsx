// app/solutions/saas/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SaaS Solution | Sendexa",
  description: "Engage users throughout their journey with automated communication for SaaS businesses. Drive activation, adoption, and retention.",
  keywords: ["saas", "user engagement", "customer lifecycle", "user onboarding", "retention", "feature adoption"],
};

export default function SaasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}