import {BrowserRouter, Routes, Route} from "react-router-dom"
import { useState } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Summary from "./pages/Summary";
import Form1 from "./pages/Form1";
import Form2 from "./pages/Form2";
import Form3 from "./pages/Form3";

function App() {

  const [user, setUser] = useState();
  const [details, setDetails] = useState({
    personalDetails:{
      firstname: {name: 'First Name', type: 'text', value: ''},
      lastname: {name: 'Last Name', type: 'text', value: ''},
      phoneno: {name: 'Phone No', type: 'number', value: ''},
      email: {name: 'Email', type: 'email', value: ''}
    },
    govDetails:{
      aadhar: {name: 'Aadhar', type: 'number', value: ''},
      pan: {name: 'Pan', type: 'text', value: ''}
    },
    address:{
      residence: {name: 'Residence', type: 'text', value: ''},
      city: {name: 'City', type: 'text', value: ''},
      pincode: {name: 'Pincode', type: 'number', value: ''},
      state: {name: 'State', type: 'text', value: ''}
    }
  });
  

  return (
    <BrowserRouter>
      <Header user={user} setUser={setUser}/>
      {!user &&
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login user={user} setUser={setUser}/>} />
      </Routes>
      }

      {user && 
      <Routes>
        <Route path="/home" element={<Home user={user} details={details}/>} />
        <Route path="/form1" element={<Form1 details={details} setDetails={setDetails} />} />
        <Route path="/form2" element={<Form2 details={details} setDetails={setDetails} />} />
        <Route path="/form3" element={<Form3 details={details} setDetails={setDetails} />} />
        <Route path="/summary" element={<Summary details={details} setDetails={setDetails}/>} />
      </Routes>
      }
    </BrowserRouter>
  );
}

export default App;
