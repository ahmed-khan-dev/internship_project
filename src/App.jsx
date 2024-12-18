import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import z1000 from"././../public/z1000.jpeg"
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex h-screen">
        <div className="bg-slate-400 w-1/2 flex  justify-center p-3 ">
          <img
            src={z1000}
            alt=""
            className="rounded-lg w-full h-full border-4 m-2 border-gray-300 shadow-lg "
          />
          
        </div>
        <div className="w-1/2 flex flex-col justify-center items-center p-10 text-2xl">
          <div className="text-4xl font-bold text- ">Welcome Login Here</div>
          <div className="mt-16 ">
            <div>Email</div>
            <div>
              <input
                className="h-14 bg-gradient-to-r from-sky-500 to-indigo-500 border-black text-black rounded-lg p-2 w-96"
                type="text"
              />
            </div>
          </div>
          <div className="mt-5 ">
            <div>Password</div>
            <div>
              <input
                className="h-14 bg-gradient-to-r from-sky-500 to-indigo-500 border-gray-950 text-black rounded-lg p-2 w-96   "
                type="password"
              />
            </div>
          </div>
          <div className="m-2 h-screen ">
            <button className="p-2 rounded-lg bg-slate-50 hover:bg-gradient-to-r from-violet-500 to-fuchsia-500 border-black  mt-4 w-36">
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;