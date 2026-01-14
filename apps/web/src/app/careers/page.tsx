// app/careers/page.tsx
"use client";
import { useState } from "react";
import CareersHero from "@/components/careers/CareersHero";
import BenefitsGrid from "@/components/careers/BenefitsGrid";
import OpenPositions from "@/components/careers/OpenPositions";
import CultureSection from "@/components/careers/CultureSection";
import HiringProcess from "@/components/careers/HiringProcess";
import CareersCTA from "@/components/careers/CareersCTA";

export default function CareersPage() {
  const [selectedDepartment, setSelectedDepartment] = useState<string>("all");

  return (
    <main className="min-h-screen bg-white">
      <CareersHero />
      <BenefitsGrid />
      <OpenPositions 
        selectedDepartment={selectedDepartment}
        onDepartmentChange={setSelectedDepartment}
      />
      <CultureSection />
      <HiringProcess />
      <CareersCTA />
    </main>
  );
}