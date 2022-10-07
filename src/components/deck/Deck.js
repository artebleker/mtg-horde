import React from 'react'
import './deck.css'
const Deck = ({deck}) => {

    
  return (
    <div className='deck'>
  {deck.map((dm)=>{
    return <img src={dm.image_uris.border_crop} alt=''/>
  })}
   </div>
  )
}

export default Deck