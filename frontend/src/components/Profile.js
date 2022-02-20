import React, { useState } from "react";
import Image from 'react-bootstrap/Image';
import picture from "../../src/PicPlaceholder.png";
import Form from "react-bootstrap/Form";
import "./Profile.css";



export default function Profile(){
    const user = {
        userName: "Brukernavn",
        firstName: "Navn",
        surname: "Navnesen",
        phoneNumber: "12345678",
        age: "50",
        experience: "Some",
        location: "Trondheim",
    };
    
  

    return(
        <div className="Box-form">
            <>
                <div className="overlay">
                    <h1>Stili.Profili</h1>
                </div>
                <Image id="Profilbilde" src={picture}>
                </Image>
                <div className = "Profile">
                    <h5>{user.userName}</h5>
                    <Form>
                        <Form.Group size="lg" controlId="firstName">
                            <Form.Control
                            autoFocus
                            value={"Firstname:" + " " + user.firstName}
                            disabled
                            />
                        </Form.Group>
                        <Form.Group size="lg" controlId="surName">
                            <Form.Control
                            autoFocus
                            value={"Surname:" + " " + user.surname}
                            disabled
                            />
                        </Form.Group>
                        <Form.Group size="lg" controlId="phoneNumber">
                            <Form.Control
                            autoFocus
                            value={"Phonenumber:" + " " + user.phoneNumber}
                            disabled
                            />
                        </Form.Group>
                        <Form.Group size="lg" controlId="age">
                            <Form.Control
                            autoFocus
                            value={"Age:" + " " + user.age}
                            disabled
                            />
                        </Form.Group>
                        <Form.Group size="lg" controlId="experience">
                            <Form.Control
                            autoFocus
                            value={"Experience:" + " " + user.experience}
                            disabled
                            />
                        </Form.Group>
                        <Form.Group size="lg" controlId="location">
                            <Form.Control
                            autoFocus
                            value={"Location:" + " " + user.location}
                            disabled
                            />
                        </Form.Group>
                    </Form>
                </div>
            </>
        </div>
    );
}