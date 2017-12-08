import React, { Component } from 'react';
import { connect } from 'react-redux';

class Blockquote extends Component {
  render() {
    return (
      <blockquote>
        {this.props.quote}
        <cite>
          {this.props.citation}
        </cite>
      </blockquote>
    );
  }
}

function mapStateToProps(state) {
  return {
    quote: state.data.blockquote.quote,
    citation: state.data.blockquote.citation
  };
}

export default connect(mapStateToProps)(Blockquote);
