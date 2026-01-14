// app/use-cases/marketing/page.tsx
"use client";

import MarketingHero from "@/components/use-cases/marketing/MarketingHero";
import MarketingStats from "@/components/use-cases/marketing/MarketingStats";
import MarketingTemplates from "@/components/use-cases/marketing/MarketingTemplates";
import MarketingChannels from "@/components/use-cases/marketing/MarketingChannels";
import MarketingAutomation from "@/components/use-cases/marketing/MarketingAutomation";
import MarketingCTA from "@/components/use-cases/marketing/MarketingCTA";

export default function MarketingPage() {
  return (
    <main className="space-y-0">
      <MarketingHero />
      <MarketingStats />
      <MarketingTemplates />
      <MarketingChannels />
      <MarketingAutomation />
      <MarketingCTA />
    </main>
  );
}