import React from 'react'
import Card from './component/Card'

const App = () => {
  return (
    <div className="parent">
  <Card user='Aman' age={18} img="https://images.unsplash.com/photo-1780631347040-0c5df6053c2f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D"/>
  <Card user='Rohit' age={20} img="https://images.unsplash.com/photo-1781099999671-08a6de4f36df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D"/>
   </div>
  )
}

export default App
