import React, { useState, useEffect } from "react";
import Axios from 'axios';
import { useNavigate, useLocation } from "react-router-dom";
import ProfileInfo from "./ProfileInfo";
import "./Profile.css";

export default function Profile(){
  const [user, setUser] = useState(null);
  let navigate = useNavigate();
  let loc = useLocation()
  const [canEdit, setCanEdit] = useState(false);

    useEffect(() => {
        if (localStorage.getItem("id") == null || loc.state === null) { // can not see profiles if not logged in or from link
            navigate('/Home');
            }
            const profileID = loc.state; // the <link> from the previous page has to send the phonenumber to this page, sends 1 if it is the "my profile" link in Navbar.js
            var profileNumber = "";
            if (profileID === "1") {
                profileNumber = localStorage.getItem("id");
                setCanEdit(true);
            }
            else {
                profileNumber = profileID;
            }
            fetchUserData(profileNumber);
    }, []);

    const  fetchUserData = (profileNumber) => {
        getUser().then(response => {
            setUser(response.find(o => o.phoneNumber === profileNumber));
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
        <ProfileInfo canEdit = {canEdit} user = {user}/>
    );
}