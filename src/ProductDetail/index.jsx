import { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { ShoppingCartContex } from "../Context";

function ProductDeatail() {
  const { isProductDetailOpen, closeProductDetail, productToShow } = useContext(ShoppingCartContex);

  return (
    <aside
      className={`${
        isProductDetailOpen ? null : "hidden"
      } bg-white flex flex-col fixed right-0 border border-black rounded-lg w-[360px] h-[calc(100vh-68px)] top-[68px] `}>
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Detail</h2>
        <button type="button" onClick={() => closeProductDetail()}>
          <XMarkIcon className="h-6 cursor-pointer" />
        </button>
      </div>

      <figure className="h-2/5">
        <img
          className="h-full rounded-lg cursor-zoom-in mr-auto ml-auto"
          src={productToShow.image}
          alt={productToShow.title}
        />
      </figure>
      <p className="flex flex-col p-6">
        <span className="font-medium text-2xl mb-2">{productToShow.price}</span>
        <span className="font-medium text-lg">{productToShow.title}</span>
        <span className="font-medium text-sm">{productToShow.description}</span>
      </p>
    </aside>
  );
}

export default ProductDeatail;