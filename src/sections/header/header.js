import React, { Component } from 'react';
import './header.scss';

class Header extends Component {
  render() {
    const { firstName, lastName, title } = this.props.content.header;

    return (
      <header className="Header">
        <h1 className="name">
          <em className="first">{ firstName }</em> <span className="last">{ lastName }</span>
        </h1>
        <h2 className="title">{ title }</h2>
      </header>
    );
  }
}

export default Header;