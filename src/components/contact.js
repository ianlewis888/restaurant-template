import React, { Component } from 'react';

export default class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <div className="contact-section">
          Give us a call:&ensp;
          <a href="tel:+1-718-727-7392"><span className="fa fa-phone"></span>
          &ensp;(718) 727.7392</a>
        </div>
        <div className="contact-section">
          Send us an e-mail:&ensp;
          <a href="mailto:hello@paragon.com"><span className="fa fa-envelope"></span>&ensp;hello@paragon.com</a>
        </div>
        <div className="contact-section">
          Drop us a line:
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
