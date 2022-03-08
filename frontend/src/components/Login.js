import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Axios from "axios";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [text, setText] = useState("");
  let navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("id") != null) {
      navigate('/home');
    }
  })

  function validate() {
    return (phoneNumber.length === 8 && !isNaN(phoneNumber));
  }

  function validateUser() {
    getUser().then(response => {
      const currentUser = response.find(o => o.phoneNumber === phoneNumber);
      if (typeof currentUser === "undefined") {
        changeText("The phone number is not connected to an account.")
        return;
      }
      else {
        if(currentUser.password === password) {
          changeText("Logged in succesfully.");
          localStorage.setItem("id", currentUser.phoneNumber);
          navigate('/home');
        }
        else {
          changeText("Incorrect phone number or password.")
        }
      }
    });
  }

  async function getUser() {
    try {
    const response = await Axios({
      method: "GET",
      url:"/users/",
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
        <p><Link to="/home">Don't</Link> have an account? <Link to="/register">Click here</Link> to sign up! Are you a commecial organization <Link to="/commercialRegister">click here</Link></p>
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
                ? () => {validateUser();}
                : () => {changeText("The phone number has to consist of 8 numbers.")}
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
