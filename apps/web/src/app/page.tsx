// Updated page.tsx with all new components
"use client";
import HeroGrid from "@/components/home/HeroGrid";
import FeaturesGridClean from "@/components/home/FeaturesGridClean";
import UseCaseGrid from "@/components/home/UseCaseGrid";
import IntegrationGrid from "@/components/home/IntegrationGrid";
import StatsGrid from "@/components/home/StatsGrid";
import SecurityGrid from "@/components/home/SecurityGrid";
import DocumentationGrid from "@/components/home/DocumentationGrid";
import TestimonialsGrid from "@/components/home/TestimonialsGrid";
import CTAGrid from "@/components/home/CTAGrid";

export default function HomePage() {
  return (
    <main className="space-y-0">
      <HeroGrid />
      <FeaturesGridClean />
      <UseCaseGrid />
      <IntegrationGrid />
      <StatsGrid />
      <SecurityGrid />
      <DocumentationGrid />
      <TestimonialsGrid />
      <CTAGrid />
    </main>
  );
}