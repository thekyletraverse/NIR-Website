import logo from './logo.svg';
import './App.css';
import monst from './NI Monster.png'
import cloud from './2-21664_cartoon-cloud-with-blue-background-clipart-cloud-clip.png'
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navigation.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import useSound from 'use-sound';
import { Button, Container} from 'react-bootstrap'
import music from './react-app_my-app_src_JAZZ VIBES.mp3';
import React, { useState } from 'react';
import Footer from './footer'



function App() {

  const [play, { stop }] = useSound(
      music,
      { volume: 0.5 }
    );

    const [isHovering, setIsHovering] = React.useState(
      false
    );



  return (
    <div className="App">

    <div>

    <Navbar />

      <header className="App-header">
        <div class="row">
          <div class="col">
            <img src={monst} className="App-logo" alt="logo" />
          </div>
          <div class="col">
          <img src={cloud} width="150"
            height="150"className ="App" alt="logo"/>
          </div>
        </div>
        <div class="row">
          <div class="col">
          <h1>Hover to Play</h1>
          </div>
        </div>
        <div class="row">
          <div class="col">
          <Button
              onMouseEnter={() => {
                setIsHovering(true);
                play();
              }}
              onMouseLeave={() => {
                setIsHovering(false);
                stop();
              }}
            >
            <span role="img" aria-label="trumpet">
          HOVER
          </span>
            </Button>
          </div>
        </div>

        <a
          className="bg-image"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>

<Footer/>
    </div>

    </div>


  );
}

export default App;
