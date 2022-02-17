import React, { useState } from "react";
import picture from "../../src/PicPlaceholder.png";
import "./Profile.css";


export default function Profile(){
    const [profilePic, setProfilePic] = useState("");
    const [username, setUsername] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [age, setAge] = useState("");
    const [hikingExperience, setHikingExperience] = useState("");
    const [location, setLocation] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
    }

    return(
        <div className="Profile">
            <img className="ProfilePic" id="ProfilePic" src={picture}></img>
            <p className="username">username</p>
            <p className="phoneNumber">phoneNumber</p>
            <p className="age">age</p>
            <p className="hikingExperience">hikingExperience</p>
            <p className="location">location</p>
        </div>
    );
}