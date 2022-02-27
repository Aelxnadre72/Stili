import React, { useState } from "react";
import Axios from 'axios';
import Image from 'react-bootstrap/Image';
import picture from "../../src/PicPlaceholder.png";
import "./Profile.css";



export default function Profile(){
    const [phoneNumber, setPhoneNumber] = useState("");
    const [users, setNewUsers] = useState([]);


    function getUsers() {
        console.log(phoneNumber);

        async function getData() {
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
    
        getData().then(response => {
          setNewUsers(response.find(o => o.phoneNumber === "12345678"));
        });
    }
    function TextBoxContent(){
        const exJSON = [
            {
                name: "Anders",
                age: 20,
                location: "Trondheim"
            }
        ];
        const parseJsonIntoConsoleStr = (item, index) => {
            return (
            <p key={index}>
                {item.name} <br/>
                {item.age} <br/>
                {item.location}
            </p>
            );
        };
        return exJSON.map(parseJsonIntoConsoleStr);
    }



    return(
        <div className="ProfilePage">
            <Image className="ProfilePic" src={picture}>
            </Image>
            <h3>Textbox example</h3>
            <div className="example-text-box">
                <p>
                testing stuffs <br/>
                </p>
                <TextBoxContent />
            </div>
        </div>
    );
}