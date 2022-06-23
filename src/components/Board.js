import Square from './Square';
import React, { useState } from 'react';



function Board() {
  
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const status = 'Next player: ' + (xIsNext ? 'X' : 'O');

  function renderSquare(i){
    return(
    <Square
      value={squares[i]}
      onClick={() => handleClick(i)}
    />);
  }

  function handleClick(i) {    
    const Squares = squares.slice(); 
    if(Squares[i]=== null) 
    {
      Squares[i] = xIsNext ? 'X' : 'O'; 
      setXIsNext(!xIsNext); 
    }  
        
    setSquares(Squares); 
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

export default Board;