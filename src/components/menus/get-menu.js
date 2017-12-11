import React, { Component } from 'react';
import Brunch from './brunch';
import Lunch from './lunch';
import Dinner from './dinner';
import { Link } from 'react-router-dom';

export const menus = {
  "brunch": <Brunch />,
  "lunch": <Lunch />,
  "dinner": <Dinner />
};

export function GetMenu(props) {
  return menus[props.match.params.name];
}
