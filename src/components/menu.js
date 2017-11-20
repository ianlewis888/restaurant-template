import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { GetMenu, menus } from './menus';
import getMenuByTOD from '../functions/get-menu-by-tod';

export default class Menu extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="menu">
        <div className="menu-links">
          <Link to='/menu/brunch'><h2>Brunch</h2></Link>
          <Link to='/menu/lunch'><h2>Lunch</h2></Link>
          <Link to='/menu/dinner'><h2>Dinner</h2></Link>
        </div>
        <Switch>
          <Route exact path='/menu' children={menus[getMenuByTOD()]} />
          <Route path='/menu/:name' component={GetMenu} />
        </Switch>
      </div>
    );
  }
}
