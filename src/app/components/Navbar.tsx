"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/menu", label: "Carte" },
  { href: "/reservation", label: "Réserver" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Skip link for accessibility */}
      <a href="#main-content" className="skip-link">
        Aller au contenu principal
      </a>
      
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-neutral-200 shadow-sm">
        <nav className="container" role="navigation" aria-label="Navigation principale">
          <div className="h-16 flex items-center justify-between">
            {/* Logo */}
            <Link 
              href="/" 
              className="font-extrabold tracking-tight text-xl hover:text-amber-600 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 rounded-lg px-2 py-1"
              aria-label="Le Patio - Accueil"
            >
              Le Patio
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center gap-8" role="menubar">
              {links.map(link => (
                <li key={link.href} role="none">
                  <Link
                    href={link.href}
                    role="menuitem"
                    className={`text-sm font-medium transition-all duration-200 hover:text-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 rounded-lg px-3 py-2 ${
                      pathname === link.href 
                        ? "text-amber-600 font-semibold" 
                        : "text-neutral-700 hover:text-amber-600"
                    }`}
                    aria-current={pathname === link.href ? "page" : undefined}
                    onClick={closeMobileMenu}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Phone & Mobile Menu Button */}
            <div className="flex items-center gap-3">
              {/* Phone number (hidden on small screens) */}
              <a 
                href="tel:0563917842"
                className="hidden lg:flex items-center gap-2 text-sm text-neutral-600 hover:text-amber-600 transition-colors px-3 py-2 rounded-lg border border-neutral-200 hover:border-amber-200"
                aria-label="Appeler le restaurant"
              >
                <Phone size={14} />
                <span>05 63 91 78 42</span>
              </a>

              {/* Mobile menu button */}
              <button
                type="button"
                className="md:hidden p-2 rounded-lg hover:bg-neutral-100 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500"
                onClick={toggleMobileMenu}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
                aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              >
                {isMobileMenuOpen ? (
                  <X size={24} aria-hidden="true" />
                ) : (
                  <Menu size={24} aria-hidden="true" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div 
              id="mobile-menu"
              className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-neutral-200 shadow-lg"
              role="menu"
              aria-orientation="vertical"
            >
              <ul className="py-4 space-y-2">
                {links.map(link => (
                  <li key={link.href} role="none">
                    <Link
                      href={link.href}
                      role="menuitem"
                      className={`block px-4 py-3 text-base font-medium transition-colors hover:bg-amber-50 hover:text-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-inset ${
                        pathname === link.href 
                          ? "text-amber-600 bg-amber-50 font-semibold" 
                          : "text-neutral-700"
                      }`}
                      aria-current={pathname === link.href ? "page" : undefined}
                      onClick={closeMobileMenu}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                
                {/* Mobile phone link */}
                <li className="px-4 pt-4 border-t border-neutral-200" role="none">
                  <a 
                    href="tel:0563917842"
                    className="flex items-center gap-3 py-3 text-base font-medium text-neutral-700 hover:text-amber-600 transition-colors"
                    onClick={closeMobileMenu}
                    aria-label="Appeler le restaurant"
                  >
                    <Phone size={18} />
                    <span>05 63 91 78 42</span>
                  </a>
                </li>
              </ul>
            </div>
          )}
        </nav>
      </header>
      
      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-40 md:hidden" 
          onClick={closeMobileMenu}
          aria-hidden="true"
        />
      )}
    </>
  );
}
