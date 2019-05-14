import React from "react";
import "./Cell.css";

function Cell({ value }) {
  const className = `cell ${!value ? "cell--transparent" : ""}`;
  return <div className={className}>{value ? value : ""}</div>;
}

export default Cell;
