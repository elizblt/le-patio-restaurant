import Navbar from "../components/Navbar";
import { MapPin, Phone, Clock, Mail, Car, Train } from "lucide-react";

// Note: metadata is handled in layout.tsx

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="section bg-gradient-to-br from-emerald-50 to-teal-50 border-b">
          <div className="container text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
              Nous Contacter
            </h1>
            <p className="text-lg text-neutral-700 max-w-2xl mx-auto">
              Au cœur de Montauban, Le Patio vous accueille dans un cadre chaleureux 
              pour une expérience gastronomique inoubliable.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              {/* Address */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                  <MapPin className="text-emerald-600" size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Adresse</h3>
                  <p className="text-neutral-700">12 Rue du Patio</p>
                  <p className="text-neutral-700">82000 Montauban</p>
                  <p className="text-sm text-neutral-600 mt-2">
                    En plein centre historique, à 2 minutes de la Place Nationale
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Phone className="text-blue-600" size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Téléphone</h3>
                  <p className="text-neutral-700 text-lg">05 63 91 78 42</p>
                  <p className="text-sm text-neutral-600 mt-1">
                    Réservations recommandées
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Mail className="text-purple-600" size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Email</h3>
                  <p className="text-neutral-700">contact@lepatio-montauban.fr</p>
                  <p className="text-sm text-neutral-600 mt-1">
                    Réponse sous 24h
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Clock className="text-amber-600" size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Horaires d'ouverture</h3>
                  <div className="space-y-1 text-neutral-700">
                    <div className="flex justify-between">
                      <span>Lundi - Vendredi</span>
                      <span>12:00 - 14:00 • 19:00 - 22:30</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Samedi</span>
                      <span>19:00 - 23:00</span>
                    </div>
                    <div className="flex justify-between text-neutral-500">
                      <span>Dimanche</span>
                      <span>Fermé</span>
                    </div>
                  </div>
                  <p className="text-sm text-neutral-600 mt-2">
                    Service continu le dimanche midi sur réservation (groupes de 8+ personnes)
                  </p>
                </div>
              </div>

              {/* Parking & Transport */}
              <div className="grid md:grid-cols-2 gap-6 pt-6 border-t">
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <Car className="text-green-600" size={16} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Parking</h4>
                    <p className="text-sm text-neutral-600">
                      Place Nationale (payant)<br />
                      3 minutes à pied
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                    <Train className="text-indigo-600" size={16} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Transport</h4>
                    <p className="text-sm text-neutral-600">
                      Arrêt "Centre-Ville"<br />
                      Lignes 1, 3, 5
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="space-y-4">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border shadow-lg">
                <iframe
                  className="w-full h-full"
                  loading="lazy"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=1.342%2C44.017%2C1.37%2C44.03&marker=44.02%2C1.35&layer=mapnik"
                />
              </div>
              <p className="text-center text-sm text-neutral-500">
                Cliquez sur la carte pour l'agrandir et obtenir l'itinéraire
              </p>
            </div>
          </div>
        </section>

        {/* Additional Info Section */}
        <section className="section bg-neutral-50">
          <div className="container">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="p-6 bg-white rounded-2xl shadow-sm">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🍷</span>
                </div>
                <h3 className="font-bold text-lg mb-2">Privatisation</h3>
                <p className="text-sm text-neutral-600">
                  Salle privative disponible pour vos événements (20-40 personnes). 
                  Menus groupes sur mesure.
                </p>
              </div>

              <div className="p-6 bg-white rounded-2xl shadow-sm">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎂</span>
                </div>
                <h3 className="font-bold text-lg mb-2">Événements</h3>
                <p className="text-sm text-neutral-600">
                  Anniversaires, demandes en mariage, repas d'affaires... 
                  Nous personnalisons votre soirée.
                </p>
              </div>

              <div className="p-6 bg-white rounded-2xl shadow-sm">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏆</span>
                </div>
                <h3 className="font-bold text-lg mb-2">Récompenses</h3>
                <p className="text-sm text-neutral-600">
                  Guide du Routard 2024, TripAdvisor "Travellers' Choice", 
                  Bib Gourmand Michelin 2023.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section">
          <div className="container text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Prêt à vivre l'expérience Le Patio ?
            </h2>
            <p className="text-neutral-600 mb-6 max-w-2xl mx-auto">
              Réservez dès maintenant votre table pour découvrir notre cuisine du terroir 
              dans l'ambiance chaleureuse de notre terrasse ombragée.
            </p>
            <div className="flex gap-3 justify-center">
              <a 
                href="/reservation" 
                className="px-6 py-3 rounded-2xl bg-black text-white font-semibold hover:bg-neutral-800 transition-colors"
              >
                Réserver une table
              </a>
              <a 
                href="tel:0563917842" 
                className="px-6 py-3 rounded-2xl border font-semibold hover:bg-neutral-50 transition-colors"
              >
                05 63 91 78 42
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
