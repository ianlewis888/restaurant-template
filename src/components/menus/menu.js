import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import getMenuByTOD from '../../functions/get-menu-by-tod';
import Brunch from './brunch';
import Lunch from './lunch';
import Dinner from './dinner';

const menus = {
  "brunch": <Brunch />,
  "lunch": <Lunch />,
  "dinner": <Dinner />
};

function GetMenu(props) {
  return menus[props.match.params.name];
}

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
