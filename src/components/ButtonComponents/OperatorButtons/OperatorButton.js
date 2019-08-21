import React from "react";

const OperatorButton = ({ setDisplay, symbol, value, display }) => {

  function handleOperator() {
    if (symbol === '+' || '-' || 'x' || '/' ) return setDisplay(display + symbol);
  }

  function handleCalculation() {
    if (value === '=') return setDisplay.eval(display);
  }

  return (
    <div className="operator-button" value={value} onclick={() => handleOperator() || handleCalculation()}>{ symbol }</div>
  );
};

export default OperatorButton;