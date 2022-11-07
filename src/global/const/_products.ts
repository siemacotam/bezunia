import { Product } from "../model";
import img from "src/images/img.jpg";
import { categoriesNames } from "./_categories";

export const products: Product[] = [
  {
    name: "Beza x",
    img: img,
    price: "10,00 zł",
    description: "Pyszne ciasteczko",
    category: categoriesNames.bezy,
  },
  {
    name: "Beza y",
    img: img,
    price: "10,00 zł",
    description: "Pyszne ciasteczko",
    category: categoriesNames.bezy,
  },
  {
    name: "Beza z",
    img: img,
    price: "10,00 zł",
    description: "Pyszne ciasteczko",
    category: categoriesNames.bezy,
  },
  {
    name: "Beza 2",
    img: img,
    price: "10,00 zł",
    description: "Pyszne ciasteczko",
    category: categoriesNames.bezy,
  },
  {
    name: "Tarta 1",
    img: img,
    price: "20,00 zł",
    description: "Pyszne ciasteczko mniam",
    category: categoriesNames.tarty,
  },
  {
    name: "Tarta 2",
    img: img,
    price: "20,00 zł",
    description: "Pyszne ciasteczko mniam",
    category: categoriesNames.tarty,
  },
  {
    name: "Tarta 3",
    img: img,
    price: "20,00 zł",
    description: "Pyszne ciasteczko mniam",
    category: categoriesNames.tarty,
  },
  {
    name: "Brownies",
    img: img,
    price: "30,00 zł",
    description: "Pyszne ciasteczko mniam pycha",
    category: categoriesNames.brownies,
  },
  {
    name: "Brownies 2",
    img: img,
    price: "30,00 zł",
    description: "Pyszne ciasteczko mniam pycha",
    category: categoriesNames.brownies,
  },
  {
    name: "Brownies 3",
    img: img,
    price: "30,00 zł",
    description: "Pyszne ciasteczko mniam pycha",
    category: categoriesNames.brownies,
  },
];

export const bestsellers: Product[] = [
  products[0],
  products[2],
  products[3],
  products[6],
];
