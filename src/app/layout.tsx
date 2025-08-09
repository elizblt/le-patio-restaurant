import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Le Patio – Montauban",
  description: "Cuisine de saison, terrasse ombragée au cœur de Montauban. Réservez votre table.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-[#f9f9f9] text-[#111] antialiased">
        {children}
      </body>
    </html>
  );
}
