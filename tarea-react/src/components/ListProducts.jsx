import { products } from "../data/db";
import CardProducts from "./CardProducts";

const ListProducts = () => {
  return (
    <div className="list">
      {products.map((product) => (
       <CardProducts user={product} key={product.id} />
      ))}
    </div>
  );
};

export default ListProducts;

