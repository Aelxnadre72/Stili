import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Register.css";

export default function Register() {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [age, setAge] = useState("");
  const [experience, setExperience] = useState("");
  const [location, setLocation] = useState("");
  const [password, setPassword] = useState("");
  const [text, setText] = useState("");

  function validate() {
    return 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    /*Axios.post('URL', {
            'phoneNumber' : phoneNumber,
            'password' : password,
        },
        { headers: {
            "Authorization": `AUTHORIZATION_KEY`,
            "Content-Type": 'application/json'
        }
        }
        )
        .then(res => console.log(res))
        .catch(error => console.err(error))*/
  }

  const changeText = (textinput) => setText(textinput);

  return (
    <div class="box-form">
    <><div class="left">
      <div class="overlay">
        <h1>Stili.</h1>
        <p class="joinFun">Registrer deg nå og bli med på morroa!</p>
      </div>
    </div>
    <div className="Register">
    <h5>Register</h5>
    <p>Already have an account? <a href="Login.js">Click here</a> to log in!</p>
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="name">
          <Form.Control
            autoFocus
            type="name"
            placeholder="Name"
            value={name}
            onChange={(n) => setName(n.target.value)} />
        </Form.Group>
        <Form.Group size="lg" controlId="phoneNumber">
          <Form.Control
            autoFocus
            type="phoneNumber"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(p) => setPhoneNumber(p.target.value)} />
          <Form.Group size="lg" controlId="age">
            <Form.Control
              autoFocus
              type="age"
              placeholder="Age"
              value={age}
              onChange={(a) => setAge(a.target.value)} />
          </Form.Group>
        </Form.Group>
        <Form.Group size="lg" controlId="experience">
          <Form.Control
            type="experience"
            placeholder="Experience"
            value={experience}
            onChange={(e) => setExperience(e.target.value)} />
        </Form.Group>
        <Form.Group size="lg" controlId="location">
          <Form.Control
            type="location"
            placeholder="Location"
            value={location}
            onChange={(l) => setLocation(l.target.value)} />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(p) => setPassword(p.target.value)} />
        </Form.Group>
        <p className="errormsg">{text}</p>
        <Button
          block
          size="lg"
          type="submit"
          className="Button"
          onClick={validate()
            ? () => changeText("Success! Redirecting...")
            : () => changeText("Make sure all the fields are filled in.")}
        >
          Register
        </Button>
      </Form>
    </div></>
    </div>
  );
}
