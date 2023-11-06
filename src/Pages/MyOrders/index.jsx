import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartContex } from "../../Context";
import Layout from "../../Components/Layout";
import OrdersCard from "../../Components/OrdersCard";

function MyOrders() {
  const { order } = useContext(ShoppingCartContex);

  return (
    <Layout>
      <div className="relative flex justify-center w-80 mb-8">
        <h1 className="font-medium text-xl">My Orders</h1>
      </div>

      {order.map((order, index) => {
        return (
          <Link key={index} to={`/my-orders/${index}`}>
            <OrdersCard
              date={order.date}
              totalPrice={order.totalPrice}
              totalProducts={order.totalProducts}
            />
          </Link>
        );
      })}
    </Layout>
  );
}

export default MyOrders;
