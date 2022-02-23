import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import avatar from './img_avatar.png';
import logout from './logout.png';

export default function Navbar(props) {

  return (
    <div className="navbar-container">
      <div
        data-aos={props.fade}
        data-aos-duration={props.duration}
        data-aos-offset={props.offset}
      >
        <nav className="navbar">
          <ul
          >
            <img src={avatar} alt="Avatar" class="avatar"></img>
            <li className="navbar-item">
              <Link to="/" className="navbar-links">
                Min profil
              </Link>
            </li>
            <li className="navbar-item">
              <Link
                to="/salads"
                className="navbar-links"
              >
                Utforsk
              </Link>
            </li>
            <li className="navbar-item">
              <Link
                to="/recipes"
                className="navbar-links"
              >
                Mine turer
              </Link>
            </li>
            <li className="navbar-item">
              <Link
                to="/about"
                className="navbar-links"
              >
                Settinger
              </Link>
            </li>
            <li className="navbar-item">
              <Link
                to="/contact"
                className="navbar-links"
              >
                Kontakt
              </Link>
            </li>
          </ul>
          
          <li className="logout"><Link
          to="/" className="logout-link"
          ><img src={logout} alt="Logout" class="logoutIcon"></img>Logg ut</Link></li> 
        </nav>
      </div>
    </div>
  );
}
