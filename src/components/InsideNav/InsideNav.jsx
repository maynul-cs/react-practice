import React, { useContext } from 'react'
import LastNav from '../LastNav/LastNav'
import { Context1 } from '../../Contexts/Contexts'



const InsideNav = () => {
    const [a, setA] = useContext(Context1);

  return (
    <div>
        <LastNav />
        <button> Count-2: {a} </button>
    </div>
  )
}

export default InsideNav