import { outfit } from "@/app/ui/fonts";
import "@sndx/ui/globals.css";
import type { Metadata } from "next";
import ExaHeader from "@/layout/ExaHeader";
import ExaFooter from "@/layout/ExaFooter";
import Container from "@/layout/Containter";
import ExaBackground from "@/layout/ExaBackground";
import ExaBanner from "@/layout/ExaBanner";
import Script from "next/script";
import { organizationSchema } from "@/utils/schema";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sendexa.co"),
  title: "Reliable Bulk SMS, OTP, and Email Solutions for Africa | Sendexa",
  description:
    "Sendexa is Africa’s trusted provider of secure SMS and OTP solutions, enabling businesses and developers with reliable messaging and authentication services.",
  alternates: {
    canonical: "https://www.sendexa.co",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.sendexa.co",
    title: "Reliable Bulk SMS, OTP, and Email Solutions for Africa | Sendexa",
    description:
      "Sendexa is Africa’s trusted provider of secure SMS and OTP solutions, enabling businesses and developers with reliable messaging and authentication services.",
    siteName: "Sendexa",
    images: [
      {
        url: "https://static.sendexa.co/assets/sendexa_og.jpg",
        width: 1200,
        height: 630,
        alt: "Sendexa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reliable Bulk SMS, OTP, and Email Solutions for Africa | Sendexa",
    description:
      "Sendexa is Africa’s trusted provider of secure SMS and OTP solutions, enabling businesses and developers with reliable messaging and authentication services.",
    creator: "@sendexahq",
    images: ["https://static.sendexa.co/assets/sendexa_og.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="light">
      <head>
        <meta name="theme-color" content="#03798eff" />
        <Script
          id="sendexa-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body
        className={`${outfit.className} antialiased bg-white text-gray-900`}
      >
        <ExaBanner />
        <ExaHeader />
        <ExaBackground>
          <Container>{children}</Container>
        </ExaBackground>
        <ExaFooter />
      </body>
    </html>
  );
}
