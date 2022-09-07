import React from 'react'
import Button from './Button'
import {useNavigate} from 'react-router-dom'

function Header(props) {

  const navigate = useNavigate();

  const logout = () => {
    props.setUser();
    navigate('/')
  }

  return (
    <div>
        Think360 React JS Assignment
        {props.user?
        <>
          <Button action={logout} buttonText={"Logout"} />
        </>:
        <>
          <Button action={()=>navigate('/login')} buttonText={"Login"} />
        </>
        }
    </div>
  )
}

export default Header;