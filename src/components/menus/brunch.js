import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Brunch extends Component {
  // componentWillMount() {
  //   const dispatch = this.props.dispatch;
  //   dispatch(testFetch());
  // }
  render() {
    return (
      <div>
        <div className="menu-links">
          <Link className="menu-active" to='/menu/brunch'><h2>Brunch</h2></Link>
          <Link to='/menu/lunch'><h2>Lunch</h2></Link>
          <Link to='/menu/dinner'><h2>Dinner</h2></Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    //menuItems: state.testData.testData
  };
}

export default connect(mapStateToProps)(Brunch);
