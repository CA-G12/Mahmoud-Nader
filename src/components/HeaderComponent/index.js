import React, { Component } from "react";
import "./style.css";

class HeaderComponents extends Component {
  render() {
    return (
      <>
        <header className="header">
          <div className="header-navbar">
            <div className="header-logo">Movies</div>
            <div className="nav-list">
              <li className="nav-item">
                <a href="#movies" className="nav-links">
                  Movies
                </a>
              </li>
              <li className="nav-item">
                <a href="#footer" className="nav-links">
                  Contact
                </a>
              </li>
            </div>
          </div>
          <div className="header-landing">
            <h1 className="title">Unlimited movies, TV shows, and more.</h1>
            <p className="description">Watch anywhere. Cancel anytime.</p>
            <div className="header-buttons">
                <a href="#movies" >
                <button >Movies</button></a>
              {/* <a className="btn movies-unique"> */}
                {/* Movies
              </a> */}
            </div>
          </div>
        </header>
      </>
    );
  }
}

export default HeaderComponents;
