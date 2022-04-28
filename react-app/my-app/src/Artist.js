import React from "react";
import './index.css';
import './App.css';
import dog from './ArtistIMG/IMG_6958.jpg'
import goop from './ArtistIMG/IMG_1969 Small.jpeg'
import kev from './ArtistIMG/IMG_0437.jpg'
import tim from './ArtistIMG/IMG_9672.jpg'
import tom from './ArtistIMG/IMG_0581.jpg'
import hunt from './ArtistIMG/Screen Shot 2022-04-26 at 8.24.42 PM.png'
import peer from './ArtistIMG/Screen Shot 2022-04-26 at 8.33.57 PM.png'
import pig from './ArtistIMG/Screen Shot 2022-04-26 at 8.33.13 PM.png'
import kyle from './ArtistIMG/IMG_3348.jpg'
import just from './ArtistIMG/IMG_0579.jpg'
import jay from './ArtistIMG/IMG_0580.jpg'
import boat from './ArtistIMG/Screen Shot 2022-04-26 at 8.56.49 PM.png'
import Footer from './footer'
import { Button, Container} from 'react-bootstrap'
import 'font-awesome/css/font-awesome.min.css';
import { FaInstagram, FaTwitter, FaArrowRight} from 'react-icons/fa';

export default function Artist() {
  return (
    <div>
    <div class="art">
       <h1 style={{padding:"25px"}} class="h1">ARTISTS</h1>
       <div class="container">
         <div style={{padding:"10px"}} class="row justify-content-md-center">
           <div style={{padding:"20px", textAlign:"center"}} class="col">
             <img class="image-style" src={dog} width="300" height="120"/>
             <h1 style={{padding:"40px",textAlign:"center"}} class="h2">COFFEE DOG</h1>
             <a href="https://www.instagram.com/jpshannon/?utm_source=ig_embed&amp;utm_campaign=loading">
             <i class="button-style"><FaInstagram/></i>
             </a>
             <a href="https://twitter.com/Jp__Shannon?s=20&t=GBPCVAbq8lpdNN0hEMEIrw">
              <i class="button-style"><FaTwitter/></i>
             </a>

           </div>
           <div style={{padding:"20px",textAlign:"center"}} class="col">
             <img class="image-style" src={goop} width="300" height="120"/>
             <h1 style={{padding:"40px",textAlign:"center"}} class="h2">GOOPILY</h1>
             <a href="https://www.instagram.com/goopily/?utm_source=ig_embed&amp;utm_campaign=loading">
             <i class="button-style"><FaInstagram/></i>
             </a>
             <a href="https://twitter.com/__j2n?s=20&t=GBPCVAbq8lpdNN0hEMEIrw">
              <i class="button-style"><FaTwitter/></i>
             </a>

           </div>
           <div style={{padding:"20px",textAlign:"center"}} class="col">
             <img class="image-style" src={kev} width="300" height="120"/>
             <h1 style={{padding:"40px",textAlign:"center"}} class="h2">GROUP KEVIN</h1>
             <a href="https://www.instagram.com/grpkvn/?utm_source=ig_embed&amp;utm_campaign=loading">
             <i class="button-style"><FaInstagram/></i>
             </a>
             <a href="https://twitter.com/grpkvn?s=20&t=GBPCVAbq8lpdNN0hEMEIrw">
              <i class="button-style"><FaTwitter/></i>
             </a>

           </div>
           <div style={{padding:"20px",textAlign:"center"}} class="col">
             <img class="image-style" src={hunt} width="300" height="120"/>
             <h1 style={{padding:"40px",textAlign:"center"}} class="h2">HUNTER LIVSEY</h1>
             <h1 style={{padding:"10px",textAlign:"center"}} class="h2">Official Site</h1>
             <a href="https://www.instagram.com/howntur/?utm_source=ig_embed&amp;utm_campaign=loading">
             <i class="button-style"><FaInstagram/></i>
             </a>
             <a href="https://twitter.com/howntur?s=20&t=GBPCVAbq8lpdNN0hEMEIrw">
              <i class="button-style"><FaTwitter/></i>
             </a>

           </div>
         </div>
         <div style={{padding:"10px"}} class="row justify-content-md-center">
           <div style={{padding:"20px",textAlign:"center"}} class="col">
             <img class="image-style" src={jay} width="300" height="120"/>
             <h1 style={{padding:"40px",textAlign:"center"}} class="h2">JAY OLIVE</h1>
             <a href="https://www.instagram.com/jasonnhorvath/?utm_source=ig_embed&amp;utm_campaign=loading">
             <i class="button-style"><FaInstagram/></i>
             </a>
             <a href="https://twitter.com/jasonnhorvath?s=20&t=GBPCVAbq8lpdNN0hEMEIrw">
              <i class="button-style"><FaTwitter/></i>
             </a>

           </div>
           <div style={{padding:"20px",textAlign:"center"}} class="col">

             <img class="image-style" src={just} width="300" height="120"/>
             <h1 style={{padding:"40px",textAlign:"center"}} class="h2">JUSTIN SCHWARTZ</h1>
             <a href="https://www.instagram.com/justin_schwartz/?utm_source=ig_embed&amp;utm_campaign=loading">
             <i class="button-style"><FaInstagram/></i>
             </a>
             <a href="https://twitter.com/johnny_ryall_?s=20&t=GBPCVAbq8lpdNN0hEMEIrw">
              <i class="button-style"><FaTwitter/></i>
             </a>

           </div>
           <div style={{padding:"20px",textAlign:"center"}} class="col">

             <img class="image-style" src={kyle} width="300" height="120"/>
             <h1 style={{padding:"40px",textAlign:"center"}} class="h2">KYLE TRAVERSE</h1>
             <a href="https://www.instagram.com/thekyletraverse/?utm_source=ig_embed&amp;utm_campaign=loading">
             <i class="button-style"><FaInstagram/></i>
             </a>
             <a href="https://twitter.com/TheKyleTraverse?s=20&t=GBPCVAbq8lpdNN0hEMEIrw">
              <i class="button-style"><FaTwitter/></i>
             </a>

           </div>
           <div style={{padding:"20px",textAlign:"center"}} class="col">
             <img class="image-style" src={boat} width="300" height="120"/>
             <h1 style={{padding:"40px",textAlign:"center"}} class="h2">LICENSED BOAT OPERATORS</h1>
             <a href="https://www.instagram.com/licensedboatoperators/?utm_source=ig_embed&amp;utm_campaign=loading">
             <i class="button-style"><FaInstagram/></i>
             </a>

           </div>
         </div>
         <div style={{padding:"10px"}} class="row justify-content-md-center">
           <div style={{padding:"20px",textAlign:"center"}} class="col">
             <img class="image-style" src={peer} width="300" height="120"/>
             <h1 style={{padding:"40px",textAlign:"center"}} class="h2">PEER PRESSURE</h1>

           </div>
           <div style={{padding:"20px",textAlign:"center"}} class="col align-items-center">
             <img class="image-style" src={tim} width="300" height="120"/>
             <h1 style={{padding:"30px",textAlign:"center"}} class="h2">TIM FOIL</h1>
             <h1 style={{padding:"1px",textAlign:"center"}} class="h2">Official Site</h1>
             <a href="https://www.instagram.com/thekyletraverse/?utm_source=ig_embed&amp;utm_campaign=loading">
             <i class="button-style"><FaInstagram/></i>
             </a>
             <a href="https://twitter.com/TheKyleTraverse?s=20&t=GBPCVAbq8lpdNN0hEMEIrw">
              <i class="button-style"><FaTwitter/></i>
             </a>

           </div>
           <div style={{padding:"20px",textAlign:"center"}} class="col">
             <img class="image-style" src={tom} width="300" height="120"/>
             <h1 style={{padding:"40px",textAlign:"center"}}  class="h2">TOM808</h1>

           </div>
           <div style={{padding:"20px",textAlign:"center"}} class="col">
             <img class="image-style" src={pig} width="300" height="120"/>
             <h1 style={{padding:"40px",textAlign:"center"}}  class="h2">THE PIG, VERBATIM</h1>

             <a href="https://www.instagram.com/thepig.verbatim_music/?utm_source=ig_embed&amp;utm_campaign=loading">
             <i class="button-style"><FaInstagram/></i>
             </a>
            
           </div>
         </div>
         <div class="row justify-content-md-center">
           <div class="col">
             <h1></h1>

           </div>
           <div class="col">
             <h1></h1>

           </div>
           <div class="col">
             <h1></h1>

           </div>
           <div class="col">
             <h1></h1>

           </div>
         </div>
       </div>

    </div>
<Footer/>
</div>
  );
}
