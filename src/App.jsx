import { createContext, useState } from 'react'
import Navbar from './components/Navbar/Navbar'


export const CountContext = createContext();

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
        <CountContext.Provider value={count}>
            <Navbar />
            <button onClick={() => setCount(count + 1)}> App Count: {count} </button>
        </CountContext.Provider>
    </div>
  )
}

export default App