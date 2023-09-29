import { XMarkIcon } from "@heroicons/react/24/outline";
import { ShoppingCartContex } from "../Context";
import { useContext } from "react";

function ProductDeatail() {
  const { isProductDetailOpen, closeProductDetail } = useContext(ShoppingCartContex);
  return (
    <aside
      className={`${
        isProductDetailOpen ? null : "hidden"
      } bg-white flex flex-col fixed right-0 border border-black rounded-lg w-[360px] h-[calc(100vh-80px)]`}>
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Detail</h2>
        <button type="button" onClick={() => closeProductDetail()}>
          <XMarkIcon className="h-6 cursor-pointer" />
        </button>
      </div>
    </aside>
  );
}

export default ProductDeatail;
