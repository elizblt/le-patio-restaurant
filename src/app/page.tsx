import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { Star, ChefHat, Heart, Award, Clock, MapPin } from "lucide-react";
import { MENU } from "@/data/menu";

export default function Home() {
  // Get signature dishes for showcase
  const signatureDishes = MENU.filter(item => item.isSignature).slice(0, 3);

  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        
        {/* Features Section */}
        <section className="section bg-white border-y">
          <div className="container grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl border bg-gradient-to-br from-emerald-50 to-emerald-100 text-center">
              <div className="w-16 h-16 bg-emerald-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="font-bold text-lg mb-3">Produits Locaux</h3>
              <p className="text-sm text-neutral-700 leading-relaxed">
                Nos producteurs du Tarn-et-Garonne nous livrent quotidiennement leurs meilleurs produits. 
                Circuit court et saveurs authentiques garanties.
              </p>
            </div>
            
            <div className="p-8 rounded-3xl border bg-gradient-to-br from-amber-50 to-amber-100 text-center">
              <div className="w-16 h-16 bg-amber-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌳</span>
              </div>
              <h3 className="font-bold text-lg mb-3">Terrasse Ombragée</h3>
              <p className="text-sm text-neutral-700 leading-relaxed">
                Notre terrasse au cœur de Montauban offre un havre de paix sous les platanes centenaires. 
                Ambiance conviviale toute l'année.
              </p>
            </div>
            
            <div className="p-8 rounded-3xl border bg-gradient-to-br from-blue-50 to-blue-100 text-center">
              <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-blue-600" size={24} />
              </div>
              <h3 className="font-bold text-lg mb-3">Service Attentionné</h3>
              <p className="text-sm text-neutral-700 leading-relaxed">
                Notre équipe passionnée vous accompagne pour une expérience sur mesure. 
                Conseils avisés et attention aux détails.
              </p>
            </div>
          </div>
        </section>

        {/* Signature Dishes Section */}
        <section className="section bg-gradient-to-br from-neutral-50 to-amber-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos Créations Signature</h2>
              <p className="text-neutral-600 max-w-2xl mx-auto">
                Découvrez les plats emblématiques du Chef, conçus avec passion et savoir-faire, 
                qui font la renommée du Patio.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {signatureDishes.map((dish, index) => (
                <div key={dish.id} className="bg-white p-6 rounded-3xl shadow-sm hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-2 mb-3">
                    <ChefHat className="text-amber-600" size={16} />
                    <span className="text-xs font-semibold text-amber-700 uppercase tracking-wide">
                      Signature Chef
                    </span>
                  </div>
                  <h3 className="font-bold text-lg mb-2">{dish.title}</h3>
                  <p className="text-sm text-neutral-600 mb-4 leading-relaxed">{dish.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-amber-700 text-lg">{dish.price}€</span>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={12} className="text-amber-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <a 
                href="/menu" 
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl border border-amber-200 hover:bg-amber-50 transition-colors font-semibold"
              >
                Découvrir toute la carte
                <span>→</span>
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="section">
          <div className="container grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                L'Histoire du Patio
              </h2>
              <div className="space-y-4 text-neutral-700 leading-relaxed">
                <p>
                  Depuis 2018, <strong>Le Patio</strong> incarne l'art de vivre à la française au cœur de Montauban. 
                  Installé dans un ancien hôtel particulier du XVIIIe siècle, notre restaurant cultive l'excellence 
                  culinaire dans un cadre authentique et chaleureux.
                </p>
                <p>
                  <strong>Chef Thomas Mercier</strong>, formé dans les plus grandes maisons, a imaginé une carte 
                  qui célèbre les saveurs du terroir occitan. Chaque assiette raconte l'histoire de nos producteurs 
                  partenaires et de notre région.
                </p>
                <p>
                  Notre terrasse ombragée, véritable écrin de verdure en plein centre-ville, vous invite à savourer 
                  des moments d'exception en toute saison.
                </p>
              </div>
              
              <div className="mt-8 flex gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-amber-600">6</div>
                  <div className="text-xs text-neutral-600 uppercase tracking-wide">Années d'excellence</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-600">15+</div>
                  <div className="text-xs text-neutral-600 uppercase tracking-wide">Producteurs locaux</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">4.8</div>
                  <div className="text-xs text-neutral-600 uppercase tracking-wide">Note moyenne</div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-amber-200 to-orange-300 p-8 flex items-center justify-center">
                <div className="text-center text-white">
                  <span className="text-6xl mb-4 block">👨‍🍳</span>
                  <p className="font-semibold">Chef Thomas Mercier</p>
                  <p className="text-sm opacity-90">Formation étoilée • Passion du terroir</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-emerald-200 to-emerald-400 p-6 flex items-center justify-center">
                  <div className="text-center text-white">
                    <span className="text-3xl mb-2 block">🏆</span>
                    <p className="text-sm font-semibold">Bib Gourmand</p>
                    <p className="text-xs opacity-90">2023</p>
                  </div>
                </div>
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-200 to-blue-400 p-6 flex items-center justify-center">
                  <div className="text-center text-white">
                    <span className="text-3xl mb-2 block">🌱</span>
                    <p className="text-sm font-semibold">Bio & Local</p>
                    <p className="text-xs opacity-90">85% des produits</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ce que disent nos clients</h2>
              <div className="flex items-center justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="text-amber-400 fill-current" />
                ))}
                <span className="ml-2 font-semibold">4.8/5</span>
              </div>
              <p className="text-neutral-600">Basé sur 240+ avis vérifiés</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-3xl shadow-sm">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="text-amber-400 fill-current" />
                  ))}
                </div>
                <p className="text-sm italic mb-4 text-neutral-700">
                  "Une expérience culinaire exceptionnelle ! Le magret de canard était parfaitement cuit 
                  et les saveurs sublimes. Service impeccable et cadre idyllique."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                    MC
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Marie-Claire D.</p>
                    <p className="text-xs text-neutral-500">Il y a 2 semaines</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-3xl shadow-sm">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="text-amber-400 fill-current" />
                  ))}
                </div>
                <p className="text-sm italic mb-4 text-neutral-700">
                  "La terrasse est magnifique, on se sent comme dans un jardin secret. 
                  La carte change selon les saisons, tout est frais et délicieux."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                    JL
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Jean-Luc M.</p>
                    <p className="text-xs text-neutral-500">Il y a 1 mois</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-3xl shadow-sm">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="text-amber-400 fill-current" />
                  ))}
                </div>
                <p className="text-sm italic mb-4 text-neutral-700">
                  "Perfect for a romantic dinner! The staff was incredibly welcoming 
                  and the wine selection exceptional. We'll definitely be back!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                    SA
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Sarah A.</p>
                    <p className="text-xs text-neutral-500">Il y a 3 semaines</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section bg-gradient-to-r from-neutral-900 to-neutral-800 text-white">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Réservez Votre Table
            </h2>
            <p className="text-neutral-300 mb-8 max-w-2xl mx-auto">
              Vivez une expérience gastronomique unique dans le cadre enchanteur de notre terrasse. 
              Réservation recommandée, surtout le week-end.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 text-neutral-300">
                <Clock size={16} />
                <span className="text-sm">Lun-Sam • 12h-14h / 19h-22h30</span>
              </div>
              <div className="flex items-center gap-2 text-neutral-300">
                <MapPin size={16} />
                <span className="text-sm">12 Rue du Patio, Montauban</span>
              </div>
            </div>

            <div className="flex gap-4 justify-center">
              <a 
                href="/reservation" 
                className="px-8 py-3 rounded-2xl bg-white text-neutral-900 font-semibold hover:bg-neutral-100 transition-colors"
              >
                Réserver en ligne
              </a>
              <a 
                href="tel:0563917842" 
                className="px-8 py-3 rounded-2xl border border-neutral-500 hover:border-neutral-300 transition-colors font-semibold"
              >
                05 63 91 78 42
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="section bg-neutral-900 text-neutral-400 text-center border-t border-neutral-800">
        <div className="container">
          <p className="text-sm">
            © {new Date().getFullYear()} Le Patio – Montauban • 
            <a href="/contact" className="hover:text-white transition-colors mx-2">Contact</a> • 
            <a href="/menu" className="hover:text-white transition-colors mx-2">Carte</a> • 
            <a href="/reservation" className="hover:text-white transition-colors mx-2">Réservation</a>
          </p>
        </div>
      </footer>
    </>
  );
}
