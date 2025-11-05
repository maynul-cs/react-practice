import React from 'react'

const Product = ({product, addToCartData}) => {
   const {phone, firstName, dob} = product;

   

  return (
    <div className='border-2 border-red-800 py-8 text-center'>
        <h1 className='text-2xl'> {firstName} </h1> 
        <h3> {phone} </h3> 
        <h3> {dob} </h3> 
        <button onClick={() => addToCartData(product)} className='bg-green-800 py-2 px-4 mt-4'> Add to Cart </button>
    </div>
  )
}

export default Product