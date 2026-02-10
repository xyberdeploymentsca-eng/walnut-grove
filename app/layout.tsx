/** @format */

import { Nunito } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/shared/header";
import localFont from "next/font/local";
import Footer from "@/components/shared/footer";
import { CalendlyModal } from "@/components/ui/calendlyModal";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

const otomanopeeOne = localFont({
  src: "../public/fonts/OtomanopeeOne-Regular.ttf",
  variable: "--font-otomanopee-one",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        style={{ backgroundColor: "#FFF9EF" }}
        className={`${nunito.variable} ${otomanopeeOne.variable} font-nunito antialiased bg-primary-white`}
      >
        <Header />
        <CalendlyModal />
        {children}
        <Footer />
      </body>
    </html>
  );
}
