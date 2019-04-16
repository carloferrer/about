import React, { Component } from 'react';
import download_icon from '../assets/download-button.svg';
import './index.scss';

class Download extends Component {
  render() {
    return (
      <button className="Download">
        <a className="link" href={ this.props.content }>
          <img src={ download_icon }/>
          printer-friendly PDF
        </a>
      </button>
    );
  }
}

export default Download;