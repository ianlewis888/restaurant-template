import React, { Component } from 'react';

export default class SocialLinks extends Component {
  render() {
    return (
      <div className="social-links">
        <a className="facebook-link" href="" target="_blank"><span className="fa fa-facebook"></span></a>
        <a className="instagram-link" href="" target="_blank"><span className="fa fa-instagram"></span></a>
        <a className="twitter-link" href="" target="_blank"><span className="fa fa-twitter"></span></a>
        <span className="social-label">like and follow</span>
      </div>
    );
  }
}
