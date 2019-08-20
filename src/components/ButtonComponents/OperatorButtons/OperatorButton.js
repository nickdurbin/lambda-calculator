import React from "react";
import { operators } from "../../../data";

const OperatorButton = ({ setDisplay, symbol }) => {

  function calculate() {
    let total = setDisplay(symbol + operators.value)
    return total;
  }

  return (
    <div className="operator-button" onclick={() => calculate()}>{ symbol }</div>
  );
};

export default OperatorButton;