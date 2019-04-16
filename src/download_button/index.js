import React, { Component } from 'react';
import download_icon from '../assets/download-button.svg';
import './index.scss';

class Download extends Component {
  render() {
    return (
      <button className="Download">
        <a className="link" href={ this.props.content }>
          <img className="icon" src={ download_icon } alt="download icon"/>
          <span className="text">
            printer-friendly PDF
          </span>
        </a>
      </button>
    );
  }
}

export default Download;