import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0)
   const addValue = ()=>{
      setCount( count +1)
   }
   const removeValue = ()=>{
    if(count == 0){
      
    }
    else{
      setCount(count -1)
    }
   }

  return (
    <>
   <h1>counter project hai! {count}</h1>
     {count} <br />
   <button onClick={addValue}>Add : {count}

   </button >
   <br />
   <button onClick={removeValue}>Remove : {count}

   </button>
   <footer>Footer : {count}</footer>
    </>
  )
}

export default App
