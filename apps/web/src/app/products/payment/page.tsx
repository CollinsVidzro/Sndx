// app/product/payment/page.tsx
import type { Metadata } from "next";
import PaymentHero from "@/components/product/payment/PaymentHero";
import PaymentMethods from "@/components/product/payment/PaymentMethods";
import PaymentFeatures from "@/components/product/payment/PaymentFeatures";
import PaymentSubscriptions from "@/components/product/payment/PaymentSubscriptions";
import PaymentInvoicing from "@/components/product/payment/PaymentInvoicing";
import PaymentSecurity from "@/components/product/payment/PaymentSecurity";
import PaymentCTASection from "@/components/product/payment/PaymentCTASection";

export const metadata: Metadata = {
  title: "Robust Payment Infrastructure | Sendexa API",
  description:
    "Seamless payment processing with multi-currency support, PCI-DSS compliance, and advanced fraud detection for secure transactions.",
};

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
