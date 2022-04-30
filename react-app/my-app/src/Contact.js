import React from "react";
import Footer from './footer'
import { Button, Container} from 'react-bootstrap'
import open from './IMG_4333.JPG'
import { ReactMailchimpEmailSignupForm } from 'react-mailchimp-email-signup-form';


export default function Contact() {
  return (
    <div>
    <div class="con">
    <h1 style={{padding:"30px"}} class="h1">CONTACT</h1>
    <ReactMailchimpEmailSignupForm
       elementId="first-email-signup-form"
       url="https://gmail.us10.list-manage.com/subscribe/post?u=e25e5c63d90e7b32bf185aac5&amp;id=317777b268" 
       title="Subscribe to the Newsletter"
       subtitle="We take privacy seriously and we'll never spam or sell your information."
     />

    </div>

<Footer/>
    </div>
  );
}
