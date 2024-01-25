import React from "react";
import { useContext } from "react";
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import ProductDeatail from "../../ProductDetail";
import { ShoppingCartContex } from "../../Context";

function Home() {
  const {
    filteredProducts,
    products,
    filterByCategory,
    loadingProducts,
    errorProducts,
    searchByTitle,
    setSearchByTitle,
    isProductDetailOpen,
    isCheckoutSideMenuOpen,
  } = useContext(ShoppingCartContex);

  console.log(`filtrados: ${filteredProducts?.length}\n productos:${filterByCategory?.length}
  title: ${searchByTitle}`);

  const renderView = () => {
    const itemsToRender = searchByTitle?.length > 0 ? filteredProducts : products;

    if (filterByCategory && searchByTitle == false) {
      return filterByCategory?.map((data) => <Card key={data.id} dataCard={data} />);
    } else if (itemsToRender?.length > 0) {
      return itemsToRender?.map((data) => <Card key={data.id} dataCard={data} />);
    } else {
      return <p>No Results Found</p>;
    }
  };

  const accommodateProducts = () => {
    if (isProductDetailOpen || isCheckoutSideMenuOpen) {
      return true;
    } else {
      return false;
    }
  };
  // setCategoryToFilter(useParams())

  return (
    <Layout>
      <div className="relative flex justify-center w-80 mb-8">
        <h1 className="text-np_black font-medium text-xl">Exclusive products</h1>
      </div>
      <input
        type="text"
        placeholder="Search a product"
        className="bg-np_white rounded-lg border border-np_black w-80 h-8 p-4 mb-4 focus:outline-none"
        onChange={(event) => {
          console.log(filteredProducts);
          setSearchByTitle(event.target.value);
        }}
      />
      <div className={`${accommodateProducts() ? "w-full" : "w-full flex justify-center"}`}>
        {loadingProducts ? "loading" : null}
        {errorProducts ? "not found" : null}
        <section
          className={`grid grap-4 grid-cols-2 lg:grid-cols-4 justify-items-center  ${
            accommodateProducts() ? "pr-96" : "w-full max-w-screen-lg"
          }`}>
          {renderView()}
        </section>
      </div>
      <ProductDeatail />
    </Layout>
  );
}

export default Home;
