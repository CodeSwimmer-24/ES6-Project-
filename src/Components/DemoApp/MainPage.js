import React from "react";
import "./MainPage.css";
import Product from "./Product";
import { Link } from "react-router-dom";
function MainPage() {
  return (
    <div className="mainpage">
      <div className="demoMainpage__header"></div>
      <div className="demoMainpage__heading">
        <h1>Demo App</h1>
      </div>
      <div className="demoMainpage__headding2">
        <h1>Sell more with Bargainator</h1>
        <h2>
          Bargainator offers a whole new shopping experience for your customers'
          while giving you the tools needed to grow your business. Hire
          Bagainator and let him do the work for you!
        </h2>
      </div>
      <div className="mainpage__row">
        <div className="product">
          <Product
            id="123456789"
            title="Apple phone 11 Pro"
            price={1099.59}
            rating={5}
            image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-green-select-2019?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1566956144838"
          />
        </div>
        <div className="product">
          <Product
            id="92343799"
            title="SamSung Galaxy"
            price={399.99}
            rating={2}
            image="https://img.xfinitymobile.com/image/upload/c_fit,f_auto,q_auto,fl_lossy/v1597347249/client/v2/images/lg-moto-100-promo/moto-100-promo-shop-banner-1280.png"
          />
        </div>
      </div>
      <div class="mainpage__row">
        <div to="/checkout" className="product">
          <Product
            id="1865165468"
            title="Laptop. 
           "
            price={1026.23}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/81SdJG3OUjL._SL1500_.jpg"
          />
        </div>
        <div div to="/checkout" className="product">
          <Product
            id="1475217632"
            title="KeyBord"
            price={50.99}
            rating={5}
            image="https://5.imimg.com/data5/BE/JW/MY-14914674/dell-desktop-cpu-500x500.jpg"
          />
        </div>
        <div to="/checkout" className="product">
          <Product
            id="158246"
            title="Potable Speaker

          "
            price={10.99}
            rating={5}
            image="https://cdn.mos.cms.futurecdn.net/ZxDEHevsaRs3prV6gMakSn-1200-80.jpg"
          />
        </div>
      </div>
      <div className="mainpage__row">
        <div className="product">
          <Product
            id="123456789"
            title="Lamp"
            price={10.59}
            rating={3}
            image="https://www.bomma.cz/application/files/2815/5609/8019/Bomma_Soap_chandelier_round_3_silver.png"
          />
        </div>
        <div className="product">
          <Product
            id="123456789"
            title="Light Speaker"
            price={19.59}
            rating={2}
            image="https://images-na.ssl-images-amazon.com/images/I/61pqVjvvbWL.jpg"
          />
        </div>
        <div className="product">
          <Product
            id="123456789"
            title="Curve Monitor"
            price={1099.59}
            rating={5}
            image="https://www.bomma.cz/application/files/2815/5609/8019/Bomma_Soap_chandelier_round_3_silver.png"
          />
        </div>
      </div>
    </div>
  );
}

export default MainPage;
