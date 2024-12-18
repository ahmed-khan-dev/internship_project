import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import z1000 from"././../public/z1000.jpeg"
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashb from "./component/dashb";
import Login from "./component/login";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
  
    <Routes>
      <Route  path="/" element={<Login/>} ></Route>
      <Route path="/dashboard" element={<Dashb/>} ></Route>
      <Route ></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;