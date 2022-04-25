import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from './Navigation'
import Music from './Music'
import Artists from './Artists'

ReactDOM.render(
  <React.StrictMode>
       <Router>
      <Navigation/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/music" element={<Music />} />
        <Route exact path="/artits" element={<Artists />} />

      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
