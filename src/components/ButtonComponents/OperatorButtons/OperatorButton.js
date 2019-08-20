import React from "react";
import { operators } from "../../../data";

const OperatorButton = ({ setDisplay, symbol, display }) => {

  function handleCalculation() {
    setDisplay(display + operators.value + symbol)
  }

  return (
    <div className="operator-button" onclick={() => handleCalculation()}>{ symbol }</div>
  );
};

export default OperatorButton;