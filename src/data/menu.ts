export type MenuItem = {
  id: string; title: string; desc: string; price: number; category: "Entrées"|"Plats"|"Desserts"|"Boissons";
};

export const MENU: MenuItem[] = [
  { id:"e1", title:"Salade du Patio", desc:"Tomates anciennes, burrata, pesto basilic", price:10.5, category:"Entrées" },
  { id:"p1", title:"Magret de canard", desc:"Jus corsé, purée de patate douce", price:21, category:"Plats" },
  { id:"p2", title:"Pâtes fraîches aux cèpes", desc:"Crème légère, parmesan", price:18.5, category:"Plats" },
  { id:"d1", title:"Tarte citron revisitée", desc:"Crème citron, sablé amande", price:8.5, category:"Desserts" },
  { id:"b1", title:"Verre de Gaillac", desc:"Rouge AOP", price:6, category:"Boissons" },
];
