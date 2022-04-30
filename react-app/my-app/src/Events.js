import React from "react";
import rickys1 from './Events/IMG_9235.JPG'
import bigboss from './Events/rickysliveshowFEB2022 copy.JPEG'
import rickys2 from './Events/IMG_0603.jpg'
import { FaHourglassStart} from 'react-icons/fa';
import Footer from './footer'
import SimpleImageSlider from "react-simple-image-slider";
import 'react-slideshow-image/dist/styles.css'
import image1 from './Events/IMG_9637.JPEG';
import image2 from './Events/IMG_0604.jpg';
import image3 from './Events/IMG_0610.jpg'

import image6 from './Events/IMG_0607.jpg'
import image7 from './Events/IMG_0611.jpg'

const images = [
    { url: image3 },
  { url: image1 },
  { url: image2 },

{ url: image6 },
{ url: image7 },

];
export default function Events() {


  return (
    <div>

    <div class="events">
    <h1 style={{padding:"30px"}} class="h1">EVENTS</h1>

    <div class="container">

      <div style={{padding:"15px"}} class="row justify-content-md-center">

        <div style={{padding:"10px", textAlign:"center", width: 10, height: 470, marginTop: 1}} class="col image-style5">
        <SimpleImageSlider class="image-style5"
                width={1266}
                height={450}
                images={images}
                showBullets={true}
                showNavs={true}
              />
        </div>
      </div>


      <div style={{padding:"1px"}} class="row justify-content-md-center">

        <div style={{padding:"60px",textAlign:"center"}} class="col">
          <img class="image-style5" src={rickys1} width="300" height="120"/>
          <h1 style={{padding:"30px",textAlign:"center"}} class="h2">RICKY'S BACK</h1>
        </div>

        <div style={{padding:"60px",textAlign:"center"}} class="col">
          <img class="image-style5" src={bigboss} width="300" height="120"/>
          <h1 style={{padding:"30px",textAlign:"center"}} class="h2">THE BIG BOSS UP CONVENTION</h1>
        </div>

        <div style={{padding:"60px",textAlign:"center"}} class="col">
          <img class="image-style5" src={rickys2} width="300" height="120"/>
          <h1 style={{padding:"30px",textAlign:"center"}} class="h2">RICKY'S BACK AGAIN</h1>
        </div>

      </div>
      <div style={{padding:"10px"}} class="row justify-content-md-center">

        <div style={{padding:"20px", textAlign:"center"}} class="col">
          <h1 style={{padding:"25px",textAlign:"center"}} class="h1">UPCOMING:</h1>
        </div>

      </div>
      <div class="row justify-content-md-center">
        <div style={{padding:"10px", textAlign:"center"}} class="col">
          <h1 class="h2">PLEASE WAIT...</h1>
          <i class="button-style App-logo2 fa-2x"><FaHourglassStart/></i>
          <h1 class="h2">MORE COMING SOON!</h1>
        </div>
      </div>
      <div class="row justify-content-md-center">
        <div style={{padding:"20px", textAlign:"center"}} class="col">

        </div>
      </div>

    </div>

    </div>

<Footer/>
    </div>
  );
}
