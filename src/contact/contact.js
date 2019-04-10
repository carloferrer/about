import React, { Component } from 'react';
import './contact.scss';

class Contact extends Component {
  render() {
    const contactInfo = {
      email: 'thecarloferrer@gmail.com',
      phone: '647 331 6441',
      linkedin: 'ca.linkedin.com/in/carloferrer',
      github: 'github.com/carloferrer',
      location: 'Toronto, ON (Downtown)',
    };

    const contactNode = Object.values(contactInfo).map((info) => <li>{info}</li>);

    return (
      <address className="Contact">
        <h2>Contact Information</h2>
        <ul>
          {contactNode}
        </ul>
      </address>
    );
  }
}

export default Contact;