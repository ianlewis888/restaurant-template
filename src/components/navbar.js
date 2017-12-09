import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <div className="nav">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/reservations">Reservations</Link>
        <Link to="/order">Order</Link>
        <Link to="/hours-location">Hours / Location</Link>
        <Link to="/contact">Contact</Link>
      </div>
    );
  }
}
