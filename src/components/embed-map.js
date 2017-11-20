import React, { Component } from 'react';

export default class EmbedMap extends Component {

  render() {
    const key = 'AIzaSyAPo4vS07AsJiqUz-LIbYS8tTA6fSObvM8';
    return (
      <div className="embed-map">
        <iframe src={"https://www.google.com/maps/embed/v1/place"
        + "?q=179 Elizabeth St, New York, NY 10012"
        + "&zoom=16"
        + "&key=" + key}>
        </iframe>
      </div>
    );
  }
}
