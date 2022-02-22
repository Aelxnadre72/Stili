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
  const [users , setNewUsers] = useState(null);

  function validate() {

    Axios.get("user.json").then((res) => {
      if (data.length === 0) {
        setData(res.data.data[0]);
      }
    });
    return true;
  }

  function getUsers(event) {
    Axios({
        method: "GET",
        url:"/users/",
      }).then((response)=>{
        const data = response.data
        setNewUsers(data)
      }).catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log(error.response.status);
          console.log(error.response.headers);
          }
      })

      event.preventDefault();
      setText(users);
    }

  const changeText = (textinput) => setText(textinput);

  return (
    <div className="box-form">
    <><div className="left">
      <div className="overlay">
        <h1>Stili.</h1>
        <p className="promo">Ekte turglede!</p>
        <p className="promo2"> Finn turer som passer for deg, og knytt vennskap for livet!</p>
      </div>
      </div>
      <div className="Login">
        <h5>Login</h5>
        <p>Don't have an account? <Link to="/register">Click here</Link> to sign up!</p>
          <Form>
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
            <Button
              block
              size="lg"
              type="button"
              className="Button"
              onClick={validate()
                ? () => getUsers()
                : () => changeText(users)
              }
            >
              Login
            </Button>
            <p className="errormsg">{text}</p>
          </Form>
        </div></>
    </div>
  );
}
