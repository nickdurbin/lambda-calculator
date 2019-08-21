import React from "react";
import { operators } from "../../../data";

const OperatorButton = ({ setDisplay, value, symbol, display }) => {

  function handleOperator() {
    if (symbol === '+' || '-' || 'x' || '/' ) return setDisplay(display + operators.value);
  }

  function handleCalculation() {
    if (value === '=') return setDisplay.eval(display);
  }

  return (
    <div className="operator-button" value={value} onClick={() => handleOperator() || handleCalculation()}>{ symbol }</div>
  );
};

export default OperatorButton;