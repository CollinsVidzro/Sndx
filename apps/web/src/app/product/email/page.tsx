
// app/product/email/page.tsx
import EmailHero from "@/components/product/email/EmailHero";
import EmailFeatures from "@/components/product/email/EmailFeatures";
import EmailTypes from "@/components/product/email/EmailTypes";
import EmailAutomation from "@/components/product/email/EmailAutomation";
import EmailAnalytics from "@/components/product/email/EmailAnalytics";
import EmailSecurity from "@/components/product/email/EmailSecurity";
import EmailCTASection from "@/components/product/email/EmailCTASection";

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