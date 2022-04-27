import React from "react";
import './index.css';
import './App.css';
import dog from './ArtistIMG/IMG_6958.jpeg'
import goop from './ArtistIMG/IMG_1453.JPEG'
import kev from './ArtistIMG/GKShadow Edit_1.jpeg'
import tim from './ArtistIMG/BDC4FF5F-2A7C-4825-ACD4-503488E7A383.JPG'
import tom from './ArtistIMG/IMG_5750.JPG'
import hunt from './ArtistIMG/Screen Shot 2022-04-26 at 8.24.42 PM.png'
import peer from './ArtistIMG/Screen Shot 2022-04-26 at 8.33.57 PM.png'
import pig from './ArtistIMG/Screen Shot 2022-04-26 at 8.33.13 PM.png'
import kyle from './ArtistIMG/Screen Shot 2022-04-26 at 8.49.24 PM.png'
import just from './ArtistIMG/Screen Shot 2022-04-26 at 8.46.36 PM.png'
import jay from './ArtistIMG/Screen Shot 2022-04-26 at 8.47.46 PM.png'
import boat from './ArtistIMG/Screen Shot 2022-04-26 at 8.56.49 PM.png'
import Footer from './footer'
import { Button, Container} from 'react-bootstrap'

import { FaInstagram, FaTwitter, FaArrowRight} from 'react-icons/fa';

export default function Artist() {
  return (
    <div>
    <div class="art">
       <h1 style={{padding:"30px"}} class="h1">ARTISTS</h1>
       <div class="container">
         <div style={{padding:"30px"}} class="row justify-content-md-center">
           <div style={{padding:"30px", textAlign:"center"}} class="col">
             <img src={dog} width="300" height="120"/>
             <h1 class="h2">COFFEE DOG</h1>
             <Button class="button"><FaInstagram/></Button>{' '}
             <Button class="button"><FaTwitter/></Button>{' '}
           </div>
           <div style={{padding:"30px",textAlign:"center"}} class="col">
             <img src={goop} width="300" height="120"/>
             <h1 class="h2">GOOPILY</h1>
             <Button class="button"><FaInstagram/></Button>{' '}
             <Button class="button"><FaTwitter/></Button>
           </div>
           <div style={{padding:"30px",textAlign:"center"}} class="col">
             <img src={kev} width="300" height="120"/>
             <h1 class="h2">GROUP KEVIN</h1>
             <Button class="button"><FaInstagram/></Button>{' '}
             <Button class="button"><FaTwitter/></Button>
           </div>
           <div style={{padding:"30px",textAlign:"center"}} class="col">
             <img src={hunt} width="300" height="120"/>
             <h1 class="h2">HUNTER LIVSEY</h1>
             <h1 class="h2">Official Site</h1>
             <Button class="button"><FaInstagram/></Button>{' '}
             <Button class="button"><FaTwitter/></Button>
           </div>
         </div>
         <div style={{padding:"30px"}} class="row justify-content-md-center">
           <div style={{padding:"30px",textAlign:"center"}} class="col">
             <img src={jay} width="300" height="120"/>
             <h1 class="h2">JAY OLIVE</h1>
             <Button class="button"><FaInstagram/></Button>{' '}
             <Button class="button"><FaTwitter/></Button>
           </div>
           <div style={{padding:"30px",textAlign:"center"}} class="col">

             <img src={just} width="300" height="120"/>
             <h1 class="h2">JUSTIN SCHWARTZ</h1>
             <Button class="button"><FaInstagram/></Button>{' '}
             <Button class="button"><FaTwitter/></Button>
           </div>
           <div style={{padding:"30px",textAlign:"center"}} class="col">

             <img src={kyle} width="300" height="120"/>
             <h1 class="h2">KYLE TRAVERSE</h1>
             <Button class="button"><FaInstagram/></Button>{' '}
             <Button class="button"><FaTwitter/></Button>
           </div>
           <div style={{padding:"30px",textAlign:"center"}} class="col">
             <img src={boat} width="300" height="120"/>
             <h1 class="h2">LICENSED BOAT OPERATORS</h1>
             <Button class="button"><FaInstagram/></Button>{' '}
             <Button class="button"><FaTwitter/></Button>
           </div>
         </div>
         <div style={{padding:"30px"}} class="row justify-content-md-center">
           <div style={{padding:"30px",textAlign:"center"}} class="col">
             <img src={peer} width="300" height="120"/>
             <h1 class="h2">PEER PRESSURE</h1>
             <Button class="button"><FaInstagram/></Button>{' '}
             <Button class="button"><FaTwitter/></Button>
           </div>
           <div style={{padding:"30px",textAlign:"center"}} class="col align-items-center">
             <img src={tim} width="300" height="120"/>
             <h1 class="h2">TIM FOIL</h1>
             <h1 class="h2">Official Site</h1>
             <Button class="button"><FaInstagram/></Button>{' '}
             <Button class="button"><FaTwitter/></Button>
           </div>
           <div style={{padding:"30px",textAlign:"center"}} class="col">
             <img src={tom} width="300" height="120"/>
             <h1 class="h2">TOM808</h1>
             <Button class="button"><FaInstagram/></Button>{' '}
             <Button class="button"><FaTwitter/></Button>
           </div>
           <div style={{padding:"30px",textAlign:"center"}} class="col">
             <img src={pig} width="300" height="120"/>
             <h1 class="h2">THE PIG, VERBATIM</h1>
             <Button class="button"><FaInstagram/></Button>{' '}
             <Button class="button" ><FaTwitter/></Button>
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
