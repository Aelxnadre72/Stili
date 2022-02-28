import React, { useState } from "react";
import Axios from 'axios';
import Image from 'react-bootstrap/Image';
import picture from "../../src/PicPlaceholder.png";
import "./Profile.css";

export default function Profile(){
  const [firstName, setFirstName] = useState("");
  const [surname, setsurname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [age, setAge] = useState("");
  const [experience, setExperience] = useState("");
  const [location, setLocation] = useState("");
  const [user, setUser] = useState([]);

    function fetchUserData() {
        getUser().then(response => {
            const currentUser = response.find(o => o.phoneNumber === localStorage.getItem("id"));
            return currentUser;
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

    return(
        <div className="ProfilePage">
            <Image className="ProfilePic" src={picture}>
            </Image>
            <h3>Textbox example</h3>
            <div className="example-text-box">
                <p>
                {fetchUserData().phoneNumber}<br/>
                </p>
            </div>
        </div>
    );
}