import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Main from './components/main';
import Footer from './components/footer';
import * as logo from './images/logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="hero">
          <img src={logo} className="logo" />
          <div className="logo-subtitle">bar • restaurant</div>
        </div>
        <div className="hero-images">
          <img src="https://static.pexels.com/photos/5938/food-salad-healthy-lunch.jpg" />
          <img src="https://static.pexels.com/photos/616836/pexels-photo-616836.jpeg" />
          <img src="https://static.pexels.com/photos/262918/pexels-photo-262918.jpeg" />
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
