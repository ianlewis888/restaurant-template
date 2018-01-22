import React, { Component } from 'react';
import { connect } from 'react-redux';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dismissed: false
    }
    this.dismissModal = this.dismissModal.bind(this);
  }
  dismissModal() {
    this.setState({ dismissed: true });
  }
  render() {
    var className = (this.props.display) ? "modal" : "modal hidden";
    if (this.state.dismissed) { className = "modal hidden"; }

    var formData = { name: "", email: "", phone: "", numberOfPeople: "", date: ""};
    if (this.props.formData) {
      formData.name = this.props.formData.name;
      formData.email = this.props.formData.email;
      formData.phone = this.props.formData.phone;
      formData.numberOfPeople = this.props.formData.numberOfPeople;
      formData.date = this.props.formData.selectedDate.format("LLL");
    }

    return (
      <div className={className} onClick={this.dismissModal}>
        <div className="modal-content">
          <h2>Thank you!</h2>
          <p>Your reservation for {formData.numberOfPeople}
          &nbsp;on {formData.date} has been made.</p>
          <button onClick={this.dismissModal}>okay</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Modal);
