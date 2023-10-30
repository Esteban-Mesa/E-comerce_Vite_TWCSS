import { createContext, useState } from "react";

export const ShoppingCartContex = createContext();

export function ShoppingCartProvider({ children }) {
  // Shopping Cart • increment quantity
  const [cartProducts, setCartProducts] = useState([]);
  const count = cartProducts.length;

  // Shopping Cart • Oreder
  const [order, setOrder] = useState([]);

  // Checkout side menu • Open/Close
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

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
        isProductDetailOpen,
        openProductDetail,
        closeProductDetail,
        productToShow,
        setProductToShow,
        cartProducts,
        setCartProducts,
        isCheckoutSideMenuOpen,
        openCheckoutSideMenu,
        closeCheckoutSideMenu,
        order,
        setOrder,
      }}>
      {children}
    </ShoppingCartContex.Provider>
  );
}
