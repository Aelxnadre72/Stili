import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";
import Dropdown from "react-bootstrap/Dropdown";

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
      );
  }

  function createUser(event) {
    getUser().then(response => {
      const currentUser = response.find(o => o.phoneNumber === phoneNumber);
      console.log(currentUser);
      if(typeof currentUser === "undefined") {
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
      <>
        <div className="left">
          <div className="overlay">
            <h1>Stili.</h1>
            <p className="joinFun">Registrer deg nå og bli med på morroa!</p>
          </div>
        </div>
        <div className="Register">
          <h5>Register</h5>
          <p>Are you a commecial organization? <Link to="/commercialRegister">Click here</Link> to register</p>
          <p><Link to="">Click here</Link> to log in</p>
          <p>Are you a commecial organization? <Link to="/commercialogin">Click here</Link> to log in</p>
          <p>Don't have an account? <Link to="/home">Click here</Link></p>
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
            <Form.Select aria-label="Default select example">
              <option value="1">Easy</option>
              <option value="2">Mediocre</option>
              <option value="3">Veteran</option>
            </Form.Select>
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
