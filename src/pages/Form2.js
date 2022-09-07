import React, { useState, useEffect } from "react";
import Button from "../components/Button.js";
import {useNavigate} from 'react-router-dom'

function Form2({details, setDetails}) {

  const [temporaryDetails, setTemp] = useState(details['govDetails']);
  let inputs = [];

  const navigate = useNavigate();

  for(let key in temporaryDetails){
    inputs.push(
      <>
        {/* <label>{temporaryDetails[key]['name']}: </label> */}
        <input className="inputField" type={temporaryDetails[key]['type']} value={temporaryDetails[key]['value']} 
        name={key['name']} placeholder={temporaryDetails[key]['name']} 
        onChange={(e)=>setTemp({...temporaryDetails, 
            [key]: 
            {name: temporaryDetails[key]['name'], 
            type:temporaryDetails[key]['type'],
            value:e.target.value}}
          )} 
        required = {true}
        />
        <br/>
      </>
    )
  }

  const back = (e) => {
    e.preventDefault();
    navigate('/form1');
  }

  const next = (e) => {
    e.preventDefault();
    setDetails({...details, govDetails: temporaryDetails})
    navigate('/form3');
  }

  return (
    <div>
      <form className="msform" onSubmit={next}>
      <h3 className="fs-title">Step 2 out of 3</h3>

        {inputs}
        
        <Button action={back} buttonText={"Back"} />
        <Button type={"submit"} buttonText={"Next"} />
      </form>
    </div>
  );
}

export default Form2;
