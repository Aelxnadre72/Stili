import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";

export default function Register() {
  const [eventID, setEventID] = useState("");
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventDifficulty, setEventDifficulty] = useState("");
  const [eventDescription, setEventDescription] = useState("1");
  const [eventLocation, setEventLocation] = useState("");
  const [hours, setHours] = useState("");
  const [eventArea, setEventArea] = useState("");
  const [organizer_id, setOrganizer_id] = useState("");
  const [eventSize, setEventSize] = useState("");
  const [formUser, setFormUser] = useState({
    firstName: "",
    surname: "",
    phoneNumber: "",
    age: "",
    experience: "",
    location: "",
    password: "",
  });
  let navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("id") != null) {
      navigate('/home');
    }
  })

  function validate() {
    return (
      firstName.length < 101 &&
      surname.length < 101 &&
      location.length < 101 &&
      password.length < 101 &&
      firstName.length != 0 &&
      surname.length != 0 &&
      location.length != 0 &&
      password.length != 0 &&
      phoneNumber.length === 8 &&
      !isNaN(phoneNumber) &&
      !isNaN(age) &&
      (experience === "1" ||
      experience === "2" ||
      experience === "3")
      (location === "1" ||
      location === "2" ||
      location === "3" ||
      location === "4")
      );
  }

  function createEvent(event) {
    getEvent().then(response => {
      const currentEvent = response.find(o => o.eventID === eventID);
      console.log(currentEvent);
      if(typeof currentEvent === "undefined") {
        Axios({
          method: "POST",
          url: "/events/",
          data: {
            eventID: eventID,
            eventName: eventName,
            eventDate: eventDate,
            eventDifficulty: eventDifficulty,
            eventDescription: eventDescription,
            eventLocation: eventLocation,
            hours: hours,
            eventArea: eventArea,
            organizer_id: organizer_id,
            eventSize: eventSize,
          },
        }).then((response) => {
          console.log(response);
        });
        localStorage.setItem("id", phoneNumber);
        navigate('/home');
      }
      else {
        changeText("The phone number is already in use.")
      }
    });

    setFormUser({
      firstName: "",
      surname: "",
      phoneNumber: "",
      age: "",
      experience: "",
      location: "",
      password: "",
    });
  }

  async function getEvent() {
    try {
    const response = await Axios({
      method: "GET",
      url:"/events/",
      responseType:"json"
      })
    return response.data;
    }
    catch(error){
      console.log(error.response);
      console.log(error.response.status);
      console.log(error.response.headers);
    }
  }

  const changeText = (textinput) => setText(textinput);

  return (
        <div className="content">
          <Form>
            <Form.Group size="lg" controlId="eventName">
              <Form.Control
                autoFocus
                type="eventName"
                placeholder="Event name"
                value={eventName}
                onChange={(n) => setEventName(n.target.value)}
              />
            </Form.Group>
            <Form.Group size="lg" controlId="eventDate">
              <Form.Control
                autoFocus
                type="date"
                placeholder="Date"
                value={eventDate}
                onChange={(n) => setEventDate(n.target.value)}
              />
            </Form.Group>
            <Form.Group size="lg" controlId="eventDifficulty">
              <Form.Control
                autoFocus
                type="eventDifficulty"
                placeholder="Difficulty"
                value={eventDifficulty}
                onChange={(p) => setEventDifficulty(p.target.value)}
              />
              <Form.Group size="lg" controlId="age">
                <Form.Control
                  autoFocus
                  type="age"
                  placeholder="Age"
                  value={age}
                  onChange={(a) => setAge(a.target.value)}
                />
              </Form.Group>
            </Form.Group>
            <Form.Group size="lg" controlId="experience">
            <Form.Select aria-label="Default select example" value={experience}
            onChange={(e) => setExperience(e.target.value)}>
              <option value="1">Easy</option>
              <option value="2">Mediocre</option>
              <option value="3">Veteran</option>
            </Form.Select>
            </Form.Group>
            <Form.Group size="lg" controlId="location">
            <Form.Select aria-label="Default select example" value={location}
            onChange={(e) => setLocation(e.target.value)}>
              <option value="1">Trondheim</option>
              <option value="2">Oslo</option>
              <option value="3">Stavanger</option>
              <option value="4">Bergen</option>
            </Form.Select>
            </Form.Group>
            <Form.Group size="lg" controlId="password">
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(p) => setPassword(p.target.value)}
              />
            </Form.Group>
            <p className="errormsg">{text}</p>
            <Button
              block
              size="lg"
              type="button"
              className="Button"
              onClick={
                validate()
                  ? () => createEvent()
                  : () => changeText("Make sure all the fields are filled in correctly.")
              }
            >
              Register
            </Button>
          </Form>
        </div>
    );
}

