import { useContext } from "react";
import { Link } from "react-router-dom";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { ShoppingCartContex } from "../../Context";
import OrderCard from "../OrderCard";
import { totalPrice } from "../../utils";

function CheckoutSideMenu() {
  const {
    isCheckoutSideMenuOpen,
    closeCheckoutSideMenu,
    cartProducts,
    setCartProducts,
    order,
    setOrder,
  } = useContext(ShoppingCartContex);

  const handleDelete = (id) => {
    const filteredProducts = cartProducts.filter((product) => product.id != id);
    setCartProducts(filteredProducts);
  };

  const handleCheckout = () => {
    const date = new Date();

    const orderToAdd = {
      date: date.toLocaleDateString(),
      products: cartProducts,
      totalProducts: cartProducts.length,
      totalPrice: totalPrice(cartProducts),
    };

    setOrder([...order, orderToAdd]);
    setCartProducts([]);
    closeCheckoutSideMenu();
  };

  return (
    <aside
      className={`${
        isCheckoutSideMenuOpen ? null : "hidden"
      } bg-white flex flex-col fixed right-0 border border-black rounded-lg w-[360px] h-[calc(100vh-68px)] top-[68px] `}>
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My order</h2>
        <button type="button" onClick={() => closeCheckoutSideMenu()}>
          <XMarkIcon className="h-6 cursor-pointer" />
        </button>
      </div>
      <div className="overflow-y-scroll flex-1">
        {cartProducts.map((product) => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
            handleDelete={handleDelete}
          />
        ))}
      </div>
      <div className="px-6 mb-6">
        <p className="flex justify-between items-center mb-2">
          <span className="font-light">Total:</span>
          <span className="font-medium text-2xl">${`${totalPrice(cartProducts)}`}</span>
        </p>
        <Link to="/my-orders/last">
          <button
            className="bg-black text-white w-full py-3 rounded-lg"
            type="button"
            onClick={() => {
              handleCheckout();
            }}>
            Checkout
          </button>
        </Link>
      </div>
    </aside>
  );
}

export default CheckoutSideMenu;
