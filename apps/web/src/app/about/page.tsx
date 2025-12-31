// app/about/page.tsx
"use client";
import AboutHero from "@/components/about/AboutHero";
import OurStory from "@/components/about/OurStory";
import ValuesGrid from "@/components/about/ValuesGrid";
import LeadershipGrid from "@/components/about/LeadershipGrid";
import AboutCTAGrid from "@/components/about/AboutCTAGrid";

export default function AboutPage() {
  return (
    <main className="space-y-0">
      <AboutHero />
      <OurStory />
      <ValuesGrid />
      <LeadershipGrid />
      <AboutCTAGrid />
    </main>
  );
}