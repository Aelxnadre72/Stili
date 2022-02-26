import React from "react";
import TextField from "@mui/material/TextField";
import "./TopNavbar.css";



export default function TopNavbar(props) {
    return (
        <nav className="top-navbar">
            <div className="search">
                <TextField 
                id="outlined-basic"
                onChange={props.inputHandler}
                variant="outlined"
                fullWidth
                label="Søk"
                />
            </div>
            <li className="stili-topnav">Stili.</li> 
        </nav>
    );
  }
  