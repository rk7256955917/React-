import React from 'react'

const Navbar = (props) => {
  
    function ChangeTheme(){
        console.log('theme change',theme);
        props.setTheme('Dark')
    }
  return (
    <div>
      <button onChange={ChangeTheme}>Change Theme</button>
    </div>
  )
}

export default Navbar
