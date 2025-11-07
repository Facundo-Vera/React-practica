import "../css/card.css";
import { useState } from "react";

const CardProducts = ({ product ,updateSave }) => {
  const { name, description, price, category, image,save,id} = product;
  // const [save, setSave] = useState(false)
  return (
    <div>
      <div className="card">
        <h2>{name}</h2>
        <h3>${price}</h3>

        <img src={image} alt={description} />

        <span>{category}</span>
        <div >
            {
                save ?  <i className="fa fa-bookmark" aria-hidden="true" onClick={() =>updateSave(id)} style={{cursor:"pointer"}}></i> :  <i className="fa fa-bookmark-o" aria-hidden="true" onClick={() => updateSave(id)} style={{cursor:"pointer"}} ></i>
            }
      
      </div>
      </div>
      
    </div>
  );
};

export default CardProducts;
