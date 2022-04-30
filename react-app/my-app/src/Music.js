import React from "react";
import Footer from './footer'
import threeone from './Covers/IMG_0591.jpg'
import bean from './Covers/Screen Shot 2022-04-26 at 9.39.43 PM.png'
import bum from './Covers/Screen Shot 2022-04-27 at 10.15.39 PM.png'
import metal from './Covers/Screen Shot 2022-04-26 at 9.40.01 PM.png'
import kemp from './Covers/IMG_0592.jpg'
import text from './Covers/Screen Shot 2022-04-26 at 9.46.56 PM.png'
import berg from './Covers/Screen Shot 2022-04-26 at 9.40.41 PM.png'
import oliveo from './Covers/IMG_0593.jpg'
import nin from './Covers/Screen Shot 2022-04-26 at 9.41.08 PM.png'
import tin from './Covers/Screen Shot 2022-04-26 at 9.47.10 PM.png'
import verb from './Covers/Screen Shot 2022-04-26 at 9.42.39 PM.png'
import dogg from './Covers/Screen Shot 2022-04-26 at 9.41.22 PM.png'
import fstrange from './Covers/IMG_0594.jpg'
import visc from './Covers/Screen Shot 2022-04-26 at 9.41.38 PM.png'
import earme from './Covers/IMG_6697.PNG'
import season from './Covers/IMG_6511.jpg'
import bibe from './Covers/IMG_0600.jpg'
import ptsun from './Covers/IMG_0599.jpg'
import hook from './Covers/Screen Shot 2022-04-26 at 9.41.54 PM.png'
import bcup from './Covers/IMG_0598.jpg'
import mall from './Covers/IMG_0597.jpg'
import guyz from './Covers/Screen Shot 2022-04-26 at 10.06.25 PM.png'
import food from './Covers/IMG_0589.jpg'
import face2 from './Covers/IMG_0596.jpg'
import pop from './Covers/Screen Shot 2022-04-26 at 9.47.24 PM.png'
import eight from './Covers/Screen Shot 2022-04-26 at 9.49.14 PM.png'
import mead from './Covers/Screen Shot 2022-04-26 at 9.43.44 PM.png'
import spare from './Covers/Screen Shot 2022-04-26 at 9.46.09 PM.png'
import beaut from './Covers/Screen Shot 2022-04-26 at 9.45.49 PM.png'
import steve from './Covers/IMG_0601.jpg'
import cheese from './Covers/Screen Shot 2022-04-26 at 9.48.13 PM.png'
import wtf from './Covers/IMG_0602.jpg'
import remix from './Covers/IMG_0588.jpg'
import vib2 from './Covers/Screen Shot 2022-04-26 at 9.44.57 PM.png'
import fran from './Covers/Screen Shot 2022-04-26 at 9.46.32 PM.png'
import world from './Covers/IMG_0587.jpg'
import fab from './Covers/IMG_0590.jpg'
import harl from './Covers/Screen Shot 2022-04-26 at 9.44.02 PM.png'
import who from './Covers/Screen Shot 2022-04-26 at 10.06.47 PM.png'
import grass from './Covers/Screen Shot 2022-04-26 at 9.44.39 PM.png'
import sprite from './Covers/Screen Shot 2022-04-26 at 10.07.06 PM.png'
import cabb from './Covers/Screen Shot 2022-04-26 at 9.45.18 PM.png'
import lett from './Covers/Screen Shot 2022-04-26 at 9.47.57 PM.png'
import dear from './Covers/Screen Shot 2022-04-26 at 9.48.55 PM.png'
import withy from './Covers/Screen Shot 2022-04-26 at 9.50.27 PM.png'
import jams from './Covers/Screen Shot 2022-04-26 at 9.43.19 PM.png'
import bitter from './Covers/IMG_0595.jpg'
import casa from './Covers/Screen Shot 2022-04-26 at 9.48.40 PM.png'
import vib from './Covers/Screen Shot 2022-04-26 at 9.44.25 PM.png'
import cac from './Covers/Screen Shot 2022-04-26 at 9.43.01 PM.png'
import mayo from './Covers/Screen Shot 2022-04-26 at 9.47.45 PM.png'
import 'font-awesome/css/font-awesome.min.css';

import { Button, Container} from 'react-bootstrap'
import { FaApple, FaSpotify, FaSoundcloud} from 'react-icons/fa';
import { Link, Router, Route } from "react-router-dom";

