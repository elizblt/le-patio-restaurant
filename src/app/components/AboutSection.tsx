"use client";
import { motion } from "framer-motion";
import { Award, Heart, Leaf, Users, MapPin, Calendar } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="section bg-white">
      <div className="container">
        {/* En-tête de section */}
        <motion.div 
          initial={{opacity:0,y:30}} 
          whileInView={{opacity:1,y:0}}
          transition={{duration:0.8}}
          viewport={{once:true}}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-gray-800 mb-6">
            Notre Histoire
          </h2>
          <div className="w-24 h-1 bg-terracotta mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Au cœur de Montauban, Le Patio cultive l'art de vivre occitan depuis 2018, 
            dans un écrin de verdure qui célèbre le terroir et les traditions culinaires de notre région.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Contenu textuel */}
          <motion.div 
            initial={{opacity:0,x:-30}} 
            whileInView={{opacity:1,x:0}}
            transition={{duration:0.8}}
            viewport={{once:true}}
            className="space-y-6"
          >
            <div className="bg-beige p-8 rounded-xl">
              <h3 className="font-serif text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-3">
                <MapPin className="text-sage" size={24} />
                Un Lieu d'Exception
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Installé dans un ancien hôtel particulier du XVIIIe siècle, Le Patio a su préserver 
                l'âme historique de Montauban tout en s'ouvrant à la modernité. Nos murs de briques roses, 
                typiques de l'architecture toulousaine, abritent une cuisine qui honore le patrimoine 
                gastronomique d'Occitanie.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Notre terrasse ombragée, véritable jardin secret en plein centre-ville, 
                offre une parenthèse de fraîcheur sous les platanes centenaires.
              </p>
            </div>

            <div className="bg-sage/10 p-8 rounded-xl">
              <h3 className="font-serif text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-3">
                <Leaf className="text-sage" size={24} />
                L'Esprit du Terroir
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Chef Thomas Mercier</strong>, enfant du Quercy, a forgé sa passion dans les cuisines 
                étoilées avant de revenir aux sources. Sa cuisine marie technique raffinée et produits 
                authentiques du Tarn-et-Garonne : chasselas de Moissac, ail violet de Lautrec, 
                agneau des causses du Quercy.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Chaque assiette raconte l'histoire de nos producteurs partenaires et révèle 
                les saveurs généreuses de notre belle région occitane.
              </p>
            </div>
          </motion.div>

          {/* Galerie visuelle */}
          <motion.div 
            initial={{opacity:0,x:30}} 
            whileInView={{opacity:1,x:0}}
            transition={{duration:0.8}}
            viewport={{once:true}}
            className="space-y-4"
          >
            {/* Image principale */}
            <div className="aspect-[4/3] rounded-xl bg-terracotta/20 p-8 flex items-center justify-center border-2 border-terracotta/30">
              <div className="text-center">
                <div className="text-6xl mb-4">🏛️</div>
                <h4 className="font-serif text-xl font-semibold text-gray-800 mb-2">
                  Hôtel Particulier XVIIIe
                </h4>
                <p className="text-gray-600">Architecture authentique • Briques roses</p>
              </div>
            </div>
            
            {/* Grille d'éléments */}
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square rounded-lg bg-sage/20 p-4 flex flex-col items-center justify-center border-2 border-sage/30">
                <div className="text-3xl mb-2">👨‍🍳</div>
                <h5 className="font-semibold text-gray-800 text-sm text-center">Chef Thomas</h5>
                <p className="text-xs text-gray-600 text-center">Formation étoilée</p>
              </div>
              
              <div className="aspect-square rounded-lg bg-ocre/20 p-4 flex flex-col items-center justify-center border-2 border-ocre/30">
                <div className="text-3xl mb-2">🌿</div>
                <h5 className="font-semibold text-gray-800 text-sm text-center">Terrasse</h5>
                <p className="text-xs text-gray-600 text-center">Jardin secret</p>
              </div>
              
              <div className="aspect-square rounded-lg bg-beige-dark/30 p-4 flex flex-col items-center justify-center border-2 border-beige-dark">
                <div className="text-3xl mb-2">🍇</div>
                <h5 className="font-semibold text-gray-800 text-sm text-center">Terroir</h5>
                <p className="text-xs text-gray-600 text-center">Produits locaux</p>
              </div>
              
              <div className="aspect-square rounded-lg bg-bois/30 p-4 flex flex-col items-center justify-center border-2 border-bois">
                <div className="text-3xl mb-2">🏆</div>
                <h5 className="font-semibold text-gray-800 text-sm text-center">Excellence</h5>
                <p className="text-xs text-gray-600 text-center">Bib Gourmand</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Statistiques et reconnaissances */}
        <motion.div 
          initial={{opacity:0,y:30}} 
          whileInView={{opacity:1,y:0}}
          transition={{duration:0.8}}
          viewport={{once:true}}
          className="grid md:grid-cols-4 gap-8 bg-beige rounded-2xl p-8"
        >
          <div className="text-center">
            <div className="flex items-center justify-center w-16 h-16 bg-sage rounded-full mx-auto mb-4">
              <Calendar className="text-white" size={24} />
            </div>
            <div className="text-3xl font-bold text-gray-800 mb-2">6</div>
            <div className="text-sm text-gray-600 uppercase tracking-wide">Années d'Excellence</div>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center w-16 h-16 bg-terracotta rounded-full mx-auto mb-4">
              <Users className="text-white" size={24} />
            </div>
            <div className="text-3xl font-bold text-gray-800 mb-2">18</div>
            <div className="text-sm text-gray-600 uppercase tracking-wide">Producteurs Partenaires</div>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center w-16 h-16 bg-ocre rounded-full mx-auto mb-4">
              <Heart className="text-white" size={24} />
            </div>
            <div className="text-3xl font-bold text-gray-800 mb-2">4.8</div>
            <div className="text-sm text-gray-600 uppercase tracking-wide">Note Client</div>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center w-16 h-16 bg-sage-dark rounded-full mx-auto mb-4">
              <Award className="text-white" size={24} />
            </div>
            <div className="text-3xl font-bold text-gray-800 mb-2">2023</div>
            <div className="text-sm text-gray-600 uppercase tracking-wide">Bib Gourmand</div>
          </div>
        </motion.div>

        {/* Citation du chef */}
        <motion.div 
          initial={{opacity:0,y:30}} 
          whileInView={{opacity:1,y:0}}
          transition={{duration:0.8, delay:0.2}}
          viewport={{once:true}}
          className="text-center mt-16 max-w-4xl mx-auto"
        >
          <div className="bg-white p-8 rounded-2xl shadow-md border-l-4 border-terracotta">
            <blockquote className="font-serif text-xl md:text-2xl text-gray-700 italic leading-relaxed mb-6">
              "Ma cuisine, c'est l'histoire de notre région racontée dans l'assiette. 
              Chaque produit choisi, chaque recette créée célèbre la richesse de l'Occitanie 
              et la générosité de ses artisans."
            </blockquote>
            <cite className="text-sage-dark font-semibold">— Thomas Mercier, Chef & Propriétaire</cite>
          </div>
        </motion.div>
      </div>
    </section>
  );
}