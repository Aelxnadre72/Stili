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
            <p className="card_title">{props.text}</p>
            <p className="card_description">{props.description}</p>
            <p className="card_description">{props.distance}</p>
            <p className="card_size">{props.size}</p>
          </div>
        </Link>
      </li>
    </div>
  );
}
