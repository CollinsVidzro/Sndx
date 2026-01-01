// app/solutions/finance/page.tsx
"use client";

import FinanceHero from "@/components/solutions/finance/FinanceHero";
import FinanceFeatures from "@/components/solutions/finance/FinanceFeatures";
import FinanceUseCases from "@/components/solutions/finance/FinanceUseCases";
import FinanceIntegrations from "@/components/solutions/finance/FinanceIntegrations";
import FinanceStats from "@/components/solutions/finance/FinanceStats";
import FinanceCTA from "@/components/solutions/finance/FinanceCTA";

export default function FinancePage() {
  return (
    <main className="space-y-0">
      <FinanceHero />
      <FinanceStats />
      <FinanceFeatures />
      <FinanceUseCases />
      <FinanceIntegrations />
      <FinanceCTA />
    </main>
  );
}