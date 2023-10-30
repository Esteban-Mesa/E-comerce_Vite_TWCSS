import { useContext } from "react";
import { ShoppingCartContex } from "../../Context";
import Layout from "../../Components/Layout";
import OrderCard from "../../Components/OrderCard";

function MyOrder() {
  const { order } = useContext(ShoppingCartContex);
  console.log(order);

  return (
    <Layout className="bg-red-300">
      MyOrder
      <div className="flex flex-col w-80">
        {order?.slice(-1)[0].products.map((product) => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
          />
        ))}
      </div>
    </Layout>
  );
}

export default MyOrder;
