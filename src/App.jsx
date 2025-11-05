import React, { useState } from 'react'
import Products from './components/Products/Products'
import './App.css'
import Placement from './components/Placement/Placement';

const App = () => {

  const [cart, setCart] = useState([]);

   const addToCartData = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
       
   }

  return (
    <div className='flex gap-x-6'>
      <Products addToCartData = {addToCartData} />
      <Placement cart = {cart} />
    </div>
  )
}

export default App