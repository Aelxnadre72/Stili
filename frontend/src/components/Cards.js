import React from "react";
import Card from "./Card";
import "./Cards.css";
import mountain from './Mountain-Hiking.jpg';
import campus from './Campusrunden.jpg';
import bymarka from './bymarka.jpeg';

export default function Cards(props) {
  return (
    <div className="cards">
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
              size="18/20"
            />
            <Card
              name="card-body"
              wrapper="card_picture_wrapper"
              src={mountain}
              text="Gaustatoppen"
              label="Vanskelig"
              path="/pasta"
              size="30/30"
            />
            <Card
              name="card-body"
              wrapper="card_picture_wrapper-meat"
              src={bymarka}
              text="Bymarka"
              label="Middels"
              path="/meat"
              size="0/10"
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
              size="7/20"
            />
            <Card
              name="card-body"
              wrapper="card_picture_wrapper-pizza"
              src={campus}
              text="Campusrunden"
              label="Lett"
              path="/pizza"
              size="20/30"
            />
            <Card
              name="card-body"
              wrapper="card_picture_wrapper"
              src={mountain}
              text="Gaustatoppen"
              label="Vanskelig"
              path="/pasta"
              size="40/40"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
