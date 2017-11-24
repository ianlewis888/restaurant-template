import React, { Component } from 'react';

export default class YelpReviews extends Component {
  render() {
    return (
      <div className="reviews">
        <div className="star-rating">
          <span className="fa fa-star"></span>
          <span className="fa fa-star"></span>
          <span className="fa fa-star"></span>
          <span className="fa fa-star"></span>
          <span className="fa fa-star-half"></span>
        </div>
        <span className="review-count">Based on 1,435 reviews.</span>
        <br />
        <a className="yelp-link" href="" target="_blank">
          <span className="fa fa-yelp fa-lg"></span>
          &ensp;Tell Us What You Think
        </a>
      </div>
    );
  }
}
