"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Star, Utensils, ArrowRight, Leaf } from "lucide-react";

export default function SpecialitiesSection() {
  const specialities = [
    {
      id: 1,
      name: "Magret de Canard du Gers",
      description: "Magret grillé, jus au miel de châtaignier, légumes de saison rôtis au thym",
      price: "28",
      badge: "Signature",
      dietary: "Sans gluten",
      image: "🦆"
    },
    {
      id: 2,
      name: "Cassoulet du Chef",
      description: "Revisité avec haricots tarbais, confit de canard maison, saucisse de Toulouse",
      price: "24",
      badge: "Tradition",
      dietary: "Fait maison",
      image: "🍲"
    },
    {
      id: 3,
      name: "Pavé de Saumon Bio",
      description: "Saumon élevé en Norvège, écrasé d'avocat, vinaigrette aux agrumes d'Occitanie",
      price: "26",
      badge: "Bio",
      dietary: "Léger",
      image: "🐟"
    }
  ];

  const wines = [
    {
      name: "Cahors Rouge AOC",
      description: "Malbec du domaine familial, notes de fruits noirs",
      price: "8",
      glass: true
    },
    {
      name: "Gaillac Blanc Sec",
      description: "Mauzac et Sauvignon, fraîcheur et minéralité",
      price: "7",
      glass: true
    }
  ];

  return (
    <section className="section bg-beige/50">
      <div className="container">
        {/* En-tête */}
        <motion.div 
          initial={{opacity:0,y:30}} 
          whileInView={{opacity:1,y:0}}
          transition={{duration:0.8}}
          viewport={{once:true}}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-gray-800 mb-6">
            Nos Spécialités
          </h2>
          <div className="w-24 h-1 bg-terracotta mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez une sélection de nos plats signature, créés avec passion 
            à partir des meilleurs produits du terroir occitan.
          </p>
        </motion.div>

        {/* Grille des spécialités */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {specialities.map((dish, index) => (
            <motion.div
              key={dish.id}
              initial={{opacity:0,y:30}} 
              whileInView={{opacity:1,y:0}}
              transition={{duration:0.6, delay:index * 0.2}}
              viewport={{once:true}}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-y-1"
            >
              {/* Badge */}
              <div className="relative">
                <div className="absolute top-4 left-4 z-10">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                    dish.badge === 'Signature' ? 'bg-terracotta text-white' :
                    dish.badge === 'Tradition' ? 'bg-ocre text-white' :
                    'bg-sage text-white'
                  }`}>
                    {dish.badge}
                  </span>
                </div>
                
                {/* Image simulée avec emoji */}
                <div className="h-48 bg-gradient-to-br from-beige via-beige-dark to-bois flex items-center justify-center">
                  <div className="text-8xl opacity-80 group-hover:scale-110 transition-transform duration-300">
                    {dish.image}
                  </div>
                </div>
              </div>

              {/* Contenu */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-serif text-xl font-semibold text-gray-800 leading-tight">
                    {dish.name}
                  </h3>
                  <span className="text-2xl font-bold text-terracotta ml-2">
                    {dish.price}€
                  </span>
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {dish.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1 text-xs text-sage-dark bg-sage/20 px-2 py-1 rounded-full">
                    <Leaf size={12} />
                    {dish.dietary}
                  </span>
                  
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} className="text-amber-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Section vins */}
        <motion.div
          initial={{opacity:0,y:30}} 
          whileInView={{opacity:1,y:0}}
          transition={{duration:0.8}}
          viewport={{once:true}}
          className="bg-white rounded-2xl p-8 shadow-lg mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-sage rounded-full flex items-center justify-center">
              <span className="text-white text-xl">🍷</span>
            </div>
            <div>
              <h3 className="font-serif text-2xl font-semibold text-gray-800">
                Sélection de Vins Régionaux
              </h3>
              <p className="text-gray-600 text-sm">
                Accompagnez vos plats avec nos vins d'Occitanie soigneusement sélectionnés
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {wines.map((wine, index) => (
              <div key={index} className="flex justify-between items-start p-4 border border-beige rounded-lg">
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-800 mb-1">{wine.name}</h4>
                  <p className="text-sm text-gray-600 mb-2">{wine.description}</p>
                  <span className="text-xs text-sage-dark bg-sage/20 px-2 py-1 rounded-full">
                    Au verre disponible
                  </span>
                </div>
                <div className="text-lg font-bold text-terracotta ml-4">
                  {wine.price}€
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{opacity:0,y:30}} 
          whileInView={{opacity:1,y:0}}
          transition={{duration:0.8}}
          viewport={{once:true}}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-terracotta to-terracotta-dark text-white rounded-2xl p-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Utensils size={28} />
              <h3 className="font-serif text-2xl font-semibold">
                Découvrir la Carte Complète
              </h3>
            </div>
            <p className="text-terracotta-light mb-6 max-w-2xl mx-auto">
              Entrées, plats, desserts et une carte des vins exceptionnelle vous attendent. 
              Notre menu change selon les saisons pour vous offrir le meilleur du terroir.
            </p>
            <Link 
              href="/menu"
              className="inline-flex items-center gap-2 bg-white text-terracotta font-semibold px-6 py-3 rounded-lg hover:bg-beige transition-colors duration-300 shadow-lg"
            >
              Voir la carte complète
              <ArrowRight size={18} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}