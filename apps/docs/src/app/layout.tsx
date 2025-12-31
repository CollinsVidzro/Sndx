// import { Outfit } from 'next/font/google';
import { outfit } from "@/app/ui/fonts";
import "./globals.css";
//import "@sendexa/ui/globals.css"
//import { ThemeProvider } from '@/components/theme-provider';
import { Metadata } from "next";
import { meta } from "../../config/meta";
//import Script from "next/script";
import  BuyMeCoffeeWidget  from "./BuyMeCoffeeWidget";

export const metadata: Metadata = meta;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`
          ${outfit.className}
          text-sm
          font-regular tracking-wide antialiased`}
      >
        {children}
        <BuyMeCoffeeWidget />

        {/* Tidio live chat script */}
        {/* <Script
          src="https://code.tidio.co/o93ckmtrvwarfdtztq2dbz0ghzunte8r.js"
          strategy="afterInteractive"
        /> */}
       
      </body>
    </html>
  );
}
