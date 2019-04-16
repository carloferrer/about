import React, { Component } from 'react';
import './index.scss';

class Download extends Component {
  render() {
    return (
      <button className="Download">
        <a href={ this.props.content }>Download printer-friendly PDF</a>
      </button>
    );
  }
}

export default Download;