// "use client";

// app/product/messaging/page.tsx
import type { Metadata } from "next";
import MessagingHero from "@/components/product/messaging/MessagingHero";
import MessagingFeatures from "@/components/product/messaging/MessagingFeatures";
import MessagingChannels from "@/components/product/messaging/MessagingChannels";
import MessagingExamples from "@/components/product/messaging/MessagingExamples";
import MessagingIntegrations from "@/components/product/messaging/MessagingIntegrations";
import MessagingCTASection from "@/components/product/messaging/MessagingCTASection";

export const metadata: Metadata = {
  title: "Direct SMS Infrastructure | Sendexa Tier-1 API",
  description:
    "Direct-to-carrier SMS tunnels for mission-critical notifications. SOC2 compliant and optimized for African MNOs.",
};

export default function MessagingPage() {
  return (
    <main className="space-y-0">
      <MessagingHero />
      <MessagingFeatures />
      <MessagingChannels />
      <MessagingExamples />
      <MessagingIntegrations />
      <MessagingCTASection />
    </main>
  );
}
