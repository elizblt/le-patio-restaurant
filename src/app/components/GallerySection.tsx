"use client";
import { motion } from "framer-motion";
import { Camera, TreePine, Home, Utensils, Sun, Users } from "lucide-react";

export default function GallerySection() {
  const galleryItems = [
    {
      id: 1,
      title: "La Terrasse Ombragée",
      description: "Notre jardin secret au cœur de Montauban",
      icon: TreePine,
      color: "sage",
      size: "large"
    },
    {
      id: 2,
      title: "Salle Intérieure",
      description: "Ambiance chaleureuse et feutrée",
      icon: Home,
      color: "ocre",
      size: "medium"
    },
    {
      id: 3,
      title: "Cuisine Ouverte",
      description: "Notre chef à l'œuvre",
      icon: Utensils,
      color: "terracotta",
      size: "medium"
    },
    {
      id: 4,
      title: "Déjeuner en Terrasse",
      description: "Moments ensoleillés",
      icon: Sun,
      color: "bois",
      size: "small"
    },
    {
      id: 5,
      title: "Soirées Conviviales",
      description: "Atmosphère intimiste le soir",
      icon: Users,
      color: "sage",
      size: "small"
    },
    {
      id: 6,
      title: "Détails Déco",
      description: "Matériaux authentiques",
      icon: Camera,
      color: "ocre",
      size: "small"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      sage: "bg-sage/20 border-sage/40 text-sage-dark",
      ocre: "bg-ocre/20 border-ocre/40 text-ocre-dark", 
      terracotta: "bg-terracotta/20 border-terracotta/40 text-terracotta-dark",
      bois: "bg-bois/20 border-bois/40 text-bois-dark"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.sage;
  };

  const getSizeClasses = (size: string) => {
    const sizeMap = {
      large: "md:col-span-2 md:row-span-2",
      medium: "md:col-span-2 md:row-span-1", 
      small: "md:col-span-1 md:row-span-1"
    };
    return sizeMap[size as keyof typeof sizeMap] || sizeMap.small;
  };

  return (
    <section className="section bg-white">
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
            Découvrir les Lieux
          </h2>
          <div className="w-24 h-1 bg-terracotta mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Plongez dans l'atmosphère unique du Patio, où chaque espace raconte 
            une histoire et invite à la détente et au plaisir de la table.
          </p>
        </motion.div>

        {/* Grille de galerie */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          {galleryItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{opacity:0,scale:0.9}} 
                whileInView={{opacity:1,scale:1}}
                transition={{duration:0.6, delay:index * 0.1}}
                viewport={{once:true}}
                className={`
                  ${getSizeClasses(item.size)} 
                  ${getColorClasses(item.color)}
                  rounded-2xl border-2 p-6 flex flex-col items-center justify-center text-center
                  hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer
                  min-h-[200px] group
                `}
              >
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.size === 'large' ? (
                    <div className="text-8xl mb-4">
                      {item.id === 1 ? '🌳' : '🏛️'}
                    </div>
                  ) : (
                    <div className="w-16 h-16 rounded-full bg-white/80 flex items-center justify-center mb-4 shadow-md">
                      <IconComponent size={28} />
                    </div>
                  )}
                </div>
                
                <h3 className="font-serif text-lg md:text-xl font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-sm opacity-80 leading-relaxed">
                  {item.description}
                </p>
                
                {item.size === 'large' && (
                  <div className="mt-6 flex items-center gap-2 text-xs opacity-70">
                    <Camera size={14} />
                    <span>Photo à venir</span>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Section ambiance et matériaux */}
        <motion.div
          initial={{opacity:0,y:30}} 
          whileInView={{opacity:1,y:0}}
          transition={{duration:0.8}}
          viewport={{once:true}}
          className="bg-beige rounded-2xl p-8 md:p-12"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-serif text-3xl font-semibold text-gray-800 mb-6">
                Une Ambiance Authentique
              </h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  <strong>Matériaux nobles :</strong> Nos espaces mêlent harmonieusement 
                  la brique rose toulousaine, le bois patiné et la terre cuite naturelle, 
                  créant une atmosphère chaleureuse et authentiquement occitane.
                </p>
                <p>
                  <strong>Végétation luxuriante :</strong> La terrasse, véritable écrin 
                  de verdure, offre un havre de paix avec ses platanes centenaires, 
                  ses plantes méditerranéennes et son petit bassin apaisant.
                </p>
                <p>
                  <strong>Éclairage tamisé :</strong> Le soir venu, notre éclairage 
                  soigneusement pensé crée une ambiance intimiste et romantique, 
                  parfaite pour vos dîners en amoureux.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-6 shadow-sm text-center">
                <div className="text-3xl mb-3">🧱</div>
                <h4 className="font-semibold text-gray-800 mb-2">Brique Rose</h4>
                <p className="text-sm text-gray-600">Architecture toulousaine authentique</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm text-center">
                <div className="text-3xl mb-3">🌿</div>
                <h4 className="font-semibold text-gray-800 mb-2">Végétation</h4>
                <p className="text-sm text-gray-600">Plantes méditerranéennes</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm text-center">
                <div className="text-3xl mb-3">🪵</div>
                <h4 className="font-semibold text-gray-800 mb-2">Bois Patiné</h4>
                <p className="text-sm text-gray-600">Mobilier authentique</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm text-center">
                <div className="text-3xl mb-3">🏺</div>
                <h4 className="font-semibold text-gray-800 mb-2">Terre Cuite</h4>
                <p className="text-sm text-gray-600">Décoration artisanale</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Témoignages sur l'ambiance */}
        <motion.div
          initial={{opacity:0,y:30}} 
          whileInView={{opacity:1,y:0}}
          transition={{duration:0.8}}
          viewport={{once:true}}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-2 h-2 bg-terracotta rounded-full"></div>
              ))}
            </div>
            <blockquote className="font-serif text-xl md:text-2xl text-gray-700 italic leading-relaxed mb-4">
              "La terrasse du Patio est un véritable bijou ! On s'y sent comme 
              dans un jardin secret, loin de l'agitation urbaine. L'ambiance est 
              parfaite pour un déjeuner d'affaires ou un dîner romantique."
            </blockquote>
            <cite className="text-sage-dark font-semibold">
              — Marie L., Cliente fidèle
            </cite>
          </div>
        </motion.div>
      </div>
    </section>
  );
}