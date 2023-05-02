import { useState } from 'react';
import './App.css';
import Bar from './Component/Bar';
import Range from './Component/Range';
import Tourlist from './Component/Tourlist';


function App() {
  const[price, setPrice]=useState(0)
  console.log (price)
  return (
    <div className="App">
    <Bar/>
    
      <Range setPrice={setPrice} price={price}/>
      
    <Tourlist price={price}/>
      
    </div>
  );
}

export default App;
