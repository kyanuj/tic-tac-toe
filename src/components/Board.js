import Square from './Square';

function Board() {
    return (
        <div>
          <div className="status">'Next player: X'</div>
          <div className="board-row">
            <Square />
            <Square />
            <Square />
          </div>
          <div className="board-row">
            <Square />
            <Square />
            <Square />
          </div>
          <div className="board-row">
            <Square />
            <Square />
            <Square />
          </div>
        </div>
      );
}

export default Board;