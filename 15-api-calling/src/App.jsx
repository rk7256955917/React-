import axios from 'axios'
import { useState } from 'react'
const App = () => {

const [data, setData] = useState([])

const getData= async () =>{
const response= await axios.get("https://jsonplaceholder.typicode.com/users")
setData(response.data);


 
}
  return (
    <div>
      <button onClick={getData}>Get Data</button>
      <div>
        {data.map(function(elem,idx){
            return <h1>rohit,{elem.author}{idx}</h1>
        })}
      </div>
    </div>
  )
}

export default App

