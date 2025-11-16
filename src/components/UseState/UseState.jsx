import React, { useState } from 'react'

const UseState = () => {
  const [count, setCount] = useState(30);

  return (
    <div>
        <h1> {count} </h1>
        <button onClick={() => setCount(count + 1)}> Increment </button>
         <hr />
         <button onClick={() => setCount(count - 1)}> Decrement </button>
    </div>
  )
}

export default UseState