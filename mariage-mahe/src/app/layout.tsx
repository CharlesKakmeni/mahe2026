import "./globals.css";
import type { Metadata } from "next";
import { Great_Vibes, Cormorant_Garamond, Inter } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const script = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script",
});

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Arlette & Paul-Richard — Mariage à Mahé",
  description: "Mariage Arlette & Paul-Richard — Mahé, Seychelles",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${script.variable} ${serif.variable} ${sans.variable}`}>
      <body className="min-h-screen font-[var(--font-sans)]">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}