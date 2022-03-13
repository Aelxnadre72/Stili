import React, { useState, useEffect } from "react";
import Axios from 'axios';
import { useNavigate, useLocation } from "react-router-dom";
import ProfileInfo from "./ProfileInfo";

export default function Profile(){
  const [user, setUser] = useState(null);
  const [commercialUser, setCommercialUser] = useState(null);
  let navigate = useNavigate();
  let loc = useLocation()
  const [canEdit, setCanEdit] = useState(false);

    useEffect(() => {
        if (localStorage.getItem("id") == null || loc.state === null) { // can not see profiles if not logged in or from link
            navigate('/Home');
            }
            if (localStorage.getItem("id").length == 9) {
              const profileNumber = localStorage.getItem("id");
              fetchCommericalData(profileNumber);

            } else {
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
            }
    }, []);

    const  fetchUserData = (profileNumber) => {
        getUser().then(response => {
            setUser(response.find(o => o.phoneNumber === profileNumber));
        });
    }

    const  fetchCommericalData = (profileNumber) => {
      getCommercialUser().then(response => {
        setCommercialUser(response.find(o => o.orgNumber === profileNumber));
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

      async function getCommercialUser() {
        try {
        const response = await Axios({
          method: "GET",
          url:"/commercialUsers/",
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
        <ProfileInfo canEdit = {canEdit} user = {user} commercialUser = {commercialUser}/>
    );
}