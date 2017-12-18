import React, { Component } from 'react';
import EmbedMap from './embed-map';
import Hours from './hours';
import { TransitIcons } from './transit-icons';

export default class RestaurantLocation extends Component {
  render() {
    return (
      <div className="restaurant-location">
        <Hours />
        <EmbedMap />
        <p>- Located at 179 Elizabeth Street, New York, NY 10012 -</p>
        <div className="directions">
          <h2>Transit</h2>
          <p className="dir-element">
            <img className="transit-icon" src={TransitIcons.Six} alt="six train transit icon" />
            &ensp;Spring Street
          </p>
          <p className="dir-element">
            <img className="transit-icon" src={TransitIcons.F} alt="f train transit icon" />
            &ensp;2nd Avenue
            </p>
          <p className="dir-element">
            <img className="transit-icon" src={TransitIcons.J} alt="j train transit icon" />
            &ensp;Bowery
          </p>
          <p className="dir-element">
            <img className="transit-icon" src={TransitIcons.B} alt="b train transit icon" />
            <img className="transit-icon" src={TransitIcons.D} alt="d train transit icon" />
            &ensp;Grand Street
          </p>
        </div>
      </div>
    );
  }
}
