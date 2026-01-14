// app/use-cases/page.tsx
"use client";

import UseCasesHero from "@/components/use-cases/UseCasesHero";
import UseCasesGrid from "@/components/use-cases/UseCasesGrid";
import UseCasesBenefits from "@/components/use-cases/UseCasesBenefits";
import UseCasesCTA from "@/components/use-cases/UseCasesCTA";

export default function UseCasesPage() {
  return (
    <main className="space-y-0">
      <UseCasesHero />
      <UseCasesGrid />
      <UseCasesBenefits />
      <UseCasesCTA />
    </main>
  );
}