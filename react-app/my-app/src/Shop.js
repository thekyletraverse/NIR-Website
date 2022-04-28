import React from "react";
import Footer from './footer'

import design1 from './ShopItems/Screen Shot 2022-04-28 at 12.01.56 AM.png'
import design2 from './ShopItems/Screen Shot 2022-04-28 at 12.04.20 AM.png'
import tag from './ShopItems/21D1A1A9-43DF-4E23-8709-E754FF276C82.jpeg'

export default function Shop() {
  return (
    <div>

    <div class="shop">
       <h1 style={{padding:"30px"}} class="h1">SHOP</h1>
       <h1 style={{padding:"30px"}} class="h2">TIM FOIL MERCH</h1>
       <div style={{padding:"30px"}} class="row">
         <div style={{padding:"30px"}} class="col">
       <img class="image-style4"src={design1} width="300" height="120"/>
       <text>$20</text>
       </div>
       <div style={{padding:"30px"}} class="col">
     <img class="image-style4"src={design2} width="300" height="120"/>
     <text>$20</text>
     </div>
     <div class="row">
     <div style={{padding:"30px"}} class="col">
     <img class="image-style4"src={tag} width="150" height="20"/>
     <text>*Featuring Custom Tag!*</text>
     </div>
     </div>

       </div>
    </div>
      <Footer/>

    </div>
  );
}
