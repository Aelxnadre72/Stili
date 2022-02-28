import React from "react";
import Image from 'react-bootstrap/Image';
import picture from "../../src/PicPlaceholder.png";
import Navbar from "./Navbar";
import TopNavbar from "./TopNavbar";

export default function ProfileInfo(props) {

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
                              <h3>Textbox example <b>with editing rights</b></h3>
                              <div className="example-text-box">
                              <p>{props.user.firstName}</p>
                              <p>{props.user.surname}</p>
                              <p>{props.user.age}</p>
                              <p>{props.user.experience}</p>
                              <p>{props.user.location}</p>
                              <p>{props.user.password}</p>
                              <p>{props.user.phoneNumber}</p>
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
                         <h3>Textbox example <b>without editing rights</b></h3>
                         <div className="example-text-box">
                         <p>{props.user.firstName}</p>
                         <p>{props.user.surname}</p>
                         <p>{props.user.age}</p>
                         <p>{props.user.experience}</p>
                         <p>{props.user.location}</p>
                         <p>{props.user.password}</p>
                         <p>{props.user.phoneNumber}</p>
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