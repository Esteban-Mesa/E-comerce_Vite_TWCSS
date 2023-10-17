import React from "react";
import { useContext } from "react";
import useGetProducts from "../../Hooks/GetProducts";
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import ProductDeatail from "../../ProductDetail";
import { ShoppingCartContex } from "../../Context";

function Home() {
  const { products, loadingProducts, errorProducts } = useGetProducts("");
  const { isProductDetailOpen, isCheckoutSideMenuOpen } = useContext(ShoppingCartContex);

  const accommodateProducts = () => {
    if (isProductDetailOpen || isCheckoutSideMenuOpen) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <Layout>
      <div className={`${accommodateProducts() ? "w-full" : "w-full flex justify-center"}`}>
        {loadingProducts ? "loading" : null}
        {errorProducts ? "not found" : null}
        <section
          className={`grid grap-4 grid-cols-2 lg:grid-cols-4 justify-items-center  ${
            accommodateProducts() ? "pr-96" : "w-full max-w-screen-lg"
          }`}>
          {products?.map((data) => (
            <Card
              image={data.image}
              title={data.title}
              price={data.price}
              category={data.category}
              description={data.description}
              key={data.id}
              id={data.id}
            />
          ))}
        </section>
      </div>
      <ProductDeatail />
    </Layout>
  );
}

export default Home;
