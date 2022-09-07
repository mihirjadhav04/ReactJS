import {BrowserRouter, Routes, Route} from "react-router-dom"
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Summary from "./pages/Summary";

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/summary" element={<Summary/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
