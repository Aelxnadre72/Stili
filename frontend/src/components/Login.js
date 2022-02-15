import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Axios from "axios";
import "./Login.css";
import { Link } from "react-router-dom";

export default function Login() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [text, setText] = useState("");
  const [data, setData] = useState([]);

  function validate() {
    Axios.get("user.json").then((res) => {
      if (data.length === 0) {
        setData(res.data.data[0]);
      }
    });
    return phoneNumber === data.phoneNumber && password === data.password;
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
        <p class="promo">Ekte turglede!</p>
        <p class="promo2"> Finn turer som passer for deg, og knytt vennskap for livet!</p>
      </div>
    </div>
    <div className="Login">
      <h5>Login</h5>
      <p>Don't have an account? <Link to="/register"><a>Click here</a></Link> to sign up!</p>
        <Form onSubmit={handleSubmit}>
          <Form.Group size="lg" controlId="phoneNumber">
            <Form.Control
              autoFocus
              type="phoneNumber"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(n) => setPhoneNumber(n.target.value)} />
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
              : () => changeText(
                "Incorrect phone number/password, please try again."
              )}
          >
            Login
          </Button>
        </Form>
      </div></>
      </div>
  );
}
