import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Main from './components/main';
import Footer from './components/footer';
import * as logo from './images/logo.svg';
import * as headerImg1 from './images/header-images/header-img-1.jpg';
import * as headerImg2 from './images/header-images/header-img-2.jpeg';
import * as headerImg3 from './images/header-images/header-img-3.jpeg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="hero">
          <img src={logo} className="logo" alt="logo" />
          <div className="logo-subtitle">bar • restaurant</div>
        </div>
        <div className="hero-images">
          <img src={headerImg1} alt="Header Background 1" />
          <img src={headerImg2} alt="Header Background 2" />
          <img src={headerImg3} alt="Header Background 3" />
        </div>
        <div className="nav">
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/reservations">Reservations</Link>
          <Link to="/order">Order</Link>
          <Link to="/hours-location">Hours / Location</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
