import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from './Navigation'
import Music from './Music'
import Artist from './Artist'
import Videos from './Videos'
import Shop from './Shop'
import Contact from './Contact'
import Events from './Events'


ReactDOM.render(
  <React.StrictMode>
       <Router>
      <Navigation/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/artist" element={<Artist />} />
        <Route exact path="/music" element={<Music />} />
        <Route exact path="/videos" element={<Videos/>} />
        <Route exact path="/shop" element={<Shop/>} />
        <Route exact path="/events" element={<Events/>} />
        <Route exact path="/contact" element={<Contact/>} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
