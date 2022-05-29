import React from "react";
import "../assets/styles/Product.css";
import { useStateValue } from "../StateProvider";
const Product = ({ id, title, price, rating, image }) => {
  const [state, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        image: image,
        title: title,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <p className="product_rating">
          {Array(rating)
            .fill()
            ?.map((_, i) => (
              <span key={i}>⭐</span>
            ))}
        </p>
      </div>
      <img src={image} alt="" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
};

export default Product;
