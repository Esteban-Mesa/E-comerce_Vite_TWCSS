import {
  ShoppingBagIcon,
  CalendarDaysIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/24/outline";

function OrdersCard({ totalPrice, totalProducts, date }) {
  return (
    <div className="bg-np_white w-96 mb-3 rounded-lg border p-2 border-np_black">
      <p className="flex">
        <span className="w-1/4 text-lg font-semibold">${totalPrice}</span>
        <span className="w-1/4 text-ms flex justify-center items-center">
          <ShoppingBagIcon title="Number of products" className="h-5 mr-1" />
          {totalProducts}
        </span>
        <span className="w-1/2 text-ms flex justify-end items-center">
          <CalendarDaysIcon title="Date" className="h-5 mr-1" />
          {date}
          <ChevronDoubleRightIcon className="h-6 ml-3" />
        </span>
      </p>
    </div>
  );
}

export default OrdersCard;
