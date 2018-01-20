import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';

export default class Reservations extends Component {

  constructor (props) {
    super(props)
    this.state = {
      selectedDate: undefined
    };
    this.handleDatepickerChange = this.handleDatepickerChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleDatepickerChange(date) {
    this.setState({
      selectedDate: date
    });
  }

  onSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div className="reservations">
        <h2>Make a Reservation</h2>
        <form name="reservation-form" onSubmit={this.onSubmit}>
          <input type="text" placeholder="your name"></input>
          <input type="text" placeholder="your email address"></input>
          <input type="text" placeholder="your phone number"></input>
          <input type="text" placeholder="number of people"></input>
          <DatePicker
              showTimeSelect
              popperPlacement="bottom"
              timeFormat="HH:mm"
              timeIntervals={15}
              dateFormat="LLL"
              placeholderText="select a date"
              selected={this.state.selectedDate}
              onChange={this.handleDatepickerChange}
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
