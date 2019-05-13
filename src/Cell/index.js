import React from "react";
import "./Cell.css";

function Cell({ value }) {
  return <div className="cell">{value ? value : ""}</div>;
}

export default Cell;
