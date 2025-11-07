import { products } from "../data/db";
import CardProducts from "./CardProducts"
import {  useEffect, useState } from "react";

const ListProducts = () => {
  const [producto, setProducto] = useState([])

  useEffect(() => {
    if(!localStorage.getItem("producto")){
      localStorage.setItem("producto",JSON.stringify(products))
    }else{
      setProducto(JSON.parse(localStorage.getItem("producto")));
    }
  }, [])

  const updateSave = (id)=> {

    const update = producto.map((product) => {
      //&me devuelve todo lo que viene en user y que a like la ramplace por lo opuesto a user.like 
      return product.id === id ? { ...product, save: !product.save } : product;
    });
     //*guardo en estado usuario el update
    setProducto(update);
    //*Actualizo el estado en el local
    localStorage.setItem("producto", JSON.stringify(update));

  }
  
  return (
    <div className="list">
      {products.map((product) => (
       <CardProducts product={product} key={product.id} updateSave={updateSave} />
      ))}
    </div>
  );
};

export default ListProducts;