// app/solutions/reseller/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reseller Solution | Sendexa",
  description: "White-label solutions for partners and agencies. Build your own branded communication platform with our reseller program.",
  keywords: ["reseller", "white-label", "agency", "partner program", "white-label messaging", "reseller platform", "agency solution"],
};

export default function ResellerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}