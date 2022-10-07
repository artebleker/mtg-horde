import React from 'react'
import {Link} from 'react-router-dom'
import './navBoard.css'
const NavBoard = () => {
  return (
    <div className='nav-board'>
    <button>Restart Game</button>
    <Link to='/'>Go Back</Link>
    </div>
  )
}

export default NavBoard