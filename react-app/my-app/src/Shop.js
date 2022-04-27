import React from "react";
import Footer from './footer'
import shirtlogo from './ShopItems/Screen Shot 2022-01-16 at 5.07.12 PM.jpeg'

export default function Shop() {
  return (
    <div>

    <div class="shop">
       <h1 style={{padding:"30px"}} class="h1">SHOP</h1>
       <img src={shirtlogo} width="300" height="120"/>
    </div>
      <Footer/>

    </div>
  );
}
