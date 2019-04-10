import React, { Component } from 'react';
import Contact from '../contact/contact';
import './header.scss';

class Header extends Component {
  render() {
    return (
      <header className="Header">
        <h1>Carlo Ferrer</h1>
        <h2>Full Stack Developer</h2>
        <Contact/>
      </header>
    );
  }
}

export default Header;