import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Le Patio – Montauban | Restaurant Gastronomique",
  description: "Restaurant gastronomique à Montauban. Cuisine française raffinée, produits locaux, terrasse ombragée. Chef Thomas Mercier. Réservation recommandée.",
  keywords: "restaurant Montauban, gastronomie, cuisine française, terrasse, produits locaux, chef, réservation, Tarn-et-Garonne",
  authors: [{ name: "Le Patio Montauban" }],
  creator: "Le Patio",
  publisher: "Le Patio",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://lepatio-montauban.fr",
    title: "Le Patio – Restaurant Gastronomique à Montauban",
    description: "Découvrez notre cuisine française raffinée dans un cadre exceptionnel. Terrasse ombragée, produits locaux, service d'excellence.",
    siteName: "Le Patio Montauban",
    images: [
      {
        url: "/le-patio-hero.png",
        width: 1200,
        height: 630,
        alt: "Le Patio - Restaurant Montauban",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Le Patio – Restaurant Gastronomique à Montauban",
    description: "Cuisine française raffinée, produits locaux, terrasse ombragée au cœur de Montauban.",
    images: ["/le-patio-hero.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code-here",
  },
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
