import { useContext } from "react";
import { Layout } from "../../components/Layout";
import { OrderCard } from "../../components/OrderCard";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { CartContext } from "../../context";

const MyOrder = () => {
  const { order } = useContext(CartContext);

  return (
    <Layout>
      <div className="p-6  flex flex-col gap-2 flex-1 border rounded-lg">
        <div className="flex w-80 items-center pb-2 justify-center cursor-pointer relative">
          <Link to="/my-orders">
            <ChevronLeftIcon className="h-6 w-6 relative left-0" />
          </Link>
          <h1>My Orders</h1>
        </div>
        {order?.slice(-1)[0].products.map((el) => {
          return <OrderCard product={el} key={el.id} icon={false} />;
        })}
      </div>
    </Layout>
  );
};

export { MyOrder };
