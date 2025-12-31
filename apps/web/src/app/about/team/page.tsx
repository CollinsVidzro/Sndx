// app/leadership/page.tsx
"use client";
import LeadershipHero from "@/components/about/leadership/LeadershipHero";
import ExecutiveGrid from "@/components/about/leadership/ExecutiveGrid";
import DepartmentGrid from "@/components/about/leadership/DepartmentGrid";
import AdvisoryGrid from "@/components/about/leadership/AdvisoryGrid";
import LeadershipCTAGrid from "@/components/about/leadership/LeadershipCTAGrid";

export default function LeadershipPage() {
  return (
    <main className="space-y-0">
      <LeadershipHero />
      <ExecutiveGrid />
      <DepartmentGrid />
      <AdvisoryGrid />
      <LeadershipCTAGrid />
    </main>
  );
}