import React from "react";

const OperatorButton = ({ setDisplay, symbol, display, value }) => {

  function handleCalculation() {
    setDisplay([display, value, symbol])
  }

  return (
    <div className="operator-button" onclick={() => handleCalculation()}>{ symbol }</div>
  );
};

export default OperatorButton;