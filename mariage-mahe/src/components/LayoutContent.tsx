"use client";

import { usePathname } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function LayoutContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLoginPage = pathname === "/login";

  // Sur la page de login, on n'affiche pas Nav et Footer
  if (isLoginPage) {
    return <>{children}</>;
  }

  // Sur les autres pages, on affiche Nav et Footer normalement
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
}
