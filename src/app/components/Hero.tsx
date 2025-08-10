"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Star, Award, MapPin, Clock } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50"></div>
      
      <div className="section relative">
        <div className="container grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{opacity:0,y:20}} 
            animate={{opacity:1,y:0}}
            transition={{duration:0.6}}
          >
            {/* Rating badges */}
            <motion.div 
              initial={{opacity:0,y:10}} 
              animate={{opacity:1,y:0}}
              transition={{duration:0.6, delay:0.2}}
              className="flex items-center gap-4 mb-6"
            >
              <div className="flex items-center gap-1 bg-white px-3 py-1 rounded-full shadow-sm">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} className="text-amber-400 fill-current" />
                ))}
                <span className="text-xs font-semibold ml-1">4.8</span>
              </div>
              <div className="flex items-center gap-1 bg-white px-3 py-1 rounded-full shadow-sm">
                <Award size={12} className="text-emerald-600" />
                <span className="text-xs font-semibold">Bib Gourmand</span>
              </div>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-[0.9] mb-6">
              <span className="block text-neutral-900">Le Patio</span>
              <span className="block text-amber-700 text-3xl md:text-4xl font-normal mt-2">
                Restaurant Gastronomique
              </span>
            </h1>
            
            <p className="text-xl text-neutral-700 leading-relaxed mb-4 max-w-lg">
              Cuisine française raffinée dans un cadre d'exception. 
              Notre terrasse ombragée vous accueille au cœur de Montauban.
            </p>

            <div className="flex items-center gap-6 mb-8 text-sm text-neutral-600">
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Centre historique</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>12h-14h • 19h-22h30</span>
              </div>
            </div>

            <motion.div 
              initial={{opacity:0,y:10}} 
              animate={{opacity:1,y:0}}
              transition={{duration:0.6, delay:0.4}}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link 
                href="/reservation" 
                className="group px-8 py-4 rounded-3xl bg-gradient-to-r from-amber-600 to-orange-600 text-white font-semibold text-lg hover:from-amber-700 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-center"
              >
                Réserver une table
              </Link>
              <Link 
                href="/menu" 
                className="group px-8 py-4 rounded-3xl border-2 border-neutral-300 font-semibold text-lg hover:border-amber-400 hover:bg-amber-50 transition-all duration-300 text-center"
              >
                Découvrir la carte
              </Link>
            </motion.div>

            {/* Trust indicators */}
            <motion.div 
              initial={{opacity:0}} 
              animate={{opacity:1}}
              transition={{duration:0.6, delay:0.6}}
              className="mt-8 flex items-center gap-8 text-xs text-neutral-500"
            >
              <span>✓ Produits 100% locaux</span>
              <span>✓ Réservation instantanée</span>
              <span>✓ Terrasse chauffée</span>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{opacity:0,scale:0.95}} 
            animate={{opacity:1,scale:1}}
            transition={{duration:0.8, delay:0.2}}
            className="relative"
          >
            {/* Main image placeholder with better styling */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-amber-200 via-orange-300 to-red-400">
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-amber-100/20 to-orange-200/20 backdrop-blur-sm">
                  <div className="text-center text-white p-8">
                    <div className="text-6xl mb-4">🍽️</div>
                    <h3 className="text-2xl font-bold mb-2">Notre Terrasse</h3>
                    <p className="text-lg opacity-90">Ambiance authentique • Cadre verdoyant</p>
                  </div>
                </div>
              </div>
              
              {/* Floating cards */}
              <motion.div 
                initial={{opacity:0,x:20}} 
                animate={{opacity:1,x:0}}
                transition={{duration:0.6, delay:0.8}}
                className="absolute -right-4 top-4 bg-white p-4 rounded-2xl shadow-lg"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-amber-600">15+</div>
                  <div className="text-xs text-neutral-600">Producteurs locaux</div>
                </div>
              </motion.div>

              <motion.div 
                initial={{opacity:0,x:-20}} 
                animate={{opacity:1,x:0}}
                transition={{duration:0.6, delay:1}}
                className="absolute -left-4 bottom-4 bg-white p-4 rounded-2xl shadow-lg"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-600">6</div>
                  <div className="text-xs text-neutral-600">Ans d'excellence</div>
                </div>
              </motion.div>
            </div>

            {/* Secondary images grid */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-emerald-200 to-teal-300 flex items-center justify-center shadow-lg">
                <div className="text-center text-white">
                  <div className="text-3xl mb-2">👨‍🍳</div>
                  <div className="text-sm font-semibold">Chef Thomas</div>
                </div>
              </div>
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-purple-200 to-pink-300 flex items-center justify-center shadow-lg">
                <div className="text-center text-white">
                  <div className="text-3xl mb-2">🍷</div>
                  <div className="text-sm font-semibold">Carte des vins</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-amber-200 rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-orange-200 rounded-full opacity-10 animate-pulse" style={{animationDelay: "1s"}}></div>
    </section>
  );
}
