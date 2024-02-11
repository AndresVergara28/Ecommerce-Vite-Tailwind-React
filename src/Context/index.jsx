import { createContext, useState } from "react";

export const CartContext = createContext();

import React from "react";

export const CartProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [productChosen, setProductChosen] = useState({});
  const [cart, setCart] = useState([]);

  // ProductDetail | Show Product
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);

  // CheckoutDetail | Show Checkout
  const [isCheckoutDetail, setIsCheckoutDetail] = useState(false);
  const openCheckoutDetail = () => setIsCheckoutDetail(true);
  const closeCheckoutDetail = () => setIsCheckoutDetail(false);
  const toggleCheckoutDetail = () =>
    isCheckoutDetail ? setIsCheckoutDetail(false) : setIsCheckoutDetail(true);

  //Order / setTheOrder
  const [order, setOrder] = useState([]);
  return (
    <CartContext.Provider
      value={{
        count,
        isProductDetailOpen,
        isCheckoutDetail,
        productChosen,
        cart,
        order,
        setOrder,
        setCart,
        setCount,
        setProductChosen,
        openProductDetail,
        closeProductDetail,
        setIsCheckoutDetail,
        openCheckoutDetail,
        closeCheckoutDetail,
        toggleCheckoutDetail,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
