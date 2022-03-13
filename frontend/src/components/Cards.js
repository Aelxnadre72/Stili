import React, { useState, useEffect } from "react";
import Card from "./Card";
import "./Cards.css";
import campus from "./Campusrunden.jpg";
import Axios from "axios";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function Cards() {
  const [data, setData] = useState([]);
  const [q, setQ] = useState("");

  useEffect(() => {
    Axios({
      method: "GET",
      url: "/events/",
      responseType: "json",
    })
      .then((response) => {
        const events = response.data;
        if (data.length === 0) {
          setData(events);
        }
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
  });

  return (
    <div className="all">
      <div className="search-box">
      </div>
      <div className="cards">
        <div className="card_container">
        <div className="search">
            <TextField
          id="outlined-basic"
          variant="outlined"
          size="small"
          label="Search"
          onChange={(e) => setQ(e.target.value)}
          />
          <Link to="/registerEvent"><Button id="button" variant="contained" size="small" color="success">Create Event</Button></Link>
        </div>
          <div className="card_wrapper">
            <ul className="card_items">
              {data
                .filter((val) => {
                  if (
                    q === "" ||
                    (q.length > 0 &&
                      val.eventName.toLowerCase().includes(q.toLowerCase()))
                  ) {
                    return val;
                  }
                })
                .map((a, key) => {
                  return (
                    <div key={key}>
                      <Card
                        name="card-body"
                        wrapper={"card_picture_wrapper-" + a.eventDifficulty}
                        src={campus}
                        text={a.eventName}
                        label={a.eventDifficulty}
                        path=""
                        size={"0/" + a.eventSize}
                      />
                    </div>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
