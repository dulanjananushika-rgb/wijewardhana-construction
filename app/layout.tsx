import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
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
    <html lang="en" className={`${manrope.variable} ${spaceGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}
