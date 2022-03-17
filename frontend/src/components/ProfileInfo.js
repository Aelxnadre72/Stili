import React from "react";
import Image from 'react-bootstrap/Image';
import picture from "../../src/PicPlaceholder.png";
import Navbar from "./Navbar";
import TopNavbar from "./TopNavbar";
import "./ProfileInfo.css";
import location from './location-icon.png';
import phone from './phone.png';
import experience from './experience.png';
import age from './age.png';

export default function ProfileInfo(props) {

     if(props.user != null){
          if(props.canEdit) { //render fields and buttons so user can edit instead of plain text if canEdit is true.
               return(
                    <div>
                         <>
                         <TopNavbar />
                         <Navbar />
                         <div className="about">
                              <h1>{props.user.firstName} {props.user.surname}</h1>

                              <div class="flex-container">
                                   <div>
                                        <img src={location} alt="Location" class="location"></img>
                                        <p>Location:</p>
                                        <br></br>
                                        {props.user.location}
                                   </div>
                                   <div>
                                        <img src={phone} alt="Phone" class="phone"></img>
                                        <p>Phone:</p>
                                        <br></br>
                                        <p>{props.user.phoneNumber}</p>
                                   </div>
                                   <div>
                                        <img src={experience} alt="Experience" class="experience"></img>
                                        Experience:
                                        <br></br>
                                        {props.user.experience}
                                   </div>
                                   <div>
                                        <img src={age} alt="Age" class="age"></img>
                                        Age:
                                        <br></br>
                                        {props.user.age}
                                   </div> 
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
                         <h3>Textbox example <b>without editing rights</b></h3>
                         <div className="example-text-box">
                         <p>{props.user.firstName}</p>
                         <p>{props.user.surname}</p>
                         <p>{props.user.age}</p>
                         <p>{props.user.experience}</p>
                         <p>{props.user.location}</p>
                         <p>{props.user.phoneNumber}</p>
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
                    <h3>Textbox example <b>without editing rights</b></h3>
                    <div className="example-text-box">
                    <p>{props.commercialUser.orgName}</p>
                    <p>{props.commercialUser.orgNumber}</p>
                    <p>{props.commercialUser.location}</p>
                    </div>
               </div>
               </>
          )
     }
     else {
          return(<p>Loading..</p>);
     }

}