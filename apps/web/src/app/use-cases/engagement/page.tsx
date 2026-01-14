// app/use-cases/engagement/page.tsx
"use client";

import EngagementHero from "@/components/use-cases/engagement/EngagementHero";
import EngagementStats from "@/components/use-cases/engagement/EngagementStats";
import EngagementTemplates from "@/components/use-cases/engagement/EngagementTemplates";
import EngagementFlows from "@/components/use-cases/engagement/EngagementFlows";
import EngagementBenefits from "@/components/use-cases/engagement/EngagementBenefits";
import EngagementCTA from "@/components/use-cases/engagement/EngagementCTA";

export default function EngagementPage() {
  return (
    <main className="space-y-0">
      <EngagementHero />
      <EngagementStats />
      <EngagementTemplates />
      <EngagementFlows />
      <EngagementBenefits />
      <EngagementCTA />
    </main>
  );
}