import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../Components/Login/Login";
import Signup from "../Components/Login/Signup";

export default function CommonRouter() {
  return (
    <div>
        <Routes>
          <Route
            path="/"
            match
            element={<Login />}
          ></Route>
          <Route
            path="/signup"
            match
            element={<Signup />}
          ></Route>
        </Routes>
      </div>
  );
}
