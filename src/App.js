import logo from './logo.svg';
import './App.css';
import Child from './components/Child';
import { useState } from 'react';

function App() {

  const [ name, setName ] = useState("Ranjana");



  return (
   
   <>
   <Child changeName={name => setName(name)} />
   <h2> change name to {name}</h2>

   </>
  );
}

export default App;
