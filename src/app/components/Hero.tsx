"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="section">
      <div className="container grid md:grid-cols-2 gap-10 items-center">
        <motion.div initial={{opacity:0,y:10}} animate={{opacity:1,y:0}}>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Le Patio – Montauban
          </h1>
          <p className="mt-4 text-neutral-700 text-lg">
            Cuisine de saison, produits locaux, terrasse ombragée en plein cœur de Montauban.
          </p>
          <div className="mt-6 flex gap-3">
            <Link href="/reservation" className="px-5 py-3 rounded-2xl bg-black text-white text-sm font-semibold">
              Réserver une table
            </Link>
            <Link href="/menu" className="px-5 py-3 rounded-2xl border text-sm font-semibold">
              Voir la carte
            </Link>
          </div>
        </motion.div>

        <motion.div initial={{opacity:0,scale:0.98}} animate={{opacity:1,scale:1}}>
          <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-lg bg-[url('/le-patio-hero.png')] bg-cover bg-center" />
          <p className="mt-2 text-xs text-neutral-500">Photo d’ambiance (remplace par une vraie image).</p>
        </motion.div>
      </div>
    </section>
  );
}
