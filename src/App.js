import logo from './logo.svg';
import './App.css';
import Main from './Component/Main'
import LifeCycleComponent from './Component/LifeCycleComponent'
import Card from './Component/Card'
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Navbar from './Component/Navbar'
import Routess from './Routes/Route';


function App() {
 
  
  return (
    <>
    <Navbar/>
    <Routess/>
    
    </>
  );
}

export default App;

// q1 how to share data amoung sibling compoenents
