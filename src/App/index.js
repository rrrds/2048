import React, { useEffect, useReducer } from "react";
import "./App.css";
import Field from "../Field";
import Score from "../Score";
import useArrowKeyPress from "../Hooks/useKeyPress";
import { makeMove, genField } from "../GameEngine";

function App() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "move":
        const result = makeMove(state.field, action.direction);
        return { field: result.matrix, score: state.score + result.sum };
      case "new":
        return { field: genField(), score: 0 };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, {
    field: genField(),
    score: 0
  });
  const key = useArrowKeyPress();

  useEffect(() => {
    if (key) {
      dispatch({ type: "move", direction: key });
    }
  }, [key]);

  return (
    <div className="main">
      <Score value={state.score} />
      <Field data={state.field} />
    </div>
  );
}

export default App;
