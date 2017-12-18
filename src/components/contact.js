import React, { Component } from 'react';
import { connect } from 'react-redux';

class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <div className="contact-section">
          Give us a call:&ensp;
          <a href={
              "tel:+"+this.props.phone.countryCode
              +"-"+this.props.phone.areaCode
              +"-"+this.props.phone.localNumber
            }><span className="fa fa-phone"></span>
          &ensp;({this.props.phone.areaCode}) {this.props.phone.localNumber}</a>
        </div>
        <div className="contact-section">
          Send us an e-mail:&ensp;
          <a href={"mailto:"+this.props.email}>
            <span className="fa fa-envelope"></span>&ensp;{this.props.email}
          </a>
        </div>
        <div className="contact-section">
          Leave a comment:
          <br />
          <form>
            <textarea></textarea>
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    phone: state.data.contact.phone,
    email: state.data.contact.email
  };
}

export default connect(mapStateToProps)(Contact);
