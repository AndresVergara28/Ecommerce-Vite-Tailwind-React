import { XMarkIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import { CartContext } from "../../Context";

const OrderCard = ({ product, icon }) => {
  const renderCloseIcon = (icon) => {
    if (icon) {
      return (
        <XMarkIcon
          className="h-6 w-6 text-black cursor-pointer"
          onClick={() => removeItemFromCart(product.id)}
        />
      );
    }
  };

  const { cart, setCart } = useContext(CartContext);
  const removeItemFromCart = (identificador) => {
    const filteredProducts = cart.filter((el) => el.id != identificador);
    setCart(filteredProducts);
  };
  return (
    <div className="flex justify-between items-center mb-2">
      <div className="flex items-center gap-2">
        <figure className="w-20 h-20">
          <img
            className="w-full h-full rounded-lg object-cover"
            src={product.thumbnail}
            alt="imagenReference1"
          />
        </figure>
        <p className="text-sm font-light">{product.title}</p>
      </div>

      <div className="flex items-center gap-2">
        <p className="text-lg font-medium">${product.price}</p>
        {renderCloseIcon(icon)}
      </div>
    </div>
  );
};

export { OrderCard };
