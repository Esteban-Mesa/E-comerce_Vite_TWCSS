import React from "react";
import useGetProducts from "../../Hooks/GetProducts";
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import ProductDeatail from "../../ProductDetail";

function Home() {
  const { products, loadingProducts, errorProducts } = useGetProducts("");
  return (
    <Layout>
      {loadingProducts ? "loading" : null}
      {errorProducts ? "not found" : null}
      <section className="grid grap-4 grid-cols-2 lg:grid-cols-4 justify-items-center w-full max-w-screen-lg">
        {products?.map((data) => (
          <Card image={data.image} title={data.title} price={data.price} category={data.category} />
        ))}
      </section>
      <ProductDeatail />
    </Layout>
  );
}

export default Home;
