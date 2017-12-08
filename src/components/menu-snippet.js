import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import getMenubyTOD from '../functions/get-menu-by-tod';

class MenuSnippet extends Component {
  render() {
    var snippetInfo = this.props.featuredItems[getMenubyTOD()];
    return (
      <div className="menu-snippet">
        <div className="menu-snippet-content">
          <img src={snippetInfo.image} alt={snippetInfo.name} />
          <div>
            <h2>featured</h2>
            <p className="dish-name">{snippetInfo.name}</p>
            <p>{snippetInfo.description}</p>
            <Link to={"/menu/"+snippetInfo.menu}>{snippetInfo.menu} menu&ensp;
              <span className="fa fa-chevron-right"></span>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    featuredItems: state.data.menus.featured
  };
}
export default connect(mapStateToProps)(MenuSnippet);
