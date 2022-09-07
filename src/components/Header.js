import React from 'react'
import Button from './Button'
import {useNavigate} from 'react-router-dom'

function Header(props) {

  const navigate = useNavigate();

  return (
    <div>
        Think360 React JS Assignment
        {props.token?
        <>
          <Button action={()=>props.setToken()} buttonText={"Logout"} />
        </>:
        <>
          <Button action={()=>navigate('/login')} buttonText={"Login"} />
        </>
        }
    </div>
  )
}

export default Header;