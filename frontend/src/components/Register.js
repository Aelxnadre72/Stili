import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Register.css";
import { Link } from "react-router-dom";
import Axios from "axios";

export default function Register() {
  const [firstName, setFirstName] = useState("");
  const [surname, setsurname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [age, setAge] = useState("");
  const [experience, setExperience] = useState("");
  const [location, setLocation] = useState("");
  const [password, setPassword] = useState("");
  const [text, setText] = useState("");
  const [formUser, setFormUser] = useState({
    firstName: "",
    surname: "",
    phoneNumber: "",
    age: "",
    experience: "",
    location: "",
    password: "",
  });

  function validate() {
    return (
      firstName.length < 101 &&
      surname.length < 101 &&
      phoneNumber.length === 8
      );
  }

  function createUser(event) {
    setText("");
    Axios({
      method: "POST",
      url: "/users/",
      data: {
        firstName: firstName,
        surname: surname,
        phoneNumber: phoneNumber,
        age: age,
        experience: experience,
        location: location,
        password: password,
      },
    }).then((response) => {
      console.log(response);
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

    event.preventDefault();
  }

  const changeText = (textinput) => setText(textinput);

  return (
    <div className="box-form">
      <>
        <div className="left">
          <div className="overlay">
            <h1>Stili.</h1>
            <p className="joinFun">Registrer deg nå og bli med på morroa!</p>
          </div>
        </div>
        <div className="Register">
          <h5>Register</h5>
          <p>
            Already have an account? <Link to="/">Click here</Link> to log in!
          </p>
          <Form>
            <Form.Group size="lg" controlId="firstName">
              <Form.Control
                autoFocus
                type="firstName"
                placeholder="First name"
                value={firstName}
                onChange={(n) => setFirstName(n.target.value)}
              />
            </Form.Group>
            <Form.Group size="lg" controlId="surname">
              <Form.Control
                autoFocus
                type="surname"
                placeholder="Surname"
                value={surname}
                onChange={(n) => setsurname(n.target.value)}
              />
            </Form.Group>
            <Form.Group size="lg" controlId="phoneNumber">
              <Form.Control
                autoFocus
                type="phoneNumber"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(p) => setPhoneNumber(p.target.value)}
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
              <Form.Control
                type="experience"
                placeholder="Experience"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
              />
            </Form.Group>
            <Form.Group size="lg" controlId="location">
              <Form.Control
                type="location"
                placeholder="Location"
                value={location}
                onChange={(l) => setLocation(l.target.value)}
              />
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
                  ? () => createUser()
                  : () => changeText("Make sure all the fields are filled in.")
              }
            >
              Register
            </Button>
          </Form>
        </div>
      </>
    </div>
  );
}
