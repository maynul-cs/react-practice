import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar';
import { Outlet } from 'react-router';



const App = () => {
  return (
    <div>    
      <Navbar />
      <Outlet/>
    </div>
  )
}

export default App