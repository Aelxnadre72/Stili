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
        <div className="ProfilePage">
            <Image className="ProfilePic" src={picture}>
            </Image>
            <div className = "Profil">
                <h3 className="Username">{user.userName}</h3>
                <Form className="Forms">
                    <Form.Group size="lg" controlId="firstName">
                        <Form.Control
                        value={"Firstname:" + " " + user.firstName}
                        disabled
                        />
                        <Form.Control
                        value={"Surname:" + " " + user.surname}
                        disabled
                        />
                        <Form.Control
                        value={"Phonenumber:" + " " + user.phoneNumber}
                        disabled
                        />
                        <Form.Control
                        autoFocus
                        value={"Age:" + " " + user.age}
                        disabled
                        />
                        <Form.Control
                        autoFocus
                        value={"Experience:" + " " + user.experience}
                        disabled
                        />
                        <Form.Control
                        autoFocus
                        value={"Location:" + " " + user.location}
                        disabled
                        />
                    </Form.Group>
                </Form>
            </div>
        </div>
    );
}