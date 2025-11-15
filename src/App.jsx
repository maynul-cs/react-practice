import React, { useMemo, useState } from 'react'

const App = () => {
  const [plus, setPlus] = useState(0);
  const [minus, setMinus] = useState(20);

  const handlePlus = () => {
    setPlus(plus + 1);
  };

  const handleMinus = () => {
    setMinus(minus - 1);
  };

  const checking = useMemo(() => {
    console.log('Checking...');
    for (let i = 0; i < 100000000; i++) {
    } //
    return plus % 2 === 0;
  }, [plus]);


  return (
    <div> 
          <h3> Checking: {checking ? 'Even' : 'Odd'} </h3>
         <button onClick={handlePlus}> Plus: {plus} </button>
         <button onClick={handleMinus}> Minus: {minus} </button>
    </div>
  )
} 

export default App;