import React, { Component } from 'react';

export default class EmbedMap extends Component {

  render() {
    const key = 'AIzaSyAPo4vS07AsJiqUz-LIbYS8tTA6fSObvM8';
    return (
      <div className="embed-map">
        <iframe src={"//www.google.com/maps/embed/v1/place"
        + "?q=place_id:ChIJw5QQyflbwokRPGpaJDXQHqs"
        + "&zoom=17"
        + "&key=" + key}>
        </iframe>
      </div>
    );
  }
}
