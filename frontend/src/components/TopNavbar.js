<<<<<<< HEAD
import React from "react";
import TextField from "@mui/material/TextField";
=======
import {React, useState} from "react";
>>>>>>> 6ec4dc78f85f8510e78d29131f91a86c36116af2
import "./TopNavbar.css";
import TextField from "@mui/material/TextField";



export default function TopNavbar(props) {
    return (
        <nav className="top-navbar">
            <div className="search">
<<<<<<< HEAD
                <TextField 
                id="outlined-basic"
                onChange={props.inputHandler}
                variant="outlined"
                fullWidth
                label="Søk"
=======
                <TextField
                id="outlined-basic"
                variant="outlined"
                fullWidth
                label="Search"
>>>>>>> 6ec4dc78f85f8510e78d29131f91a86c36116af2
                />
            </div>
            <li className="stili-topnav">Stili.</li> 
        </nav>
    );
  }
  