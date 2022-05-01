import React from "react";
import Footer from './footer'
import { Button, Container} from 'react-bootstrap'
import open from './IMG_4333.JPG'
import { ReactMailchimpEmailSignupForm } from 'react-mailchimp-email-signup-form';
import { FaEnvelope} from 'react-icons/fa';

export default function Contact() {
  return (
    <div>
    <div class="con">
    <h1 style={{padding:"30px"}} class="h1">CONTACT</h1>
    <div style={{padding:"10px"}} class="row">
      <div style={{padding:"20px"}} class="col me-2">
    <ReactMailchimpEmailSignupForm
       className="subscribe-container"
       elementId="first-email-signup-form"
       url="https://gmail.us10.list-manage.com/subscribe/post?u=e25e5c63d90e7b32bf185aac5&amp;id=317777b268"
       title="Subscribe to the Newsletter"
       subtitle="Stay updated on all new releases, events and everything Nothing Iconic!"
     />
</div>
</div>
<div class="row">
  <div style={{padding:"65px"}} class="col">
<h1 class="h2">FOR ALL INQUIRES</h1>
<i class="button-style fa-2x"><FaEnvelope/></i>
<h2 class="h2">NOTHING.ICONIC.RECORDS@GMAIL.COM</h2>
</div>
</div>
<div class="row">
  <div style={{padding:"35px"}} class="col">
<h1 class="h2"></h1>

<h2 class="h2"></h2>
</div>
</div>
    </div>

<Footer/>
    </div>
  );
}
