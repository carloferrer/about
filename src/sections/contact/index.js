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

      if (info !== 'location' && info !== 'phone') {
        let innerHref;

        switch (info) {
          case 'email':
            innerHref = `mailto:${ string }`;
            break;
          case 'linkedin':
          case 'github':
          innerHref = `https://${ string }`;
            break;
          default:
            break;
        }

        innerContactNode = <React.Fragment>
          <object className="icon" data={ image } aria-label={ `${ info } logo` } />
          <a target="_blank" rel="noopener noreferrer" className={`text ${ info }`} href={ innerHref }>{ string }</a>
          <span className="text"> (linked)</span>
        </React.Fragment>;
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