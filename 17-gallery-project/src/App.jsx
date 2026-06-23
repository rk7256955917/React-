import React, { useState } from 'react';
import axios from 'axios';

const App = () => {

const [userData, setUserData] = useState([]);

const getData= async()=>{
const response= await axios.get('https://picsum.photos/v2/list?page=2&limit=30');
setUserData(response.data)
console.log(response.data);
}

let printUserData ='No user avilable'

if(userData.length>0){
  printUserData = userData.map(function(elem,idx){
  
    return <div>
     <div className='h-40 w-40 bg-white rounded-xl'>
      <img className='h-full object-cover' src={elem.download_url} alt=""/>
    <h2>{elem.author}</h2>
    </div>
   </div>

  })
}

  return (
    <div className='bg-black overflow-auto h-screen  p-4 text-white'>
    <button 
    onClick={getData}
    className='bg-green-600 active:scale-95 mb-3 px-5 py-2 rounded text-white'>  Get data</button>
    <div className='flex flex-wrap gap-4'>
      {printUserData}
    </div>
    </div>
  )
}

export default App
