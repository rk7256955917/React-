import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between px-8 py-4 bg-cyan-900 text-white'>
        <h2 className='text-xl font-bold'>LUXE</h2>
        <div className='flex gap-8'>
            <a className='text-lg font-bold' href="/">Home</a>
            <a className='text-lg font-bold' href="/about">About</a>
            <a className='text-lg font-bold' href="/Contact">Contact</a>
        </div>
    </div>
  )
}

export default Navbar
