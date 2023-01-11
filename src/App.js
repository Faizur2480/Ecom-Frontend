import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import CommonRouter from "./Utilis/CommonRouter";
import Dashboard from "./Components/Dashboard/Dashboard";
function App() {
  return (
    <div>
      <Router>
        {window.location.pathname === "/" ? (
          <Routes>
            <Route path="/" match element={<Login />}></Route>
            <Route path="/signup" match element={<Signup/>}></Route>
            <Route path="/dashboard" match element={<Dashboard/>}></Route>
          </Routes>
        ) : (
       <CommonRouter />
        )}
      </Router>
    </div>
  );
}

export default App;
