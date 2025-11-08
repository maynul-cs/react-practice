import React from 'react'

const Product = ({product}) => {

    const {id, title, body} = product;

  return (
    <div className='border-2 border-red-500 px-4 py-3 rounded-md mt-5 mx-5'>
        <h2 className='text-3xl font-bold'> {id} . {title} </h2>
        <p> {body} </p>
    </div>
  )
}

export default Product