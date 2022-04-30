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
import audio1 from './AudioFiles/FADE AWAY SNIPPET.wav';
import audio2 from './AudioFiles/HUEW SNIPPET.wav';
import audio3 from './AudioFiles/PAINT PICTURES SNIPPET.wav';
import React, { useState } from 'react';
import { FaPlay, FaCloud} from 'react-icons/fa';
import Footer from './footer'


function Home() {

  const [play] = useSound(
    audio1,
    { volume: 0.5 }
  );
  const [play2, { stop2 }] = useSound(
    audio2,
    { volume: 0.5 }
  );
  const [play3, { stop3 }] = useSound(
    audio3,
    { volume: 0.5 }
  );
  const [isHovering, setIsHovering] = React.useState(
    false
  );


  return (
    <div>
      <div className="App-header">
        <div class="row">
          <div style={{ height: 80, marginTop: 10 }}class="col">

          </div>

          <div style={{ padding: "20px", height: 80, marginTop: 10 }}class="col">

            <a class="button-style3 fa-2x" onMouseEnter={() => {

        play();
      }}
    ><FaPlay/></a>
          </div>

          <div style={{ height: 80, marginTop: 10 }}class="col">

          </div>
        </div>

        <div class="row">

          <div class="col">

             <FaCloud class="Cloud-logo"size="lg"/>

             <FaCloud class="Cloud-logo2" size="lg"/>

          </div>

          <div class="col">
          <img src={monst} width="300"
              height="80" className="image-style6" alt="logo" />

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
                  height="80" className="image-style6" alt="logo" />


                  <a class="button-style3 fa-2x" onMouseEnter={() => {

                  play2();
                  }}
                  onMouseLeave={() => {
                  stop2();
                  }}><FaPlay/></a>
             <FaCloud class="Cloud-logo" size="sm"/>
          </div>

          <div class="col">

             <FaCloud class="Cloud-logo "size="lg"/>
             <i style={{padding:"20px"}}class="button-style fa-2x" onMouseEnter={() => {
         setIsHovering(true);
         play3();
       }}
       onMouseLeave={() => {
         setIsHovering(false);
         stop3();
       }}><FaPlay/></i>
             <FaCloud class="Cloud-logo2" size="lg"/>

          </div>

        </div>
      </div>
      <Footer/>
    </div>

  );
}

export default Home;
