import React, { useContext } from 'react'
import { Context1 } from '../../Contexts/Contexts'

const LastNav = () => {
    const [a, setA] = useContext(Context1);

  return (

    <div>
        <button> Count-3: {a} </button>
    </div>
  )
}

export default LastNav