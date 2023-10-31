function OrdersCard(totalPrice, totalProducts) {
  return (
    <div className="flex justify-between items-center mb-3 border border-black">
      <p>
        <samp>01.02.23</samp>
        <samp>{totalProducts}</samp>
        <samp>{totalPrice}</samp>
      </p>
    </div>
  );
}

export default OrdersCard;
