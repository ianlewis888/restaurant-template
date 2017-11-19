import React, { Component } from 'react';
import MenuSnippet from './components/menu-snippet'
import EmbedMap from './components/embed-map'
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
          <a href="/">Home</a>
          <a href="/menu">Menu</a>
          <a href="/reservations">Reservations</a>
          <a href="/order">Order</a>
          <a href="/location">Location</a>
          <a href="/contact">Contact</a>
        </div>
        <MenuSnippet />
        <EmbedMap />
        <div className="reviews">
          <div className="star-rating">
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star-half"></span>
          </div>
          <span className="fa fa-yelp fa-lg"></span>
          <span className="review-count">&ensp;Based on <a href="">1,435 reviews</a>.</span>
        </div>
      </div>
    );
  }
}

export default App;
