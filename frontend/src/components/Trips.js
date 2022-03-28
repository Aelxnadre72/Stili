import React from "react";
import "../App.css";
import Navbar from "./Navbar";
import Cards from "./Cards";
import TopNavbar from "./TopNavbar";
import "./pages/Home.css";

export default function Trips() {
  return (
    <div>
      <TopNavbar/>
      <Navbar fade="fade-in" duration="1000" offset="200" />
      <Cards userID = {localStorage.getItem("id")}/>
    </div>
  );
}
