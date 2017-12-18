import React, { Component } from 'react';

export default class Hours extends Component {
  getDefault() {
    const days = ["sunday", "monday", "tuesday", "wednesday", "thursday",
      "friday", "saturday"];
    const today = new Date().getDay();
    return days[today];
  }
  render() {
    return (
      <div className="hours">
        <h2 className="hours-label">Hours</h2>
        <div className="select-day">
          <span className="fa fa-chevron-left fa-lg"></span>
          <div className="day">
            {this.getDefault()}
          </div>
          <span className="fa fa-chevron-right fa-lg"></span>
        </div>
        <br />
        <div className="hours-section">
          <h2>brunch</h2>
          <span>9 AM - 4:30 PM</span>
        </div>
        <div className="hours-section">
          <h2>dinner</h2>
          <span>4:30 PM - 10 PM</span>
        </div>
        <div className="hours-section">
          <h2>bar</h2>
          <span>9 AM - 10 PM</span>
        </div>
      </div>
    );
  }
}
