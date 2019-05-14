import React, { useEffect, useReducer } from "react";
import "./App.css";
import Field from "../Field";
import Score from "../Score";
import GameOver from "../GameOver";
import useArrowKeyPress from "../Hooks/useKeyPress";
import { makeMove, genField } from "../GameEngine";

const initState = {
  field: genField(),
  score: 0,
  gameOver: false
};

function App() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "move":
        const result = makeMove(state.field, action.direction);
        return {
          field: result.matrix,
          score: state.score + result.sum,
          gameOver: !result.canMove
        };
      case "new":
        return { field: genField(), score: 0, gameOver: false };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initState);
  const key = useArrowKeyPress();

  useEffect(() => {
    if (key) {
      dispatch({ type: "move", direction: key });
    }
  }, [key]);

  return (
    <div className="main">
      {state.gameOver && <GameOver dispatch={dispatch} />}
      <Score value={state.score} />
      <Field data={state.field} />
    </div>
  );
}

export default App;
