import React from "react";
import "../../App.css";
import Navbar from "../Navbar";

export default function Home() {
  return (
    <div>
      <Navbar fade="fade-in" duration="1000" offset="200" />
      <Cards />
    </div>
  );
}
