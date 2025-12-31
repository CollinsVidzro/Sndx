// PricingPage.tsx - Main page component
"use client";
import { useState } from "react";
import PricingHeader from "./PricingHeader";
import PricingCards from "./PricingCards";

export default function PricingPage() {
  const [selectedService, setSelectedService] = useState<"sms" | "otp" | "email">("sms");
  const [selectedCurrency, setSelectedCurrency] = useState<"ghs" | "ngn" | "usd" | "eur">("ghs");

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <PricingHeader 
        selectedService={selectedService}
        setSelectedService={setSelectedService}
        selectedCurrency={selectedCurrency}
        setSelectedCurrency={setSelectedCurrency}
      />
      
      <PricingCards 
        selectedService={selectedService}
        selectedCurrency={selectedCurrency}
      />
    </main>
  );
}