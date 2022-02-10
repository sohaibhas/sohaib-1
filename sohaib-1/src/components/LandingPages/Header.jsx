import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
      <header  className="header bd-grid">
        <div className="nav">
          <div className="logo">
            <a href="/">
              <span className="blue">.SO</span>hAIB
            </a>
          </div>
          <div className="mid">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="/">Portfolio</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="/">Services</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="/about">About</a>
              </li>
            </ul>
          </div>
          <div className="right">
            <button className="btn">LOGIN</button>
            <button className="btn">SIGNUP</button>
          </div>
        </div>
      </header>
  );
};

export default Header;
