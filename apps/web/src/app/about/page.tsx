// app/about/page.tsx
"use client";

import AboutHero from "@/components/about/AboutHero";
import StatsOverview from "@/components/about/StatsOverview";
import OurStory from "@/components/about/OurStory";
import Timeline from "@/components/about/Timeline";
import ValuesGrid from "@/components/about/ValuesGrid";
import LeadershipGrid from "@/components/about/LeadershipGrid";
import InvestorsPartners from "@/components/about/InvestorsPartners";
import Testimonials from "@/components/about/Testimonials";
import AboutCTAGrid from "@/components/about/AboutCTAGrid";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <AboutHero />

      {/* Stats Overview */}
      <StatsOverview />

      {/* Our Story */}
      <OurStory />

      {/* Timeline */}
      <Timeline />

      {/* Values  */}
      <ValuesGrid />
      
      {/* Leadership */}
      <LeadershipGrid />

      {/* Investors & Partners */}
      <InvestorsPartners />

      {/* Testimonials */}
      <Testimonials />

      {/* CTA Section */}
      <AboutCTAGrid />
    </main>
  );
}
