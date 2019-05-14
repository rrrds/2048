import React from "react";
import "./Field.css";
import Cell from "../Cell";

function Field({ data }) {
  const tableBody = data.map(row => {
    const cells = row.map(cell => <Cell value={cell} />);

    return cells;
  });

  const tableBodyEmpty = data.map(row => {
    const cells = row.map(cell => <div className="cell cell--empty" />);

    return cells;
  });

  return (
    <div className="field-base">
      <div className="field">{tableBodyEmpty}</div>

      <div className="field field--transparent">{tableBody}</div>
    </div>
  );
}

export default Field;
