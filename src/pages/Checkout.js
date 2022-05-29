import React from "react";
import CheckoutProduct from "../component/CheckoutProduct";
import "../assets/styles/Checkout.css";
import Header from "../component/Header";
import Subtotal from "../component/Subtotal";
import { useStateValue } from "../StateProvider";
const Checkout = () => {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <>
      <div className="checkout">
        <div className="checkout_left">
          <img
            src={
              "https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonPay/LPAOffers/April/Prime/Store/V2/LPA501_1500x250.jpg"
            }
            alt=""
            className="checkout_ad"
          />
          <div>
            <h2 className="checkout_title">Your Shopping Basket</h2>
            {basket?.map((item, i) => {
              return (
                <CheckoutProduct
                  key={i}
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  image={item.image}
                  rating={item.rating}
                />
              );
            })}
          </div>
        </div>
        <div className="checkout_right">
          <Subtotal />
        </div>
      </div>
    </>
  );
};

export default Checkout;
