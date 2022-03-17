import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from 'react-bootstrap/Image';
import picture from "../../src/PicPlaceholder.png";
import Navbar from "./Navbar";
import TopNavbar from "./TopNavbar";
import Axios from "axios";
import "./ProfileInfo.css";

export default function ProfileInfo(props) {
     const [firstName, setFirstName] = useState("undefined");
     const [surname, setsurname] = useState("undefined");
     const [age, setAge] = useState("undefined");
     const [experience, setExperience] = useState("");
     const [location, setLocation] = useState("");
     const [text, setText] = useState("");

     function validate() {
          return (
               firstName.length < 101 &&
               surname.length < 101 &&
               location.length < 101 &&
               firstName.length !== 0 &&
               surname.length !== 0 &&
               location.length !== 0 &&
               !isNaN(age) &&
               (experience === "1" ||
               experience === "2" ||
               experience === "3") &&
               (location === "1" ||
               location === "2" ||
               location === "3" ||
               location === "4") &&
               (firstName !== props.user.firstName ||
               surname !== props.user.surname ||
               age !== props.user.age ||
               experience !== props.user.experience ||
               location !== props.user.location)
               );
        }

     function updateProfile() {
          Axios({
               method: "PUT",
               url: "/users/" + props.user.phoneNumber + "/",
               data: {
                 firstName: firstName,
                 surname: surname,
                 phoneNumber: props.user.phoneNumber,
                 age: age,
                 experience: experience,
                 location: location,
                 password: props.user.password,
               },
             }).then((response) => {
               console.log(response);
             });
          changeText("Your changes has been saved.")
     }

     const changeText = (textinput) => setText(textinput);

     var locationMap = {
          "Trondheim": "1",
          "Oslo": "2",
          "Stavanger": "3",
          "Bergen": "4"
     };

     var experienceMap = {
          "Easy": "1",
          "Mediocre": "2",
          "Veteran": "3",
     };


     function fir() {          
          if(firstName == "undefined") {
               setFirstName(props.user.firstName);
               return props.user.location;
          }
          else {
               return firstName;
          }
     }
     
     function sur() {          
          if(surname == "undefined") {
               setsurname(props.user.surname);
               return props.user.surname;
          }
          else {
               return surname;
          }
     }

     function ag() {          
          if(age == "undefined") {
               setAge(props.user.age);
               return props.user.age;
          }
          else {
               return age;
          }
     }

     function exp() {          
          if(experience == "") {
               setExperience(props.user.experience);
               return props.user.experience;
          }
          else {
               return experience;
          }
     }

     function loca() {          
          if(location == "") {
               setLocation(props.user.location);
               return props.user.location;
          }
          else {
               return location;
          }
     }

     if(props.user != null){
          if(props.canEdit) { //render fields and buttons so user can edit instead of plain text if canEdit is true.
               return(
                    <div>
                         <>
                         <TopNavbar />
                         <Navbar />
                         <div className="ProfilePage">
                              <Image className="ProfilePic" src={picture}>
                              </Image>
                              <h3><b>MyProfile</b></h3>
                              <div className="example-text-box">
                              <Form>
                              <Form.Group size="lg" controlId="firstName">
                              <Form.Control
                                   autoFocus
                                   type="firstName"
                                   placeholder={props.user.firstName}
                                   value={fir()}
                                   onChange={(n) => setFirstName(n.target.value)}
                              />
                              </Form.Group>
                              <Form.Group size="lg" controlId="surname">
                              <Form.Control
                                   type="surname"
                                   placeholder={props.user.surname}
                                   value={sur()}
                                   onChange={(n) => setsurname(n.target.value)}
                              />
                              </Form.Group>
                              <Form.Group size="lg" controlId="age">
                                   <Form.Control
                                   type="age"
                                   placeholder={props.user.age}
                                   value={ag()}
                                   onChange={(a) => setAge(a.target.value)}
                                   />
                              </Form.Group>
                              <Form.Group size="lg" controlId="experience">
                              <Form.Select aria-label="Default select example" value={exp()}
                              onChange={(e) => setExperience(e.target.value)}>
                              <option value="1">Easy</option>
                              <option value="2">Mediocre</option>
                              <option value="3">Veteran</option>
                              </Form.Select>
                              </Form.Group>
                              <Form.Group size="lg" controlId="location">
                              <Form.Select aria-label="Default select example" value={loca()}
                              onChange={(e) => setLocation(e.target.value)}>
                              <option value="1">Trondheim</option>
                              <option value="2">Oslo</option>
                              <option value="3">Stavanger</option>
                              <option value="4">Bergen</option>
                              </Form.Select>
                              </Form.Group>
                                   <Button
                                        type="button"
                                        className="editButton"
                                        onClick={validate()
                                             ? () => updateProfile()
                                             : () => changeText("Make sure all the changes are filled in correctly.")
                                        }
                                        >
                                        Save changes
                                   </Button>
                              </Form>
                              <p className="errormsg">{text}</p>
                              </div>
                         </div>
                         </>
                    </div>
               )
          }
          else {
               return(
                    <>
                    <TopNavbar />
                    <Navbar />
                    <div className="ProfilePage">
                         <Image className="ProfilePic" src={picture}>
                         </Image>
                         <h3><b>MyProfile</b></h3>
                         <div className="example-text-box">
                         <p>Firstname: {props.user.firstName}</p>
                         <p>Surname: {props.user.surname}</p>
                         <p>Age: {props.user.age}</p>
                         <p>Experience level: {props.user.experience}</p>
                         <p>Location: {props.user.location}</p>
                         <p>Phonenumber: {props.user.phoneNumber}</p>
                         <p>{props.user.isAdmin}</p>
                         </div>
                    </div>
                    </>
               )
          }

     }
     else if (props.commercialUser != null) {
          return(
               <>
               <TopNavbar />
               <Navbar />
               <div className="ProfilePage">
                    <Image className="ProfilePic" src={picture}>
                    </Image>
                    <h3>Commercial user</h3>
                    <div className="example-text-box">
                    <p>{props.commercialUser.orgName}</p>
                    <p>{props.commercialUser.orgNumber}</p>
                    <p>{locationMap[props.commercialUser.location]}</p>
                    </div>
               </div>
               </>
          )
     }
     else {
          return(<p>Loading..</p>);
     }
}