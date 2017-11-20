import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './home';
import Menu from './menu';
import Reservations from './reservations';
import Order from './order';
import RestarantLocation from './restaurant-location';
import Contact from './contact';

export default class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/menu' component={Menu}/>
          <Route exact path='/reservations' component={Reservations}/>
          <Route exact path='/order' component={Order}/>
          <Route exact path='/hours-location' component={RestarantLocation}/>
          <Route exact path='/contact' component={Contact}/>
        </Switch>
      </main>
    );
  }
}
