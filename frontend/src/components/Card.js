import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import Axios from 'axios';



export default function Card(props) {


async function getParticipationID() {
  try {
    const response = await Axios({
        method: "GET",
        url: "/eventParticipation/",
        responseType: "json",
      })
      return response.data;
    }
    catch(error){
      console.log(error.response);
      console.log(error.response.status);
      console.log(error.response.headers);
    }
  }

  function sow2() {
    const participant = getParticipationID()
    setParticipationID(participant.length + 1)
  }

function postToEventParticipationDB() {
      Axios({
        method: "POST",
        url: "/eventParticipation/",
        data: {
          participationID: participationID,
          eventID: eventID,
          phoneNumber: phoneNumber,
          firstName: firstName,
          surName: surName,
        },
      })
      .then((response) => {
        console.log(response);
      });
}

function Clicked() {
  sow()
  sow2()
  postToEventParticipationDB()
}

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
            <Button
              block
              size="lg"
              type="button"
              className="Button"
              onClick= {Clicked}
            >
              Join
            </Button>
          </div>
        </Link>
      </li>
    </div>
  );
}
