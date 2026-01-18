// app/product/otp/page.tsx
import type { Metadata } from "next";
import OTPHero from "@/components/product/otp/OTPHero";
import OTPFeatures from "@/components/product/otp/OTPFeatures";
import OTPMethods from "@/components/product/otp/OTPMethods";
import OTPSecurity from "@/components/product/otp/OTPSecurity";
import OTPExamples from "@/components/product/otp/OTPExamples";
import OTPCTASection from "@/components/product/otp/OTPCTASection";

export const metadata: Metadata = {
  title: "Enterprise OTP Infrastructure | Sendexa API",
  description:
    "Bank-grade OTP delivery and verification. SOC2 compliant, ISO-ready, and secured with SSL/TLS encryption for mission-critical authentication.",
};

export default function OTPPage() {
  return (
    <main className="space-y-0">
      <OTPHero />
      <OTPFeatures />
      <OTPMethods />
      <OTPSecurity />
      <OTPExamples />
      <OTPCTASection />
    </main>
  );
}
