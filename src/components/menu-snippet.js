import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import getMenubyTOD from '../functions/get-menu-by-tod';

export default class MenuSnippet extends Component {
  constructor(props) {
    super(props);
    this.featuredItems = {
      "brunch": {
        "menu": "brunch",
        "name": "fried egg with wild mushrooms and grits",
        "description": "fried egg, asiago cheese grits, truffled wild mushrooms, paired with a rich spiced tomato sauce",
        "image": "https://images.pexels.com/photos/693270/pexels-photo-693270.jpeg?w=940&h=650&dpr=2&auto=compress&cs=tinysrgb"
      },
      "lunch": {
        "menu": "lunch",
        "name": "egg, frisée, and caramelized onion sandwich",
        "description": "slightly runny egg yolk creates a rich, delicious sauce as it mingles with our homemade fig jam.",
        "image": "https://static.pexels.com/photos/5506/bread-food-salad-sandwich.jpg?w=940&h=650&dpr=2&auto=compress&cs=tinysrgb"
      },
      "dinner": {
        "menu": "dinner",
        "name": "hangar steak with rustic balsamic reduction",
        "description": "paired with a crispy truffle baked potato, wild mushrooms, and smashed avocado.",
        "image": "https://images.pexels.com/photos/299351/pexels-photo-299351.jpeg?w=940&h=650&dpr=2&auto=compress&cs=tinysrgb"
      }
    };
  }
  render() {
    var snippetInfo = this.featuredItems[getMenubyTOD()];
    return (
      <div className="menu-snippet">
        <div className="menu-snippet-content">
          <img src={snippetInfo.image} />
          <div>
            <h2>featured</h2>
            <p className="dish-name">{snippetInfo.name}</p>
            <p>{snippetInfo.description}</p>
            <Link to={"/menu/"+snippetInfo.menu}>{snippetInfo.menu} menu&ensp;<span className="fa fa-chevron-right"></span></Link>
          </div>
        </div>
      </div>
    );
  }
}
