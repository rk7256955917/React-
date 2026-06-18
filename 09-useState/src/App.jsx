import React,{useState} from 'react'

const App = () => {

  const [num, setNum] = useState(10)
  const [username,setUsername] = useState('Rohit')
  function changeNum(){
    setNum(20);
    setUsername('Raj');
  }
  return (
    <div>
      <h1>value of num is {num} <br/>value of user is {username}</h1>
      <button onClick={changeNum}>Click</button>
    </div>
  )
}

export default App
