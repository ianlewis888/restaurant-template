import React, {Component} from 'react';

export default class MenuTemplate extends Component {
  render() {
    var sectionKey = 0;
    const menu = [];
    for (var key in this.props.menu) {
      const section = this.props.menu[key]
      const sectionName = section[0]["section"];
      const items = section.map(item => {
        if (item.description) {
          return (
            <div className="menu-item" key={item._id}>
              <span className="menu-item-name">
                {item.name}&#8212;
              </span>
              <span className="menu-item-price">
                {item.price}
              </span>
              <br/>
              <span className="menu-item-description">
                {item.description}
              </span>
            </div>
          );
        } else {
          return (
            <div className="menu-item" key={item._id}>
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
      menu.push(
        <div className="menu-section" key={sectionKey}>
          <h2>{sectionName}</h2>
          {items}
        </div>
      );
    }
    return (
      <div>{menu}</div>
    );
  }
}
