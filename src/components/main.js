import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import Home from './home';
import Menu from './menu';
import Reservations from './reservations';
import Order from './order';
import RestarantLocation from './restaurant-location';
import Contact from './contact';
import { fetchAll } from '../actions/fetch-all';

class Main extends Component {
  componentWillMount() {
    this.props.dispatch(fetchAll());
  }
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
          <Redirect to="/" />
        </Switch>
      </main>
    );
  }
}

export default withRouter(connect()(Main));
