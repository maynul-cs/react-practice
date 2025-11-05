import React from 'react'
import SingleCartData from '../SingleCartData/SingleCartData';

const Placement = ({cart}) => {
        
    return (
    <div>
        <h1 className='text-3xl'>Add To Cart: {cart.length} </h1>
        {
          cart.map(singleData =>             <SingleCartData 
            key={singleData.id}
            singleData={singleData}
          ></SingleCartData>)  
        }
        
    </div>
  )
}

export default Placement