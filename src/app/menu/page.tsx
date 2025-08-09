import { MENU, MenuItem } from "@/data/menu";
import Navbar from "../components/Navbar";

const categories = ["Entrées", "Plats", "Desserts", "Boissons"] as const;

export default function MenuPage() {
  return (
    <>
      <Navbar />
      <main className="section">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-6">La carte</h1>
          {categories.map((cat) => (
            <section key={cat} className="mb-10">
              <h2 className="text-xl font-bold mb-4">{cat}</h2>
              <ul className="grid md:grid-cols-2 gap-4">
                {(MENU as MenuItem[]).filter((m) => m.category === cat).map((item: MenuItem) => (
                  <li
                    key={item.id}
                    className="p-5 rounded-2xl border bg-white flex items-start justify-between gap-4"
                  >
                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-sm text-neutral-600 mt-1">
                        {item.desc}
                      </p>
                    </div>
                    <span className="font-semibold">
                      {item.price.toFixed(2)}€
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </main>
    </>
  );
}
