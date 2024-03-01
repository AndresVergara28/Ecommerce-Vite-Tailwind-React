import axios from "axios";
import { Card } from "../../components/ItemCard";
import { Layout } from "../../components/Layout";
import { ProductDetail } from "../../components/ProductDetail";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../Context";

const Home = () => {
  const { products, filteredProducts, setFilteredProducts } =
    useContext(CartContext);

  const getProducts = (e) => {
    const filteredProducts = products.filter((product) => {
      const productTitle = product.title.toLowerCase();
      const productSearched = e.target.value.toLowerCase();
      return productTitle.includes(productSearched);
    });

    setFilteredProducts(filteredProducts);
  };

  return (
    <Layout>
      <div className=" flex items-center justify-center relative 2-80 mb-4">
        <h1 className="font-medium text-xl">Exclusive Products</h1>
      </div>

      <input
        placeholder="Search a product"
        type="text"
        className="grid gap-4 grid-cols-4 w-80 text-center max-w-screen-lg border border-gray-500 focus:outline-none p-2 rounded-lg mb-4"
        onChange={getProducts}
      />

      <div className="grid gap-4 grid-cols-4 max-w-scree-lg">
        {filteredProducts?.map((el) => {
          return <Card product={el} key={el.id} />;
        })}
      </div>
      <ProductDetail />
    </Layout>
  );
};

export { Home };
