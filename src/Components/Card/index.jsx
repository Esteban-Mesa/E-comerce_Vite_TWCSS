import { useContext } from "react";
import { ShoppingCartContex } from "../../Context";
import { PlusIcon } from "@heroicons/react/24/outline";

function Card({ title, price, category, image, description }) {
  const {
    count,
    setCount,
    openProductDetail,
    closeProductDetail,
    setProductToShow,
    cartProducts,
    setCartProducts,
    openCheckoutSideMenu,
    closeCheckoutSideMenu,
  } = useContext(ShoppingCartContex);

  const showProduct = (dataProduct) => {
    openProductDetail();
    closeCheckoutSideMenu();
    setProductToShow(dataProduct);
  };

  const addProductsToCart = (event, dataProduct) => {
    event.stopPropagation();
    openCheckoutSideMenu();
    closeProductDetail();
    setCount(count + 1);
    setCartProducts([...cartProducts, dataProduct]);
    console.log(cartProducts);
  };

  return (
    <div
      className="bg-white cursor-pointer w-56 h-60 rounded-lg shadow-inner"
      onClick={() => showProduct({ title, price, category, image, description })}>
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
          {category}
        </span>
        <img className="w-full h-full object-cover rounded-lg" src={image} alt={title} />
        <button
          type="button"
          className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 font-bold"
          onClick={(event) =>
            addProductsToCart(event, { title, price, category, image, description })
          }>
          <PlusIcon />
        </button>
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light truncate">{title}</span>
        <span className="text-lg font-bold">${price}</span>
      </p>
    </div>
  );
}

export default Card;