export default function Music() {
  return (
    <div>
    <div class="music">
      <h1 style={{padding:"25px"}} class="h1">MUSIC</h1>
      <div class="container">

        <div style={{padding:"10px"}}class="row">

          <div style={{padding:"20px", textAlign:"center"}} class="col">
            <img class="image-style2" src={threeone} width="300" height="120"/>
            <a href="https://music.apple.com/us/album/spilled-beans/1617701719">
              <i style={{padding:"30px"}} class="button-style"><FaApple/></i>
            </a>
            <a href="https://open.spotify.com/album/3wf3mNIBOfiXfGnhZXu18H?si=Lvqmmd6FS8CLZ0hDtDAGDw">
              <i style={{padding:"30px"}} class="button-style"><FaSpotify/></i>
            </a>
          </div>
          <div style={{padding:"20px", textAlign:"center"}} class="col">
            <img class="image-style2" src={bean} width="300" height="120"/>
            <a href="https://music.apple.com/us/album/spilled-beans/1617701719">
              <i style={{padding:"30px"}} class="button-style"><FaApple/></i>
            </a>
            <a href="https://open.spotify.com/album/3wf3mNIBOfiXfGnhZXu18H?si=Lvqmmd6FS8CLZ0hDtDAGDw">
              <i style={{padding:"30px"}} class="button-style"><FaSpotify/></i>
            </a>
          </div>


          <div style={{padding:"20px", textAlign:"center"}} class="col">
            <img class="image-style2" src={bum} width="300" height="120"/>
            <a href="https://music.apple.com/us/album/those-bum-tendencies/1615297111">
              <i style={{padding:"30px"}} class="button-style"><FaApple/></i>
            </a>
            <a href="https://open.spotify.com/album/4t513ZyUkTIPpgeWJY42b9?si=A3eWZsIbRBGL_7lw_ZsjEA">
              <i style={{padding:"30px"}} class="button-style"><FaSpotify/></i>
            </a>
          </div>

          <div style={{padding:"20px", textAlign:"center"}} class="col">
            <img class="image-style2" src={metal} width="300" height="120"/>
            <a href="https://music.apple.com/us/album/metal-tune/1613191287?i=1613191288">
              <i style={{padding:"30px"}} class="button-style"><FaApple/></i>
            </a>
            <a href="https://open.spotify.com/track/65FycqHu9Etxdf0J1vPd4p?si=c5290279610d4409">
              <i style={{padding:"30px"}} class="button-style"><FaSpotify/></i>
            </a>
          </div>

        </div>

        <div style={{padding:"10px"}}class="row">

          <div style={{padding:"20px", textAlign:"center"}} class="col">
            <img class="image-style2" src={kemp} width="300" height="120"/>
            <a href="https://music.apple.com/us/album/bergamot-single/1597908527">
              <i style={{padding:"30px"}} class="button-style"><FaApple/></i>
            </a>
            <a href="https://open.spotify.com/album/3oxzbB7lydutstjPZWNruq?si=zk3ubid3TZeDJGKh0GSmhQ">
              <i style={{padding:"30px"}} class="button-style"><FaSpotify/></i>
            </a>
          </div>
          <div style={{padding:"20px", textAlign:"center"}} class="col">
            <img class="image-style2" src={text} width="300" height="120"/>
            <a href="https://music.apple.com/us/album/texting-while-driving/1598940530">
              <i style={{padding:"30px"}} class="button-style"><FaApple/></i>
            </a>
            <a href="https://open.spotify.com/album/1DrRnDNqQSnMsaMbl2gCuj?si=gq5FFCIDThypQKx7nk10PA">
              <i style={{padding:"30px"}} class="button-style"><FaSpotify/></i>
            </a>
          </div>

          <div style={{padding:"20px", textAlign:"center"}} class="col">
            <img class="image-style2" src={berg} width="300" height="120"/>
            <a href="https://music.apple.com/us/album/bergamot-single/1597908527">
              <i style={{padding:"30px"}} class="button-style"><FaApple/></i>
            </a>
            <a href="https://open.spotify.com/album/3oxzbB7lydutstjPZWNruq?si=zk3ubid3TZeDJGKh0GSmhQ">
              <i style={{padding:"30px"}} class="button-style"><FaSpotify/></i>
            </a>
          </div>

          <div style={{padding:"20px", textAlign:"center"}} class="col">
            <img class="image-style2"  src={oliveo} width="300" height="120"/>
            <a href="https://music.apple.com/us/album/the-pig-verbatim/1564960985">
              <i style={{padding:"30px"}} class="button-style"><FaApple/></i>
            </a>
            <a href="https://open.spotify.com/album/5Gf4U7LUFWq2F0BFXWTmaK?si=I3d9Z5z9RMSQxzPvF1Nj3w">
              <i style={{padding:"30px"}} class="button-style"><FaSpotify/></i>
            </a>
          </div>
        </div>

        <div style={{padding:"10px"}} class="row">

        <div style={{padding:"20px", textAlign:"center"}} class="col">
          <img class="image-style2" src={nin} width="300" height="120"/>
          <a href="https://soundcloud.com/nothingiconicrecords/nintendo-miistyle?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing">
            <i style={{padding:"30px"}} class="button-style"><FaSoundcloud/></i>
          </a>
        </div>
          <div style={{padding:"20px", textAlign:"center"}} class="col">
            <img class="image-style2" src={tin} width="300" height="120"/>
            <a href="https://music.apple.com/us/album/tin-and-gold/1566835401">
              <i style={{padding:"30px"}} class="button-style"><FaApple/></i>
            </a>
            <a href="https://open.spotify.com/album/12cx5EuE7Du02t9bwMTujL?si=6UnmeRBoSNOprAdHeFIzwQ">
              <i style={{padding:"30px"}} class="button-style"><FaSpotify/></i>
            </a>
          </div>
          <div style={{padding:"20px", textAlign:"center"}} class="col">
            <img class="image-style2"  src={verb} width="300" height="120"/>
            <a href="https://music.apple.com/us/album/the-pig-verbatim/1564960985">
              <i style={{padding:"30px"}} class="button-style"><FaApple/></i>
            </a>
            <a href="https://open.spotify.com/album/5Gf4U7LUFWq2F0BFXWTmaK?si=I3d9Z5z9RMSQxzPvF1Nj3w">
              <i style={{padding:"30px"}} class="button-style"><FaSpotify/></i>
            </a>
          </div>
          <div style={{padding:"20px", textAlign:"center"}} class="col">
            <img class="image-style2" src={dogg} width="300" height="120"/>
            <a href="https://music.apple.com/us/album/doggerel-single/1557068972">
              <i style={{padding:"30px"}} class="button-style"><FaApple/></i>
            </a>
            <a href="https://open.spotify.com/album/5W7amfZyaZffoKYKNtSpHY?si=90-NYr0cS-CeOItcPiIr9A">
              <i style={{padding:"30px"}} class="button-style"><FaSpotify/></i>
            </a>
          </div>



        </div>

        <div style={{padding:"10px"}} class="row">

          <div style={{padding:"20px", textAlign:"center"}} class="col">
          <img class="image-style2" src={fstrange} width="300" height="120"/>
          <a href="https://music.apple.com/us/album/alien-pop/1509908229">
            <i style={{padding:"30px"}} class="button-style"><FaApple/></i>
          </a>
          <a href="https://open.spotify.com/album/1BNvQpQoMLVeRDfxqv5zaE?si=-7ZHruFIShuk_1i7v8OG0g">
            <i style={{padding:"30px"}} class="button-style"><FaSpotify/></i>
          </a>
          </div>
          <div style={{padding:"20px", textAlign:"center"}} class="col">
            <img class="image-style2" src={visc} width="300" height="120"/>
            <a href="https://music.apple.com/us/album/viscous-single/1544583112">
              <i style={{padding:"30px"}} class="button-style"><FaApple/></i>
            </a>
            <a href="https://open.spotify.com/album/41L1gShnyxM6AdILqlbaGI?si=dIDOi-uRTSOJYopnTgx1Gg">
              <i style={{padding:"30px"}} class="button-style"><FaSpotify/></i>
            </a>
          </div>
          <div style={{padding:"20px", textAlign:"center"}} class="col">
            <img class="image-style2" src={earme} width="300" height="120"/>
            <a href="https://music.apple.com/us/album/meadowlark-single/1507263601">
              <i style={{padding:"30px"}} class="button-style"><FaApple/></i>
            </a>
            <a href="https://open.spotify.com/album/5ZgaezFXJujWw714KCId6D?si=XdO7z4WUSxOZcy4ee0tNjw">
              <i style={{padding:"30px"}} class="button-style"><FaSpotify/></i>
            </a>
            <a href="https://soundcloud.com/wasteddazemusic/meadowlark?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing">
              <i style={{padding:"30px"}} class="button-style"><FaSoundcloud/></i>
            </a>
          </div>
          <div style={{padding:"20px", textAlign:"center"}} class="col">
            <img class="image-style2" src={season} width="300" height="120"/>
            <a href="https://soundcloud.com/nothingiconicrecords/spare-change-the-weathermen?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing">
              <i style={{padding:"30px"}} class="button-style"><FaSoundcloud/></i>
            </a>
          </div>
        </div>

        <div style={{padding:"10px"}} class="row">

          <div style={{padding:"20px", textAlign:"center"}} class="col">
          <img class="image-style2" src={bibe} width="300" height="120"/>
          <a href="https://soundcloud.com/nothingiconicrecords/beautiful-day-stache-lloyd?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing">
            <i style={{padding:"30px"}} class="button-style"><FaSoundcloud/></i>
          </a>
          </div>
          <div style={{padding:"20px", textAlign:"center"}} class="col">
            <img class="image-style2" src={ptsun} width="300" height="120"/>
            <a href="https://music.apple.com/us/album/cheese/1499276702">
              <i style={{padding:"30px"}} class="button-style"><FaApple/></i>
            </a>
            <a href="https://open.spotify.com/album/7gj4GfSki9Cos0OL9D3WOu?si=mP5UO-i7QCOgI5HF9nOObg">
              <i style={{padding:"30px"}} class="button-style"><FaSpotify/></i>
            </a>
          </div>
          <div style={{padding:"20px", textAlign:"center"}} class="col">
            <img class="image-style2" src={hook} width="300" height="120"/>
            <a href="https://music.apple.com/us/album/hooked/1536204488">
              <i style={{padding:"30px"}} class="button-style"><FaApple/></i>
            </a>
            <a href="https://open.spotify.com/album/0fo0c8QVjt2RmTjOOfVHTP?si=3IIP0mlXRPOb4QPAMjpvsg">
              <i style={{padding:"30px"}} class="button-style"><FaSpotify/></i>
            </a>
          </div>

          <div style={{padding:"20px", textAlign:"center"}} class="col">
            <img class="image-style2" src={bcup} width="300" height="120"/>
            <a href="https://soundcloud.com/francis-official/sets/francis?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing">
              <i style={{padding:"30px"}} class="button-style"><FaSoundcloud/></i>
            </a>
          </div>
        </div>

        <div style={{padding:"10px"}} class="row">

          <div style={{padding:"20px", textAlign:"center"}} class="col">
          <img class="image-style2" src={mall} width="300" height="120"/>
          <a href="https://music.apple.com/us/album/harlequin-book/1486642752">
            <i style={{padding:"30px"}} class="button-style"><FaApple/></i>
          </a>
          <a href="https://open.spotify.com/album/5G1ldHZMeD5kDIWLkJBIKS?si=oB4WwMKVSCeymE1b03w6Fw">
            <i style={{padding:"30px"}} class="button-style"><FaSpotify/></i>
          </a>
          <a href="https://soundcloud.com/peer-pressure-476721134/sets/harlequin-book?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing">
            <i style={{padding:"30px"}} class="button-style"><FaSoundcloud/></i>
          </a>
          </div>
          <div style={{padding:"20px", textAlign:"center"}} class="col">
            <img class="image-style2" src={guyz} width="300" height="120"/>
            <a href="https://soundcloud.com/nothingiconicrecords/sets/714-5-guyz?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing">
              <i style={{padding:"30px"}} class="button-style"><FaSoundcloud/></i>
            </a>
          </div>

          <div style={{padding:"20px", textAlign:"center"}} class="col">
            <img class="image-style2" src={food} width="300" height="120"/>
            <a href="https://music.apple.com/us/album/grass-alley/1485172838">
              <i style={{padding:"30px"}} class="button-style"><FaApple/></i>
            </a>
            <a href="https://open.spotify.com/album/0rDq2N2Oj0Njj42BtsnaqT?si=ChCYRxkYSiu13k7Z04tjVQ">
              <i style={{padding:"30px"}} class="button-style"><FaSpotify/></i>
            </a>
            <a href="https://soundcloud.com/nothingiconicrecords/sets/grass-alley-bowling-green?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing">
              <i style={{padding:"30px"}} class="button-style"><FaSoundcloud/></i>
            </a>
          </div>
          <div style={{padding:"20px", textAlign:"center"}} class="col">
            <img class="image-style2" src={face2} width="300" height="120"/>
            <a href="https://soundcloud.com/group_kevin/sprite?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing">
              <i style={{padding:"30px"}} class="button-style"><FaSoundcloud/></i>
            </a>
          </div>
        </div>

        <div style={{padding:"10px"}} class="row">

        <div style={{padding:"20px", textAlign:"center"}} class="col">
        <img class="image-style2" src={pop} width="300" height="120"/>
        <a href="https://music.apple.com/us/album/alien-pop/1509908229">
          <i style={{padding:"30px"}} class="button-style"><FaApple/></i>
        </a>
        <a href="https://open.spotify.com/album/1BNvQpQoMLVeRDfxqv5zaE?si=-7ZHruFIShuk_1i7v8OG0g">
          <i style={{padding:"30px"}} class="button-style"><FaSpotify/></i>
        </a>
        </div>
        <div style={{padding:"20px", textAlign:"center"}} class="col">
          <img class="image-style2" src={eight} width="300" height="120"/>
          <a href="https://music.apple.com/us/album/tomato-eight/1507496109">
            <i style={{padding:"30px"}} class="button-style"><FaApple/></i>
          </a>
          <a href="https://open.spotify.com/album/1xL8W7vxrgGooMgVJ3ZbyU?si=GbgDZCMJSvOoZYFWC2XMvw">
            <i style={{padding:"30px"}} class="button-style"><FaSpotify/></i>
          </a>
        </div>
        <div style={{padding:"20px", textAlign:"center"}} class="col">
          <img class="image-style2" src={mead} width="300" height="120"/>
          <a href="https://music.apple.com/us/album/meadowlark-single/1507263601">
            <i style={{padding:"30px"}} class="button-style"><FaApple/></i>
          </a>
          <a href="https://open.spotify.com/album/5ZgaezFXJujWw714KCId6D?si=XdO7z4WUSxOZcy4ee0tNjw">
            <i style={{padding:"30px"}} class="button-style"><FaSpotify/></i>
          </a>
          <a href="https://soundcloud.com/wasteddazemusic/meadowlark?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing">
            <i style={{padding:"30px"}} class="button-style"><FaSoundcloud/></i>
          </a>
        </div>

          <div style={{padding:"20px", textAlign:"center"}} class="col">
            <img class="image-style2" src={spare} width="300" height="120"/>
            <a href="https://soundcloud.com/nothingiconicrecords/spare-change-the-weathermen?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing">
              <i style={{padding:"30px"}} class="button-style"><FaSoundcloud/></i>
            </a>
          </div>

        </div>

        <div style={{padding:"10px"}} class="row">

          <div style={{padding:"20px", textAlign:"center"}} class="col">
          <img class="image-style2" src={steve} width="300" height="120"/>
          <a href="https://music.apple.com/us/album/bummerjams-vol-ii/1458192905">
            <i style={{padding:"30px"}} class="button-style"><FaApple/></i>
          </a>
          <a href="https://open.spotify.com/album/7JAMThtQExt6hZYGFZSGjw?si=jfiv03oyQaaMXfVYUPkClQ">
            <i style={{padding:"30px"}} class="button-style"><FaSpotify/></i>
          </a>
          <a href="https://soundcloud.com/wasteddazemusic/sets/bummerjams-vol-ii?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing">
            <i style={{padding:"30px"}} class="button-style"><FaSoundcloud/></i>
          </a>
          </div>
          <div style={{padding:"20px", textAlign:"center"}} class="col">
          <img class="image-style2" src={beaut} width="300" height="120"/>
          <a href="https://soundcloud.com/nothingiconicrecords/beautiful-day-stache-lloyd?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing">
            <i style={{padding:"30px"}} class="button-style"><FaSoundcloud/></i>
          </a>
          </div>

          <div style={{padding:"20px", textAlign:"center"}} class="col">
            <img class="image-style2" src={cheese} width="300" height="120"/>
            <a href="https://music.apple.com/us/album/cheese/1499276702">
              <i style={{padding:"30px"}} class="button-style"><FaApple/></i>
            </a>
            <a href="https://open.spotify.com/album/7gj4GfSki9Cos0OL9D3WOu?si=mP5UO-i7QCOgI5HF9nOObg">
              <i style={{padding:"30px"}} class="button-style"><FaSpotify/></i>
            </a>
          </div>

          <div style={{padding:"20px", textAlign:"center"}} class="col">
            <img class="image-style2" src={wtf} width="300" height="120"/>
              <a href="https://music.apple.com/us/album/cacophony-ep/1448573381">
                <i style={{padding:"30px"}} class="button-style"><FaApple/></i>
              </a>
              <a href="https://open.spotify.com/album/4BQraO7k99PRpXdRiARjEQ?si=NiqA0-fnRkecoDdqWm-ILQ">
                <i style={{padding:"30px"}} class="button-style"><FaSpotify/></i>
              </a>
              <a href="https://soundcloud.com/wasteddazemusic/sets/cacophony?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing">
                <i style={{padding:"30px"}} class="button-style"><FaSoundcloud/></i>
              </a>
          </div>
        </div>

        <div style={{padding:"10px"}} class="row">

        <div style={{padding:"20px", textAlign:"center"}} class="col">
        <img class="image-style2" src={remix} width="300" height="120"/>
        <a href="https://music.apple.com/us/album/bummerjams-vol-ii/1458192905">
          <i style={{padding:"30px"}} class="button-style"><FaApple/></i>
        </a>
        <a href="https://open.spotify.com/album/7JAMThtQExt6hZYGFZSGjw?si=jfiv03oyQaaMXfVYUPkClQ">
          <i style={{padding:"30px"}} class="button-style"><FaSpotify/></i>
        </a>
        <a href="https://soundcloud.com/wasteddazemusic/sets/bummerjams-vol-ii?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing">
          <i style={{padding:"30px"}} class="button-style"><FaSoundcloud/></i>
        </a>
        </div>
        <div style={{padding:"20px", textAlign:"center"}} class="col">
          <img class="image-style2" src={vib2} width="300" height="120"/>
          <a href="https://music.apple.com/us/album/vibrant-ii-ep/1496524118">
            <i style={{padding:"30px"}} class="button-style"><FaApple/></i>
          </a>
          <a href="https://open.spotify.com/album/20eBbXV4H7FqpptMfpjy8s?si=wI_COTaZQfKUEBgAkDzAiQ">
            <i style={{padding:"30px"}} class="button-style"><FaSpotify/></i>
          </a>
          <a href="https://soundcloud.com/nothingiconicrecords/sets/vibrant-ii-bowling-green?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing">
            <i style={{padding:"30px"}} class="button-style"><FaSoundcloud/></i>
          </a>
        </div>
        <div style={{padding:"20px", textAlign:"center"}} class="col">
          <img class="image-style2" src={world} width="300" height="120"/>
          <a href="https://music.apple.com/us/album/vibrant-deluxe-ep/1496512278">
            <i style={{padding:"30px"}} class="button-style"><FaApple/></i>
          </a>
          <a href="https://open.spotify.com/album/6fZBZjjq13pVx8annZm4kO?si=qHAhQ2UlQn2_EnjkckvprA">
            <i style={{padding:"30px"}} class="button-style"><FaSpotify/></i>
          </a>
          <a href="https://soundcloud.com/nothingiconicrecords/sets/vibrant-bowling-green?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing">
            <i style={{padding:"30px"}} class="button-style"><FaSoundcloud/></i>
          </a>
        </div>
        <div style={{padding:"20px", textAlign:"center"}} class="col">
          <img class="image-style2" src={fab} width="300" height="120"/>
            <a href="https://music.apple.com/us/album/cacophony-ep/1448573381">
              <i style={{padding:"30px"}} class="button-style"><FaApple/></i>
            </a>
            <a href="https://open.spotify.com/album/4BQraO7k99PRpXdRiARjEQ?si=NiqA0-fnRkecoDdqWm-ILQ">
              <i style={{padding:"30px"}} class="button-style"><FaSpotify/></i>
            </a>
            <a href="https://soundcloud.com/wasteddazemusic/sets/cacophony?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing">
              <i style={{padding:"30px"}} class="button-style"><FaSoundcloud/></i>
            </a>
        </div>
        </div>
        <div style={{padding:"10px"}} class="row">

        <div style={{padding:"20px", textAlign:"center"}} class="col">
        <img class="image-style2" src={harl} width="300" height="120"/>
        <a href="https://music.apple.com/us/album/harlequin-book/1486642752">
          <i style={{padding:"30px"}} class="button-style"><FaApple/></i>
        </a>
        <a href="https://open.spotify.com/album/5G1ldHZMeD5kDIWLkJBIKS?si=oB4WwMKVSCeymE1b03w6Fw">
          <i style={{padding:"30px"}} class="button-style"><FaSpotify/></i>
        </a>
        <a href="https://soundcloud.com/peer-pressure-476721134/sets/harlequin-book?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing">
          <i style={{padding:"30px"}} class="button-style"><FaSoundcloud/></i>
        </a>
        </div>


        <div style={{padding:"20px", textAlign:"center"}} class="col">
          <img class="image-style2" src={who} width="300" height="120"/>
          <a href="https://music.apple.com/us/album/who-the-hell-is-justin-schwartz-ep/1486130821">
            <i style={{padding:"30px"}} class="button-style"><FaApple/></i>
          </a>
          <a href="https://open.spotify.com/album/350v6c6MLNPxFkqcJ3VzAY?si=ZXwYG5Z4TaGDMr9tElXvbw">
            <i style={{padding:"30px"}} class="button-style"><FaSpotify/></i>
          </a>
          <a href="https://soundcloud.com/stickycowking/sets/who-the-hell-is-justin?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing">
            <i style={{padding:"30px"}} class="button-style"><FaSoundcloud/></i>
          </a>
        </div>

        <div style={{padding:"20px", textAlign:"center"}} class="col">
          <img class="image-style2" src={grass} width="300" height="120"/>
          <a href="https://music.apple.com/us/album/grass-alley/1485172838">
            <i style={{padding:"30px"}} class="button-style"><FaApple/></i>
          </a>
          <a href="https://open.spotify.com/album/0rDq2N2Oj0Njj42BtsnaqT?si=ChCYRxkYSiu13k7Z04tjVQ">
            <i style={{padding:"30px"}} class="button-style"><FaSpotify/></i>
          </a>
          <a href="https://soundcloud.com/nothingiconicrecords/sets/grass-alley-bowling-green?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing">
            <i style={{padding:"30px"}} class="button-style"><FaSoundcloud/></i>
          </a>
        </div>

        <div style={{padding:"20px", textAlign:"center"}} class="col">
          <img class="image-style2" src={sprite} width="300" height="120"/>
          <a href="https://soundcloud.com/group_kevin/sprite?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing">
            <i style={{padding:"30px"}} class="button-style"><FaSoundcloud/></i>
          </a>
        </div>

        </div>
        <div style={{padding:"10px"}} class="row">

        <div style={{padding:"20px", textAlign:"center"}} class="col">
        <img class="image-style2" src={cabb} width="300" height="120"/>
        <a href="https://soundcloud.com/nothingiconicrecords/sets/cabbage-soysauce?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing">
          <i style={{padding:"30px"}} class="button-style"><FaSoundcloud/></i>
        </a>
        </div>
        <div style={{padding:"20px", textAlign:"center"}} class="col">
          <img class="image-style2" src={fran} width="300" height="120"/>
          <a href="https://soundcloud.com/francis-official/sets/francis?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing">
            <i style={{padding:"30px"}} class="button-style"><FaSoundcloud/></i>
          </a>
        </div>
        <div style={{padding:"20px", textAlign:"center"}} class="col">
          <img class="image-style2" src={lett} width="300" height="120"/>
          <a href="https://music.apple.com/us/album/lettuce/1467549477">
            <i style={{padding:"30px"}} class="button-style"><FaApple/></i>
          </a>
          <a href="https://open.spotify.com/album/07CNBwjhtmLAPn5wvD9gAP?si=AJqS9sbhTM67cWzx_U06tQ">
            <i style={{padding:"30px"}} class="button-style"><FaSpotify/></i>
          </a>
          <a href="https://soundcloud.com/group_kevin/sets/lettuce?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing">
            <i style={{padding:"30px"}} class="button-style"><FaSoundcloud/></i>
          </a>
        </div>
        <div style={{padding:"20px", textAlign:"center"}} class="col">
          <img class="image-style2" src={dear} width="300" height="120"/>
          <a href="https://soundcloud.com/quentinx2/sets/dear-strawberry-ep?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing">
            <i style={{padding:"30px"}} class="button-style"><FaSoundcloud/></i>
          </a>
        </div>
        </div>
        <div style={{padding:"10px"}} class="row">

        <div style={{padding:"20px", textAlign:"center"}} class="col">
          <img class="image-style2" src={withy} width="300" height="120"/>
          <a href="https://music.apple.com/us/album/with-you-single/1460043640">
            <i style={{padding:"30px"}} class="button-style"><FaApple/></i>
          </a>
          <a href="https://open.spotify.com/album/5iV0HXNtpYGMgRsxiS6tdP?si=EFgLKWk7TJurnGDbSUA82g">
            <i style={{padding:"30px"}} class="button-style"><FaSpotify/></i>
          </a>
        </div>
        <div style={{padding:"20px", textAlign:"center"}} class="col">
        <img class="image-style2" src={jams} width="300" height="120"/>
        <a href="https://music.apple.com/us/album/bummerjams-vol-ii/1458192905">
          <i style={{padding:"30px"}} class="button-style"><FaApple/></i>
        </a>
        <a href="https://open.spotify.com/album/7JAMThtQExt6hZYGFZSGjw?si=jfiv03oyQaaMXfVYUPkClQ">
          <i style={{padding:"30px"}} class="button-style"><FaSpotify/></i>
        </a>
        <a href="https://soundcloud.com/wasteddazemusic/sets/bummerjams-vol-ii?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing">
          <i style={{padding:"30px"}} class="button-style"><FaSoundcloud/></i>
        </a>
        </div>
        <div style={{padding:"20px", textAlign:"center"}} class="col">
          <img class="image-style2" src={bitter} width="300" height="120"/>
          <a href="https://music.apple.com/us/album/vibrant-deluxe-ep/1496512278">
            <i style={{padding:"30px"}} class="button-style"><FaApple/></i>
          </a>
          <a href="https://open.spotify.com/album/6fZBZjjq13pVx8annZm4kO?si=qHAhQ2UlQn2_EnjkckvprA">
            <i style={{padding:"30px"}} class="button-style"><FaSpotify/></i>
          </a>
          <a href="https://soundcloud.com/nothingiconicrecords/sets/vibrant-bowling-green?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing">
            <i style={{padding:"30px"}} class="button-style"><FaSoundcloud/></i>
          </a>
        </div>
        <div style={{padding:"20px", textAlign:"center"}} class="col">
          <img class="image-style2" src={casa} width="300" height="120"/>
          <a href="https://soundcloud.com/quentinx2/sets/casablanca?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing">
            <i style={{padding:"30px"}} class="button-style"><FaSoundcloud/></i>
          </a>
        </div>
        </div>
        <div style={{padding:"10px"}} class="row">

        <div style={{padding:"20px", textAlign:"center"}} class="col">
          <img class="image-style2" src={vib} width="300" height="120"/>
          <a href="https://music.apple.com/us/album/vibrant-deluxe-ep/1496512278">
            <i style={{padding:"30px"}} class="button-style"><FaApple/></i>
          </a>
          <a href="https://open.spotify.com/album/6fZBZjjq13pVx8annZm4kO?si=qHAhQ2UlQn2_EnjkckvprA">
            <i style={{padding:"30px"}} class="button-style"><FaSpotify/></i>
          </a>
          <a href="https://soundcloud.com/nothingiconicrecords/sets/vibrant-bowling-green?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing">
            <i style={{padding:"30px"}} class="button-style"><FaSoundcloud/></i>
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
              <a href="https://soundcloud.com/wasteddazemusic/sets/cacophony?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing">
                <i style={{padding:"30px"}} class="button-style"><FaSoundcloud/></i>
              </a>
          </div>
          <div style={{padding:"20px", textAlign:"center"}} class="col">
          <img  class="image-style2"src={mayo} width="300" height="120"/>
          <a href="https://music.apple.com/us/album/mayo/1439612047">
            <i style={{padding:"30px"}} class="button-style"><FaApple/></i>
          </a>
          <a href="https://open.spotify.com/album/52TZWqzCjNYsI6S03945rQ?si=WiF_4g_iQcST5sZuFaTM2g">
            <i style={{padding:"30px"}} class="button-style"><FaSpotify/></i>
          </a>
          <a href="https://soundcloud.com/group_kevin/sets/mayo?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing">
            <i style={{padding:"30px"}} class="button-style"><FaSoundcloud/></i>
          </a>
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
