import { useCallback, useState } from 'react'
import AnotherOne from './components/AnotherOne/AnotherOne';

const App = () => {
  const [increase, setIncrease] = useState(0);
  const [decrease, setDecrease] = useState(20);

  const nextOne = useCallback(() => {
    //console.log('Hello App');
  }, []);

  // const nextOne = () => {
  //   //console.log('Hello App');
  // }

 

  return (
    <div> 
        <AnotherOne nextOne={nextOne} />
         <button onClick={() => setIncrease(increase + 1)}> Increase: {increase} </button>
         <hr />
         <button onClick={() => setDecrease(decrease - 1)}> Decrease: {decrease} </button>
    </div>
  )
} 

export default App;