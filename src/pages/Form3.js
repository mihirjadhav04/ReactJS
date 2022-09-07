import React, { useState, useEffect } from "react";
import Button from "../components/Button.js";
import {useNavigate} from 'react-router-dom'

function Form3({details, setDetails}) {

  const [temporaryDetails, setTemp] = useState(details['address']);
  let inputs = [];

  const navigate = useNavigate();

  for(let key in temporaryDetails){
    inputs.push(
      <>
        <label>{temporaryDetails[key]['name']}: </label>
        <input type={temporaryDetails[key]['type']} value={temporaryDetails[key]['value']} 
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
    navigate('/form2');
  }

  const next = (e) => {
    e.preventDefault();
    setDetails({...details, address: temporaryDetails})
    navigate('/summary');
  }

  return (
    <div>
      <h3>Step 3 out of 3</h3>
      <form onSubmit={next}>
        {inputs}
        
        <Button action={back} buttonText={"Back"} />
        <Button type={"submit"} buttonText={"Next"} />
      </form>
    </div>
  );
}

export default Form3;
