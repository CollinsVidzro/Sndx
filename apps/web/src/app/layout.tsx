import { outfit } from "@/app/ui/fonts";
import "@sndx/ui/globals.css"
import type { Metadata } from "next";
import ExaHeader  from "@/layout/ExaHeader";
import  ExaFooter  from "@/layout/ExaFooter";
import Container from "@/layout/Containter";
import ExaBackground from "@/layout/ExaBackground";
import ExaBanner from "@/layout/ExaBanner";

export const metadata: Metadata = {
  title: {
    default: "Sendexa | Reliable Messaging and Payment Infrastructure",
    template: "%s | Sendexa",
  },
  description:
    "Sendexa provides enterprise-grade infrastructure for reliable messaging and customer communication. Scale your messaging with confidence.",
  keywords: ["messaging", "infrastructure", "SMS", "email", "notifications", "payment","API"],
  authors: [{ name: "Sendexa" }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sendexa.com",
    title: "Sendexa - Reliable Messaging and Payment Infrastructure",
    description: "Enterprise-grade messaging and payment infrastructure for developers",
    siteName: "Sendexa",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sendexa - Reliable Messaging and Payment Infrastructure",
    description: "Enterprise-grade messaging and payment infrastructure for developers",
    creator: "@sndx",
  },
  icons: {
    icon: "https://sendexa.co/favicon.png",
    apple: "https://sendexa.co/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="light">
      <head>
        <meta name="theme-color" content="#03798eff" />
      </head>
      <body className={`${outfit.className} antialiased bg-white text-gray-900`}>
       
          <ExaBanner />
          <ExaHeader />
          <ExaBackground>
            <Container>
              {children}
            </Container>
          </ExaBackground>
          <ExaFooter />
      
      </body>
    </html>
  )
}