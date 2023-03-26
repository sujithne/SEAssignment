import NavBar from './NavBar'
import DescriptionDisplay from './edit'
import Add from "./add"
import Home from "./home"
import Inventory from './inventory'

import AddItem from './addItem'
import Api from './api'
import Update from './update'
import "./styles.css"
import "./add.css"


import React, { useEffect, useState } from 'react'


function App() {

  let component;

  console.log(window.location.pathname);

  switch (window.location.pathname) {
    case "/":
      component = <Home />;
      break
    case "/add":
      component = <Add />;
      break
    case "/inventory":
      component = <Inventory />;
      break
    
    case "/api":
      component = <Api />;
      break
    case "/addItem":
      component = <AddItem />;
      break
    case "/inventorys/:id":
      component = <Update />
      break

  }
  return (
    <div>

      <><NavBar />
        {component}
      </>


    </div>
  )
}


export default App