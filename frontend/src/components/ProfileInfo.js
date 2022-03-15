import React, { useEffect, useState } from "react";
import { Link, useResolvedPath } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from 'react-bootstrap/Image';
import picture from "../../src/PicPlaceholder.png";
import Navbar from "./Navbar";
import TopNavbar from "./TopNavbar";
import Axios from "axios";
import "./ProfileInfo.css";

export default function ProfileInfo(props) {
     const [firstName, setFirstName] = useState("");
     const [surname, setsurname] = useState("");
     const [age, setAge] = useState("");
     const [experience, setExperience] = useState("");
     const [location, setLocation] = useState("");
     const [text, setText] = useState("");

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

     function validate() {
          return true;
        }

     function updateProfile() {
          var ww = "/api/users/" + props.user.phoneNumber;
          console.log(ww);
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
     }

     const changeText = (textinput) => setText(textinput);

     function exp() {
          if(experience == "") {
               return props.user.experience;
          }
          else {
               return experience;
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
                                   value={firstName}
                                   onChange={(n) => setFirstName(n.target.value)}
                              />
                              </Form.Group>
                              <Form.Group size="lg" controlId="surname">
                              <Form.Control
                                   autoFocus
                                   type="surname"
                                   placeholder={props.user.surname}
                                   value={surname}
                                   onChange={(n) => setsurname(n.target.value)}
                              />
                              </Form.Group>
                              <Form.Group size="lg" controlId="age">
                                   <Form.Control
                                   autoFocus
                                   type="age"
                                   placeholder={props.user.age}
                                   value={age}
                                   onChange={(a) => setAge(a.target.value)}
                                   />
                              </Form.Group>
                              <Form.Group size="lg" controlId="experience">
                              <Form.Select aria-label="Default select example" value={experienceMap[props.user.experience]}
                              onChange={(e) => setExperience(e.target.value)}>
                              <option value="1">Easy</option>
                              <option value="2">Mediocre</option>
                              <option value="3">Veteran</option>
                              </Form.Select>
                              </Form.Group>
                              <Form.Group size="lg" controlId="location">
                              <Form.Select aria-label="Default select example" value={locationMap[props.user.location]}
                              onChange={(e) => setLocation(e.target.value)}>
                              <option value="1">Trondheim</option>
                              <option value="2">Oslo</option>
                              <option value="3">Stavanger</option>
                              <option value="4">Bergen</option>
                              </Form.Select>
                              </Form.Group>
                              <p className="errormsg">{text}</p>
                              <Link to="/profile"
                                   state={"1"} // 1 for my own profile, otherwise a phone number from database connected to the profilepic that is clicked on
                                   >
                                   <Button
                                        type="button"
                                        className="EditButton"
                                        onClick={validate()
                                             ? () => updateProfile()
                                             : () => changeText("Make sure all the fields are filled in correctly.")
                                        }
                                        >
                                        Save changes
                                   </Button>
                              </Link>
                              </Form>
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
     else{
          return(<p>Loading..</p>);
     }
}