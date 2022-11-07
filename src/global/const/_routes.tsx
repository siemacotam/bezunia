import { About, Contact, Home, Menu, Offer } from "src/pages";

export const routes = [
  { path: "/bezunia", component: <Home /> },
  { path: "/bezunia/offer", component: <Offer />, label: "Oferta" },
  { path: "/bezunia/menu", component: <Menu />, label: "Menu" },
  { path: "/bezunia/about", component: <About />, label: "O nas" },
  { path: "/bezunia/contact", component: <Contact />, label: "Kontakt" },
];
