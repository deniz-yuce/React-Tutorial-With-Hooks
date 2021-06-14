import React, { createContext, useContext } from "react";
import { Board } from "./Board";
import { GameInfo } from "./GameInfo";
import { useGame } from "./useGame";

const GameContext = createContext();

export function useGameContext() {
  const context = useContext(GameContext);

  if (context == null)
    throw new Error("Game Components should be used inside GameContext");

  return context;
}

export function Game() {
  const {
    currentSquares,
    winnerCells,
    jumpTo,
    handleClick,
    history,
    stepNumber,
    xIsNext,
  } = useGame();

  return (
    <GameContext.Provider
      value={{
        currentSquares,
        winnerCells,
        jumpTo,
        handleClick,
        history,
        stepNumber,
        xIsNext,
      }}
    >
      <div className="game">
        <div className="game-board ">
          <Board />
        </div>
        <GameInfo />
      </div>
    </GameContext.Provider>
  );
}
