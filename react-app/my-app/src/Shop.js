import React from "react";
import Footer from './footer'

import design1 from './ShopItems/Screen Shot 2022-04-28 at 12.01.56 AM.png'
import design2 from './ShopItems/Screen Shot 2022-04-28 at 12.04.20 AM.png'
import tag from './ShopItems/21D1A1A9-43DF-4E23-8709-E754FF276C82.jpeg'
import tap from './NIR Tapestry.jpg'
import stick from './Nothing Iconic Reccords opng.png'
import { FaShopify} from 'react-icons/fa';

export default function Shop() {
  return (
    <div>

    <div class="shop">
       <h1 style={{padding:"25px"}} class="h1">SHOP</h1>
       <div class="row justify-content-center">
         <div style={{padding:"100px", textAlign:"center"}} class="col">
           <img class="image-style4"src={design1} width="450" height="270"/>
           <text style={{padding:"45px"}} class="button-style h2">$20</text>
           <text class="button-style h2">White "Texting While Driving" T-Shirt</text>
           <a href="">
             <i class="button-style fa-2x"><FaShopify/></i>
           </a>
         </div>

         <div style={{padding:"200px", textAlign:"center"}} class="col justify-content-md-center">
           <img class="image-style4"src={design2} width="450" height="270"/>
           <text style={{padding:"40px"}} class="button-style h2">$20</text>
           <text  class="button-style h2">Tan "Tim Foil Face" T-Shirt</text>
           <a href="">
             <i class="button-style fa-2x"><FaShopify/></i>
           </a>
       </div>
       <div class="row justify-content-center">
         <div style={{padding:"110px", textAlign:"center"}} class="col">
           <img class="image-style4"src={tap} width="470" height="270"/>
           <text style={{padding:"45px"}} class="button-style h2">Coming Soon</text>
           <text class="button-style h2">Nothing Iconic Tapestry</text>

         </div>
         <div style={{padding:"20px", textAlign:"center"}} class="col justify-content-md-center">
           <img class="image-style4"src={stick} width="470" height="270"/>
           <text style={{padding:"40px"}} class="button-style h2">Coming Soon</text>
           <text  class="button-style h2">Nothing Iconic Sticker</text>

       </div>
       </div>

       </div>
    </div>
      <Footer/>

    </div>
  );
}
