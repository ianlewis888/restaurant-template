import React, { Component } from 'react';

export default class MenuTemplate extends Component {
  render() {
    var sectionKey = 0;
    const menu = this.props.menu.map(section => {

      var itemKey = 0;
      const items = section.items.map(item => {

        itemKey++;
        if (item.description) {
          return (
            <div className="menu-item" key={itemKey}>
              <span className="menu-item-name">
                {item.name}&#8212;
              </span>
              <span className="menu-item-price">
                {item.price}
              </span>
              <br />
              <span className="menu-item-description">
                {item.description}
              </span>
            </div>
          );
        }
        else {
          return (
            <div className="menu-item" key={itemKey}>
              <span className="menu-item-name">
                {item.name}&#8212;
              </span>
              <span className="menu-item-price">
                {item.price}
              </span>
            </div>
          );
        }
      });

      sectionKey++;
      return (
        <div className="menu-section" key={sectionKey}>
          <h2>{section.name}</h2>
          {items}
        </div>
      );
    });

    return (
      <div>{menu}</div>
    );
  }
}
