import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Brunch extends Component {
  render() {
    return (
      <div className="menu-links">
        <Link className="menu-active" to='/menu/brunch'><h2>Brunch</h2></Link>
        <Link to='/menu/lunch'><h2>Lunch</h2></Link>
        <Link to='/menu/dinner'><h2>Dinner</h2></Link>
      </div>
    );
  }
}

export class Lunch extends Component {
  render() {
    return (
      <div className="menu-links">
        <Link to='/menu/brunch'><h2>Brunch</h2></Link>
        <Link className="menu-active" to='/menu/lunch'><h2>Lunch</h2></Link>
        <Link to='/menu/dinner'><h2>Dinner</h2></Link>
      </div>
    );
  }
}

export class Dinner extends Component {
  render() {
    return (
      <div className="menu-links">
        <Link to='/menu/brunch'><h2>Brunch</h2></Link>
        <Link to='/menu/lunch'><h2>Lunch</h2></Link>
        <Link className="menu-active" to='/menu/dinner'><h2>Dinner</h2></Link>
      </div>
    );
  }
}
export const menus = {
  "brunch": <Brunch />,
  "lunch": <Lunch />,
  "dinner": <Dinner />
};

export function GetMenu(props) {
  return menus[props.match.params.name];
}
