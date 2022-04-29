import React from "react";

import ProgressBar from "./ProgressBar";
import PopUp from "./PopUp";

const RowReusable2 = ({
  dataObj,
  index,
  rowIndex,
  setRowIndex,
  columnNames,
  title,
}) => {
  return (
    <tr
      className={
        rowIndex === index
          ? "table__row table__row--clicked popUp"
          : "table__row popUp"
      }
      onClick={() => setRowIndex(index)}
    >
      <td className="table__cell">
        <span className="table__cellText">{dataObj[columnNames[0]]}</span>
        <PopUp dataObj={dataObj} title={title} />
      </td>
      <td className="table__cell">
        <span className="table__cellText">{dataObj[columnNames[1]]}</span>
      </td>
      <td className="table__cell">
        <span className="table__cellText">{dataObj[columnNames[2]]}</span>
      </td>
      <td className="table__cell">
        <ProgressBar dataObj={dataObj} columnName={columnNames[3]} />
      </td>
    </tr>
  );
};

export default RowReusable2;
