import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Login.css';

export default function Login() {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");

    function validate() {
        return (
            phoneNumber.length === 8 
            && 
            (password.length > 0 && password.length <= 10)
        );
    }

    function handleSubmit(event) {
        event.preventDefault();
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
            <Button block size="lg" type="submit" disabled={!validate()} className="Button">
            Login
            </Button>
        </Form>
        </div>
    );
}
