import React, { Component } from "react";
import "./Header.css"



class Header extends Component {
  render() {
    return (
      <nav className="navbar bg-danger navbar-dark">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">Hacker News</span>
        </div>
      </nav>
    );
  }
}

export { Header }