import { useContext } from "react";
import { ShoppingCartContex } from "../../Context";
import { PlusIcon, CheckIcon } from "@heroicons/react/24/outline";

/* usa bien las props */
function Card({ dataCard }) {
  const { id, title, price, category, image, description } = dataCard;

  const {
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
    setCartProducts([...cartProducts, dataProduct]);
  };

  const renderIcon = (id) => {
    const isInCart = cartProducts.some((product) => product.id === id);

    if (isInCart) {
      return (
        <button
          type="button"
          className="absolute top-0 right-0 flex justify-center items-center bg-np_white text-np_black bg-opacity-70 w-7 h-7 p-1 rounded-full m-2 font-bold">
          <CheckIcon className="text-white" />
        </button>
      );
    } else {
      return (
        <button
          type="button"
          className="absolute top-0 right-0 flex justify-center items-center bg-np_white text-np_black w-7 h-7 p-1 rounded-full m-2 font-bold"
          onClick={(event) => {
            addProductsToCart(event, { id, title, price, category, image, description });
          }}>
          <PlusIcon />
        </button>
      );
    }
  };

  return (
    <div
      className="bg-np_white text-np_black shadow-md cursor-pointer w-56 h-60 p-2 mb-4 rounded-lg"
      onClick={() => showProduct({ title, price, category, image, description })}>
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bg-np_white bg-opacity-70 bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
          {category}
        </span>
        <img className="w-full h-full object-cover rounded-lg" src={image} alt={title} />
        {renderIcon(id)}
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light truncate">{title}</span>
        <span className="text-lg font-bold">${price}</span>
      </p>
    </div>
  );
}

export default Card;
