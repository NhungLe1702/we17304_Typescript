// import {useState} from 'react'
const Square = ({ value, position, handlePlay, colorWin }) => {
  let bgWin = "bg-[#14bdac]";
  if (colorWin) {
    bgWin = "bg-rose-500";
  }

  const squareHandlePlay = () => {
    if (!value) {
      handlePlay(position);
    }
  };

  return (
    <>
      <button
        onClick={squareHandlePlay}
        className={"w-[70px] h-[70px]  text-3xl text-white " + bgWin}
      >
        {value}
      </button>
    </>
  );
};

export default Square;
