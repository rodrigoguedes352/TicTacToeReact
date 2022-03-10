import React from "react";

const Cell = (props) => {
  return (
    <div
      className="cell"
      style={{ color: props.celula === 0 ? "blue" : "black" }}
      id={props.i}
      onClick={props.callbackClick}
    >
      {props.celula}
    </div>
  );
};

export default Cell;
