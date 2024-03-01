import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Layout } from "../../components/Layout";
import { CartContext } from "../../context";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { OrderCard } from "../../components/OrderCard";

const MyOrderByID = () => {
  const { index } = useParams();
  const { order } = useContext(CartContext);
  return (
    <Layout>
      <div className=" flex flex-col">
        <div className="flex w-80 items-center pb-2 justify-center cursor-pointer relative">
          <Link
            to="/my-orders"
            className="flex flex-row items-center w-full justify-center"
          >
            <ChevronLeftIcon className="h-6 w-6 relative left-0" />
            <h1>My Orders</h1>
          </Link>
        </div>
        <div className="flex flex-col w-80">
          <div>
            {order[index].products.map((el) => {
              return <OrderCard key={el.id} product={el} icon={false} />;
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export { MyOrderByID };
