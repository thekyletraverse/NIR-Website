import React from "react";
import rickys1 from './Events/IMG_9235.JPG'
import bigboss from './Events/rickysliveshowFEB2022 copy.JPEG'
import rickys2 from './Events/IMG_0603.jpg'
import { FaHourglassStart} from 'react-icons/fa';
import Footer from './footer'

export default function Events() {
  return (
    <div>

    <div class="events">

    <h1 style={{padding:"30px"}} class="h1">EVENTS</h1>

    <div class="container">

      <div style={{padding:"10px"}} class="row justify-content-md-center">

        <div style={{padding:"10px", textAlign:"center"}} class="col">
          <h1 style={{padding:"10px",textAlign:"center"}} class="h1">PREVIOUS:</h1>
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
          <h1 style={{padding:"20px",textAlign:"center"}} class="h1">UPCOMING:</h1>
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
