import React from "react";
import Header from "./Header";
import "./Home.css";
import Product from "./Product";

const Home = () => {
  return (
    <>
      <Header />
      <div className="home">
        <div className="home_container">
          <img
            src={
              "https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce.jpg"
            }
            alt="Background"
            className="home_image"
          />
          <div className="home_row">
            <Product
              id="1"
              title="Bennet Mystic 15.6 inch Laptop Shoulder Messenger Sling Office Bag,
            Water Repellent Fabric for Men and Women"
              price={30}
              rating={5}
              image={
                "https://m.media-amazon.com/images/I/81cB0YABm3L._SL1500_.jpg"
              }
            />
            <Product
              id="2"
              title="Farberware Countertop Microwave 1.1 Cu. Ft. 1000-Watt Compact Microwave Oven with LED lighting,
             Child lock, and Easy Clean Interior, Stainless Steel Interior and Exterior"
              price={50}
              rating={4}
              image={
                "https://m.media-amazon.com/images/I/81xxOPvz+9L._AC_SX466_.jpg"
              }
            />
          </div>
          <div className="home_row">
            <Product
              id="3"
              title="XG500 X-Series Portable Wireless Speaker"
              price={70}
              rating={5}
              image={
                "https://www.sony-asia.com/image/adecf74f94dc7b468737b87ee3b68037?fmt=pjpeg&bgcolor=FFFFFF&bgc=FFFFFF&wid=2515&hei=1320"
              }
            />
            <Product
              id="4"
              title="Custodia morbida in silicone gel per Apple iPhone 13 Pro Max, nero satinato"
              price={45}
              rating={5}
              image={
                "https://www.thekase.com/on/demandware.static/-/Sites-tk-product/default/dw903e5fd8/38975751/144314_medium.png"
              }
            />
            <Product
              id="5"
              title="HUAWEI MatePad Pro"
              price={35}
              rating={5}
              image={
                "https://consumer-img.huawei.com/content/dam/huawei-cbg-site/common/mkt/plp/tablets/matepad-pro-10-8.jpg"
              }
            />
          </div>
          <div className="home_row">
            <Product
              id="6"
              title="LG UN73 50 inch 4K Smart UHD TV"
              price={65}
              rating={5}
              image={
                "https://www.lg.com/ph/images/tvs/md06248096/gallery/N02_M02.jpg"
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
