import { useState } from "react";
import Square from "./square";

const Board = ({ children }) => {
  const [game, setGame] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  const [color, setColor] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const [player, setPlayer] = useState(true);
  const [undo, setUndo] = useState(12);

  let disable = false;

  const handlePlay = (position) => {
    if (disable) return;
    const newGame = game.map((g, index) => {
      if (index === position) {
        // undo = position;
        return player ? "X" : "O";
      }
      return g;
    });

    setGame(newGame);
    setPlayer(!player);
    setUndo(undo);
  };

  const listWinner = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const checkWinner = () => {
    for (let i = 0; i < listWinner.length; i++) {
      const [p1, p2, p3] = listWinner[i];
      if (game[p1] === game[p2] && game[p2] === game[p3]) {
        if (game[p1] != null) {
          disable = true;
          color[p1] = true;
          color[p2] = true;
          color[p3] = true;
        }

        return game[p1];
      }
    }
    return null;
  };

  const winner = checkWinner();
  let status = "";
  if (winner) {
    status = `Winner is: ${winner}`;
  } else if (!game.includes(null)) {
    status = "Hoà";
  }

  const refreshPage = () => {
    setGame([null, null, null, null, null, null, null, null, null]);
    setColor([false, false, false, false, false, false, false, false, false]);
    setPlayer(player ? "X" : "O");
    return;
  };

  
  

  const undoChanges = () => {
    console.log(undo);

  }

  return (
    <>
      <div className="w-[200px] h-[40px] text-center leading-[40px] text-[20px] mb-3">
        <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r text-rose-500">
          {status}
        </h2>
      </div>
      <div className="grid grid-cols-3 gap-2 w-[240px]">
        <Square value={game[0]} position={0} handlePlay={handlePlay} colorWin={color[0]} />
        <Square value={game[1]} position={1} handlePlay={handlePlay} colorWin={color[1]} />
        <Square value={game[2]} position={2} handlePlay={handlePlay} colorWin={color[2]} />
        <Square value={game[3]} position={3} handlePlay={handlePlay} colorWin={color[3]} />
        <Square value={game[4]} position={4} handlePlay={handlePlay} colorWin={color[4]} />
        <Square value={game[5]} position={5} handlePlay={handlePlay} colorWin={color[5]} />
        <Square value={game[6]} position={6} handlePlay={handlePlay} colorWin={color[6]} />
        <Square value={game[7]} position={7} handlePlay={handlePlay} colorWin={color[7]} />
        <Square value={game[8]} position={8} handlePlay={handlePlay} colorWin={color[8]} />
      </div>
      <div className="mt-4 flex justify-around w-[200px]">
        <button
          onClick={refreshPage}
          className="bg-sky-500 hover:bg-blue-700 text-white font-bold py-2 px-4 text-[13px] rounded">
          Reset
        </button>

        <button onClick={undoChanges} className="bg-sky-500 hover:bg-blue-700 text-white font-bold py-2 px-4 text-[13px] rounded">
          Undo
        </button>
      </div>
    </>
  );
};

export default Board;
