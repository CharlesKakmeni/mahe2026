import Link from "next/link";
import MonogramLogo from "@/components/MonogramLogo";

const links = [
  { href: "/", label: "Home" },
  { href: "/programme", label: "Programme" },
  { href: "/rsvp", label: "RSVP" },
  { href: "/faq", label: "FAQ" },
];

export default function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="backdrop-blur-md bg-black/15 border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <Link href="/" aria-label="Accueil">
            <MonogramLogo />
          </Link>

          <nav className="flex gap-3 md:gap-6">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-white/85 hover:text-white text-xs md:text-sm uppercase tracking-wider"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}