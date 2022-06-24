import Board from './Board';
import { useState } from 'react';

function Game() { 
  const [history, setHistory] = useState([{squares: Array(9).fill(null)}]);
  const [xIsNext, setXIsNext] = useState(true);

  const current = history[history.length - 1];    
  const winner = calculateWinner(current.squares);
  console.log(history)
  let status;    
  if (winner) {      
    status = 'Winner: ' + winner;    
  } else {      
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');    
  }


  function handleClick(i) {
    const Squares = current.squares.slice();    
    if (calculateWinner(Squares) || Squares[i]) {
      return;
    }
    Squares[i] = xIsNext ? 'X' : 'O';
    setHistory(
      history.concat([{        
      squares: Squares
      }]),      
    );
    setXIsNext(!xIsNext)
  }

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board 
            squares={current.squares}
            onClick={(i) => handleClick(i)}
          />       
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
}

export default Game;