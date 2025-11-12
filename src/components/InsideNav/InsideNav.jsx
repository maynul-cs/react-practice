import React, { useContext } from 'react'
import LastNav from '../LastNav/LastNav'
import { CountContext } from '../../App'

const InsideNav = () => {
    const countState = useContext(CountContext);

  return (
    <div>
        <LastNav />
        <button> InsideNav Count: {countState} </button>
    </div>
  )
}

export default InsideNav