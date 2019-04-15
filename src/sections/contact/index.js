import React, { Component } from 'react';
import './index.scss';

class Contact extends Component {
  render() {
    // TODO: write better code
    const { contact } = this.props.content;

    const contactItems = Object.keys(this.props.content.contact).map((info, index) => {
      const { image, string } = contact[info];
      let innerContactNode = <React.Fragment>
        <img src={ image }/>{ string }
      </React.Fragment>;
      switch (info) {
        case 'email':
          innerContactNode = <React.Fragment>
            <br/>
            <a target="_blank" rel="noopener noreferrer" className={ info } href={ `mailto:${ string }` }><img src={ image } />{ string }</a> (linked)
          </React.Fragment>;
          break;
        case 'linkedin':
        case 'github':
          innerContactNode = <React.Fragment>
            <a target="_blank" rel="noopener noreferrer" className={ info } href={ `https://${ string }` }><img src={ image } />{ string }</a> (linked)
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