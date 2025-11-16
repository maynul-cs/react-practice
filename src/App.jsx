import { useReducer } from 'react'

const App = () => {
  const initialValue = 10;

  const reducer = (state, action) => {
    if(action === 'plus'){
      return state + 1;
    }
    else if(action === 'minus'){
      return state - 1;
    }
    else{
      return state;
    }
  }

  const [count, dispatch] = useReducer(reducer, initialValue);


  return (
    <div> 
        <h1> {count} </h1>
        <button onClick={() => dispatch('plus')}> Increment </button>
         <hr />
         <button onClick={() => dispatch('minus')}> Decrement </button>
    </div>
  )
} 

export default App;