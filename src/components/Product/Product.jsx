import React from 'react'

const Product = ({product}) => {
   const {phone, firstName, dob} = product;

  return (
    <div style={{border: '2px solid blue', margin: '20px', padding: '20px'}}>
        <h1 className='text-3xl text-blue-600'> {firstName} </h1> 
        <h3> {phone} </h3> 
        <h3> {dob} </h3> 
        <button> Add to Cart </button>
    </div>
  )
}

export default Product