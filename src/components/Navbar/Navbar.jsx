import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <div className='bg-red-600 text-center text-white p-4 space-x-4'>
        
        <Link to="/home"> Home </Link>
        <Link to="/products"> Product </Link>
        <Link to="/blog"> Blog </Link>
        <Link to="/about"> About </Link>
        <Link to="/contact"> Contact Us </Link>
        
    </div>
  )
} 

export default Navbar