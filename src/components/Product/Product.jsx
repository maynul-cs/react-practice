import React from 'react'
import { Link } from 'react-router-dom';

const Product = ({product}) => {

    const {id, title, body} = product;

  return (
    <div className='border-2 border-red-500 px-4 py-3 rounded-md mt-5 mx-5'>
        <h2 className='text-3xl font-bold'> {id} . {title} </h2>
        <p> {body} </p>
        <Link to={`/products/${id}`} >      
          <button className='bg-red-700 my-5 px-4'> MoreInfo </button>
        </Link>
    </div>
  )
}

export default Product