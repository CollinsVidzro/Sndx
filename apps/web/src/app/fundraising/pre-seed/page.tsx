// app/pre-seed/page.tsx
import { Metadata } from "next";

import PreSeedHero from "@/components/pre-seed/PreSeedHero";
import InvestmentOpportunity from "@/components/pre-seed/InvestmentOpportunity";
import MarketTraction from "@/components/pre-seed/MarketTraction";
import UseOfFunds from "@/components/pre-seed/UseOfFunds";
import InvestorInterest from "@/components/pre-seed/InvestorInterest";
import TeamOverview from "@/components/pre-seed/TeamOverview";
import FinancialProjections from "@/components/pre-seed/FinancialProjections";
import InvestmentTerms from "@/components/pre-seed/InvestmentTerms";
import CTADownload from "@/components/pre-seed/CTADownload";

export const metadata: Metadata = {
  title: "Sendexa Pre-Seed Round | Enterprise Infrastructure Investment Opportunity",
  description: "Join Sendexa's $250K-$300K pre-seed round. Invest in Africa's unified communication and payment infrastructure platform with $1.8M-$2.0M valuation cap.",
  alternates: {
    canonical: "https://www.sendexa.co/pre-seed",
  },
};

export default function PreSeedPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <PreSeedHero />
      
      {/* Investment Opportunity */}
      <InvestmentOpportunity />
      
      {/* Market Traction & Validation */}
      <MarketTraction />
      
      {/* Use of Funds */}
      <UseOfFunds />
      
      {/* Investor Interest */}
      <InvestorInterest />
      
      {/* Team Overview */}
      <TeamOverview />
      
      {/* Financial Projections */}
      <FinancialProjections />
      
      {/* Investment Terms */}
      <InvestmentTerms />
      
      {/* CTA & Pitch Deck Download */}
      <CTADownload />
    </main>
  );
}