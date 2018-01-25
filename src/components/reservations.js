import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import Modal from './modal';
import { connect } from 'react-redux';
import { showModal } from '../actions/reservation-form';

class Reservations extends Component {

  constructor (props) {
    super(props);

    this.defaultState = {
      name: { value: undefined, error: '' },
      email: { value: undefined, error: '' },
      phone: { value: undefined, error: '' },
      numberOfPeople: { value: undefined, error: '' },
      selectedDate: { value: undefined, error: '' }
    }
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
      ...this.defaultState
    };
  }

  handleNameChange(e) {
    const name = e.target.value;
    const err = (!name) ? this.errorText.name : '';
    this.setState({
      ...this.state,
      name: { value: name, error: err}
    });
  }

  handleEmailChange(e) {
    const regexp = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/g;
    const email = e.target.value;
    const err = (!regexp.test(email)) ? this.errorText.email : '';
    this.setState({
      ...this.state,
      email: { value: email, error: err }
    });
  }

  handlePhoneChange(e) {
    const regexp = /^(\+?0?1\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/g;
    const phone = e.target.value;
    const err = (!regexp.test(phone)) ? this.errorText.phone : '';
    this.setState({
      ...this.state,
      phone: { value: phone, error: err }
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
      numberOfPeople: { value: numberOfPeople, error: err }
    });
  }

  handleDatepickerChange(date) {
    const err = (!date) ? this.errorText.selectedDate : '';
    this.setState({
      ...this.state,
      selectedDate: { value: date, error: err }
    });
  }

  onSubmit(e) {
    e.preventDefault();
    var formError = false;
    var emptyFields = {};
    var formData = {};
    for (const d in this.state) {
      formData[d] = this.state[d].value;
      if (this.state[d].error) { formError = true; }
      if (!this.state[d].value) {
        formError = true;
        emptyFields[d] = (d === "numberOfPeople") ?
          { value: undefined, error: this.errorText.invalidNumberOfPeople} :
          { value: undefined, error: this.errorText[d] };
      }
    }
    if (!formError) {
      this.setState({ ...this.defaultState });
      this.props.dispatch(showModal(formData));
      this.nameInput.value = '';
      this.emailInput.value = '';
      this.phoneInput.value = '';
      this.numberOfPeopleInput.value = '';
    }
    else {
      this.setState({
        ...this.state,
        ...emptyFields
      });
    }
  }
  render() {
    return (
      <div className="reservations">
        <h2>Make a Reservation</h2>
        <form name="reservation-form" onSubmit={this.onSubmit}>
          <div className="form-group">
          <input
            type="text"
            placeholder="your name"
            onChange={this.handleNameChange}
            ref={nameInput => { this.nameInput = nameInput; }}>
          </input>
          <span className="error-text">{this.state.name.error}</span>
          </div>
          <div className="form-group">
          <input
            type="text"
            placeholder="your email address"
            onChange={this.handleEmailChange}
            ref={emailInput => { this.emailInput = emailInput; }}>
          </input>
          <span className="error-text">{this.state.email.error}</span>
          </div>
          <div className="form-group">
          <input
            type="text"
            placeholder="your phone number"
            onChange={this.handlePhoneChange}
            ref={phoneInput => { this.phoneInput = phoneInput; }}>
          </input>
          <span className="error-text">{this.state.phone.error}</span>
          </div>
          <div className="form-group">
          <input
            type="text"
            placeholder="number of people"
            onChange={this.handleNumberOfPeopleChange}
            ref={numberOfPeopleInput => { this.numberOfPeopleInput = numberOfPeopleInput; }}>
          </input>
          <span className="error-text">{this.state.numberOfPeople.error}</span>
          </div>
          <div className="form-group">
          <DatePicker
              showTimeSelect
              popperPlacement="bottom"
              timeFormat="HH:mm"
              timeIntervals={15}
              dateFormat="LLL"
              placeholderText="select a date"
              selected={this.state.selectedDate.value}
              onChange={this.handleDatepickerChange}
          />
          <span className="error-text">{this.state.selectedDate.error}</span>
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
        <Modal />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state.reservationForm;
}

export default connect(mapStateToProps)(Reservations);
