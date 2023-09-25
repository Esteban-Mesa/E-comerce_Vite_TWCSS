import { createContext, useState } from "react";

export const ShoppingCartContex = createContext();

export function ShoppingCartProvider({ children }) {
  const [count, setCount] = useState(0);

  return (
    <ShoppingCartContex.Provider value={{ count, setCount }}>
      {children}
    </ShoppingCartContex.Provider>
  );
}
