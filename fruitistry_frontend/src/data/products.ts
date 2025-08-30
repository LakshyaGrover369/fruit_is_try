export interface Product {
  id: number; // Changed from string to number based on your data
  name: string;
  description: string;
  price: number;
  weight: string;
  image: string;
  isPremium?: boolean; // Added optional premium flag
}

export const products: Product[] = [
  {
    id: 1,
    name: "Nature's Candy Basket",
    description:
      "A 5kg basket filled with Apple, Pear, Kiwi, Dragon Fruit, Malta, Amrood, and Pomegranate.",
    price: 2000,
    weight: "5kg",
    image: "/basket.png",
    isPremium: true, // Marked as premium
  },
  {
    id: 2,
    name: "Fresh Apple",
    description: "Handpicked premium apples.",
    price: 400,
    weight: "1kg",
    image: "/apple.png",
    isPremium: false,
  },
  {
    id: 3,
    name: "Juicy Pear",
    description: "Sweet and fresh pears.",
    price: 350,
    weight: "1kg",
    image: "/pear.png",
    isPremium: false,
  },
  {
    id: 4,
    name: "Exotic Kiwi",
    description: "Rich in Vitamin C, fresh kiwis.",
    price: 500,
    weight: "1kg",
    image: "/kiwi.png",
    isPremium: true, // Marked as premium
  },
  {
    id: 5,
    name: "Dragon Fruit",
    description: "Exotic and refreshing dragon fruits.",
    price: 600,
    weight: "1kg",
    image: "/dragon.png",
    isPremium: true, // Marked as premium
  },
  {
    id: 6,
    name: "Malta / Mini Malta",
    description: "Citrus-rich malta fruits.",
    price: 450,
    weight: "1kg",
    image: "/malta.png",
    isPremium: false,
  },
  {
    id: 7,
    name: "Amrood (Guava)",
    description: "Freshly picked guavas.",
    price: 300,
    weight: "1kg",
    image: "/amrood.png",
    isPremium: false,
  },
  {
    id: 8,
    name: "Pomegranate",
    description: "Rich in antioxidants, fresh pomegranates.",
    price: 550,
    weight: "1kg",
    image: "/pomegranate.png",
    isPremium: true, // Marked as premium
  },
];
