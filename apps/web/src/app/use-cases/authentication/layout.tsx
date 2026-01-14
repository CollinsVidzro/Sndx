// app/use-cases/authentication/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Authentication & OTP Verification | Sendexa",
  description: "Secure authentication flows with OTP, magic links, and verification codes. 7 pre-built templates for login, signup, and account security.",
  keywords: ["authentication", "OTP", "verification", "2FA", "login security", "password reset", "magic links"],
};

export default function AuthenticationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}