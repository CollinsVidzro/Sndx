// "use client";
// import PaymentHero from "@/components/payment/PaymentHero";

// export default function PaymentPage() {
//   return (
//     <div className="relative flex min-h-svh items-center justify-center">
//       <PaymentHero />
//     </div>
//   );
// }


// app/product/payment/page.tsx
import PaymentHero from "@/components/product/payment/PaymentHero";
import PaymentMethods from "@/components/product/payment/PaymentMethods";
import PaymentFeatures from "@/components/product/payment/PaymentFeatures";
import PaymentSubscriptions from "@/components/product/payment/PaymentSubscriptions";
import PaymentInvoicing from "@/components/product/payment/PaymentInvoicing";
import PaymentSecurity from "@/components/product/payment/PaymentSecurity";
import PaymentCTASection from "@/components/product/payment/PaymentCTASection";

export default function PaymentPage() {
  return (
    <main className="space-y-0">
      <PaymentHero />
      <PaymentMethods />
      <PaymentFeatures />
      <PaymentSubscriptions />
      <PaymentInvoicing />
      <PaymentSecurity />
      <PaymentCTASection />
    </main>
  );
}