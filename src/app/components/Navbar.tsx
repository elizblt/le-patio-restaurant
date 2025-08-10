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
      
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-xl border-b border-slate-200/50 shadow-sm">
        <nav className="container" role="navigation" aria-label="Navigation principale">
          <div className="h-20 flex items-center justify-between">
            {/* Logo */}
            <Link 
              href="/" 
              className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent hover:from-violet-700 hover:to-purple-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 rounded-xl px-3 py-2"
              aria-label="Le Patio - Accueil"
            >
              Le Patio
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center gap-2" role="menubar">
              {links.map(link => (
                <li key={link.href} role="none">
                  <Link
                    href={link.href}
                    role="menuitem"
                    className={`text-sm font-medium transition-all duration-300 rounded-full px-6 py-3 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 ${
                      pathname === link.href 
                        ? "bg-gradient-to-r from-violet-500 to-purple-600 text-white shadow-lg shadow-violet-500/25" 
                        : "text-slate-700 hover:text-violet-600 hover:bg-white/60 backdrop-blur-sm"
                    }`}
                    aria-current={pathname === link.href ? "page" : undefined}
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
                className="hidden lg:flex items-center gap-2 text-sm text-neutral-600 hover:text-violet-600 transition-colors px-4 py-2 rounded-full bg-white/50 backdrop-blur-sm hover:bg-white/80 shadow-sm"
                aria-label="Appeler le restaurant"
              >
                <Phone size={14} />
                <span>05 63 91 78 42</span>
              </a>

              {/* Mobile menu button */}
              <button
                type="button"
                className="md:hidden p-3 rounded-2xl bg-white/60 backdrop-blur-sm hover:bg-white/80 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-violet-500 shadow-sm"
                onClick={toggleMobileMenu}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
                aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              >
                {isMobileMenuOpen ? (
                  <X size={20} className="text-slate-600" aria-hidden="true" />
                ) : (
                  <Menu size={20} className="text-slate-600" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div 
              id="mobile-menu"
              className="md:hidden absolute top-20 left-4 right-4 bg-white/95 backdrop-blur-xl rounded-3xl border border-slate-200/50 shadow-xl shadow-slate-900/10"
              role="menu"
              aria-orientation="vertical"
            >
              <ul className="p-6 space-y-2">
                {links.map(link => (
                  <li key={link.href} role="none">
                    <Link
                      href={link.href}
                      role="menuitem"
                      className={`block px-6 py-4 text-base font-medium rounded-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-inset ${
                        pathname === link.href 
                          ? "bg-gradient-to-r from-violet-500 to-purple-600 text-white shadow-lg shadow-violet-500/25" 
                          : "text-slate-700 hover:text-violet-600 hover:bg-violet-50"
                      }`}
                      aria-current={pathname === link.href ? "page" : undefined}
                      >
                      {link.label}
                    </Link>
                  </li>
                ))}
                
                {/* Mobile phone link */}
                <li className="pt-4 mt-4 border-t border-slate-200" role="none">
                  <a 
                    href="tel:0563917842"
                    className="flex items-center gap-3 px-6 py-4 text-base font-medium text-slate-700 hover:text-violet-600 transition-all duration-300 rounded-2xl hover:bg-violet-50"
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
