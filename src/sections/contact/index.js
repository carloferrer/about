import React, { Component } from 'react';
import './index.scss';

class Contact extends Component {
  render() {
    // TODO: write better code
    const { contact } = this.props.content;

    const contactItems = Object.keys(this.props.content.contact).map((info, index) => {
      let innerContactNode = contact[info].string;
      switch (info) {
        case 'email':
          const email = contact[info].string;
          innerContactNode = <React.Fragment>
            <br/>
            <a target="_blank" rel="noopener noreferrer" className={ info } href={ `mailto:${ email }` }>{ email }</a> (linked)
          </React.Fragment>;
          break;
        case 'linkedin':
        case 'github':
          const link = contact[info].string;
          innerContactNode = <React.Fragment>
            <a target="_blank" rel="noopener noreferrer" className={ info } href={ `https://${ link }` }>{ link }</a> (linked)
          </React.Fragment>;
          break;
        default:
          break;
      }

      return <li className="item" key={ `contact_${ index }` }>{ innerContactNode }</li>
    });

    return (
      <address className="Contact">
        <h2 className="header">Details</h2>
        <ul className="list">{ contactItems }</ul>
      </address>
    );
  }
}

export default Contact;