import React, { Component } from 'react';
import './index.scss';

class Contact extends Component {
  render() {
    // TODO: write better code
    const { contact } = this.props.content;

    const contactItems = Object.keys(this.props.content.contact).map((info, index) => {
      const { image, string } = contact[info];
      let innerContactNode = <React.Fragment>
        <object className="icon" type="image/svg+xml" data={ image } aria-label={ `${ info } logo` }/>
        <span className="text">{ string }</span>
      </React.Fragment>;
      switch (info) {
        case 'email':
          innerContactNode = <React.Fragment>
            <br/>
            <object className="icon" data={ image } aria-label={ `${ info } logo` }/>
            <a target="_blank" rel="noopener noreferrer" className={`text ${ info }`} href={ `mailto:${ string }` }>{ string }</a> (linked)
          </React.Fragment>;
          break;
        case 'linkedin':
        case 'github':
          innerContactNode = <React.Fragment>
            <object className="icon" data={ image } aria-label={ `${ info } logo` } />
            <a target="_blank" rel="noopener noreferrer" className={`text ${ info }`} href={ `https://${ string }` }>{ string }</a> (linked)
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