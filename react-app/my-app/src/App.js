import logo from './logo.svg';
import './App.css';
import monst from './NI Monster.png'
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navigation.js";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import useSound from 'use-sound';
import { Button, Container} from 'react-bootstrap'
import music from './JAZZ VIBES.mp3';
import React, { useState } from 'react';


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
        <img src={monst} className="App-logo" alt="logo" />
        <a
          className="bg-image"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
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
     🎺
   </span>
        </Button>
  
    </div>

    </div>


  );
}

export default App;
