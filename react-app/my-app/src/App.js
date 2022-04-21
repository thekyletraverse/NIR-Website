import logo from './logo.svg';
import './App.css';
import monst from './NI Monster.png'
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navigation.js";
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (

    <div className="App">
    <Navbar />
      <header className="App-header">
        <img src={monst} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >

        </a>
      </header>
    </div>
  );
}

export default App;
