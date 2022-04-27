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
import dogg from './Covers/Screen Shot 2022-04-26 at 9.42.39 PM.png'
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

import { Button, Container} from 'react-bootstrap'
import { FaApple, FaSpotify} from 'react-icons/fa';

export default function Music() {
  return (
    <div>
    <div class="music">
      <h1>MUSIC</h1>
      <div class="container">
        <div class="row">
          <div class="col">

            <img src={bean} width="300" height="120"/>
            <Button><FaApple/></Button>
            <Button><FaSpotify/></Button>
          </div>
          <div class="col">

            <img src={bum} width="300" height="120"/>
            <Button><FaApple/></Button>
            <Button><FaSpotify/></Button>
          </div>
          <div class="col">

            <img src={metal} width="300" height="120"/>

          </div>
          <div class="col">

            <img src={text} width="300" height="120"/>

          </div>
        </div>
        <div class="row">
          <div class="col">

            <img src={berg} width="300" height="120"/>

          </div>
          <div class="col">

            <img src={nin} width="300" height="120"/>

          </div>
          <div class="col">

            <img src={tin} width="300" height="120"/>

          </div>
          <div class="col">

            <img src={verb} width="300" height="120"/>

          </div>
        </div>
        <div class="row">
          <div class="col">

            <img src={dogg} width="300" height="120"/>

          </div>
          <div class="col">
            <img src={visc} width="300" height="120"/>

          </div>
          <div class="col">
            <img src={hook} width="300" height="120"/>
          </div>
          <div class="col">
            <img src={guyz} width="300" height="120"/>

          </div>
        </div>
        <div class="row">
          <div class="col">
          <img src={pop} width="300" height="120"/>

          </div>
          <div class="col">
            <img src={eight} width="300" height="120"/>

          </div>
          <div class="col">
            <img src={mead} width="300" height="120"/>

          </div>
          <div class="col">
            <img src={spare} width="300" height="120"/>

          </div>
        </div>
        <div class="row">
          <div class="col">
          <img src={beaut} width="300" height="120"/>

          </div>
          <div class="col">
            <img src={cheese} width="300" height="120"/>

          </div>
          <div class="col">
            <img src={vib2} width="300" height="120"/>

          </div>
          <div class="col">
            <img src={fran} width="300" height="120"/>

          </div>
        </div>
        <div class="row">
          <div class="col">
          <img src={harl} width="300" height="120"/>

          </div>
          <div class="col">
            <img src={who} width="300" height="120"/>

          </div>
          <div class="col">
            <img src={grass} width="300" height="120"/>

          </div>
          <div class="col">
            <img src={sprite} width="300" height="120"/>

          </div>
        </div>
        <div class="row">
          <div class="col">
          <img src={cabb} width="300" height="120"/>

          </div>
          <div class="col">
            <img src={lett} width="300" height="120"/>

          </div>
          <div class="col">
            <img src={dear} width="300" height="120"/>

          </div>
          <div class="col">
            <img src={withy} width="300" height="120"/>

          </div>
        </div>
        <div class="row">
          <div class="col">
          <img src={jams} width="300" height="120"/>

          </div>
          <div class="col">
            <img src={casa} width="300" height="120"/>

          </div>
          <div class="col">
            <img src={vib} width="300" height="120"/>

          </div>
          <div class="col">
            <img src={cac} width="300" height="120"/>

          </div>
        </div>
        <div class="row">
          <div class="col">
          <img src={mayo} width="300" height="120"/>

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
