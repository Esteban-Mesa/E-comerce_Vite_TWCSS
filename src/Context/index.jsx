import { createContext, useState, useEffect } from "react";
import useGetProducts from "../Hooks/GetProducts";

export const ShoppingCartContex = createContext();

export function ShoppingCartProvider({ children }) {
  // Get Products
  const { products, loadingProducts, errorProducts } = useGetProducts("");

  // Get Products by title
  const [searchByTitle, setSearchByTitle] = useState(null);

  // Filtered products
  const [filteredProducts, setFilteredProducts] = useState(null);

  const filteredProductsByTitle = (products, searchByTitle) => {
    return products?.filter((products) =>
      products.title.toLocaleLowerCase().includes(searchByTitle.toLocaleLowerCase()),
    );
  };

  useEffect(() => {
    if (searchByTitle) {
      setFilteredProducts(filteredProductsByTitle(products, searchByTitle));
    }
  }, [products, searchByTitle]);

  // Shopping Cart • increment quantity
  const [cartProducts, setCartProducts] = useState([]);
  const count = cartProducts.length;

  // Shopping Cart • Oreder
  const [order, setOrder] = useState([]);

  // Checkout side menu • Open/Close
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

  // Product deatail • Open/Close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);

  // Product deatail • Show product
  const [productToShow, setProductToShow] = useState({});

  return (
    <ShoppingCartContex.Provider
      value={{
        filteredProducts,
        products,
        loadingProducts,
        errorProducts,
        searchByTitle,
        setSearchByTitle,
        isProductDetailOpen,
        openProductDetail,
        closeProductDetail,
        productToShow,
        setProductToShow,
        count,
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
