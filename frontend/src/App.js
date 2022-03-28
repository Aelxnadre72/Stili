import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/pages/Home";
import Profile from "./components/Profile";
import CommercialRegister from "./components/CommercialRegister";
import CommercialLogin from "./components/CommercialLogin";
<<<<<<< HEAD
import ContactUs from './components/ContactUs';
=======
import Trips from "./components/Trips";
>>>>>>> d68a2b91f3243f195045db6967605ccde8ffb169

export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/commercialRegister" element={<CommercialRegister/>} />
          <Route path="/commercialogin" element={<CommercialLogin/>} />
<<<<<<< HEAD
          <Route path="/contact" element={<ContactUs/>} />
=======
          <Route path="/trips" element={<Trips/>} />
>>>>>>> d68a2b91f3243f195045db6967605ccde8ffb169
        </Routes>
      </Router>
    </div>
  );
}
