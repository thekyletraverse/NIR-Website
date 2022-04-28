import logo from './logo.svg';
import './App.css';
import monst from './NI Monster.png'
import notta from './1Not an Icon.png'
import look from './Not an Iconn.png'
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
        <div>
          <div style={{ height: 165, marginTop: 6 }}class="col">
          <img src={notta} width="250"
            height="200" className="App-logo" alt="logo" />
          <h1 class="h1" style={{fontSize: "1rem"}}>Hover!</h1>
          <Button variant= "dark" size="xl"
              onMouseEnter={() => {
                setIsHovering(true);
                play();
              }}
              onMouseLeave={() => {
                setIsHovering(false);
                stop();
              }}
            ><FaPlay />
            <span role="img" aria-label="trumpet">

          </span>
            </Button>
          </div>
          <div class="col">
             <FaCloud class="Cloud-logo"size="lg"/>
             <FaCloud class="Cloud-logo3" size="lg"/>
             <img src={monst} width="300"
               height="120" className="image-style6" alt="logo" />
               <img src={look} width="300"
                 height="120" className="image-style6" alt="logo" />
          </div>
          <div class="col">
           <FaCloud class="Cloud-logo2" size="lg"/>

          <FaCloud class="Cloud-logo" size="sm"/>
          </div>
        </div>
      </div>
      <Footer/>
    </div>

  );
}

export default Home;
