import React , { useContext} from "react";
import BattleField from "../battleField/BattleField";
import Deck from "../deck/Deck";
import GraveYard from "../graveYard/GraveYard";
import { DataContext } from "../../context/DataContext";
import './boardGame.css'
const BoardGame = () => {
  const dataContext = useContext(DataContext)
  const deck = dataContext.challengeDeck
  
  return (
    <div className="board-game">
      <div className="deck-graveyard__position">
    
        <Deck  deck={deck}/>
        <GraveYard />
      </div>
      <div className="battle-field__position">
      <BattleField />
    </div>
    </div>
  );
};

export default BoardGame;
