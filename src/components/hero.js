import React, { Component } from 'react';
import * as logo from '../images/logo.svg';
import * as headerImg1 from '../images/header-images/header-img-1.jpg';
import * as headerImg2 from '../images/header-images/header-img-2.jpeg';
import * as headerImg3 from '../images/header-images/header-img-3.jpeg';

export default class Hero extends Component {
  render() {
    return (
      <div>
        <div className="hero">
          <img src={logo} className="logo" alt="logo" />
          <div className="logo-subtitle">bar &#8226; restaurant</div>
        </div>
        <div className="hero-images">
          <img src={headerImg1} alt="Header Background 1" />
          <img src={headerImg2} alt="Header Background 2" />
          <img src={headerImg3} alt="Header Background 3" />
        </div>
      </div>
    );
  }
}
