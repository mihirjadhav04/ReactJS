import React, { useState, useEffect } from "react";
import Button from "../components/Button";
import {useNavigate} from 'react-router-dom'
import "../App.css";

function Login({setUser}) {

  const [user, saveUser] = useState({username: '', password: ''})
  let inputs = [];

  const navigate = useNavigate();

  for(let key in user){
    inputs.push(
      <>
        {/* <label>{key}: </label> */}
        <input type="text" className="inputField" value={user[key]} 
        name={key} placeholder={key} 
        onChange={(e)=>saveUser({...user, [key]: e.target.value})} 
        required = "true"
        />
        <br/>
      </>
    )
    
  }

  const loginForm = (e) => {
    e.preventDefault();
    if(user['username'] =="think360" && user['password'] == 123456){
      setUser(user);
      navigate('/home');
    }
    else{
      alert("Invalid Credentials");
    }
  }

  return (
    <div>
      <form className="msform">
        <h3 className="fs-title">Login Form</h3>
        {inputs}
        <Button action={loginForm} buttonText={"Login"} />
      </form>
    </div>
  );
}

export default Login;
