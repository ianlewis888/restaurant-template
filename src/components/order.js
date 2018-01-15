import React, { Component } from 'react';
import * as seamlessLogo from '../images/partner-logos/seamless-logo.svg';
import * as eat24Logo from '../images/partner-logos/eat24-logo.png'
import * as uberEatsLogo from '../images/partner-logos/uberEats-logo.svg';

export default class Order extends Component {
  render() {
    return (
      <div class="order-online">
        <h2>Order Online</h2>
        <a href="https://www.seamless.com" target="_blank">
          <img src={seamlessLogo} class="partner-logo"></img>
        </a>
        <a href="https://www.eat24.com" target="_blank">
          <img src={eat24Logo} class="partner-logo"></img>
        </a>
        <a href="https://www.ubereats.com" target="_blank">
          <img src={uberEatsLogo} class="partner-logo"></img>
        </a>
      </div>
    );
  }
}
