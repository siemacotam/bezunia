import { About, Contact, Home, Offer } from "src/pages";

export const routes = [
  { path: "/", component: <Home /> },
  { path: "/offer", component: <Offer />, label: "Oferta" },
  { path: "/about", component: <About />, label: "O nas" },
  { path: "/contact", component: <Contact />, label: "Kontakt" },
];
