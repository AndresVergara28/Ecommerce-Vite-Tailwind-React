import { createContext, useEffect, useState } from "react";
import axios from "axios";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [productChosen, setProductChosen] = useState({});
  const [cart, setCart] = useState([]);

  // GetProducts
  const [products, setProducts] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState(null);

  useEffect(() => {
    const fethcData = async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/products`);
        setProducts(response.data.products);
        setFilteredProducts(response.data.products);
      } catch (error) {
        console.log(error);
      }
    };

    fethcData();
  }, []);

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
        isProductDetailOpen,
        isCheckoutDetail,
        productChosen,
        cart,
        order,
        products,
        filteredProducts,
        setFilteredProducts,
        setProducts,
        setOrder,
        setCart,
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

export { CartProvider, CartContext };
