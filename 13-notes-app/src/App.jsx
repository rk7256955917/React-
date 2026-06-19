import React from 'react'

const App = () => {
const submitHandler=(e)=>{
  e.preventDefault()
  console.log('From submited')
}
  return (
    <div className='h-screen bg-black text-white'>
      <h1 className='px-7 '>Add Notes</h1>
      <form onSubmit={(e)=>{
        submitHandler(e);
      }} className='flex justify-between items-starts p-10'>
        <div classNa
        <input className='w-80 px-5 py-2 border-2 rounded' type="text" placeholder='Enter Notes Heading'/>
       <input className=' w-80 px-5 h-20 py-2 border-2 rounded' type="text" placeholder='Write Details'/>
        <button className='h-full border-2 rounded text-black bg-white w-80'>Add Note</button>
        <div className='h-full flex space-between '>
        <div className=' flex h-screen w-80 h-10 border-2 bg-white '></div>
        </div>
      </form>
    </div>
  )
}

export default App
