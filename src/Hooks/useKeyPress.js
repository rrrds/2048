import { useState, useEffect } from "react";

const arrowKeys = ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"];

export default function useArrowKeyPress() {
  const [pressed, setPressed] = useState(false);

  const downHandler = ({ key }) => {
    if (arrowKeys.indexOf(key) >= 0) {
      setPressed(key);
    }
  };

  const upHandler = ({ key }) => {
    if (arrowKeys.indexOf(key) >= 0) {
      setPressed(false);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);

    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  }, []);

  return pressed;
}
