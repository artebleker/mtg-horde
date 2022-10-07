import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
export const DataContext = createContext();

const DataContextProvider = ({ children }) => {
 
  //deck selection
  const [cardList, setCardList] = useState([]);
  const [challengeDeck, setChallengeDeck] = useState([]);
  // deck cards
  const [playingDeck, setPlayingDeck] = useState([])
  // graveyard cards

  // battlefield cards

  // exile cards

  // select Deck Function
  const selectDeckFunction = () => {
    axios
      .post("https://api.scryfall.com/cards/collection", {
        identifiers: cardList,
      })
      .then((res) => {
        setChallengeDeck(res.data.data);
      });
  };

  // shuffle Function
  const shuffleDeck = (array) => {
    let currentIndex = array.length,  randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

  useEffect(() => {
    selectDeckFunction();
  }, [cardList]);



  return (
    <DataContext.Provider
      value={{
        setCardList,
        challengeDeck,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
