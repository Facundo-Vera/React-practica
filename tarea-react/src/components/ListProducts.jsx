import { products } from "../data/db";
import CardProducts from "./CardProducts"
import {  useEffect, useState } from "react";

const ListProducts = () => {
  const [producto, setProducto] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem("producto")) {
      localStorage.setItem("producto", JSON.stringify(products));
      setProducto(products); 
    } else {
      setProducto(JSON.parse(localStorage.getItem("producto")));
    }
  }, []);

  const updateSave = (id) => {
    const update = producto.map((product) =>
      product.id === id ? { ...product, save: !product.save } : product
    );

    setProducto(update);
    localStorage.setItem("producto", JSON.stringify(update));
  };

  
  return (
    <div className="list">
      {producto.map((product) => ( 
        <CardProducts
          product={product}
          key={product.id}
          updateSave={updateSave}
        />
      ))}
    </div>
  );
};

export default ListProducts;