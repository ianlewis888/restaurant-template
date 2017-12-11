import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { GetMenu, menus } from './get-menu';
import getMenuByTOD from '../../functions/get-menu-by-tod';

export default class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <Switch>
          <Route exact path='/menu' children={menus[getMenuByTOD()]} />
          <Route path='/menu/:name' component={GetMenu} />
        </Switch>
      </div>
    );
  }
}
