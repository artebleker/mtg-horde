import React from 'react'
import BoardGame from '../boardGame/BoardGame'
import Dice from '../diceCoin/Dice'
import Coin from '../diceCoin/Coin'
import LifeDisplayer from '../lifeDisplayer/LifeDisplayer'
import NavBoard from '../navBoard/NavBoard'
import './pages.css'
const GamePage = () => {
  return (
    <>
  <div className='game-page'>
    <NavBoard/>
    <div className='navbar-life-displayer'>
    <LifeDisplayer/>
    </div>
    <div className='board-game'>
    <BoardGame/>
    </div>
    <div className='dice-coin'>
    <Dice/>
    <Coin/>
    </div>
    </div>
    </>
  )
}

export default GamePage