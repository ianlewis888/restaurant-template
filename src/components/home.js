import React, { Component } from 'react';
import Blockquote from './blockquote';
import SocialLinks from './social-links';
import MenuSnippet from './menu-snippet';
import YelpReviews from './yelp-reviews';
import EmbedMap from './embed-map';

export default class Home extends Component {
  render() {
    return (
      <div>
        <MenuSnippet />
        <Blockquote />
        <YelpReviews />
        <EmbedMap />
        <SocialLinks />
      </div>
    );
  }
}
