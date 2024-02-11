import { Card } from "../../components/ItemCard";
import { Layout } from "../../components/Layout";
import { useGetAllProducts } from "../../hooks/useGetProducts";
import { ProductDetail } from "../../components/ProductDetail";

const Home = () => {
  const { products } = useGetAllProducts();
  return (
    <Layout>
      <div className="grid gap-4 grid-cols-4 max-w-scree-lg">
        {products.map((el) => {
          return <Card product={el} key={el.id} />;
        })}
      </div>
      <ProductDetail />
    </Layout>
  );
};

export default Home;
