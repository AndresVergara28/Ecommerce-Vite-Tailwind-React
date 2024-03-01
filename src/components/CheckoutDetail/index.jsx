import { useContext } from "react";
import { CartContext } from "../../Context";
import { XCircleIcon } from "@heroicons/react/24/outline";
import "./styles.css";
import { OrderCard } from "../OrderCard";
import { Link } from "react-router-dom";
const CheckoutSideMenu = () => {
  const {
    cart,
    setOrder,
    order,
    setCart,
    isCheckoutDetail,
    openCheckoutDetail,
    closeCheckoutDetail,
  } = useContext(CartContext);

  const handleCheckout = () => {
    const orderToAdd = {
      date: "01.02.2023",
      products: cart,
      totalProducts: cart.length,
      totalPrice: cart.reduce((sum, el) => sum + el.price, 0),
    };

    setOrder([...order, orderToAdd]);
    setCart([]);
    closeCheckoutDetail();
  };
  return (
    <aside
      className={`${
        isCheckoutDetail ? "flex" : "hidden"
      } checkout-detail  flex-col fixed bg-white  right-0 border rounded-lg`}
    >
      <div className="flex justify-between items-center px-6 py-3">
        <h2 className="font-small text-xl">My Order</h2>
        <div>
          <XCircleIcon
            className="h-6 w-6 cursor-pointer"
            onClick={closeCheckoutDetail}
          ></XCircleIcon>
        </div>
      </div>

      <div className="px-6 overflow-y-scroll flex flex-col gap-2 flex-1">
        {cart.map((el) => {
          return <OrderCard product={el} key={el.id} icon={true} />;
        })}
      </div>

      <div className="p-3 border rounded-md">
        <p className="flex justify-between text-lg items-center mb-2">
          <span className="font-light">Total</span>
          <span className="font-medium text-2xl">
            ${cart.reduce((sum, el) => sum + el.price, 0)}
          </span>
        </p>

        <Link to={"./my-order/last"}>
          <button
            onClick={handleCheckout}
            className="button w-full bg-black px-6 py-3 rounded-lg text-white"
          >
            Checkout
          </button>
        </Link>
      </div>
    </aside>
  );
};

export { CheckoutSideMenu };
