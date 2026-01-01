// app/solutions/ecommerce/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "E-commerce Solution | Sendexa",
  description: "Boost sales with automated customer communication for e-commerce businesses. Drive conversions, reduce cart abandonment, and enhance customer experience.",
  keywords: ["e-commerce", "cart recovery", "order notifications", "automated messaging", "customer communication"],
};

export default function EcommerceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}