import React, { Component } from 'react';

export class Brunch extends Component {
  render() {
    return (<div>Brunch</div>);
  }
}

export class Lunch extends Component {
  render() {
    return (<div>Lunch</div>);
  }
}

export class Dinner extends Component {
  render() {
    return (<div>Dinner</div>);
  }
}
export const menus = {
  "brunch": <Brunch />,
  "lunch": <Lunch />,
  "dinner": <Dinner />
};

export function GetMenu(props) {
  return menus[props.match.params.name];
}
