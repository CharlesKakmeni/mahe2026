import "./globals.css";
import type { Metadata } from "next";
import { Parisienne, Cormorant_Garamond, Inter, Playfair_Display } from "next/font/google";
import AuthGuard from "@/components/AuthGuard";
import LayoutContent from "@/components/LayoutContent";

const script = Parisienne({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script",
});

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
});

const display = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Arlette & Paul Richard — Mariage à Mahé",
  description: "Mariage Arlette & Paul Richard — Mahé, Seychelles",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="fr"
      className={`${script.variable} ${serif.variable} ${display.variable} ${sans.variable}`}
    >
      <body className="min-h-screen font-[var(--font-sans)]">
        <AuthGuard>
          <LayoutContent>{children}</LayoutContent>
        </AuthGuard>
      </body>
    </html>
  );
}
