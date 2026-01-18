// app/product/email/page.tsx

import type { Metadata } from "next";
import EmailHero from "@/components/product/email/EmailHero";
import EmailFeatures from "@/components/product/email/EmailFeatures";
import EmailTypes from "@/components/product/email/EmailTypes";
import EmailAutomation from "@/components/product/email/EmailAutomation";
import EmailAnalytics from "@/components/product/email/EmailAnalytics";
import EmailSecurity from "@/components/product/email/EmailSecurity";
import EmailCTASection from "@/components/product/email/EmailCTASection";

export const metadata: Metadata = {
  title: "Email API (Beta) | Transactional Email for Africa",
  description:
    "High-deliverability transactional email API. Managed SPF/DKIM and dedicated IP warming for the African digital economy.",
};

export default function EmailPage() {
  return (
    <main className="space-y-0">
      <EmailHero />
      <EmailFeatures />
      <EmailTypes />
      <EmailAutomation />
      <EmailAnalytics />
      <EmailSecurity />
      <EmailCTASection />
    </main>
  );
}
