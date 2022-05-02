import React, { useState, useEffect } from "react";

import Row from "./Row";

const Table = ({ columnNames, data, title }) => {
  const [sortedData, setSortedData] = useState([]);
  const [rowIndex, setRowIndex] = useState(null);

  /* Variable colState will store an object with keys of indexes and values of a boolean. */
  const [colState, setColState] = useState({});

  useEffect(() => {
    const columnIndexValues = {};

    for (let i = 0; i < columnNames.length; i++) {
      columnIndexValues[columnNames[i]] = true;
    }

    setColState(columnIndexValues);
    setSortedData(data);
  }, [data, columnNames]);

  const handleSort = (columnName) => {
    const newColState = { ...colState };

    for (let key in newColState) {
      if (key === columnName) {
        newColState[key] = !newColState[key];
        if (newColState[key] === true) {
          const sortedData = [...data].sort(
            (a, b) => a[columnName] - b[columnName]
          );
          setSortedData(sortedData);
        } else {
          const sortedData = [...data].sort(
            (a, b) => b[columnName] - a[columnName]
          );
          setSortedData(sortedData);
        }
      }
    }
    setColState(newColState);
  };

  return (
    <table className="table">
      <thead className="table__head">
        <tr>
          {columnNames.map((columnName) => (
            <th
              key={columnName}
              className="table__cell"
              onClick={() => handleSort(columnName)}
            >
              <span className="table__headText pointer">{columnName}</span>
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="table__body">
        {sortedData.map((dataObj, index) => (
          <Row
            key={title + index.toString()}
            dataObj={dataObj}
            index={index}
            rowIndex={rowIndex}
            setRowIndex={setRowIndex}
            columnNames={columnNames}
            title={title}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
