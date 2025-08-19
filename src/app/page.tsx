import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import SpecialitiesSection from "./components/SpecialitiesSection";
import GallerySection from "./components/GallerySection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <AboutSection />
        <SpecialitiesSection />
        <GallerySection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-12 border-t border-gray-700">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Restaurant Info */}
            <div className="md:col-span-2">
              <h3 className="font-serif text-2xl font-semibold text-white mb-4">
                Le Patio
              </h3>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Restaurant authentique au cœur de Montauban, célébrant les saveurs 
                d'Occitanie dans un cadre chaleureux mêlant tradition et modernité.
              </p>
              <div className="flex items-center gap-4 text-sm">
                <span className="bg-terracotta text-white px-3 py-1 rounded-full">
                  Bib Gourmand 2023
                </span>
                <span className="bg-sage text-white px-3 py-1 rounded-full">
                  Produits locaux
                </span>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-white mb-4">Navigation</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/menu" className="hover:text-terracotta transition-colors">Carte</a></li>
                <li><a href="/reservation" className="hover:text-terracotta transition-colors">Réserver</a></li>
                <li><a href="/contact" className="hover:text-terracotta transition-colors">Contact</a></li>
              </ul>
            </div>
            
            {/* Contact Info */}
            <div>
              <h4 className="font-semibold text-white mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li className="text-gray-400">15 Place du Patio</li>
                <li className="text-gray-400">82000 Montauban</li>
                <li>
                  <a href="tel:0563917842" className="text-terracotta hover:text-terracotta-dark transition-colors">
                    05 63 91 78 42
                  </a>
                </li>
                <li>
                  <a href="mailto:contact@lepatio-montauban.fr" className="text-terracotta hover:text-terracotta-dark transition-colors">
                    contact@lepatio-montauban.fr
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
            <p className="text-gray-500 mb-4 md:mb-0">
              © {new Date().getFullYear()} Le Patio – Montauban. Tous droits réservés.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-terracotta transition-colors">
                Mentions légales
              </a>
              <a href="#" className="text-gray-400 hover:text-terracotta transition-colors">
                Politique de confidentialité
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}