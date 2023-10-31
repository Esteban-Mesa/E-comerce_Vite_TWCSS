import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartContex } from "../../Context";
import Layout from "../../Components/Layout";
import OrdersCard from "../../Components/OrdersCard";

function MyOrders() {
  const { order } = useContext(ShoppingCartContex);

  return (
    <Layout>
      <div className="relative flex justify-center w-80">
        <h1>My Orders</h1>
      </div>

      {order.map((order, index) => {
        <Link key={index} to={`/my-orders/${order.id}`}>
          <OrdersCard totalPrice={order.totalPrice} totalProducts={order.totalProducts} />
        </Link>;
      })}
    </Layout>
  );
}

export default MyOrders;
