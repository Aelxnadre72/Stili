import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import avatar from './img_avatar.png';
import logout from './logout.png';

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
          <ul
            className={click ? "navbar-hamburger active" : "navbar-hamburger"}
          >
            <img src={avatar} alt="Avatar" class="avatar"></img>
            <li className="navbar-item">
              <Link to="/" className="navbar-links" onClick={closeMobileMenu}>
                Min profil
              </Link>
            </li>
            <li className="navbar-item">
              <Link
                to="/salads"
                className="navbar-links"
                onClick={closeMobileMenu}
              >
                Utforsk
              </Link>
            </li>
            <li className="navbar-item">
              <Link
                to="/recipes"
                className="navbar-links"
                onClick={closeMobileMenu}
              >
                Mine turer
              </Link>
            </li>
            <li className="navbar-item">
              <Link
                to="/about"
                className="navbar-links"
                onClick={closeMobileMenu}
              >
                Settinger
              </Link>
            </li>
            <li className="navbar-item">
              <Link
                to="/contact"
                className="navbar-links"
                onClick={closeMobileMenu}
              >
                Kontakt
              </Link>
            </li>
          </ul>
          <Link
          to="/"
          >
          <li className="logout"><img src={logout} alt="Logout" class="logoutIcon"></img>Logg ut</li> 
          </Link>
        </nav>
      </div>
    </div>
  );
}
