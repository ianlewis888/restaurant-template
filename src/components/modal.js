import React, { Component } from 'react';
import { connect } from 'react-redux';
import { dismissModal } from '../actions/reservation-form';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.dismiss = this.dismiss.bind(this);
  }
  dismiss() {
    this.props.dispatch(dismissModal());
  }
  render() {
    const className = (this.props.showModal) ? "modal" : "modal hidden";
    var formData = { name: "", email: "", phone: "", numberOfPeople: "", date: ""};
    if (this.props.formData) {
      formData.name = this.props.formData.name;
      formData.email = this.props.formData.email;
      formData.phone = this.props.formData.phone;
      formData.numberOfPeople = this.props.formData.numberOfPeople;
      formData.date = this.props.formData.selectedDate.format("LL [at] LT");
    }

    return (
      <div className={className} onClick={this.dismissModal}>
        <div className="modal-content">
          <h2>Thank You!</h2>
          <p>Your reservation for {formData.numberOfPeople}
          &nbsp;on {formData.date} has been made.</p>
          <p>You will be receiving a confirmation e-mail shortly.</p>
          <button onClick={this.dismiss}>okay</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state.reservationForm;
}

export default connect(mapStateToProps)(Modal);
