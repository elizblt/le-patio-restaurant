"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, MapPin, Clock, Utensils } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-beige">
      {/* Image de fond simulée avec couleur */}
      <div className="absolute inset-0 bg-gradient-to-r from-beige/95 via-beige/80 to-beige/95"></div>
      
      {/* Motif décoratif subtil */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-32 h-32 rounded-full border-2 border-ocre"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 rounded-full border-2 border-sage"></div>
        <div className="absolute top-1/3 left-1/4 w-16 h-16 rounded-full border border-terracotta"></div>
      </div>
      
      <div className="section relative">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            
            {/* Badge d'authenticité */}
            <motion.div 
              initial={{opacity:0,y:20}} 
              animate={{opacity:1,y:0}}
              transition={{duration:0.6}}
              className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md mb-8 border border-beige-dark"
            >
              <Utensils size={18} className="text-sage" />
              <span className="text-sm font-medium text-gray-700">Cuisine du terroir depuis 2018</span>
            </motion.div>

            {/* Titre principal avec serif élégante */}
            <motion.h1 
              initial={{opacity:0,y:30}} 
              animate={{opacity:1,y:0}}
              transition={{duration:0.8, delay:0.2}}
              className="font-serif text-5xl md:text-7xl font-semibold text-gray-800 mb-6 leading-tight"
            >
              Le Patio
            </motion.h1>
            
            {/* Tagline */}
            <motion.p 
              initial={{opacity:0,y:20}} 
              animate={{opacity:1,y:0}}
              transition={{duration:0.6, delay:0.4}}
              className="font-serif text-xl md:text-2xl text-ocre mb-8 italic"
            >
              Cuisine du terroir, esprit moderne
            </motion.p>
            
            {/* Description */}
            <motion.p 
              initial={{opacity:0,y:20}} 
              animate={{opacity:1,y:0}}
              transition={{duration:0.6, delay:0.5}}
              className="text-lg text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto"
            >
              Au cœur de Montauban, découvrez une cuisine authentique qui célèbre les saveurs d'Occitanie 
              dans un cadre chaleureux mêlant tradition et modernité.
            </motion.p>

            {/* Informations pratiques */}
            <motion.div 
              initial={{opacity:0,y:20}} 
              animate={{opacity:1,y:0}}
              transition={{duration:0.6, delay:0.6}}
              className="flex flex-wrap justify-center gap-6 mb-10 text-sm text-gray-600"
            >
              <div className="flex items-center gap-2 bg-white px-4 py-3 rounded-lg shadow-sm">
                <MapPin size={16} className="text-sage" />
                <span>Centre historique • Montauban</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-3 rounded-lg shadow-sm">
                <Clock size={16} className="text-ocre" />
                <span>Mar-Dim • 12h-14h • 19h-22h</span>
              </div>
            </motion.div>

            {/* Boutons CTA */}
            <motion.div 
              initial={{opacity:0,y:20}} 
              animate={{opacity:1,y:0}}
              transition={{duration:0.6, delay:0.7}}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link 
                href="/reservation" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-terracotta text-white font-semibold rounded-lg hover:bg-terracotta-dark transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                <Calendar size={18} />
                Réservez votre table
              </Link>
              <Link 
                href="/menu" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-ocre-dark font-semibold border-2 border-ocre rounded-lg hover:bg-ocre hover:text-white transition-all duration-300 shadow-md"
              >
                Découvrir la carte
              </Link>
            </motion.div>

            {/* Éléments de confiance */}
            <motion.div 
              initial={{opacity:0}} 
              animate={{opacity:1}}
              transition={{duration:0.6, delay:0.8}}
              className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-gray-500"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-sage rounded-full"></div>
                <span>Produits locaux</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-terracotta rounded-full"></div>
                <span>Terrasse ombragée</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-ocre rounded-full"></div>
                <span>Cuisine maison</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Indication de scroll */}
      <motion.div 
        initial={{opacity:0}} 
        animate={{opacity:1}}
        transition={{duration:0.6, delay:1}}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  );
}