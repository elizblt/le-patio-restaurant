export type MenuItem = {
  id: string;
  title: string;
  desc: string;
  price: number;
  category: "Entrées" | "Plats" | "Desserts" | "Boissons";
  isSignature?: boolean;
  allergens?: string[];
};

export const MENU: MenuItem[] = [
  // Entrées
  {
    id: "e1",
    title: "Salade du Patio",
    desc: "Tomates anciennes de nos producteurs locaux, burrata de Bufflonne, pesto de basilic maison, huile d'olive extra vierge",
    price: 12.5,
    category: "Entrées",
    isSignature: true,
    allergens: ["Lait", "Fruits à coque"]
  },
  {
    id: "e2",
    title: "Terrine de foie gras maison",
    desc: "Foie gras de canard mi-cuit, chutney de figues, pain brioché toasté",
    price: 18.0,
    category: "Entrées",
    allergens: ["Gluten", "Œufs"]
  },
  {
    id: "e3",
    title: "Carpaccio de Saint-Jacques",
    desc: "Noix de Saint-Jacques bretonnes, vinaigrette passion-coriandre, avocat, pousses d'épinard",
    price: 16.0,
    category: "Entrées",
    allergens: ["Mollusques"]
  },
  {
    id: "e4",
    title: "Velouté de châtaignes",
    desc: "Châtaignes du Lot, crème de truffe, copeaux de parmesan, croûtons à l'ail",
    price: 9.5,
    category: "Entrées",
    allergens: ["Lait", "Gluten"]
  },
  {
    id: "e5",
    title: "Escargots de Bourgogne",
    desc: "6 escargots, beurre persillé à l'ail et échalotes, toast de campagne",
    price: 11.0,
    category: "Entrées",
    allergens: ["Lait", "Gluten", "Mollusques"]
  },

  // Plats
  {
    id: "p1",
    title: "Magret de canard du Gers",
    desc: "Magret grillé rosé, jus corsé au miel du Quercy, purée de patate douce, légumes de saison confits",
    price: 24.0,
    category: "Plats",
    isSignature: true
  },
  {
    id: "p2",
    title: "Pâtes fraîches aux cèpes",
    desc: "Tagliatelles maison, cèpes des Causses, crème légère à l'ail doux, parmesan 24 mois, persil plat",
    price: 19.5,
    category: "Plats",
    allergens: ["Gluten", "Œufs", "Lait"]
  },
  {
    id: "p3",
    title: "Filet de bœuf Aubrac",
    desc: "Pièce de 200g, sauce aux échalotes et vin rouge, gratin dauphinois, haricots verts aux amandes",
    price: 29.0,
    category: "Plats",
    allergens: ["Lait", "Fruits à coque"]
  },
  {
    id: "p4",
    title: "Pavé de saumon bio",
    desc: "Saumon d'Écosse, beurre blanc au citron vert, riz pilaf aux herbes, julienne de légumes croquants",
    price: 22.0,
    category: "Plats",
    allergens: ["Poissons", "Lait"]
  },
  {
    id: "p5",
    title: "Cassoulet du Chef",
    desc: "Haricots tarbais, confit de canard, saucisse de Toulouse, lard fermier, croûte dorée",
    price: 21.0,
    category: "Plats",
    isSignature: true,
    allergens: ["Gluten"]
  },
  {
    id: "p6",
    title: "Risotto aux champignons",
    desc: "Riz Carnaroli, mélange de champignons des bois, parmesan, truffe d'été (supplément 5€)",
    price: 18.0,
    category: "Plats",
    allergens: ["Lait"]
  },

  // Desserts
  {
    id: "d1",
    title: "Tarte citron revisitée",
    desc: "Crème citron des Cévennes, sablé breton aux amandes, meringue italienne flambée",
    price: 8.5,
    category: "Desserts",
    isSignature: true,
    allergens: ["Gluten", "Œufs", "Lait", "Fruits à coque"]
  },
  {
    id: "d2",
    title: "Fondant au chocolat Valrhona",
    desc: "Cœur coulant, glace vanille bourbon, coulis de fruits rouges, tuile aux amandes",
    price: 9.0,
    category: "Desserts",
    allergens: ["Gluten", "Œufs", "Lait", "Fruits à coque"]
  },
  {
    id: "d3",
    title: "Tiramisu aux fruits de saison",
    desc: "Mascarpone, biscuits à la cuillère, café expresso, fruits de saison selon arrivage",
    price: 7.5,
    category: "Desserts",
    allergens: ["Gluten", "Œufs", "Lait"]
  },
  {
    id: "d4",
    title: "Crème brûlée à la vanille",
    desc: "Vanille de Madagascar, sucre caramélisé, sablé aux noix du Périgord",
    price: 7.0,
    category: "Desserts",
    allergens: ["Lait", "Œufs", "Fruits à coque"]
  },
  {
    id: "d5",
    title: "Soufflé au Grand Marnier",
    desc: "Soufflé chaud, coulis d'orange amère, glace vanille (prévoir 15 min)",
    price: 10.0,
    category: "Desserts",
    allergens: ["Gluten", "Œufs", "Lait"]
  },

  // Boissons
  {
    id: "b1",
    title: "Gaillac Rouge AOP",
    desc: "Château Lastours, millésime 2021, notes fruitées",
    price: 6.0,
    category: "Boissons"
  },
  {
    id: "b2",
    title: "Côtes du Rhône Villages",
    desc: "Domaine de la Janasse, millésime 2020",
    price: 8.0,
    category: "Boissons"
  },
  {
    id: "b3",
    title: "Sancerre Blanc",
    desc: "Domaine Henri Bourgeois, millésime 2022",
    price: 9.5,
    category: "Boissons"
  },
  {
    id: "b4",
    title: "Champagne Brut",
    desc: "Veuve Clicquot, cuvée Brut Carte Jaune",
    price: 12.0,
    category: "Boissons"
  },
  {
    id: "b5",
    title: "Bière artisanale locale",
    desc: "Brasserie du Quercy, blonde houblonnée 33cl",
    price: 4.5,
    category: "Boissons"
  },
  {
    id: "b6",
    title: "Jus de fruits frais",
    desc: "Orange, pomme ou pamplemousse pressés minute",
    price: 4.0,
    category: "Boissons"
  },
  {
    id: "b7",
    title: "Café/Thé",
    desc: "Espresso, café allongé, ou sélection de thés premium",
    price: 2.5,
    category: "Boissons"
  }
];

