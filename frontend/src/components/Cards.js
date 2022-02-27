import React, { useState, useEffect} from "react";
import Card from "./Card";
import "./Cards.css";
import campus from './Campusrunden.jpg';
import Axios from 'axios';

export default function Cards(props) {
  const [data, setData] = useState([]);

  const getData = () => {
    Axios({
      method: "GET",
      url:"/events/",
      responseType:"json"
      }).then((response) => {
      const events = response.data;
      if (data.length === 0) {
        setData(events);
      }
    }).catch((error) => {
      if (error.response) {
        console.log(error.response);
        console.log(error.response.status);
        console.log(error.response.headers);
        }
    })}

    useEffect(() => {
      getData();
    }, []);

  return (
    <div className="cards">
      <div className="card_container">
        <div className="card_wrapper">
          <ul className="card_items">
          {data.map((a, key) =>  {
          return (
            <div key={key}>
            <Card
              name={key}
              wrapper={a.eventDifficulty}
              src={campus}
              text={a.eventName}
              label={a.eventDifficulty}
              path=""
              size={a.eventSize}
            />
            </div>
          );
          })}
          </ul>
        </div>
      </div>
    </div>
  );
}
