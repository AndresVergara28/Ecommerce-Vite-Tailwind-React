import { useContext } from "react";
import { XCircleIcon } from "@heroicons/react/24/outline";
import "./styles.css";
import { CartContext } from "../../context";

const ProductDetail = () => {
  const { isProductDetailOpen, closeProductDetail, productChosen } =
    useContext(CartContext);

  return (
    <aside
      className={`${
        isProductDetailOpen ? "flex" : "hidden"
      } product-detail  flex-col fixed bg-white  left-0 border rounded-lg`}
    >
      <div className="flex justify-between items-center px-6 py-3">
        <h2 className="font-small text-xl">{productChosen.title}</h2>
        <div>
          <XCircleIcon
            className="h-6 w-6 cursor-pointer"
            onClick={closeProductDetail}
          ></XCircleIcon>
        </div>
      </div>
      <figure className=" px-6">
        <img
          className="w-full h-full rounded-lg"
          src={productChosen.thumbnail}
          alt={`Imagen referencia de producto ${productChosen.title}`}
        />
      </figure>
      <p className="flex flex-col p-6">
        <span className="font-bold text-2xl mb-2">${productChosen.price}</span>
        <span className="font-small text-md">{productChosen.description}</span>
      </p>
    </aside>
  );
};

export { ProductDetail };
