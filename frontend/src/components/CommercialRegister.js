import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";

export default function Register() {
  const [orgName, setOrgName] = useState("");
  const [orgNumber, setOrgNumber] = useState("");
  const [location, setLocation] = useState("");
  const [password, setPassword] = useState("");
  const [text, setText] = useState("");
  const [formUser, setFormUser] = useState({
    orgName: "",
    orgNumber: "",
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
      orgName.length < 101 &&
      location.length < 101 &&
      password.length < 101 &&
      orgName.length != 0 &&
      location.length != 0 &&
      password.length != 0 &&
      orgNumber.length === 9 &&
      !isNaN(orgNumber)
      );
  }

  function createCommercialUser(event) {
    getCommercialUser().then(response => {
      const currentUser = response.find(o => o.orgNumber === orgNumber);
      console.log(currentUser);
      if(typeof currentUser === "undefined") {
        Axios({
          method: "POST",
          url: "/commercialUsers/",
          data: {
            orgName: orgName,
            orgNumber: orgNumber,
            location: location,
            password: password,
          },
        }).then((response) => {
          console.log(response);
        });
        localStorage.setItem("id", orgNumber);
        navigate('/home');
      }
      else {
        changeText("The organization number is already in use.")
      }
    });

    setFormUser({
      orgName: "",
      orgNumber: "",
      location: "",
      password: "",
    });
  }

  async function getCommercialUser() {
    try {
    const response = await Axios({
      method: "GET",
      url:"/commercialUsers/",
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
      <>
        <div className="left">
          <div className="overlay">
            <h1>Stili.</h1>
            <p className="joinFun">Registrer deg nå og bli med på morroa!</p>
          </div>
        </div>
        <div className="Register">
          <h5>Register</h5>
          <p><Link to="/register">Click here</Link> to sign up!</p>
          <p><Link to="">Click here</Link> to log in</p>
          <p>Are you a commecial organization? <Link to="/commercialogin">Click here</Link> to log in</p>
          <p>Don't have an account? <Link to="/home">Click here</Link></p>
          <Form>
            <Form.Group size="lg" controlId="orgName">
              <Form.Control
                autoFocus
                type="orgName"
                placeholder="Organization Name"
                value={orgName}
                onChange={(n) => setOrgName(n.target.value)}
              />
            </Form.Group>
            <Form.Group size="lg" controlId="orgNumber">
              <Form.Control
                autoFocus
                type="orgNumber"
                placeholder="Organization Number"
                value={orgNumber}
                onChange={(p) => setOrgNumber(p.target.value)}
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
                  ? () => createCommercialUser()
                  : () => changeText("Make sure all the fields are filled in correctly.")
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