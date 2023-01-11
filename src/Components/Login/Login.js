import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../Login/Login.css"
import swal from 'sweetalert';
import {
  okBtn,
  responseStatus,
  validUser,
  errorIcon
} from "../../Utilis/SweetCommonMsg";

import LoginService from "./LoginService";

function Login  () {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    if (email === "admin" && password === "admin") {
      sessionStorage.setItem("userName", "Admin");
      sessionStorage.setItem("loggedIn", true);
      window.location.href = "/dashboard";
    }
    event.preventDefault();
    try {
      const request = {
        email: email,
        password: password,
      };
      
      console.log(request);
      LoginService.login(request).then((data) => {
        console.log(data.data);
        sessionStorage.setItem("userName", data.data.firstName+" "+ data.data.lastName);
        sessionStorage.setItem("firstName", data.data.firstName);
        sessionStorage.setItem("lastName", data.data.lastName);
        sessionStorage.setItem("email", data.data.email);
  
        if (data.data.status === 0) {
          // alert("Login Successful");
          console.log(sessionStorage.getItem('email'));
          window.location.href = "/dashboard";
        } else {
        // alert(data.data.message);
        //  window.location.href="/"
          swal({
            title: validUser,
            text: responseStatus,
            icon: errorIcon,
            button: okBtn,
          });
        }
      });
    } catch {}
  };

  const navigate = useNavigate();
  return (
    <div className="container">
    <div className="logintitle">LOGIN</div>
    <div className="content">
      <form action="#">
        <div className="login-details">
          <div className="input-box">
            <span className="logindetails">Username</span>
            <input type="text" placeholder="Enter Username" required="" 
            id="inputEmail" name="email"
            onChange={(event) => {setEmail(event.target.value);
            }}/>
          </div>
          <div className="input-box">
            <span className="logindetails">Password</span>
            <input type="password" placeholder="Enter your password" required=""
             id="inputPassword" name="password"  
             onChange={(event) => {setPassword(event.target.value);
            }}/>
          </div>
        </div>
        <div >
          <button className="buttons" type="submit" Value="login" onClick={handleSubmit}>Sign In</button>
          <button className="buttons" type="reset" value ="register" onClick={() => navigate("/signup")}>Sign Up</button>
        </div>
      </form>
    </div>
  </div>

  );
}

export default Login;
