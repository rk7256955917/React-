import React from 'react'
import Nav2 from './Nav2'
import { useContext } from 'react'
import { ThemeContext } from "../context/ThemeContext";

const Navbar = (props) => {
 
const data = useContext(ThemeContext);
console.log(data);
  return (
    <div className='nav'>
      <h2>Rohit</h2>
      <Nav2 theme={props.theme}/>
    </div>
  )
}

export default Navbar
