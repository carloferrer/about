import React, { Component } from 'react';
import content from '../../content';
import './contact.scss';

class Contact extends Component {
  constructor() {
    super();

    this.state = {
      contact: content.contact,
    };
  }

  render() {
    const contactItems = Object.values(this.state.contact).map((info) => <li>{info}</li>);

    return (
      <address className="Contact">
        <h2>Contact Information</h2>
        <ul>{contactItems}</ul>
      </address>
    );
  }
}

export default Contact;