import Hero from "./components/Hero";
import Navbar from "./components/Navbar";


export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <section className="section bg-white border-y">
          <div className="container grid md:grid-cols-3 gap-6">
            {["Produits locaux","Terrasse ombragée","Service soigné"].map((t,i)=>(
              <div key={i} className="p-6 rounded-2xl border bg-[#fcfcfc]">
                <h3 className="font-semibold">{t}</h3>
                <p className="text-sm text-neutral-600 mt-2">Texte descriptif court et rassurant.</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <footer className="section text-center text-sm text-neutral-600">
        © {new Date().getFullYear()} Le Patio – Montauban
      </footer>
    </>
  );
}
