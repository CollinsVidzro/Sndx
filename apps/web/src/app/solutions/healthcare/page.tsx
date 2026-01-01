// app/solutions/healthcare/page.tsx
"use client";

import HealthcareHero from "@/components/solutions/healthcare/HealthcareHero";
import HealthcareFeatures from "@/components/solutions/healthcare/HealthcareFeatures";
import HealthcareUseCases from "@/components/solutions/healthcare/HealthcareUseCases";
import HealthcareIntegrations from "@/components/solutions/healthcare/HealthcareIntegrations";
import HealthcareStats from "@/components/solutions/healthcare/HealthcareStats";
import HealthcareCTA from "@/components/solutions/healthcare/HealthcareCTA";

export default function HealthcarePage() {
  return (
    <main className="space-y-0">
      <HealthcareHero />
      <HealthcareStats />
      <HealthcareFeatures />
      <HealthcareUseCases />
      <HealthcareIntegrations />
      <HealthcareCTA />
    </main>
  );
}