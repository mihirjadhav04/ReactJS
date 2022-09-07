import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

function Home({ user, details }) {
  const navigate = useNavigate();
  const [buttonText, setButtonText] = useState("");
  const [link, setLink] = useState("/summary");

  useEffect(()=>{
    if (details && details["address"]["residence"]["value"]) {
      setLink("/summary");
      setButtonText("Go To Summary");
    }
    else if (details && details["govDetails"]["aadhar"]["value"]) {
      setLink("/form3");
      setButtonText("Go To Step 3");
    }
    else if (details && details["personalDetails"]["email"]["value"]) {
      setLink("/form2");
      setButtonText("Go To Step 2");
    }
    else{
      setLink("/form1");
      setButtonText("Go To Step 1");
    }
  }, [])

  

  return (
    <>
      <div >Home</div>
      {user?
      <>
      <Button action={()=>{navigate(link)}} buttonText={buttonText} />
      </>
      :null}
    </>
  );
}

export default Home;
