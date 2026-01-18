// app/leadership/page.tsx
import type { Metadata } from "next";
import LeadershipHero from "@/components/about/leadership/LeadershipHero";
import ExecutiveGrid from "@/components/about/leadership/ExecutiveGrid";
import DepartmentGrid from "@/components/about/leadership/DepartmentGrid";
import AdvisoryGrid from "@/components/about/leadership/AdvisoryGrid";
import LeadershipCTAGrid from "@/components/about/leadership/LeadershipCTAGrid";

export const metadata: Metadata = {
  title: "Our Team | Sendexa - African Communications Platform",
  description:
    "Meet the leadership, management, and dedicated team building Africa's premier communication platform.",
};

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
