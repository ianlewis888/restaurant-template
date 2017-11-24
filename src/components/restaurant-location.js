import React, { Component } from 'react';
import EmbedMap from './embed-map';
import { TransitIcons } from './transit-icons';

export default class RestaurantLocation extends Component {
  render() {
    return (
      <div className="restaurant-location">
        <EmbedMap />
        <p>- Located at 179 Elizabeth Street, New York, NY 10012 -</p>
        <div className="directions">
          <h2>Transit</h2>
          <p className="dir-element"><img className="transit-icon" src={TransitIcons.Six} />&ensp;Spring Street</p>
          <p className="dir-element"><img className="transit-icon" src={TransitIcons.F} />&ensp;2nd Avenue</p>
          <p className="dir-element"><img className="transit-icon" src={TransitIcons.B} /><img className="transit-icon" src={TransitIcons.D} />&ensp;Grand Street</p>
        </div>
      </div>
    );
  }
}
