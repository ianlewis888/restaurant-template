import React, { Component } from 'react';
import MenuSnippet from './menu-snippet';
import EmbedMap from './embed-map';

export default class Home extends Component {
  render() {
    return (
      <div>
        <MenuSnippet />
        <blockquote>But any doubts about [Chef Carbone's] sanity vanish when you taste the
        spectacularly good guinea hen that the endive accompanies. Roasted and
        sauced with jus, Madeira and black truffles, it is among the most delicious
        things I’ve eaten this year.<cite>The New Times</cite></blockquote>
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
          <EmbedMap />
        </div>
      </div>
    );
  }
}
