import React, { useState } from "react";
import "./diceCoin.css";
const Dice = () => {
  const [diceValue, setDiceValue] = useState("Roll");
  function diceRoll() {
    let roll = Math.floor(Math.random() * 6);
    setDiceValue(roll+1);
  }
  return (
    <button className="dice" onClick={() => diceRoll()}>
      {diceValue}
    </button>
  );
};

export default Dice;
