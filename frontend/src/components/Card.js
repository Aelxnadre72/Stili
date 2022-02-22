import React from "react";
import { Link } from "react-router-dom";

export default function Card(props) {
  return (
    <div className={props.name}>
      <li className="card">
        <Link className="card_link" to={props.path}>
          <figure className={props.wrapper} data-category={props.label}>
            <img src={props.src} alt="test" className="card_image"></img>
          </figure>
          <div className="card_info">
            <h5 className="card_text">{props.text}</h5>
            <h3 className="card_text">{props.size}</h3>
          </div>
        </Link>
      </li>
    </div>
  );
}
