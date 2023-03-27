import { useState, useEffect } from "react";
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
  const [time, setTime] = useState(3);
  const [player, setPlayer] = useState(true);
  let disable = false;

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(time - 1);
      if (time <= 0) {
        setTime(3);
        if (!player === true || !player === false) {
          const gameRun = game.reduce((g, checkdanh, index) => {
            if (checkdanh === null) {
              return [...g, index];
            }
            return g;
          }, []);
          const random = Math.floor(Math.random() * gameRun.length);
          const position = gameRun[random];

          const newGame = game.map((g, index) => {
            if (index === position) {
              return player ? "X" : "O";
            }
            return g;
          });

          setGame(newGame);
          setPlayer(!player);
        }
      }
    }, 1000);
    if (checkWinner() || !game.includes(null)) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [time, player, game]);

  const handlePlay = (position) => {
    if (disable) return;
    const newGame = game.map((g, index) => {
      if (index === position) {
        return player ? "X" : "O";
      }
      return g;
    });

    setGame(newGame);
    setPlayer(!player);
    setTime(3);

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
    setTime(3);
    return;
  };

  const undoChange = () => {
    console.log(game);
  }

  return (
    <>
      <div className="w-[200px] h-[40px] text-center leading-[40px] text-[20px] mb-3">
        <h2 className="text-3xl font-extrabold bg-gradient-to-r text-rose-500">
          {status}
        </h2>
      </div>
      <div className="w-[200px] h-[40px] text-center leading-[40px] text-[20px] mb-3">
        <h2 className="text-3xl font-extrabold bg-gradient-to-r text-rose-500">{time}</h2>
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

        <button onClick={undoChange} className="bg-sky-500 hover:bg-blue-700 text-white font-bold py-2 px-4 text-[13px] rounded">
          Undo
        </button>
      </div>
    </>
  );
};

export default Board;
