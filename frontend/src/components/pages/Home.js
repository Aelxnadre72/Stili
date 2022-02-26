import React, { useState } from "react";
import "../../App.css";
import Navbar from "../Navbar";
import Cards from "../Cards";
import TopNavbar from "../TopNavbar";

export default function Home() {
  const [input, setInput] = useState("");
  const inputHandler = (e) => {
      var lowerCase = e.target.value.toLowerCase();
      setInput(lowerCase);
  }

  return (
    <div>
      <TopNavbar inputHandler={inputHandler}/>
      <Navbar fade="fade-in" duration="1000" offset="200" />
      <Cards/>
    </div>
  );
}
