import React, { useContext } from "react";
import { Layout } from "../../components/Layout";
import { OrdersCard } from "../../components/OrdersCard";
import { CartContext } from "../../context";
import { Link } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";

const MyOrders = () => {
  const { order } = useContext(CartContext);
  return (
    <Layout>
      <h1 className="font-medium text-xl">My orders</h1>
      {order?.map((el, index) => (
        <Link key={index} to={`/my-orders/${index}`}>
          <OrdersCard order={el} />
        </Link>
      ))}
    </Layout>
  );
};

export { MyOrders };
