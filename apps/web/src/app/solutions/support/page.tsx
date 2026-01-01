// app/solutions/support/page.tsx
"use client";

import SupportHero from "@/components/solutions/support/SupportHero";
import SupportFeatures from "@/components/solutions/support/SupportFeatures";
import SupportUseCases from "@/components/solutions/support/SupportUseCases";
import SupportIntegrations from "@/components/solutions/support/SupportIntegrations";
import SupportStats from "@/components/solutions/support/SupportStats";
import SupportCTA from "@/components/solutions/support/SupportCTA";

export default function SupportPage() {
  return (
    <main className="space-y-0">
      <SupportHero />
      <SupportStats />
      <SupportFeatures />
      <SupportUseCases />
      <SupportIntegrations />
      <SupportCTA />
    </main>
  );
}