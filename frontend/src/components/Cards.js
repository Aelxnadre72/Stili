import React from "react";
import Card from "./Card";
import "./Cards.css";
import mountain from './Mountain-Hiking.jpg';
import campus from './Campusrunden.jpg';
import bymarka from './bymarka.jpeg';

export default function Cards(props) {
  return (
    <div className="cards">
      <h1>{props.text}</h1>
      <div className="card_container">
        <div className="card_wrapper">
          <ul className="card_items">
            <Card
              name="card-body"
              wrapper="card_picture_wrapper-pizza"
              src={campus}
              text="Campusrunden"
              label="Lett"
              path="/pizza"
            />
            <Card
              name="card-body"
              wrapper="card_picture_wrapper"
              src={mountain}
              text="Gaustatoppen"
              label="Vanskelig"
              path="/pasta"
            />
            <Card
              name="card-body"
              wrapper="card_picture_wrapper-meat"
              src={bymarka}
              text="Bymarka"
              label="Middels"
              path="/meat"
            />
          </ul>
        </div>
      </div>
      <div className="card_container">
        <div className="card_wrapper">
          <ul className="card_items">
          <Card
              name="card-body"
              wrapper="card_picture_wrapper-meat"
              src={bymarka}
              text="Bymarka"
              label="Middels"
              path="/meat"
            />
            <Card
              name="card-body"
              wrapper="card_picture_wrapper-pizza"
              src={campus}
              text="Campusrunden"
              label="Lett"
              path="/pizza"
            />
            <Card
              name="card-body"
              wrapper="card_picture_wrapper"
              src={mountain}
              text="Gaustatoppen"
              label="Vanskelig"
              path="/pasta"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
