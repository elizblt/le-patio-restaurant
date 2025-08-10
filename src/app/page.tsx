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
        <section className="section">
          <div className="container grid md:grid-cols-3 gap-8">
            <div className="group p-8 rounded-3xl bg-white/80 backdrop-blur-sm shadow-xl shadow-emerald-500/10 border border-white/50 text-center hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500 hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-emerald-500/25">
                <span className="text-3xl filter drop-shadow-sm">🌱</span>
              </div>
              <h3 className="font-bold text-xl mb-4 text-slate-800">Produits Locaux</h3>
              <p className="text-slate-600 leading-relaxed">
                Nos producteurs du Tarn-et-Garonne nous livrent quotidiennement leurs meilleurs produits. 
                Circuit court et saveurs authentiques garanties.
              </p>
            </div>
            
            <div className="group p-8 rounded-3xl bg-white/80 backdrop-blur-sm shadow-xl shadow-violet-500/10 border border-white/50 text-center hover:shadow-2xl hover:shadow-violet-500/20 transition-all duration-500 hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-violet-400 to-purple-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-violet-500/25">
                <span className="text-3xl filter drop-shadow-sm">🌳</span>
              </div>
              <h3 className="font-bold text-xl mb-4 text-slate-800">Terrasse Ombragée</h3>
              <p className="text-slate-600 leading-relaxed">
                Notre terrasse au cœur de Montauban offre un havre de paix sous les platanes centenaires. 
                Ambiance conviviale toute l'année.
              </p>
            </div>
            
            <div className="group p-8 rounded-3xl bg-white/80 backdrop-blur-sm shadow-xl shadow-cyan-500/10 border border-white/50 text-center hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-500/25">
                <Heart className="text-white filter drop-shadow-sm" size={28} />
              </div>
              <h3 className="font-bold text-xl mb-4 text-slate-800">Service Attentionné</h3>
              <p className="text-slate-600 leading-relaxed">
                Notre équipe passionnée vous accompagne pour une expérience sur mesure. 
                Conseils avisés et attention aux détails.
              </p>
            </div>
          </div>
        </section>

        {/* Signature Dishes Section */}
        <section className="section bg-gradient-to-br from-violet-50/50 via-white to-purple-50/50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-slate-800 via-violet-800 to-purple-800 bg-clip-text text-transparent">
                Nos Créations Signature
              </h2>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
                Découvrez les plats emblématiques du Chef, conçus avec passion et savoir-faire, 
                qui font la renommée du Patio.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {signatureDishes.map((dish, index) => (
                <div key={dish.id} className="group bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl shadow-violet-500/10 hover:shadow-2xl hover:shadow-violet-500/20 transition-all duration-500 hover:-translate-y-2 border border-white/50">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="p-2 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full">
                      <ChefHat className="text-white" size={16} />
                    </div>
                    <span className="text-xs font-bold text-violet-700 uppercase tracking-wider bg-violet-100 px-3 py-1 rounded-full">
                      Signature Chef
                    </span>
                  </div>
                  <h3 className="font-bold text-xl mb-3 text-slate-800 group-hover:text-violet-800 transition-colors">{dish.title}</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">{dish.desc}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <span className="font-black text-2xl bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">{dish.price}€</span>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} className="text-amber-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <a 
                href="/menu" 
                className="inline-flex items-center gap-3 px-8 py-4 rounded-3xl bg-white/80 backdrop-blur-sm border-2 border-violet-200 hover:border-violet-400 hover:bg-white/90 transition-all duration-300 font-semibold text-lg text-slate-700 hover:text-violet-700 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Découvrir toute la carte
                <span className="text-violet-600">→</span>
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
        <section className="section bg-gradient-to-br from-slate-900 via-violet-900 to-purple-900 text-white relative overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-violet-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"></div>
          </div>
          
          <div className="container text-center relative">
            <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-white via-violet-100 to-cyan-100 bg-clip-text text-transparent">
              Réservez Votre Table
            </h2>
            <p className="text-slate-300 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
              Vivez une expérience gastronomique unique dans le cadre enchanteur de notre terrasse. 
              Réservation recommandée, surtout le week-end.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-8 mb-12">
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <Clock size={18} className="text-violet-300" />
                <span className="text-slate-200">Lun-Sam • 12h-14h / 19h-22h30</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <MapPin size={18} className="text-cyan-300" />
                <span className="text-slate-200">12 Rue du Patio, Montauban</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/reservation" 
                className="px-10 py-4 rounded-3xl bg-gradient-to-r from-violet-600 to-purple-600 text-white font-bold text-lg hover:from-violet-700 hover:to-purple-700 transition-all duration-300 shadow-xl shadow-violet-500/25 hover:shadow-2xl hover:shadow-violet-500/40 transform hover:-translate-y-1"
              >
                Réserver en ligne
              </a>
              <a 
                href="tel:0563917842" 
                className="px-10 py-4 rounded-3xl bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:border-white/50 hover:bg-white/20 transition-all duration-300 font-bold text-lg text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                05 63 91 78 42
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="container">
          <div className="text-center">
            <div className="mb-6">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent mb-2">
                Le Patio
              </h3>
              <p className="text-slate-500">Restaurant Gastronomique • Montauban</p>
            </div>
            <div className="flex justify-center gap-8 text-sm mb-6">
              <a href="/contact" className="hover:text-violet-400 transition-colors">Contact</a>
              <a href="/menu" className="hover:text-violet-400 transition-colors">Carte</a>
              <a href="/reservation" className="hover:text-violet-400 transition-colors">Réservation</a>
            </div>
            <p className="text-xs text-slate-500">
              © {new Date().getFullYear()} Le Patio – Montauban. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
