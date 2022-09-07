import {BrowserRouter, Routes, Route} from "react-router-dom"
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Summary from "./pages/Summary";

function App() {

  const [token, setToken] = useState();

  return (
    <BrowserRouter>
      <Header token={token} setToken={setToken}/>
      {!token &&
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login setToken={setToken}/>} />
      </Routes>
      }

      {token && 
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/summary" element={<Summary/>} />
      </Routes>
      }
    </BrowserRouter>
  );
}

export default App;
