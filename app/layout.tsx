import type { Metadata } from "next";
import { Manrope, Noto_Sans_Sinhala, Space_Grotesk } from "next/font/google";
import { LanguageProvider } from "@/config/language";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const notoSansSinhala = Noto_Sans_Sinhala({
  variable: "--font-sinhala",
  subsets: ["sinhala"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wijewardhana Construction | Homes in Kurunegala",
  description:
    "Residential home building in Kurunegala, Sri Lanka. Contact K.A.T. Santha Wijewardhana by phone or WhatsApp to discuss your project.",
  openGraph: {
    title: "Wijewardhana Construction | Homes in Kurunegala",
    description:
      "Residential home building in Kurunegala, Sri Lanka. Contact K.A.T. Santha Wijewardhana by phone or WhatsApp to discuss your project.",
    siteName: "Wijewardhana Construction",
    locale: "en_LK",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${spaceGrotesk.variable} ${notoSansSinhala.variable}`}>
      <body><LanguageProvider>{children}</LanguageProvider></body>
    </html>
  );
}
