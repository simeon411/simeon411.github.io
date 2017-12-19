import React from "react";
import "./Nav.css";

const Nav = (props) => (
  <nav className="navbar navbar-inverse navbar-top">
    <div className="container-fluid">
      <div className="navbar-header">
        <a href="/" className="navbar-brand text-center">
          Clicky Game
        </a>
        <a href="/" className="navbar-brand text-center">
          Click to begin
        </a>
        <a href="/" className="navbar-brand text-center">
          Score: {props.score} | Top Score: {props.top}
        </a>
      </div>
    </div>
  </nav>
);

export default Nav;
