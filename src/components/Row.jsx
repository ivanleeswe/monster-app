import React from "react";

import ProgressBar from "./ProgressBar";
import PopUp from "./PopUp";

import Cell from "./Cell";

const Row = ({ dataObj, index, rowIndex, setRowIndex, columnNames, title }) => {
  return (
    <tr
      className={
        rowIndex === index
          ? "table__row table__row--clicked popUp"
          : "table__row popUp"
      }
      onClick={() => setRowIndex(index)}
    >
      {columnNames.map((columnName, index) => (
        <Cell key={columnName + index.toString()}>
          {index !== 3 && (
            <span className="table__cellText">{dataObj[columnName]}</span>
          )}
          {index === 0 && <PopUp dataObj={dataObj} title={title} />}
          {index === 3 && (
            <ProgressBar dataObj={dataObj} columnName={columnName} />
          )}
        </Cell>
      ))}
    </tr>
  );
};

export default Row;
