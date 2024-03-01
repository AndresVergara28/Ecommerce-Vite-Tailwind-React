import React, { useContext } from "react";
import { CartContext } from "../../Context";
import { CheckIcon, PlusIcon } from "@heroicons/react/24/outline";

const Card = ({ product }) => {
  const {
    count,
    cart,
    setCart,
    setCount,
    openProductDetail,
    setProductChosen,
    openCheckoutDetail,
  } = useContext(CartContext);

  const openAside = (data) => {
    openProductDetail();
    setProductChosen(data);
  };

  const addProductToCart = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setCart([...cart, product]);
    openCheckoutDetail();
  };

  const renderItem = (identificacion) => {
    const isProductInCart =
      cart.filter((el) => el.id === identificacion).length > 0;

    if (isProductInCart) {
      return (
        <div className="absolute top-1 right-1 flex justify-center items-center  text-white border-white w-6 h-6 rounded-full p-1 bg-green-500/55">
          <CheckIcon className="h-6 w-6"></CheckIcon>
        </div>
      );
    } else {
      return (
        <div className="absolute top-1 right-1 flex justify-center items-center bg-white w-6 h-6 rounded-full p-1">
          <PlusIcon className="h-6 w-6" onClick={addProductToCart}></PlusIcon>
        </div>
      );
    }
  };

  return (
    <div
      className="bg-white cursor-pointer w-56 h-60"
      onClick={() => openAside(product)}
    >
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-1 left-1 bg-white/60 rounded-lg text-black text-xs px-2 py-1">
          {product.category}
        </span>
        <img
          className="w-full h-full object-cover rounded-lg"
          src={product.thumbnail}
          alt={product.category.name}
        />
        {renderItem(product.id)}
      </figure>
      <p className="flex justify-between w-full h-1/5 px-2 items-center">
        <span className="text-sm font-light">{product.title}</span>
        <span className="text-lg font-bold">${product.price}</span>
      </p>
    </div>
  );
};

export { Card };
