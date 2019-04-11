import React, { Component } from 'react';
import './contact.scss';

class Contact extends Component {
  render() {
    const contactItems = Object.values(this.props.content.contact).map((info, index) => <li key={`contact_${index}`}>{info}</li>);

    return (
      <address className="Contact">
        <h2>Contact Information</h2>
        <ul>{contactItems}</ul>
      </address>
    );
  }
}

export default Contact;