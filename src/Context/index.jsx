import { createContext } from "react";

const ShoppingCartContex = createContext();

export function ShoppingCartProvider({ children }) {
  return <ShoppingCartContex.Provider>{children}</ShoppingCartContex.Provider>;
}
