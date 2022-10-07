import React, {useState} from 'react'
import './diceCoin.css'
const Coin = () => {
const [coinValue, setCoinValue]= useState('flip')
  function coinFlip(){
let flip = Math.floor(Math.random() * 2)
if(flip===1){
  setCoinValue('tail')
}else{
  setCoinValue('face')
}
  }

  return (
    <button className='coin' onClick={()=>coinFlip()}>{coinValue}</button>
  )
}

export default Coin