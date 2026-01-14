// "use client";
// import OtpHero from "@/components/otp/OTPHero";

// export default function OTPPage() {
//   return (
//     <div className="relative flex min-h-svh items-center justify-center">
//       <OtpHero />
//     </div>
//   );
// }


// app/product/otp/page.tsx
import OTPHero from "@/components/product/otp/OTPHero";
import OTPFeatures from "@/components/product/otp/OTPFeatures";
import OTPMethods from "@/components/product/otp/OTPMethods";
import OTPSecurity from "@/components/product/otp/OTPSecurity";
import OTPExamples from "@/components/product/otp/OTPExamples";
import OTPCTASection from "@/components/product/otp/OTPCTASection";

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