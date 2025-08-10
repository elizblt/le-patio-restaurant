"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Star, Award, MapPin, Clock } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-50/50 via-white to-cyan-50/50"></div>
      
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-br from-violet-400/20 to-purple-400/20 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-400/20 blur-3xl animate-pulse" style={{animationDelay: "2s"}}></div>
      </div>
      
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
              className="flex items-center gap-4 mb-8"
            >
              <div className="flex items-center gap-1 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg shadow-violet-500/10 border border-white/50">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="text-amber-400 fill-current" />
                ))}
                <span className="text-sm font-semibold ml-2 text-slate-700">4.8</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg shadow-emerald-500/10 border border-white/50">
                <Award size={14} className="text-emerald-600" />
                <span className="text-sm font-semibold text-slate-700">Bib Gourmand</span>
              </div>
            </motion.div>

            <h1 className="text-6xl md:text-8xl font-black leading-[0.85] mb-8">
              <span className="block bg-gradient-to-r from-slate-900 via-violet-900 to-purple-900 bg-clip-text text-transparent">
                Le Patio
              </span>
              <span className="block text-2xl md:text-3xl font-medium mt-4 bg-gradient-to-r from-violet-600 to-cyan-600 bg-clip-text text-transparent">
                Restaurant Gastronomique
              </span>
            </h1>
            
            <p className="text-xl text-slate-600 leading-relaxed mb-6 max-w-lg">
              Cuisine française raffinée dans un cadre d'exception. 
              Notre terrasse ombragée vous accueille au cœur de Montauban.
            </p>

            <div className="flex items-center gap-8 mb-10 text-sm text-slate-500">
              <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-3 py-2 rounded-full">
                <MapPin size={16} className="text-violet-500" />
                <span>Centre historique</span>
              </div>
              <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-3 py-2 rounded-full">
                <Clock size={16} className="text-cyan-500" />
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
                className="group relative px-8 py-4 rounded-3xl bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold text-lg hover:from-violet-700 hover:to-purple-700 transition-all duration-300 shadow-xl shadow-violet-500/25 hover:shadow-2xl hover:shadow-violet-500/40 transform hover:-translate-y-1 text-center overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative">Réserver une table</span>
              </Link>
              <Link 
                href="/menu" 
                className="group px-8 py-4 rounded-3xl bg-white/80 backdrop-blur-sm border-2 border-violet-200 hover:border-violet-400 font-semibold text-lg text-slate-700 hover:text-violet-700 hover:bg-white/90 transition-all duration-300 text-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Découvrir la carte
              </Link>
            </motion.div>

            {/* Trust indicators */}
            <motion.div 
              initial={{opacity:0}} 
              animate={{opacity:1}}
              transition={{duration:0.6, delay:0.6}}
              className="mt-8 flex items-center gap-6 text-xs text-slate-500"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span>Produits 100% locaux</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Réservation instantanée</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span>Terrasse chauffée</span>
              </div>
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
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-violet-500/20 bg-gradient-to-br from-violet-100 via-purple-200 to-pink-200 border border-white/50">
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-white/10 to-violet-100/30 backdrop-blur-sm">
                  <div className="text-center text-slate-700 p-8">
                    <div className="text-6xl mb-4 filter drop-shadow-sm">🍽️</div>
                    <h3 className="text-2xl font-bold mb-2 text-slate-800">Notre Terrasse</h3>
                    <p className="text-lg text-slate-600">Ambiance authentique • Cadre verdoyant</p>
                  </div>
                </div>
              </div>
              
              {/* Floating cards */}
              <motion.div 
                initial={{opacity:0,x:20}} 
                animate={{opacity:1,x:0}}
                transition={{duration:0.6, delay:0.8}}
                className="absolute -right-4 top-4 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl shadow-violet-500/10 border border-white/50"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">15+</div>
                  <div className="text-xs text-slate-600">Producteurs locaux</div>
                </div>
              </motion.div>

              <motion.div 
                initial={{opacity:0,x:-20}} 
                animate={{opacity:1,x:0}}
                transition={{duration:0.6, delay:1}}
                className="absolute -left-4 bottom-4 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl shadow-emerald-500/10 border border-white/50"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">6</div>
                  <div className="text-xs text-slate-600">Ans d'excellence</div>
                </div>
              </motion.div>
            </div>

            {/* Secondary images grid */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-emerald-100 to-teal-200 border border-white/50 flex items-center justify-center shadow-xl shadow-emerald-500/10">
                <div className="text-center">
                  <div className="text-4xl mb-3 filter drop-shadow-sm">👨‍🍳</div>
                  <div className="text-sm font-bold text-slate-700">Chef Thomas</div>
                  <div className="text-xs text-slate-500">Cuisine d'excellence</div>
                </div>
              </div>
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-purple-100 to-pink-200 border border-white/50 flex items-center justify-center shadow-xl shadow-purple-500/10">
                <div className="text-center">
                  <div className="text-4xl mb-3 filter drop-shadow-sm">🍷</div>
                  <div className="text-sm font-bold text-slate-700">Carte des vins</div>
                  <div className="text-xs text-slate-500">Sélection premium</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Remove old decorative elements as we have new ones */}
    </section>
  );
}
