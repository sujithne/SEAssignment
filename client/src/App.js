import Home from "./home"
import Inventory from './inventory'
import Nav from './NavBar';
import { useLocation, BrowserRouter, Routes, Route } from "react-router-dom";
import Api from './api'
import "./styles.css"
import "./add.css"
import UserDashboard from './userdashboard'
import React, { useEffect, useState } from 'react'
import SignupPage from './signup'
import LoginPage from './login'
function App() {

  return (
    <div>
     <>
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" exact element = {<Home/>}/>
        <Route path="/inventory" exact element = {<Inventory/>}/>
        <Route path="/api" exact element = {<Api/>}/>
        <Route path="/login" exact element = {<LoginPage/>}/>
        <Route path="/signup" exact element = {<SignupPage/>}/>
        <Route path="/userdashboard" exact element = {<UserDashboard/>}/>
       
      </Routes>
    </BrowserRouter></>
    </div>
  )
}


export default App