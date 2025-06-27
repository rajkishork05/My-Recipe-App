import React from 'react'

import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='nav bg-lime-400 flex items-center justify-between shadow-[0_3px_6px_rgba(0,0,0,2)]'>
      <h1 className='logo mt-[13px] h-[50px] font-extrabold text-4xl text-red-400 '>MY <span className='text-2xl text-white'>RECIPE</span></h1>
      <div className=' flex gap-7 font-semibold text-lg'>
        <Link className='ul text-red-400 font-extrabold' to="/">Home</Link>
        <Link className='ul text-white' to="/recipe">Recipe</Link>
        <Link className='ul text-white' to="/settings">Settings</Link>
      </div>

    </div>
  )
}

export default Navbar
