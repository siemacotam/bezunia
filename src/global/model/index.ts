import { categoriesNames } from "../const";

export type Values<T> = T[keyof T];

export type ProductCategories = Values<typeof categoriesNames>;

export interface Category {
  name: ProductCategories;
  label: string;
  img: string;
  path: string;
}

export interface Product {
  name: string;
  category: ProductCategories;
  img: string;
  price: string;
  description: string;
}

export interface Offer {
  name: string;
  img: string;
  description: string;
}
