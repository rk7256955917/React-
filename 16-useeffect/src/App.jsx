import React, { useEffect } from 'react'
import {useState} from'react'
const App = () => {

const [a, setA] = useState(10);
const [b,setB] = useState(20);

function aChanging(){
    console.log('a ki value change ho gyi');
}

function bChanging(){
    console.log('b is value change ho gayi');
}

useEffect(function(){
    aChanging()
},[a])

useEffect(function(){
  bChanging()
},[b])

  return (
    <div>
      <h1> A is {a}</h1>
      <h1>B is {b}</h1>
      <button onClick={()=>{
        setA(a+5);
      }}> click A</button>
      <button onClick={()=>{
        setB(b-4);
      }}>click B</button>
    </div>
  )
}

export default App
