import React from "react";
import { Square } from "./Square";

export class Board extends React.Component {
  renderSquare(i) {
    let extraClassName = "square";
    if (this.props.winnerCells && this.props.winnerCells.indexOf(i) > -1) {
      extraClassName = "square highlighted";
    }

    return (
      <Square
        extraClass={extraClassName}
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    let allSquares = [];
    for (var row_n = 0; row_n < 3; row_n++) {
      let rowSquares = [];
      for (var col_n = 0; col_n < 3; col_n++) {
        rowSquares.push(this.renderSquare(row_n * 3 + col_n));
      }
      allSquares.push(<div className="board-row">{rowSquares}</div>);
    }

    return <div>{allSquares}</div>;
  }
}
