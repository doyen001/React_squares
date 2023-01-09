import React,{ useState } from 'react'
import Board from './Board'
export default function Game(){
  const [histroy,setHistory] = useState(
    [{
      squares: Array(9).fill(null),
    }]
  );
  
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
}

// export default Game;
