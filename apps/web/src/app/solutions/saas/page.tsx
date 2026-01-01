// app/solutions/saas/page.tsx
"use client";

import SaasHero from "@/components/solutions/saas/SaasHero";
import SaasFeatures from "@/components/solutions/saas/SaasFeatures";
import SaasUseCases from "@/components/solutions/saas/SaasUseCases";
import SaasIntegrations from "@/components/solutions/saas/SaasIntegrations";
import SaasStats from "@/components/solutions/saas/SaasStats";
import SaasCTA from "@/components/solutions/saas/SaasCTA";

export default function SaasPage() {
  return (
    <main className="space-y-0">
      <SaasHero />
      <SaasStats />
      <SaasFeatures />
      <SaasUseCases />
      <SaasIntegrations />
      <SaasCTA />
    </main>
  );
}