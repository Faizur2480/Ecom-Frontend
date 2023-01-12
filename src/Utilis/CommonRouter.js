import React from "react";
import { Navbar } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../Components/Dashboard/Dashboard";
import Login from "../Components/Login/Login";
import Signup from "../Components/Signup/Signup";

export default function CommonRouter() {
  return (
    <div>
      <Navbar/>
      <Routes>
          <Route path="/" match element={<Login/>}></Route>
        <Route path="/signup" match element={<Signup />}></Route>
        <Route path="/dashboard" match element={<Dashboard />}></Route>
      </Routes>
    </div>
  );
}
