// "use client";
// import MessagingHero from "@/components/messaging/MessagingHero";

// export default function MessagingPage() {
//   return (
//     <div className="relative flex min-h-svh items-center justify-center">
//       <MessagingHero />
//     </div>
//   );
// }


// app/product/messaging/page.tsx
import MessagingHero from "@/components/product/messaging/MessagingHero";
import MessagingFeatures from "@/components/product/messaging/MessagingFeatures";
import MessagingChannels from "@/components/product/messaging/MessagingChannels";
import MessagingExamples from "@/components/product/messaging/MessagingExamples";
import MessagingIntegrations from "@/components/product/messaging/MessagingIntegrations";
import MessagingCTASection from "@/components/product/messaging/MessagingCTASection";

export default function MessagingPage() {
  return (
    <main className="space-y-0">
      <MessagingHero />
      <MessagingFeatures />
      <MessagingChannels />
      <MessagingExamples />
      <MessagingIntegrations />
      <MessagingCTASection />
    </main>
  );
}