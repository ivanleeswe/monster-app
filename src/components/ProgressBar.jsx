import React from "react";

const ProgressBar = ({ dataObj, columnName }) => {
  return (
    <div className="table__bar">
      <div
        className="table__bar--fill"
        style={{ width: `${dataObj[columnName]}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
