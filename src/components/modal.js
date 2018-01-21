import React, { Component } from 'react';

export default class Modal extends Component {
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
    return (
      <div className={className}>
        <div className="modal-content">
          <p>Modal Content Goes Here</p>
          <button onClick={this.dismissModal}>okay</button>
        </div>
      </div>
    );
  }
}
