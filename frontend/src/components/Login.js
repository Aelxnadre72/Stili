import React, { useState, useEffect } from "react";
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
  const [user, setUser] = useState(null);

  function validate() {
    return true; //validate the format of the phone number
  }

  async function validateUser() {
    getUser().then(response => {
      if (typeof response.find(o => o.phoneNumber === phoneNumber) === "undefined") {
        changeText("The phone number is not connected to an account.")
        return;
      }
      else {
        setUser(response.find(o => o.phoneNumber === phoneNumber));
        return;
      }
    });
  }

  useEffect(() => {
    if(user != null) {
      if(user.password === password) {
        changeText("Logged in succesfully."); //oppfølging til kommentaren nederst: kan også bare videresende til neste siden herifra.
      }
      else {
        setUser(null);
        changeText("Incorrect phone number or password.")
      }
    }
  });

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
        <p><Link to="/home">Don't</Link> have an account? <Link to="/register">Click here</Link> to sign up!</p>
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
              type="button" // endre til en submit button som sender deg videre til neste side. prevent default dersom tlf nummer ikke finnes, videresendes ellers.
              className="Button" // - videresende user elelr tlf nummer også om det er mulig for å vite hvem som er logget inn.
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
