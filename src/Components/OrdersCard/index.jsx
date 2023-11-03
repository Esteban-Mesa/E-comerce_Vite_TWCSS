function OrdersCard({ totalPrice, totalProducts, date }) {
  return (
    <div className="flex justify-between items-center mb-3 border border-black">
      <p>
        <samp>{date}</samp>
        <samp>{totalProducts}</samp>
        <samp>{totalPrice}</samp>
      </p>
    </div>
  );
}

export default OrdersCard;
