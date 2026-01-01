// app/solutions/ecommerce/page.tsx
"use client";

import EcommerceHero from "@/components/solutions/ecommerce/EcommerceHero";
import EcommerceFeatures from "@/components/solutions/ecommerce/EcommerceFeatures";
import EcommerceUseCases from "@/components/solutions/ecommerce/EcommerceUseCases";
import EcommerceIntegrations from "@/components/solutions/ecommerce/EcommerceIntegrations";
import EcommerceStats from "@/components/solutions/ecommerce/EcommerceStats";
import EcommerceCTA from "@/components/solutions/ecommerce/EcommerceCTA";

export default function EcommercePage() {
  return (
    <main className="space-y-0">
      <EcommerceHero />
      <EcommerceStats />
      <EcommerceFeatures />
      <EcommerceUseCases />
      <EcommerceIntegrations />
      <EcommerceCTA />
    </main>
  );
}