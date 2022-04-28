import React from "react";
import Footer from './footer'
import bean from './Covers/Screen Shot 2022-04-26 at 9.39.43 PM.png'
import bum from './Covers/rsz_bum_real_cover.jpg'
import metal from './Covers/Screen Shot 2022-04-26 at 9.40.01 PM.png'
import text from './Covers/Screen Shot 2022-04-26 at 9.46.56 PM.png'
import berg from './Covers/Screen Shot 2022-04-26 at 9.40.41 PM.png'
import nin from './Covers/Screen Shot 2022-04-26 at 9.41.08 PM.png'
import tin from './Covers/Screen Shot 2022-04-26 at 9.47.10 PM.png'
import verb from './Covers/Screen Shot 2022-04-26 at 9.42.39 PM.png'
import dogg from './Covers/Screen Shot 2022-04-26 at 9.41.22 PM.png'
import visc from './Covers/Screen Shot 2022-04-26 at 9.41.38 PM.png'
import hook from './Covers/Screen Shot 2022-04-26 at 9.41.54 PM.png'
import guyz from './Covers/Screen Shot 2022-04-26 at 10.06.25 PM.png'
import pop from './Covers/Screen Shot 2022-04-26 at 9.47.24 PM.png'
import eight from './Covers/Screen Shot 2022-04-26 at 9.49.14 PM.png'
import mead from './Covers/Screen Shot 2022-04-26 at 9.43.44 PM.png'
import spare from './Covers/Screen Shot 2022-04-26 at 9.46.09 PM.png'
import beaut from './Covers/Screen Shot 2022-04-26 at 9.45.49 PM.png'
import cheese from './Covers/Screen Shot 2022-04-26 at 9.48.13 PM.png'
import vib2 from './Covers/Screen Shot 2022-04-26 at 9.44.57 PM.png'
import fran from './Covers/Screen Shot 2022-04-26 at 9.46.32 PM.png'
import harl from './Covers/Screen Shot 2022-04-26 at 9.44.02 PM.png'
import who from './Covers/Screen Shot 2022-04-26 at 10.06.47 PM.png'
import grass from './Covers/Screen Shot 2022-04-26 at 9.44.39 PM.png'
import sprite from './Covers/Screen Shot 2022-04-26 at 10.07.06 PM.png'
import cabb from './Covers/Screen Shot 2022-04-26 at 9.45.18 PM.png'
import lett from './Covers/Screen Shot 2022-04-26 at 9.47.57 PM.png'
import dear from './Covers/Screen Shot 2022-04-26 at 9.48.55 PM.png'
import withy from './Covers/Screen Shot 2022-04-26 at 9.50.27 PM.png'
import jams from './Covers/Screen Shot 2022-04-26 at 9.43.19 PM.png'
import casa from './Covers/Screen Shot 2022-04-26 at 9.48.40 PM.png'
import vib from './Covers/Screen Shot 2022-04-26 at 9.44.25 PM.png'
import cac from './Covers/Screen Shot 2022-04-26 at 9.43.01 PM.png'
import mayo from './Covers/Screen Shot 2022-04-26 at 9.47.45 PM.png'
import 'font-awesome/css/font-awesome.min.css';

import { Button, Container} from 'react-bootstrap'
import { FaApple, FaSpotify} from 'react-icons/fa';
import { Link, Router, Route } from "react-router-dom";

