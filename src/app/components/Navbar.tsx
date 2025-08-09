"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/menu", label: "Carte" },
  { href: "/reservation", label: "Réserver" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <nav className="container h-16 flex items-center justify-between">
        <Link href="/" className="font-extrabold tracking-tight text-xl">Le Patio</Link>
        <ul className="flex items-center gap-6">
          {links.map(l => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`text-sm ${pathname===l.href ? "font-semibold" : "text-neutral-600 hover:text-black"}`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
