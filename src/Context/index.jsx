import { createContext, useState } from "react";

export const ShoppingCartContex = createContext();

export function ShoppingCartProvider({ children }) {
  // Shopping Cart • increment quantity
  const [count, setCount] = useState(0);

  // product deatail • Open/Close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);

  // product deatail • Show product
  const [productToShow, setProductToShow] = useState({});

  return (
    <ShoppingCartContex.Provider
      value={{
        count,
        setCount,
        isProductDetailOpen,
        openProductDetail,
        closeProductDetail,
        productToShow,
        setProductToShow,
      }}>
      {children}
    </ShoppingCartContex.Provider>
  );
}
