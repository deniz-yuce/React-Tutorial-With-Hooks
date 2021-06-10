import React from 'react';
import { calculateWinnerCells } from '../../utils/calculateWinner';
import { Board } from './Board';
import { GameInfo } from './GameInfo';
import { calculateWinner } from '../../utils/calculateWinner';

export class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null),
                picked: null, //kaçıncı karenin olduğunu tutar: picked%3+1 ile col floor(picked/3)+ ile row
            }],
            stepNumber: 0,
            xIsNext: true,
            movesAsc: true,
        };
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();

        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            history: history.concat([{
                squares: squares,
                picked: i,
            }]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext,
        });
    }

    // jumpTo(step) {
    //     this.setState({
    //         stepNumber: step,
    //         xIsNext: (step % 2) === 0,
    //     });
    // }

    // toggleOrder() {
    //     this.setState({ movesAsc: !this.state.movesAsc, });
    // }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winnerCells = calculateWinnerCells(current.squares)
        
        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={current.squares}
                        winnerCells={winnerCells}
                        onClick={(i) => this.handleClick(i)} />
                </div>
                <GameInfo
                    history={this.state.history}
                    xIsNext={this.state.xIsNext}
                    stepNumber={this.state.stepNumber}
                    currentSquares={current.squares}
                />
            </div>
        );
    }
}

export function jumpTo(step) {
    this.setState({
        stepNumber: step,
        xIsNext: (step % 2) === 0,
    });
}