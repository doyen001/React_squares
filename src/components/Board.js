import React,{useState} from 'react';
import Square from './Square';
import { calculateWinner } from '../utils/calculate-function';
import '../board.css';

export default function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    // const [value, setValue] = useState(null);

    const handleClick = (i) => {
        const squaress = squares.slice();
        if (calculateWinner(squaress) || squaress[i]) {
            return;
            }
        squaress[i] = xIsNext?'X':'O';
        setSquares(squaress);
        setXIsNext(!xIsNext);
        // setValue(squaress[i]);
    }
    
    const renderSquare = (i) => {
        return (
        <Square 
            value = {squares[i]}
            onClick = {() => handleClick(i)} 
        />
        );
    }
    const winner = calculateWinner(squares);
        let status;
        if (winner) {
          status = 'Winner: ' + winner;
        } else {
          status = 'Next player: ' + (xIsNext ? 'X' : 'O');
        }
    
    return (
        <div>
        <div className="status">{status}</div>
        <div className="board-row">
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
        </div>
        <div className="board-row">
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
        </div>
        <div className="board-row">
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
        </div>
        </div>
    );
}   