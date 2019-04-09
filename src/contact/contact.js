import React, { Component } from 'react';
import './contact.scss';

class Contact extends Component {
  render() {
    return (
      <address className="Contact">
        <h2>Contact Information</h2>
        <ul>
          <li>thecarloferrer@gmail.com</li>
          <li>647 331 6441</li>
          <li>ca.linkedin.com/in/carloferrer</li>
          <li>github.com/carloferrer</li>
          <li>Toronto, ON (Downtown)</li>
        </ul>
      </address>
    );
  }
}

export default Contact;