import React from "react";
import Card from "./Card";
import "./Cards.css";

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
              src=""
              text="Pizzaoppskrifter"
              label="Pizza"
              path="/pizza"
            />
            <Card
              name="card-body"
              wrapper="card_picture_wrapper"
              src="images/gorgonzola.jpg"
              text="Pastaoppskrifter"
              label="Pasta"
              path="/pasta"
            />
            <Card
              name="card-body"
              wrapper="card_picture_wrapper-meat"
              src="images/taco.jpg"
              text="Kjøttoppskrifter"
              label="Kjøtt"
              path="/meat"
            />
            <Card
              name="card-body"
              wrapper="card_picture_wrapper-rice"
              src="images/rice.jpg"
              text="Risoppskrifter"
              label="Ris"
              path="/"
            />
            <Card
              name="card-body"
              wrapper="card_picture_wrapper-fish"
              src="images/salmon.jpg"
              text="Fiskeoppskrifter"
              label="Fisk"
              path="/fish"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
