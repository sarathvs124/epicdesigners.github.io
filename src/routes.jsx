import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Project from "./Pages/Project/Project"
import Home from './Pages/Home/Home';
const Routess = () => {
  return (
    <BrowserRouter>
    <Routes>
      
    <Route  path="/" element={<Home /> } />
          <Route path="project" element={<Project />} />
      
    </Routes>
    </BrowserRouter>
  )
}

export default Routess