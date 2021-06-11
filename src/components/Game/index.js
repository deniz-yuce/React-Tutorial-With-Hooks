import React from "react";
import { Board } from "./Board";
import { GameInfo } from "./GameInfo";
import { useGame } from "./useGame";

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
    <div className="game">
      <div className="game-board">
        <Board
          squares={currentSquares}
          winnerCells={winnerCells}
          onClick={(i) => handleClick(i)}
        />
      </div>
      <GameInfo
        history={history}
        xIsNext={xIsNext}
        stepNumber={stepNumber}
        currentSquares={currentSquares}
        jumpTo={jumpTo}
      />
    </div>
  );
}
