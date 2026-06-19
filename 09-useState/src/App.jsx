import React,{useState} from 'react'

const App = () => {
  
const [num, setNum] = useState(0);

function increaseNum(){
  setNum(num+1);
}
function DecreaseNum(){
  setNum(num-1);
}
function jump5Num(){
  setNum(num+5);
}
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increaseNum}>increase</button>
      <button onClick={DecreaseNum}>Decrease</button>
      <button onClick={jump5Num}>jump by 5</button>
    </div>
  )
}

export default App