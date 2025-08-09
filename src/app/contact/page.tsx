import Navbar from "../components/Navbar";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="section">
        <div className="container grid md:grid-cols-2 gap-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold mb-4">Contact & Horaires</h1>
            <p>12 Rue (fictive) du Patio, 82000 Montauban</p>
            <p className="mt-2">Tél : 05 63 00 00 00</p>
            <p className="mt-2">Lun–Sam : 12:00–14:00 / 19:00–22:30</p>
            <p className="mt-6 text-sm text-neutral-600">Parking place Nationale – 3 min à pied.</p>
          </div>
          <iframe
            className="w-full h-80 rounded-2xl border"
            loading="lazy"
            src="https://www.openstreetmap.org/export/embed.html?bbox=1.342%2C44.017%2C1.37%2C44.03&marker=44.02%2C1.35&layer=mapnik"
          />
        </div>
      </main>
    </>
  );
}
