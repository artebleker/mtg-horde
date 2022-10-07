import React, {useContext} from "react";
import { Link } from "react-router-dom";
import "./pages.css";
import { DataContext } from "../../context/DataContext";
import battleTheHorde from '../../decksList/battleTheHorde'
import defeatAGod from '../../decksList/defeatAGod'
import faceTheHydra from '../../decksList/faceTheHydra'
// import axios from 'axios';
const Home = () => {
const dataContext = useContext(DataContext)

// function setFunction(challengeDeck){
  // axios.post('https://api.scryfall.com/cards/collection',
  // {
  //   "identifiers": battleTheHorde
  // }
  // ).then((res)=>{
  //   dataContext.setCardList(res.data.data)
  //   console.log('DataContext')
  // }
  // )
// console.log(challengeDeck)
// }


return (
    <div className="home">
   <Link to={"/game/battle-the-horde"} > <button onClick={(e)=>{dataContext.setCardList(battleTheHorde)}}>Battle the Horde</button></Link>
   <Link to={"/game/defeat-a-god"} ><button onClick={()=>{dataContext.setCardList(defeatAGod)}}>Defeat a God</button></Link>
    <Link to={"/game/face-the-hydra"} ><button onClick={()=>{dataContext.setCardList(faceTheHydra)}}>Face the Hydra</button></Link>
    </div>
  );
};

export default Home;
