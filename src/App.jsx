import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "tailwindcss/tailwind.css";
import Landing from './Components/LandingPage';
import Login from './Components/Login';
import Signup from './Components/Signup';
import { Task } from './Components/Task';
import Navigation from './Components/Navigation';

function App() {
  

  return (
    <>
      <div className="font-Font1" >
        {/* <Navigation/> */}
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/login'm element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/task' element={<Task/>} />
        </Routes>
      </div>
    </>
  )
}

export default App
