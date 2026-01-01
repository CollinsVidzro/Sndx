// app/solutions/reseller/page.tsx
"use client";

import ResellerHero from "@/components/solutions/reseller/ResellerHero";
import ResellerFeatures from "@/components/solutions/reseller/ResellerFeatures";
import ResellerUseCases from "@/components/solutions/reseller/ResellerUseCases";
import ResellerIntegrations from "@/components/solutions/reseller/ResellerIntegrations";
import ResellerStats from "@/components/solutions/reseller/ResellerStats";
import ResellerCTA from "@/components/solutions/reseller/ResellerCTA";

export default function ResellerPage() {
  return (
    <main className="space-y-0">
      <ResellerHero />
      <ResellerStats />
      <ResellerFeatures />
      <ResellerUseCases />
      <ResellerIntegrations />
      <ResellerCTA />
    </main>
  );
}