import { ChevronRightIcon } from "@heroicons/react/24/outline";

const OrdersCard = ({ order }) => {
  return (
    <div className="flex p-4 w-80 mt-3 items-center mb-2 border border-black rounded-lg">
      <p className="flex w-full items-center justify-between">
        <div className="flex flex-col">
          <span className="font-light">Fecha: {order.date}</span>
          <span className="font-medium">{order.products.length} articles</span>
        </div>
        <div className="flex items-center">
          <span className="font-medium text-xl">${order.totalPrice}</span>
          <ChevronRightIcon className="h-6 w-6" />
        </div>
      </p>
    </div>
  );
};

export { OrdersCard };
