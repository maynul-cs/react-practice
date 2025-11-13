import React, { useContext } from 'react'
import InsideNav from '../InsideNav/InsideNav'
import { Context1 } from '../../Contexts/Contexts'

const Navbar = () => {
  const [a, setA] = useContext(Context1);

  return (
    <div>
        <InsideNav />
        <button> Count-1: {a} </button>
    </div>
  )
}

export default Navbar