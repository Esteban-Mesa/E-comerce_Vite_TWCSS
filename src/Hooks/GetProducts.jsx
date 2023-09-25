import { useState, useEffect } from "react";

const URL = "https://fakestoreapi.com/products";

function useGetProducts({ type }) {
  const [products, setProducts] = useState(null);
  const [loadingProducts, setLoadingProducts] = useState(true);
  const [errorProducts, setErrorProducts] = useState(false);

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoadingProducts(false);
      })
      .catch((error) => {
        console.log(error);
        setErrorProducts(true);
        setLoadingProducts(false);
      });
  }, []);

  return {
    products,
    loadingProducts,
    errorProducts,
  };
}
export default useGetProducts;
