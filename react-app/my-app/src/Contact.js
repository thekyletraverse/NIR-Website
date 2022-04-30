import React from "react";
import Footer from './footer'
import { Button, Container} from 'react-bootstrap'
import open from './IMG_4333.JPG'

export default function Contact() {
  return (
    <div>
    <div class="con">
    <h1 style={{padding:"30px"}} class="h1">CONTACT</h1>
    <h1 style={{padding:"30px"}} class="h2">SIGN UP FOR OUR MAILING LIST!</h1>
    <div class="row">
      <div class="col">
    <img src={open} width="300"
      height="120" className="image-style7" alt="logo" />
      </div>
    </div>
    </div>

<Footer/>
    </div>
  );
}
