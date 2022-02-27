import React from "react";
import "./TopNavbar.css";
import TextField from "@mui/material/TextField";



export default function TopNavbar(props) {
    return (
        <nav className="top-navbar">
            <div className="search">
                <TextField
                id="outlined-basic"
                variant="outlined"
                fullWidth
                label="Search"
                />
            </div>
            <li className="stili-topnav">Stili.</li> 
        </nav>
    );
  }
  