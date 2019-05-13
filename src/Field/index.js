import React from "react";
import Cell from "../Cell";

function Field({ data }) {
  const tableBody = data.map(row => {
    const cells = row.map(cell => (
      <td>
        <Cell value={cell} />
      </td>
    ));

    return <tr>{cells}</tr>;
  });

  return (
    <table>
      <tbody>{tableBody}</tbody>
    </table>
  );
}

export default Field;
