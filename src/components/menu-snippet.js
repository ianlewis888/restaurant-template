import React, { Component } from 'react';

export default class MenuSnippet extends Component {
  render() {
    return (
      <div className="menu-snippet">
        <div className="menu-snippet-content">
          <img src="https://static.pexels.com/photos/5506/bread-food-salad-sandwich.jpg" />
          <div>
            <h2>Egg, Frisée, and Caramelized Onion Sandwich</h2>
            <p>slightly runny egg yolk creates a rich,
            delicious sauce as it mingles with our house recipe fig jam.</p>
            <a href="/menu/lunch">lunch menu&ensp;<span className="fa fa-chevron-right"></span></a>
          </div>
        </div>
      </div>
    );
  }
}
