import logo from './logo.svg';
import './App.css';
import monst from './NI Monster.png'
import notta from './1Not an Icon.png'
import look from './Not an Iconn.png'
import splat from './Nothing Iconic Reccords opng.png'
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Switch } from "react-router-dom";
import useSound from 'use-sound';
import { Button, Container} from 'react-bootstrap'
import music from './react-app_my-app_src_JAZZ VIBES.mp3';
import React, { useState } from 'react';
import { FaPlay, FaCloud} from 'react-icons/fa';
import Footer from './footer'


function Home() {

  const [play, { stop }] = useSound(
      music,
      { volume: 0.7}
    );

    const [isHovering, setIsHovering] = React.useState(
      false
    );

  return (
    <div>
      <div className="App-header">
        <div class="row">
          <div style={{ height: 120, marginTop: 10 }}class="col">
            <i style={{padding: "40px"}}class="button-style fa-2x"><FaPlay/></i>
          </div>

          <div style={{ height: 120, marginTop: 10 }}class="col">

          </div>

          <div style={{ height: 120, marginTop: 10 }}class="col">

          </div>
        </div>

        <div class="row">

          <div class="col">

             <FaCloud class="Cloud-logo"size="lg"/>

             <FaCloud class="Cloud-logo2" size="lg"/>

          </div>

          <div class="col">
          <img src={monst} width="300"
              height="120" className="image-style6" alt="logo" />

             <FaCloud class="Cloud-logo3" size="lg"/>


          </div>

          <div class="col">




          </div>

        </div>
        <div class="row">

          <div class="col">

             <FaCloud class="Cloud-logo"size="lg"/>

             <FaCloud class="Cloud-logo2" size="lg"/>

          </div>

          <div class="col">

            <img src={splat} width="300"
                  height="120" className="image-style6" alt="logo" />



             <FaCloud class="Cloud-logo" size="sm"/>
          </div>

          <div class="col">

             <FaCloud class="Cloud-logo"size="lg"/>
  <i class="button-style fa-2x"><FaPlay/></i>
             <FaCloud class="Cloud-logo2" size="lg"/>

          </div>

        </div>
      </div>
      <Footer/>
    </div>

  );
}

export default Home;
