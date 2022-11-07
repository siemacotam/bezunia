import photo from "src/images/img.jpg";
import { Category, ProductCategories } from "../model";

export const categoriesNames = {
  all: "all",
  bezy: "bezy",
  serniki: "serniki",
  ptysie: "ptysie",
  muffinki: "muffinki",
  tarty: "tarty",
  brownies: "brownies",
};

export const categories: Category[] = [
  {
    name: "all" as ProductCategories,
    label: categoriesNames.all,
    img: "",
    path: "menu",
  },
  {
    name: "bezy" as ProductCategories,
    label: categoriesNames.bezy,
    img: photo,
    path: "menu",
  },
  {
    name: "serniki" as ProductCategories,
    label: categoriesNames.serniki,
    img: photo,
    path: "menu",
  },
  {
    name: "ptysie" as ProductCategories,
    label: categoriesNames.ptysie,
    img: photo,
    path: "menu",
  },
  {
    name: "muffinki" as ProductCategories,
    label: categoriesNames.muffinki,
    img: photo,
    path: "menu",
  },
  {
    name: "tarty" as ProductCategories,
    label: categoriesNames.tarty,
    img: photo,
    path: "menu",
  },
  {
    name: "brownies" as ProductCategories,
    label: categoriesNames.brownies,
    img: photo,
    path: "menu",
  },
];
