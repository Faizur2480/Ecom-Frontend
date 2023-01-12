import React from 'react'
import { useNavigate } from "react-router-dom";
import { useState} from 'react';
import "./Signup.css"
import swal from 'sweetalert';

import LoginService from '../Login/LoginService';
import { inputReqMsg,
  createdMsg,
  successIcon,
  warIcon ,
  okBtn ,
  responseStatus,
 
 } from '../../Utilis/SweetCommonMsg';

function Signup  () {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword]=useState("");


  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      const request = {
        firstName: firstName,
        lastName: lastName,
        phoneNumber:phoneNumber,
        email: email,
        password:password,
        confirmPassword: confirmPassword 
      };
      if (
        request.firstName ==="" ||
        request.lastName === "" ||
        request.phoneNumber === "" ||
        request.email === ""||
        request.password === ""||
        request.confirmPassword === "" 

      ) {
        swal({
          text: "fill all the details",
          title: inputReqMsg,
          icon: warIcon,
          button: okBtn,
        });
        return;
      }
      console.log(request);
      LoginService.addUser(request).then((data) => {
        console.log(data.data);

        if (data.status === 200) {
          swal({
            title: "User " + createdMsg,
            icon: successIcon,
            button: okBtn,
          });
        } else
          swal({
            title: inputReqMsg,
            text: responseStatus,
            icon: warIcon,
            button: okBtn,
          });
        navigate("/");
      });
    } catch {}
  };

  const navigate = useNavigate();
  return (
<div className='signupbody'>
<div className="container">
  <div className="title">Registration</div>
  <div className="content">
    <form action="#">
      <div className="user-details">
        <div className="input-box">
          <span className="details">First Name</span>
          <input type="text" placeholder="Enter first name" required="" 
          onChange={(event) => {setFirstName(event.target.value);}}/>
        </div>
        <div className="input-box">
          <span className="details">Last Name</span>
          <input type="text" placeholder="Enter last name" required="" 
          onChange={(event) => {setLastName(event.target.value);}}/>
        </div>
        <div className="input-box">
          <span className="details">Phone Number</span>
          <input type="text" placeholder="Enter your number" required=""
           onChange={(event) => setPhoneNumber(event.target.value)} />
        </div>
        <div className="input-box">
          <span className="details">Email</span>
          <input type="text" placeholder="Enter your email" required="" 
           onChange={(event) => setEmail(event.target.value)}/>
        </div>
        <div className="input-box">
          <span className="details">Password</span>
          <input type="password" placeholder="Enter your password" required="" 
           onChange={(event) => setPassword(event.target.value)}/>
        </div>
        <div className="input-box">
          <span className="details">Confirm Password</span>
          <input type="text" placeholder="Confirm your password" required=""
            onChange={(event) => setConfirmPassword(event.target.value)}/>
        </div>
      </div>
      <div >
        <button className="button" type="submit" Value="Register" onClick={handleSubmit}>Register</button>
        <button className="button" type="reset" value ="Cancel"  onClick={() => navigate("/")}>Cancel</button>
      </div>
    </form>
  </div>
</div>
</div>
  );
}

export default Signup;
