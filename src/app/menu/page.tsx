import { MENU, MenuItem } from "@/data/menu";
import Navbar from "../components/Navbar";
import { Star, ChefHat } from "lucide-react";

const categories = ["Entrées", "Plats", "Desserts", "Boissons"] as const;

// Note: metadata is handled in layout.tsx

export default function MenuPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="section bg-gradient-to-br from-amber-50 to-orange-50 border-b">
          <div className="container text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
              Notre Carte
            </h1>
            <p className="text-lg text-neutral-700 max-w-2xl mx-auto">
              Une cuisine française authentique sublimée par les produits du terroir local. 
              Chaque plat raconte l'histoire de notre région et de nos producteurs partenaires.
            </p>
            <div className="flex items-center justify-center gap-6 mt-6 text-sm text-neutral-600">
              <div className="flex items-center gap-2">
                <ChefHat size={16} />
                <span>Fait maison</span>
              </div>
              <div className="flex items-center gap-2">
                <Star size={16} />
                <span>Produits locaux</span>
              </div>
              <div className="flex items-center gap-2">
                <span>🌱</span>
                <span>Légumes de saison</span>
              </div>
            </div>
          </div>
        </section>

        {/* Menu Sections */}
        <section className="section">
          <div className="container">
            {categories.map((cat) => {
              const items = MENU.filter((m) => m.category === cat);
              if (items.length === 0) return null;

              return (
                <div key={cat} className="mb-16 last:mb-0">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold mb-2">{cat}</h2>
                    <div className="w-16 h-0.5 bg-amber-400 mx-auto"></div>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-6">
                    {items.map((item: MenuItem) => (
                      <div
                        key={item.id}
                        className="group relative p-6 rounded-2xl border bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                      >
                        {/* Signature dish indicator */}
                        {item.isSignature && (
                          <div className="absolute -top-2 -right-2 bg-amber-400 text-amber-900 text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
                            <ChefHat size={12} />
                            Signature
                          </div>
                        )}

                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <h3 className="font-semibold text-lg mb-2 group-hover:text-amber-700 transition-colors">
                              {item.title}
                            </h3>
                            <p className="text-sm text-neutral-600 leading-relaxed mb-3">
                              {item.desc}
                            </p>

                            {/* Allergens */}
                            {item.allergens && item.allergens.length > 0 && (
                              <div className="flex flex-wrap gap-1 mt-2">
                                {item.allergens.map((allergen) => (
                                  <span
                                    key={allergen}
                                    className="text-xs bg-neutral-100 text-neutral-600 px-2 py-1 rounded-full"
                                  >
                                    {allergen}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>

                          <div className="text-right">
                            <span className="text-xl font-bold text-amber-700">
                              {item.price.toFixed(1).replace('.0', '')}€
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}

            {/* Menu Footer */}
            <div className="mt-16 p-8 bg-neutral-50 rounded-3xl text-center">
              <h3 className="font-bold text-lg mb-4">Informations importantes</h3>
              <div className="grid md:grid-cols-3 gap-6 text-sm text-neutral-600">
                <div>
                  <p className="font-medium mb-1">Allergènes</p>
                  <p>Nous informons nos clients de la présence d'allergènes dans nos plats. N'hésitez pas à nous signaler vos intolérances.</p>
                </div>
                <div>
                  <p className="font-medium mb-1">Menu du jour</p>
                  <p>Tous les midis du lundi au vendredi : entrée + plat ou plat + dessert à 19€. Menu complet à 25€.</p>
                </div>
                <div>
                  <p className="font-medium mb-1">Vins</p>
                  <p>Notre carte des vins privilégie les appellations du Sud-Ouest. Accord mets-vins sur conseil de notre sommelier.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
