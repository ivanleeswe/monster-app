import React from "react";

const PopUp = ({ title, dataObj }) => (
  <div className="popUp__wrapper">
    <div className="popUp__title">{title}</div>
    <div className="popUp__type">{dataObj[title]}</div>
  </div>
);

export default PopUp;
