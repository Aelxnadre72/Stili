import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Axios from 'axios';
import './Login.css';

export default function Login() {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
    const [text, setText] = useState("");

    function validate () {
        return (
            phoneNumber === "12345678" 
            && password === "hund123"
        )
    }

    const changeText = (textinput) => setText(textinput);

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

    return (
        <div className="Login">
        <Form onSubmit={handleSubmit}>
            <Form.Group size="lg" controlId="phoneNumber">
            <Form.Label className="phonelabel">Phone Number</Form.Label>
            <Form.Control
                autoFocus
                type="phoneNumber"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(n) => setPhoneNumber(n.target.value)}
            />
            </Form.Group>
            <Form.Group size="lg" controlId="password">
            <Form.Label className="passwordlabel">Password</Form.Label>
            <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(p) => setPassword(p.target.value)}
            />
            </Form.Group>
            <p className="errormsg">{text}</p>
            <Button block size="lg" type="submit" className="Button" onClick={

                validate() 
                ? () => changeText("Suksess")
                : () => changeText("Incorrect phone number/password, please try again.")}>

            Login
            </Button>
        </Form>
        </div>
    );
}
