import React from 'react'
import { useLoaderData } from 'react-router'

const MoreInfo = () => {

    const moreInfo = useLoaderData();
    const {id, title, body} = moreInfo;

  return (
    <div className='m-10 p-5 bg-amber-100 border-2 border-green-500 rounded-md'>
        <h2 className='text-4xl font-bold'> {id} . {title} </h2>
        <p className='text-2xl mt-5'> {body} </p>
    </div>
  )
}

export default MoreInfo