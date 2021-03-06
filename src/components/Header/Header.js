import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header>
        <h1>Header</h1>
        <nav>
          <Link to="/">
            <h1>Home</h1>
          </Link>
          <Link to="/new-contact">
            <h1>New Contact</h1>
          </Link>
        </nav>
      </header>
    );
  }
}

export default Header;
