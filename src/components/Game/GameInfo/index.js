import React, { useState } from "react";
import { calculateWinner } from "../../../utils/calculateWinner";
import ToggleButton from "./ToggleButton";

export function GameInfo({
  history,
  xIsNext,
  stepNumber,
  currentSquares,
  jumpTo,
}) {
  const [isAsc, setIsAsc] = useState(false);
  const winner = calculateWinner(currentSquares);

  let status;
  if (winner) {
    if (winner === "draw") {
      status = "Match resulted in a draw";
    } else {
      status = "Winner: " + winner;
    }
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  let moves = history.map((step, move) => {
    const desc = move
      ? "Go to move #" +
        move +
        " : square(" +
        ((step.picked % 3) + 1) +
        "," +
        (Math.floor(step.picked / 3) + 1) +
        ")"
      : "Go to game start";
    const formatClass =
      move === stepNumber
        ? "bold button is-small is-outlined"
        : "button is-small is-outlined";
    return (
      <li key={move}>
        <button className={`${formatClass} moves`} onClick={() => jumpTo(move)}>
          {desc}
        </button>
      </li>
    );
  });

  if (!isAsc === false) {
    moves = moves.reverse();
  }

  return (
    <div className="game-info">
      <div className="status">{status}</div>
      <ToggleButton onToggle={() => setIsAsc(!isAsc)} isAsc={isAsc} />
      <ol>{moves}</ol>
    </div>
  );
}
