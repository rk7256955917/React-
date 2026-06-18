import React from 'react'
import Section1 from './component/Section1/Section1'
import Section2 from './component/Section2/Section2'

const App = () => {

  const users =[
    {
    img:'https://images.unsplash.com/photo-1485548125564-21b2276a644a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fHN0dWR5JTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D',
    intro:'',
    tag:'Satisfied'
  },
   {
    img:'https://images.unsplash.com/photo-1627260119210-ea28ef95e09d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fHN0dWR5JTIwaW1hZ2V8ZW58MHx8MHx8fDA%3Dhttps://images.unsplash.com/photo-1627260119210-ea28ef95e09d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fHN0dWR5JTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D',
    intro:'',
    tag:'Undersatisfied'
  },
   {
    img:'https://plus.unsplash.com/premium_photo-1664372145617-e81a4374c3df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fHN0dWR5JTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D',
    intro:'',
    tag:'Underbanked'
  }
   ]
  return (
    <div>
     <Section1 users={users}/>
    
     
    </div>
  )
}

export default App
