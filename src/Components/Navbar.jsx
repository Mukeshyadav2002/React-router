import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {

    
  return (
    <div className='Container'>
        
       <NavLink className="Navstyle" to="/">Home</NavLink>
       <NavLink className="Navstyle" to="/About">About</NavLink>
       <NavLink className="Navstyle" to="/Contact">Contact</NavLink>
  

        
    </div>
  )
}

export default Navbar