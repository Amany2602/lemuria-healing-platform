import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.lemuriahealing.com.au"),
  title: {
    default: "Jenny Gillson | Sound Therapist | Kinesiologist | Lemuria Healing",
    template: "%s | Lemuria Healing",
  },
  description: "Live the life you want. Transformative healing through sound therapy, kinesiology, and intuitive energy work at Lemuria Healing.",
  keywords: ["Jenny Gillson", "sound healing", "kinesiology", "Aromatherapy", "spiritual wellness", "lemuria", "Victoria healing"],
  authors: [{ name: "Jenny Gillson" }],
  creator: "Jenny Gillson",
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://www.lemuriahealing.com.au",
    title: "Jenny Gillson | master Vibrational Therapist",
    description: "Live the life you want. Experience deep recalibration through sacred frequency work.",
    siteName: "Lemuria Healing",
    images: [
      {
        url: "/lemuria-assets/hero/jenny-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Jenny Gillson - Lemuria Healing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lemuria Healing | Jenny Gillson",
    description: "Transformative healing through sound therapy and kinesiology.",
    images: ["/lemuria-assets/hero/jenny-hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

import { JsonLd } from "@/components/seo/JsonLd";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <JsonLd />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased text-brand-text bg-brand-bg bg-noise transition-smooth`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
