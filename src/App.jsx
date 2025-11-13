import Navbar from './components/Navbar/Navbar'
import { Context1Provider } from './Contexts/Contexts';

const App = () => {

  return (
    <div> 
        <Context1Provider>
            <Navbar />
        </Context1Provider> 
    </div>
  )
}

export default App;