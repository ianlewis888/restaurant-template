import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';

export default class Reservations extends Component {

  constructor (props) {
    super(props)
    this.state = {
      name: '',
      nameError: '',
      email: '',
      emailError: '',
      phone: '',
      phoneError: '',
      numberOfPeople: '',
      numberOfPeopleError: '',
      selectedDate: undefined,
      selectedDateError: ''
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handleNumberOfPeopleChange = this.handleNumberOfPeopleChange.bind(this);
    this.handleDatepickerChange = this.handleDatepickerChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleNameChange(e) {
    const name = e.target.value;
    const err = (!name) ? 'please enter a name' : '';
    this.setState({
      ...this.state,
      name: name,
      nameError: err
    });
  }

  handleEmailChange(e) {
    const regexp = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/g;
    const email = e.target.value;
    const err = (!regexp.test(email)) ? 'please enter valid email' : '';
    this.setState({
      ...this.state,
      email: email,
      emailError: err
    });
  }

  handlePhoneChange(e) {
    const regexp = /^(\+?0?1\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/g;
    const phone = e.target.value;
    const err = (!regexp.test(phone)) ? 'please enter valid US phone number' : '';
    this.setState({
      ...this.state,
      phone: phone,
      phoneError: err
    });
  }

  handleNumberOfPeopleChange(e) {
    var err = '';
    const regexp = /^\d+$/g;
    const numberOfPeople = e.target.value;
    if (!regexp.test(numberOfPeople) || Number(numberOfPeople) < 1) { err = 'please enter a valid number'; }
    if (Number(numberOfPeople) > 19) {
       err = 'kindly call for parties of 20 or more';
     }
    this.setState({
      ...this.state,
      numberOfPeople: numberOfPeople,
      numberOfPeopleError: err
    });
  }

  handleDatepickerChange(date) {
    const err = (!date) ? 'please select a valid date' : '';
    this.setState({
      ...this.state,
      selectedDate: date,
      selectedDateError: err
    });
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div className="reservations">
        <h2>Make a Reservation</h2>
        <form name="reservation-form" onSubmit={this.onSubmit}>
          <input type="text" placeholder="your name" onChange={this.handleNameChange}></input>
          <label className="error-text">{this.state.nameError}</label>
          <input type="text" placeholder="your email address" onChange={this.handleEmailChange}></input>
          <label className="error-text">{this.state.emailError}</label>
          <input type="text" placeholder="your phone number" onChange={this.handlePhoneChange}></input>
          <label className="error-text">{this.state.phoneError}</label>
          <input type="text" placeholder="number of people" onChange={this.handleNumberOfPeopleChange}></input>
          <label className="error-text">{this.state.numberOfPeopleError}</label>
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
          <label className="error-text">{this.state.selectedDateError}</label>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
