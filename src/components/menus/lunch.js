import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import MenuTemplate from './menu-template';

class Lunch extends Component {
  render() {
    return (
      <div>
        <div className="menu-links">
          <Link to='/menu/brunch'><h2>Brunch</h2></Link>
          <Link className="menu-active" to='/menu/lunch'><h2>Lunch</h2></Link>
          <Link to='/menu/dinner'><h2>Dinner</h2></Link>
          <MenuTemplate menu={this.props.menu} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  if (state.mongoData.data !== null) {
    return { menu: state.mongoData.data.menus.lunchMenu };
  }
  else { return {}; }
}

export default withRouter(
  connect(mapStateToProps)(Lunch)
);
