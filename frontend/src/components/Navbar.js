import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Navbar.css";

export default function Navbar(props) {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  function handleClick() {
    setClick(!click);
  }

  function closeMobileMenu() {
    setClick(false);
  }

  function showButton() {
    if (window.innerWidth <= 979) {
      setButton(false);
    } else {
      setButton(true);
    }
  }

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <div className="navbar-container">
      <div
        data-aos={props.fade}
        data-aos-duration={props.duration}
        data-aos-offset={props.offset}
      >
        <nav className="navbar">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            Hafskjold
          </Link>
          <ul
            className={click ? "navbar-hamburger active" : "navbar-hamburger"}
          >
            <li className="navbar-item">
              <Link to="/" className="navbar-links" onClick={closeMobileMenu}>
                Hjem
              </Link>
            </li>
            <li className="navbar-item">
              <Link
                to="/salads"
                className="navbar-links"
                onClick={closeMobileMenu}
              >
                Salater
              </Link>
            </li>
            <li className="navbar-item">
              <Link
                to="/recipes"
                className="navbar-links"
                onClick={closeMobileMenu}
              >
                Oppskrifter
              </Link>
            </li>
            <li className="navbar-item">
              <Link
                to="/about"
                className="navbar-links"
                onClick={closeMobileMenu}
              >
                Om Oss
              </Link>
            </li>
            <li className="navbar-item">
              <Link
                to="/contact"
                className="navbar-links-mobile"
                onClick={closeMobileMenu}
              >
                Kontakt
              </Link>
            </li>
          </ul>
          {button && <Button button="btn--outline">Kontakt</Button>}
          <div className="hamburger-icon">
            <button
              onClick={handleClick}
              className={
                click
                  ? "hamburger hamburger--spring is-active"
                  : "hamburger hamburger--spring"
              }
              type="button"
            >
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
}