export default function Music() {
  return (
    <div>
    <div class="music">
      <h1 style={{padding:"25px"}} class="h1">MUSIC</h1>
      <div class="container">
        <div style={{padding:"10px"}}class="row">
          <div style={{padding:"20px", textAlign:"center"}} class="col">

            <img class="image-style2" src={bean} width="300" height="120"/>
            <a href="https://music.apple.com/us/album/spilled-beans/1617701719">
              <i style={{padding:"30px"}} class="button-style"><FaApple/></i>
            </a>
            <a href="https://open.spotify.com/album/4BQraO7k99PRpXdRiARjEQ?si=NiqA0-fnRkecoDdqWm-ILQ">
              <i style={{padding:"30px"}} class="button-style"><FaSpotify/></i>
            </a>
          </div>
          <div style={{padding:"20px", textAlign:"center"}} class="col">

            <img class="image-style2" src={bum} width="300" height="120"/>
            <a href="https://music.apple.com/us/album/those-bum-tendencies/1615297111">
              <i style={{padding:"30px"}} class="button-style"><FaApple/></i>
            </a>
            <a href="https://open.spotify.com/album/4BQraO7k99PRpXdRiARjEQ?si=NiqA0-fnRkecoDdqWm-ILQ">
              <i style={{padding:"30px"}} class="button-style"><FaSpotify/></i>
            </a>
          </div>
          <div style={{padding:"20px", textAlign:"center"}} class="col">

            <img class="image-style2" src={metal} width="300" height="120"/>
            <a href="https://music.apple.com/us/album/metal-tune/1613191287?i=1613191288">
              <i style={{padding:"30px"}} class="button-style"><FaApple/></i>
            </a>
            <a href="https://open.spotify.com/album/4BQraO7k99PRpXdRiARjEQ?si=NiqA0-fnRkecoDdqWm-ILQ">
              <i style={{padding:"30px"}} class="button-style"><FaSpotify/></i>
            </a>
          </div>
          <div style={{padding:"20px", textAlign:"center"}} class="col">

            <img class="image-style2" src={text} width="300" height="120"/>
            <a href="https://music.apple.com/us/album/texting-while-driving/1598940530">
              <i style={{padding:"30px"}} class="button-style"><FaApple/></i>
            </a>
            <a href="https://open.spotify.com/album/4BQraO7k99PRpXdRiARjEQ?si=NiqA0-fnRkecoDdqWm-ILQ">
              <i style={{padding:"30px"}} class="button-style"><FaSpotify/></i>
            </a>
          </div>
        </div>
        <div style={{padding:"10px"}}class="row">
          <div style={{padding:"20px", textAlign:"center"}} class="col">

            <img class="image-style2" src={berg} width="300" height="120"/>
            <a href="https://music.apple.com/us/album/bergamot-single/1597908527">
              <i style={{padding:"30px"}} class="button-style"><FaApple/></i>
            </a>
            <a href="https://open.spotify.com/album/4BQraO7k99PRpXdRiARjEQ?si=NiqA0-fnRkecoDdqWm-ILQ">
              <i style={{padding:"30px"}} class="button-style"><FaSpotify/></i>
            </a>
          </div>
          <div style={{padding:"20px", textAlign:"center"}} class="col">

            <img class="image-style2" src={nin} width="300" height="120"/>
            <a href="https://music.apple.com/us/album/cacophony-ep/1448573381">
              <i style={{padding:"30px"}} class="button-style"><FaApple/></i>
            </a>
            <a href="https://open.spotify.com/album/4BQraO7k99PRpXdRiARjEQ?si=NiqA0-fnRkecoDdqWm-ILQ">
              <i style={{padding:"30px"}} class="button-style"><FaSpotify/></i>
            </a>
          </div>
          <div style={{padding:"20px", textAlign:"center"}} class="col">

            <img class="image-style2" src={tin} width="300" height="120"/>
            <a href="https://music.apple.com/us/album/tin-and-gold/1566835401">
              <i style={{padding:"30px"}} class="button-style"><FaApple/></i>
            </a>
            <a href="https://open.spotify.com/album/4BQraO7k99PRpXdRiARjEQ?si=NiqA0-fnRkecoDdqWm-ILQ">
              <i style={{padding:"30px"}} class="button-style"><FaSpotify/></i>
            </a>
          </div>
          <div style={{padding:"20px", textAlign:"center"}} class="col">

            <img class="image-style2"  src={verb} width="300" height="120"/>
            <a href="https://music.apple.com/us/album/the-pig-verbatim/1564960985">
              <i style={{padding:"30px"}} class="button-style"><FaApple/></i>
            </a>
            <a href="https://open.spotify.com/album/4BQraO7k99PRpXdRiARjEQ?si=NiqA0-fnRkecoDdqWm-ILQ">
              <i style={{padding:"30px"}} class="button-style"><FaSpotify/></i>
            </a>
          </div>
        </div>
        <div style={{padding:"10px"}} class="row">
          <div style={{padding:"20px", textAlign:"center"}} class="col">

            <img class="image-style2" src={dogg} width="300" height="120"/>
            <a href="https://music.apple.com/us/album/doggerel-single/1557068972">
              <i style={{padding:"30px"}} class="button-style"><FaApple/></i>
            </a>
            <a href="https://open.spotify.com/album/4BQraO7k99PRpXdRiARjEQ?si=NiqA0-fnRkecoDdqWm-ILQ">
              <i style={{padding:"30px"}} class="button-style"><FaSpotify/></i>
            </a>
          </div>
          <div style={{padding:"20px", textAlign:"center"}} class="col">
            <img class="image-style2" src={visc} width="300" height="120"/>
            <a href="https://music.apple.com/us/album/viscous-single/1544583112">
              <i style={{padding:"30px"}} class="button-style"><FaApple/></i>
            </a>
            <a href="https://open.spotify.com/album/4BQraO7k99PRpXdRiARjEQ?si=NiqA0-fnRkecoDdqWm-ILQ">
              <i style={{padding:"30px"}} class="button-style"><FaSpotify/></i>
            </a>
          </div>
          <div style={{padding:"20px", textAlign:"center"}} class="col">
            <img class="image-style2" src={hook} width="300" height="120"/>
            <a href="https://music.apple.com/us/album/hooked/1536204488">
              <i style={{padding:"30px"}} class="button-style"><FaApple/></i>
            </a>
            <a href="https://open.spotify.com/album/4BQraO7k99PRpXdRiARjEQ?si=NiqA0-fnRkecoDdqWm-ILQ">
              <i style={{padding:"30px"}} class="button-style"><FaSpotify/></i>
            </a>
          </div>
          <div style={{padding:"20px", textAlign:"center"}} class="col">
            <img class="image-style2" src={guyz} width="300" height="120"/>
            <a href="https://music.apple.com/us/album/cacophony-ep/1448573381">
              <i style={{padding:"30px"}} class="button-style"><FaApple/></i>
            </a>
            <a href="https://open.spotify.com/album/4BQraO7k99PRpXdRiARjEQ?si=NiqA0-fnRkecoDdqWm-ILQ">
              <i style={{padding:"30px"}} class="button-style"><FaSpotify/></i>
            </a>
          </div>
        </div>
        <div style={{padding:"10px"}} class="row">
          <div style={{padding:"20px", textAlign:"center"}} class="col">
          <img class="image-style2" src={pop} width="300" height="120"/>
          <a href="https://music.apple.com/us/album/alien-pop/1509908229">
            <i style={{padding:"30px"}} class="button-style"><FaApple/></i>
          </a>
          <a href="https://open.spotify.com/album/4BQraO7k99PRpXdRiARjEQ?si=NiqA0-fnRkecoDdqWm-ILQ">
            <i style={{padding:"30px"}} class="button-style"><FaSpotify/></i>
          </a>
          </div>
          <div style={{padding:"20px", textAlign:"center"}} class="col">
            <img class="image-style2" src={eight} width="300" height="120"/>
            <a href="https://music.apple.com/us/album/tomato-eight/1507496109">
              <i style={{padding:"30px"}} class="button-style"><FaApple/></i>
            </a>
            <a href="https://open.spotify.com/album/4BQraO7k99PRpXdRiARjEQ?si=NiqA0-fnRkecoDdqWm-ILQ">
              <i style={{padding:"30px"}} class="button-style"><FaSpotify/></i>
            </a>
          </div>
          <div style={{padding:"20px", textAlign:"center"}} class="col">
            <img class="image-style2" src={mead} width="300" height="120"/>
            <a href="https://music.apple.com/us/album/meadowlark-single/1507263601">
              <i style={{padding:"30px"}} class="button-style"><FaApple/></i>
            </a>
            <a href="https://open.spotify.com/album/4BQraO7k99PRpXdRiARjEQ?si=NiqA0-fnRkecoDdqWm-ILQ">
              <i style={{padding:"30px"}} class="button-style"><FaSpotify/></i>
            </a>
          </div>
          <div style={{padding:"20px", textAlign:"center"}} class="col">
            <img class="image-style2" src={spare} width="300" height="120"/>
            <a href="https://music.apple.com/us/album/cacophony-ep/1448573381">
              <i style={{padding:"30px"}} class="button-style"><FaApple/></i>
            </a>
            <a href="https://open.spotify.com/album/4BQraO7k99PRpXdRiARjEQ?si=NiqA0-fnRkecoDdqWm-ILQ">
              <i style={{padding:"30px"}} class="button-style"><FaSpotify/></i>
            </a>
          </div>
        </div>
        <div style={{padding:"10px"}} class="row">
          <div style={{padding:"20px", textAlign:"center"}} class="col">
          <img class="image-style2" src={beaut} width="300" height="120"/>
          <a href="https://music.apple.com/us/album/cacophony-ep/1448573381">
            <i style={{padding:"30px"}} class="button-style"><FaApple/></i>
          </a>
          <a href="https://open.spotify.com/album/4BQraO7k99PRpXdRiARjEQ?si=NiqA0-fnRkecoDdqWm-ILQ">
            <i style={{padding:"30px"}} class="button-style"><FaSpotify/></i>
          </a>
          </div>
          <div style={{padding:"20px", textAlign:"center"}} class="col">
            <img class="image-style2" src={cheese} width="300" height="120"/>
            <a href="https://music.apple.com/us/album/cheese/1499276702">
              <i style={{padding:"30px"}} class="button-style"><FaApple/></i>
            </a>
            <a href="https://open.spotify.com/album/4BQraO7k99PRpXdRiARjEQ?si=NiqA0-fnRkecoDdqWm-ILQ">
              <i style={{padding:"30px"}} class="button-style"><FaSpotify/></i>
            </a>
          </div>
          <div style={{padding:"20px", textAlign:"center"}} class="col">
            <img class="image-style2" src={vib2} width="300" height="120"/>
            <a href="https://music.apple.com/us/album/vibrant-ii-ep/1496524118">
              <i style={{padding:"30px"}} class="button-style"><FaApple/></i>
            </a>
            <a href="https://open.spotify.com/album/4BQraO7k99PRpXdRiARjEQ?si=NiqA0-fnRkecoDdqWm-ILQ">
              <i style={{padding:"30px"}} class="button-style"><FaSpotify/></i>
            </a>
          </div>
          <div style={{padding:"20px", textAlign:"center"}} class="col">
            <img class="image-style2" src={fran} width="300" height="120"/>
            <a href="https://music.apple.com/us/album/cacophony-ep/1448573381">
              <i style={{padding:"30px"}} class="button-style"><FaApple/></i>
            </a>
            <a href="https://open.spotify.com/album/4BQraO7k99PRpXdRiARjEQ?si=NiqA0-fnRkecoDdqWm-ILQ">
              <i style={{padding:"30px"}} class="button-style"><FaSpotify/></i>
            </a>
          </div>
        </div>
        <div style={{padding:"10px"}} class="row">
          <div style={{padding:"20px", textAlign:"center"}} class="col">
          <img class="image-style2" src={harl} width="300" height="120"/>
          <a href="https://music.apple.com/us/album/harlequin-book/1486642752">
            <i style={{padding:"30px"}} class="button-style"><FaApple/></i>
          </a>
          <a href="https://open.spotify.com/album/4BQraO7k99PRpXdRiARjEQ?si=NiqA0-fnRkecoDdqWm-ILQ">
            <i style={{padding:"30px"}} class="button-style"><FaSpotify/></i>
          </a>
          </div>
          <div style={{padding:"20px", textAlign:"center"}} class="col">
            <img class="image-style2" src={who} width="300" height="120"/>
            <a href="https://music.apple.com/us/album/who-the-hell-is-justin-schwartz-ep/1486130821">
              <i style={{padding:"30px"}} class="button-style"><FaApple/></i>
            </a>
            <a href="https://open.spotify.com/album/4BQraO7k99PRpXdRiARjEQ?si=NiqA0-fnRkecoDdqWm-ILQ">
              <i style={{padding:"30px"}} class="button-style"><FaSpotify/></i>
            </a>
          </div>
          <div style={{padding:"20px", textAlign:"center"}} class="col">
            <img class="image-style2" src={grass} width="300" height="120"/>
            <a href="https://music.apple.com/us/album/grass-alley/1485172838">
              <i style={{padding:"30px"}} class="button-style"><FaApple/></i>
            </a>
            <a href="https://open.spotify.com/album/4BQraO7k99PRpXdRiARjEQ?si=NiqA0-fnRkecoDdqWm-ILQ">
              <i style={{padding:"30px"}} class="button-style"><FaSpotify/></i>
            </a>
          </div>
          <div style={{padding:"20px", textAlign:"center"}} class="col">
            <img class="image-style2" src={sprite} width="300" height="120"/>
            <a href="https://music.apple.com/us/album/cacophony-ep/1448573381">
              <i style={{padding:"30px"}} class="button-style"><FaApple/></i>
            </a>
            <a href="https://open.spotify.com/album/4BQraO7k99PRpXdRiARjEQ?si=NiqA0-fnRkecoDdqWm-ILQ">
              <i style={{padding:"30px"}} class="button-style"><FaSpotify/></i>
            </a>
          </div>
        </div>
        <div style={{padding:"10px"}} class="row">
          <div style={{padding:"20px", textAlign:"center"}} class="col">
          <img class="image-style2" src={cabb} width="300" height="120"/>
          <a href="https://music.apple.com/us/album/cacophony-ep/1448573381">
            <i style={{padding:"30px"}} class="button-style"><FaApple/></i>
          </a>
          <a href="https://open.spotify.com/album/4BQraO7k99PRpXdRiARjEQ?si=NiqA0-fnRkecoDdqWm-ILQ">
            <i style={{padding:"30px"}} class="button-style"><FaSpotify/></i>
          </a>
          </div>
          <div style={{padding:"20px", textAlign:"center"}} class="col">
            <img class="image-style2" src={lett} width="300" height="120"/>
            <a href="https://music.apple.com/us/album/lettuce/1467549477">
              <i style={{padding:"30px"}} class="button-style"><FaApple/></i>
            </a>
            <a href="https://open.spotify.com/album/4BQraO7k99PRpXdRiARjEQ?si=NiqA0-fnRkecoDdqWm-ILQ">
              <i style={{padding:"30px"}} class="button-style"><FaSpotify/></i>
            </a>
          </div>
          <div style={{padding:"20px", textAlign:"center"}} class="col">
            <img class="image-style2" src={dear} width="300" height="120"/>
          </div>
          <div style={{padding:"20px", textAlign:"center"}} class="col">
            <img class="image-style2" src={withy} width="300" height="120"/>
            <a href="https://music.apple.com/us/album/with-you-single/1460043640">
              <i style={{padding:"30px"}} class="button-style"><FaApple/></i>
            </a>
            <a href="https://open.spotify.com/album/4BQraO7k99PRpXdRiARjEQ?si=NiqA0-fnRkecoDdqWm-ILQ">
              <i style={{padding:"30px"}} class="button-style"><FaSpotify/></i>
            </a>
          </div>
        </div>
        <div style={{padding:"10px"}} class="row">
          <div style={{padding:"20px", textAlign:"center"}} class="col">
          <img class="image-style2" src={jams} width="300" height="120"/>
          <a href="https://music.apple.com/us/album/bummerjams-vol-ii/1458192905">
            <i style={{padding:"30px"}} class="button-style"><FaApple/></i>
          </a>
          <a href="https://open.spotify.com/album/4BQraO7k99PRpXdRiARjEQ?si=NiqA0-fnRkecoDdqWm-ILQ">
            <i style={{padding:"30px"}} class="button-style"><FaSpotify/></i>
          </a>
          </div>
          <div style={{padding:"20px", textAlign:"center"}} class="col">
            <img class="image-style2" src={casa} width="300" height="120"/>

          </div>
          <div style={{padding:"20px", textAlign:"center"}} class="col">
            <img class="image-style2" src={vib} width="300" height="120"/>
            <a href="https://music.apple.com/us/album/cacophony-ep/1448573381">
              <i style={{padding:"30px"}} class="button-style"><FaApple/></i>
            </a>
            <a href="https://open.spotify.com/album/4BQraO7k99PRpXdRiARjEQ?si=NiqA0-fnRkecoDdqWm-ILQ">
              <i style={{padding:"30px"}} class="button-style"><FaSpotify/></i>
            </a>
          </div>
          <div style={{padding:"20px", textAlign:"center"}} class="col">
            <img class="image-style2" src={cac} width="300" height="120"/>
              <a href="https://music.apple.com/us/album/cacophony-ep/1448573381">
                <i style={{padding:"30px"}} class="button-style"><FaApple/></i>
              </a>
              <a href="https://open.spotify.com/album/4BQraO7k99PRpXdRiARjEQ?si=NiqA0-fnRkecoDdqWm-ILQ">
                <i style={{padding:"30px"}} class="button-style"><FaSpotify/></i>
              </a>
          </div>
        </div>
        <div style={{padding:"10px"}} class="row">
          <div style={{padding:"20px", textAlign:"center"}} class="col">
          <img  class="image-style2"src={mayo} width="300" height="120"/>
          <a href="https://music.apple.com/us/album/mayo/1439612047">
            <i style={{padding:"30px"}} class="button-style"><FaApple/></i>
          </a>
          <a href="https://open.spotify.com/album/4BQraO7k99PRpXdRiARjEQ?si=NiqA0-fnRkecoDdqWm-ILQ">
            <i style={{padding:"30px"}} class="button-style"><FaSpotify/></i>
          </a>
          </div>
          <div class="col">


          </div>
          <div class="col">


          </div>
          <div class="col">


          </div>
        </div>
      </div>

   </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}
