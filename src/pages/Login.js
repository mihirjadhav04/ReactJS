import React, { useState, useEffect } from "react";
import Button from "../components/Button";
import {useNavigate} from 'react-router-dom'

function Login({setToken}) {

  const [user, setUser] = useState({username: '', password: ''})
  let inputs = [];

  const navigate = useNavigate();

  for(let key in user){
    inputs.push(
      <>
        <label>{key}: </label>
        <input type="text" value={user[key]} 
        name={key} placeholder={key} 
        onChange={(e)=>setUser({...user, [key]: e.target.value})} 
        />
        <br/>
      </>
    )
    
  }

  const loginForm = (e) => {
    e.preventDefault();
    if(user['username'] =="think360" && user['password'] == 123456){
      setToken(user);
      navigate('/')
    }
    else{
      alert("Invalid Credentials");
    }
  }

  return (
    <div>
      Login Form
      <form>
        {inputs}
        <Button action={loginForm} buttonText={"Login"} />
      </form>
    </div>
  );
}

export default Login;
