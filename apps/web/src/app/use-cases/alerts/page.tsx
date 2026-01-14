// app/use-cases/alerts/page.tsx
"use client";

import AlertsHero from "@/components/use-cases/alerts/AlertsHero";
import AlertsStats from "@/components/use-cases/alerts/AlertsStats";
import AlertsTemplates from "@/components/use-cases/alerts/AlertsTemplates";
import AlertsFeatures from "@/components/use-cases/alerts/AlertsFeatures";
import AlertsSecurity from "@/components/use-cases/alerts/AlertsSecurity";
import AlertsCTA from "@/components/use-cases/alerts/AlertsCTA";

export default function AlertsPage() {
  return (
    <main className="space-y-0">
      <AlertsHero />
      <AlertsStats />
      <AlertsTemplates />
      <AlertsFeatures />
      <AlertsSecurity />
      <AlertsCTA />
    </main>
  );
}