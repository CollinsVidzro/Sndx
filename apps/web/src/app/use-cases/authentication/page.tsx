// app/use-cases/authentication/page.tsx
"use client";

import AuthenticationHero from "@/components/use-cases/authentication/AuthenticationHero";
import AuthenticationStats from "@/components/use-cases/authentication/AuthenticationStats";
import AuthenticationTemplates from "@/components/use-cases/authentication/AuthenticationTemplates";
import AuthenticationSecurity from "@/components/use-cases/authentication/AuthenticationSecurity";
import AuthenticationIntegration from "@/components/use-cases/authentication/AuthenticationIntegration";
import AuthenticationCTA from "@/components/use-cases/authentication/AuthenticationCTA";

export default function AuthenticationPage() {
  return (
    <main className="space-y-0">
      <AuthenticationHero />
      <AuthenticationStats />
      <AuthenticationTemplates />
      <AuthenticationSecurity />
      <AuthenticationIntegration />
      <AuthenticationCTA />
    </main>
  );
}