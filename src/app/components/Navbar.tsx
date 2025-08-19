"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Phone, MapPin } from "lucide-react";

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
      
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-beige-dark shadow-sm">
        <nav className="container" role="navigation" aria-label="Navigation principale">
          <div className="h-20 flex items-center justify-between">
            {/* Logo */}
            <Link 
              href="/" 
              className="font-serif text-2xl font-semibold text-gray-800 hover:text-terracotta transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-terracotta focus:ring-offset-2 rounded-lg px-3 py-2"
              aria-label="Le Patio - Accueil"
            >
              Le Patio
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center gap-1" role="menubar">
              {links.map(link => (
                <li key={link.href} role="none">
                  <Link
                    href={link.href}
                    role="menuitem"
                    className={`text-sm font-medium transition-all duration-300 rounded-lg px-6 py-3 focus:outline-none focus:ring-2 focus:ring-terracotta focus:ring-offset-2 ${
                      pathname === link.href 
                        ? "bg-terracotta text-white shadow-md" 
                        : "text-gray-700 hover:text-terracotta hover:bg-beige/50"
                    }`}
                    aria-current={pathname === link.href ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Contact info & Mobile Menu Button */}
            <div className="flex items-center gap-3">
              {/* Phone number (hidden on small screens) */}
              <div className="hidden lg:flex items-center gap-6 text-sm">
                <a 
                  href="tel:0563917842"
                  className="flex items-center gap-2 text-gray-600 hover:text-terracotta transition-colors px-3 py-2 rounded-lg hover:bg-beige/50"
                  aria-label="Appeler le restaurant"
                >
                  <Phone size={16} />
                  <span>05 63 91 78 42</span>
                </a>
                <div className="flex items-center gap-2 text-gray-500 text-xs">
                  <MapPin size={14} />
                  <span>Montauban</span>
                </div>
              </div>

              {/* Mobile menu button */}
              <button
                type="button"
                className="md:hidden p-3 rounded-lg bg-beige/50 hover:bg-beige transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-terracotta"
                onClick={toggleMobileMenu}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
                aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              >
                {isMobileMenuOpen ? (
                  <X size={20} className="text-gray-700" aria-hidden="true" />
                ) : (
                  <Menu size={20} className="text-gray-700" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div 
              id="mobile-menu"
              className="md:hidden absolute top-20 left-4 right-4 bg-white/98 backdrop-blur-md rounded-2xl border border-beige-dark shadow-xl"
              role="menu"
              aria-orientation="vertical"
            >
              <ul className="p-6 space-y-2">
                {links.map(link => (
                  <li key={link.href} role="none">
                    <Link
                      href={link.href}
                      role="menuitem"
                      className={`block px-6 py-4 text-base font-medium rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-terracotta focus:ring-inset ${
                        pathname === link.href 
                          ? "bg-terracotta text-white shadow-md" 
                          : "text-gray-700 hover:text-terracotta hover:bg-beige/50"
                      }`}
                      aria-current={pathname === link.href ? "page" : undefined}
                      onClick={closeMobileMenu}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                
                {/* Mobile phone link */}
                <li className="pt-4 mt-4 border-t border-beige" role="none">
                  <a 
                    href="tel:0563917842"
                    className="flex items-center gap-3 px-6 py-4 text-base font-medium text-gray-700 hover:text-terracotta transition-colors duration-300 rounded-xl hover:bg-beige/50"
                    aria-label="Appeler le restaurant"
                    onClick={closeMobileMenu}
                  >
                    <Phone size={18} />
                    <span>05 63 91 78 42</span>
                  </a>
                </li>
                
                {/* Mobile location info */}
                <li role="none">
                  <div className="flex items-center gap-3 px-6 py-2 text-sm text-gray-500">
                    <MapPin size={16} />
                    <span>Centre historique, Montauban</span>
                  </div>
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