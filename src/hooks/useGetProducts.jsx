import { useEffect, useState } from "react";
import { getAllProducts } from "../services";

export const useGetAllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts()
      .then((response) => {
        setProducts(response.data.products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return { products };
};
