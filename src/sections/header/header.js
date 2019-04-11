import React, { Component } from 'react';
import './header.scss';

class Header extends Component {
  render() {
    const { name, title } = this.props.content.header;

    return (
      <header className="Header">
        <h1 className="name">{ name }</h1>
        <h2 className="title">{ title }</h2>
      </header>
    );
  }
}

export default Header;