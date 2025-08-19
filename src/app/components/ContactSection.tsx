"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  MapPin, 
  Clock, 
  Phone, 
  Mail, 
  Calendar, 
  Car, 
  Train, 
  Utensils,
  Users,
  Heart,
  Instagram,
  Facebook
} from "lucide-react";

export default function ContactSection() {
  const openingHours = [
    { day: "Lundi", hours: "Fermé", closed: true },
    { day: "Mardi - Vendredi", hours: "12h00 - 14h00 • 19h00 - 22h00", closed: false },
    { day: "Samedi", hours: "12h00 - 14h30 • 19h00 - 22h30", closed: false },
    { day: "Dimanche", hours: "12h00 - 15h00", closed: false }
  ];

  const services = [
    { 
      icon: Users, 
      title: "Groupes & Événements", 
      description: "Privatisation possible jusqu'à 45 personnes",
      color: "sage"
    },
    { 
      icon: Heart, 
      title: "Occasions Spéciales", 
      description: "Menu dégustation sur demande",
      color: "terracotta"
    },
    { 
      icon: Utensils, 
      title: "Service Traiteur", 
      description: "Plats à emporter sur commande",
      color: "ocre"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      sage: "bg-sage text-white",
      ocre: "bg-ocre text-white", 
      terracotta: "bg-terracotta text-white"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.sage;
  };

  return (
    <section className="section bg-beige/30">
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
            Informations Pratiques
          </h2>
          <div className="w-24 h-1 bg-terracotta mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Toutes les informations pour planifier votre visite au Patio : 
            horaires, adresse, réservations et services.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Contact principal */}
          <motion.div
            initial={{opacity:0,x:-30}} 
            whileInView={{opacity:1,x:0}}
            transition={{duration:0.8}}
            viewport={{once:true}}
            className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-8"
          >
            <h3 className="font-serif text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-3">
              <MapPin className="text-terracotta" size={28} />
              Nous Trouver & Réserver
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="text-sage mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-800">Adresse</h4>
                    <p className="text-gray-600">
                      15 Place du Patio<br />
                      82000 Montauban<br />
                      Centre historique
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Phone className="text-terracotta mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-800">Téléphone</h4>
                    <a 
                      href="tel:0563917842" 
                      className="text-terracotta hover:text-terracotta-dark transition-colors"
                    >
                      05 63 91 78 42
                    </a>
                    <p className="text-sm text-gray-500">Réservation conseillée</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Mail className="text-ocre mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-800">Email</h4>
                    <a 
                      href="mailto:contact@lepatio-montauban.fr" 
                      className="text-ocre hover:text-ocre-dark transition-colors"
                    >
                      contact@lepatio-montauban.fr
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Car className="text-sage mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-800">Parking</h4>
                    <p className="text-gray-600">
                      Parking Michelet à 100m<br />
                      Places de stationnement payantes
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Train className="text-ocre mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-800">Transports</h4>
                    <p className="text-gray-600">
                      Gare SNCF à 10 min à pied<br />
                      Arrêt bus "Hôtel de Ville"
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Boutons CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/reservation"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-terracotta text-white font-semibold px-6 py-3 rounded-lg hover:bg-terracotta-dark transition-colors duration-300 shadow-md"
              >
                <Calendar size={18} />
                Réserver en ligne
              </Link>
              <a 
                href="tel:0563917842"
                className="flex-1 inline-flex items-center justify-center gap-2 border-2 border-terracotta text-terracotta font-semibold px-6 py-3 rounded-lg hover:bg-terracotta hover:text-white transition-colors duration-300"
              >
                <Phone size={18} />
                Appeler
              </a>
            </div>
          </motion.div>

          {/* Horaires */}
          <motion.div
            initial={{opacity:0,x:30}} 
            whileInView={{opacity:1,x:0}}
            transition={{duration:0.8}}
            viewport={{once:true}}
            className="bg-white rounded-2xl shadow-lg p-6"
          >
            <h3 className="font-serif text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <Clock className="text-sage" size={24} />
              Horaires
            </h3>
            
            <div className="space-y-3">
              {openingHours.map((schedule, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b border-beige last:border-0">
                  <span className="font-medium text-gray-700">{schedule.day}</span>
                  <span className={`text-sm ${schedule.closed ? 'text-gray-400 italic' : 'text-gray-600'}`}>
                    {schedule.hours}
                  </span>
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-beige/50 rounded-lg">
              <p className="text-sm text-gray-600 text-center">
                <strong>Service continu</strong> le dimanche<br />
                <strong>Dernière commande</strong> 30min avant fermeture
              </p>
            </div>
          </motion.div>
        </div>

        {/* Services additionnels */}
        <motion.div
          initial={{opacity:0,y:30}} 
          whileInView={{opacity:1,y:0}}
          transition={{duration:0.8}}
          viewport={{once:true}}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className={`w-16 h-16 rounded-full ${getColorClasses(service.color)} flex items-center justify-center mx-auto mb-4`}>
                  <IconComponent size={24} />
                </div>
                <h4 className="font-serif text-lg font-semibold text-gray-800 mb-2">
                  {service.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </motion.div>

        {/* Réseaux sociaux et newsletter */}
        <motion.div
          initial={{opacity:0,y:30}} 
          whileInView={{opacity:1,y:0}}
          transition={{duration:0.8}}
          viewport={{once:true}}
          className="bg-gradient-to-r from-terracotta to-terracotta-dark text-white rounded-2xl p-8 text-center"
        >
          <h3 className="font-serif text-2xl font-semibold mb-4">
            Suivez-nous
          </h3>
          <p className="text-terracotta-light mb-6 max-w-2xl mx-auto">
            Retrouvez nos dernières créations culinaires, nos événements spéciaux 
            et l'ambiance du jour sur nos réseaux sociaux.
          </p>
          
          <div className="flex justify-center gap-6 mb-8">
            <a 
              href="https://instagram.com/lepatio_montauban" 
              className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram size={20} />
              <span className="hidden sm:inline">Instagram</span>
            </a>
            <a 
              href="https://facebook.com/lepatio.montauban" 
              className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors duration-300"
              aria-label="Facebook"
            >
              <Facebook size={20} />
              <span className="hidden sm:inline">Facebook</span>
            </a>
          </div>
          
          <div className="max-w-md mx-auto">
            <p className="text-sm text-terracotta-light mb-4">
              Inscrivez-vous à notre newsletter pour recevoir nos nouveautés
            </p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Votre email" 
                className="flex-1 px-4 py-2 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button className="bg-white text-terracotta font-semibold px-6 py-2 rounded-lg hover:bg-beige transition-colors duration-300">
                S'inscrire
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}