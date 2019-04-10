import React, { Component } from 'react';
import content from '../../content';
import Contact from '../contact/contact';
import './header.scss';

class Header extends Component {
  constructor() {
    super();

    this.state = {
      header: content.header,
    };
  }

  render() {
    return (
      <header className="Header">
        <h1>{this.state.header.name}</h1>
        <h2>{this.state.header.title}</h2>
        <Contact/>
      </header>
    );
  }
}

export default Header;