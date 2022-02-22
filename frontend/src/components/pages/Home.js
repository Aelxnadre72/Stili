import React from "react";
import "../../App.css";
import Navbar from "../Navbar";
import Cards from "../Cards";

export default function Home() {
  return (
    <div>
      <Navbar fade="fade-in" duration="1000" offset="200" />
      <Cards />
    </div>
  );
}
