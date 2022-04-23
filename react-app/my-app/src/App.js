import logo from './logo.svg';
import './App.css';
import monst from './NI Monster.png'
import cloud from './Cartoon-cloud-on-transparent-background-PNG.png'
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navigation.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import useSound from 'use-sound';
import { Button, Container} from 'react-bootstrap'
import music from './react-app_my-app_src_JAZZ VIBES.mp3';
import React, { useState } from 'react';
import Footer from './footer'
import { FaPlay} from 'react-icons/fa';



function App() {

  const [play, { stop }] = useSound(
      music,
      { volume: 0.7}
    );

    const [isHovering, setIsHovering] = React.useState(
      false
    );



  return (
    <div className="App">

    <div>

    <Navbar />

      <header className="App-header">
        <div class="row-8">
          <div style={{ height: 165, marginTop: 6 }}class="col">
          <h1 class="h1" style={{fontSize: "1rem"}}>Hover!</h1>
          <Button variant= "dark" size="lg"
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

          </div>
        </div>
        <div class="row">
          <div class="col">

          <img src={monst} width="240"
            height="120" className="App-logo" alt="logo" />
          </div>
        </div>
        <div class="row align-items-end">
          <div class="col">

          </div>
          <div class="col">

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
