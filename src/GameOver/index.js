import React from "react";

function GameOver({ dispatch }) {
  return (
    <>
      <h2>Game Over!</h2>
      <button
        onClick={() => {
          dispatch({ type: "new" });
        }}
      >
        Restart
      </button>
    </>
  );
}

export default GameOver;
