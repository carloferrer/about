import React, { Component } from 'react';
import './contact.scss';

class Contact extends Component {
  render() {
    const contactItems = Object.values(this.props.content.contact).map((info, index) => <li className="item" key={ `contact_${ index }` }>{ info }</li>);

    return (
      <address className="Contact">
        <h2 className="header">Details</h2>
        <ul className="list">{ contactItems }</ul>
      </address>
    );
  }
}

export default Contact;