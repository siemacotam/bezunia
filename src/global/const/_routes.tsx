import { About, Contact, Home, Offer } from "src/pages";

export const routes = [
  { path: "/bezunia", component: <Home /> },
  { path: "/bezunia/offer", component: <Offer />, label: "Oferta" },
  { path: "/bezunia/about", component: <About />, label: "O nas" },
  { path: "/bezunia/contact", component: <Contact />, label: "Kontakt" },
];
