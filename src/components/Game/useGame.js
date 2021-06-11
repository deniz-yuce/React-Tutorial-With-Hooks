import { useState } from "react";
import { calculateWinnerCells } from "../../utils/calculateWinner";
import { calculateWinner } from "../../utils/calculateWinner";

export function useGame() {
  const [history, setHistory] = useState([
    {
      squares: Array(9).fill(null),
      picked: null,
    },
  ]);

  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);

  function handleClick(i) {
    const newHistory = history.slice(0, stepNumber + 1);
    const current = newHistory[newHistory.length - 1];
    const squares = current.squares.slice();

    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? "X" : "O";
    setHistory(
      newHistory.concat([
        {
          squares: squares,
          picked: i,
        },
      ])
    );
    setStepNumber(newHistory.length);
    setXIsNext(!xIsNext);
  }

  function jumpTo(step) {
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
  }

  const current = history[stepNumber];
  const winnerCells = calculateWinnerCells(current.squares);

  return {
    currentSquares: current.squares,
    winnerCells,
    jumpTo,
    handleClick,
    history,
    stepNumber,
    xIsNext,
  };
}
