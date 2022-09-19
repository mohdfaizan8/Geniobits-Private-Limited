import React from 'react';
import Sidebar from './Components/Sidebar';
import {Routes, Route } from "react-router-dom";
import Header from './Components/Header';
import FirstPage from './Components/FirstPage';
import Personal from './Components/Personal';
import Contact from './Components/Contact';
import Job from "./Components/Job"
const App = () => {
  return (
    <>

     {/* In website click on add employee to visite other pages like personal details and after that click on option like contact for contact page and job to visit job page */}
    <div>
    <Header/>
    <Sidebar/>
    <Routes>
    <Route path="/" element={<FirstPage/>}/>
    <Route path="/personal" element={<Personal/>}/>
    <Route path="/contact" element={<Contact/>}/> 
    <Route path="/job" element={<Job/>}/>
    </Routes>

    </div>
    
   
    </>
  )
}

export default App;