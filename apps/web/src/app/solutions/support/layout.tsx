// app/solutions/support/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customer Support Solution | Sendexa",
  description: "Enhance support with automated responses and intelligent customer communication. Reduce ticket volume and improve customer satisfaction.",
  keywords: ["customer support", "help desk", "ticket management", "automated responses", "live chat", "support automation", "CSAT improvement"],
};

export default function SupportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}