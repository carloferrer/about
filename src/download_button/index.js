import React, { Component } from 'react';
import './index.scss';

class Download extends Component {
  render() {
    return (
      <button className="Download">
        <a className="link" href={ this.props.content }>
          printer-friendly PDF
        </a>
      </button>
    );
  }
}

export default Download;