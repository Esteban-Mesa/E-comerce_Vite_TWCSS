import { useState, useEffect } from "react";

const URL = "https://fakestoreapi.com/products";

function useGetProducts({ type }) {
  const [products, setProducts] = useState(null);
  const [loadingProducts, setLoadingProducts] = useState(true);
  const [errorProducts, setErrorProducts] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(URL);

        if (!response.ok) {
          throw new Error("La solicitud no fue exitosa");
        }

        const jsonData = await response.json();
        setProducts(jsonData);
        setLoadingProducts(false);
      } catch (error) {
        console.log(error);
        setErrorProducts(true);
        setLoadingProducts(false);
      }
    }

    fetchData();
  }, []);

  return {
    products,
    loadingProducts,
    errorProducts,
  };
}
export default useGetProducts;
