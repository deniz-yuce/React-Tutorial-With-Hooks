import React from "react";
import { useGameContext } from "..";

export function Square(props) {
  const { currentSquares, winnerCells, handleClick } = useGameContext();

  let extraClassName = "square";
  if (winnerCells && winnerCells.indexOf(props.index) > -1) {
    extraClassName = "square highlighted";
  }

  return (
    <button className={extraClassName} onClick={() => handleClick(props.index)}>
      {currentSquares[props.index]}
    </button>
  );
}
