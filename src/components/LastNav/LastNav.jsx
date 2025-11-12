import React, { useContext } from 'react'
import { CountContext } from '../../App'


const LastNav = () => {
    const countState = useContext(CountContext);

  return (
    <div>
        <button> LastNav Count: {countState} </button>
    </div>
  )
}

export default LastNav