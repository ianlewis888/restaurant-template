import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import Modal from './modal';

export default class Reservations extends Component {

  constructor (props) {
    super(props);
    this.cleared = {
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
    this.errorText = {
      name: 'please enter a name',
      email: 'please enter valid email',
      phone: 'please enter valid US phone number',
      invalidNumberOfPeople: 'please enter a valid number',
      tooManyPeople: 'kindly call for parties of 20 or more',
      selectedDate: 'please select a valid date'
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handleNumberOfPeopleChange = this.handleNumberOfPeopleChange.bind(this);
    this.handleDatepickerChange = this.handleDatepickerChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      ...this.cleared,
      showModal: false
    };
  }

  handleNameChange(e) {
    const name = e.target.value;
    const err = (!name) ? this.errorText.name : '';
    this.setState({
      ...this.state,
      name: name,
      nameError: err
    });
  }

  handleEmailChange(e) {
    const regexp = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/g;
    const email = e.target.value;
    const err = (!regexp.test(email)) ? this.errorText.email : '';
    this.setState({
      ...this.state,
      email: email,
      emailError: err
    });
  }

  handlePhoneChange(e) {
    const regexp = /^(\+?0?1\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/g;
    const phone = e.target.value;
    const err = (!regexp.test(phone)) ? this.errorText.phone : '';
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
    if (!regexp.test(numberOfPeople) || Number(numberOfPeople) < 1) {
      err = this.errorText.invalidNumberOfPeople;
    }
    if (Number(numberOfPeople) > 19) { err = this.errorText.tooManyPeople; }
    this.setState({
      ...this.state,
      numberOfPeople: numberOfPeople,
      numberOfPeopleError: err
    });
  }

  handleDatepickerChange(date) {
    const err = (!date) ? this.errorText.selectedDate : '';
    this.setState({
      ...this.state,
      selectedDate: date,
      selectedDateError: err
    });
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    var formError = false;
    const errors = [
      this.state.nameError,
      this.state.emailError,
      this.state.phoneError,
      this.state.numberOfPeopleError,
      this.state.selectedDateError
    ];
    errors.forEach(err => {
      if (err) { formError = true; }
    });
    var empties = {};
    const formData = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      numberOfPeople: this.state.numberOfPeople,
      selectedDate: this.state.selectedDate
    };
    for (const d in formData) {
      if (!formData[d]) {
        formError = true;
        const err = d + "Error";
        empties[err] = (d === "numberOfPeople") ? this.errorText.invalidNumberOfPeople : this.errorText[d];
      }
    }
    this.setState({
      ...this.state,
      ...empties
    });
    if (!formError) {
      this.setState({
        ...this.cleared,
        showModal: true
      });
    }
  }

  render() {
    return (
      <div className="reservations">
        <h2>Make a Reservation</h2>
        <form name="reservation-form" onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="your name"
            value={this.state.name}
            onChange={this.handleNameChange}>
          </input>
          <label className="error-text">{this.state.nameError}</label>
          <input
            type="text"
            placeholder="your email address"
            value={this.state.email}
            onChange={this.handleEmailChange}>
          </input>
          <label className="error-text">{this.state.emailError}</label>
          <input
            type="text"
            placeholder="your phone number"
            value={this.state.phone}
            onChange={this.handlePhoneChange}>
          </input>
          <label className="error-text">{this.state.phoneError}</label>
          <input
            type="text"
            placeholder="number of people"
            value={this.state.numberOfPeople}
            onChange={this.handleNumberOfPeopleChange}>
          </input>
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
        <Modal display={this.state.showModal} />
      </div>
    );
  }
}
