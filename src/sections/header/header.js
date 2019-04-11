import React, { Component } from 'react';
import Contact from '../contact/contact';
import './header.scss';

class Header extends Component {
  render() {
    const { name, title } = this.props.content.header;

    return (
      <header className="Header">
        <h1>{name}</h1>
        <h2>{title}</h2>
        <Contact content={this.props.content}/>
      </header>
    );
  }
}

export default Header;